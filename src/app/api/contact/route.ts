import { NextResponse } from "next/server";
import { Resend } from "resend";

// Force this route to be dynamic — never statically optimized.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  /** honeypot */
  company?: string;
}

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "tanzeelabbaskhan7@gmail.com";
// Use the verified Resend onboarding sender by default. Once you verify your
// own domain in Resend, change CONTACT_FROM_EMAIL to e.g. "Portfolio
// <hello@tanzeel.dev>" so emails come from your own domain.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

// --- Tiny in-memory rate limit (per server instance, per IP, ~5 req / 5 min)
// This is best-effort. For production traffic, swap for Upstash Ratelimit etc.
const HITS = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 5 * 60 * 1000; // 5 minutes
const MAX_HITS = 5;

function isRateLimited(ip: string) {
  const now = Date.now();
  const rec = HITS.get(ip);
  if (!rec || now > rec.resetAt) {
    HITS.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  rec.count += 1;
  return rec.count > MAX_HITS;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
  if (!RESEND_API_KEY) {
    console.error("[contact] Missing RESEND_API_KEY env var");
    return NextResponse.json(
      {
        ok: false,
        error:
          "The contact form isn't configured yet. Please email me directly in the meantime.",
      },
      { status: 500 }
    );
  }

  // Rate limit
  const ip = clientIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many messages from this IP. Please try again in a few minutes." },
      { status: 429 }
    );
  }

  // Parse + validate
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  // Honeypot — bots tend to fill this. Pretend success so they don't retry.
  if (body.company && body.company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();

  if (name.length < 2 || name.length > 100) {
    return NextResponse.json(
      { ok: false, error: "Please enter your name (2–100 characters)." },
      { status: 400 }
    );
  }
  if (!EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }
  if (message.length < 10 || message.length > 2000) {
    return NextResponse.json(
      { ok: false, error: "Message should be between 10 and 2000 characters." },
      { status: 400 }
    );
  }
  if (subject.length > 120) {
    return NextResponse.json(
      { ok: false, error: "Subject is too long." },
      { status: 400 }
    );
  }

  const finalSubject = subject || `New message from ${name} via portfolio`;

  const html = `
    <!doctype html>
    <html>
      <body style="margin:0;padding:0;background:#08080a;color:#ededed;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
        <div style="max-width:560px;margin:0 auto;padding:32px 24px;">
          <div style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#a1a1aa;margin-bottom:8px;">
            New portfolio enquiry
          </div>
          <h1 style="margin:0 0 24px 0;font-size:22px;font-weight:600;letter-spacing:-0.01em;">
            ${escapeHtml(finalSubject)}
          </h1>
          <table style="width:100%;border-collapse:collapse;margin-bottom:24px;font-size:14px;">
            <tr>
              <td style="padding:8px 0;color:#a1a1aa;width:90px;">From</td>
              <td style="padding:8px 0;color:#ededed;"><strong>${escapeHtml(name)}</strong></td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#a1a1aa;">Email</td>
              <td style="padding:8px 0;color:#ededed;">
                <a href="mailto:${escapeHtml(email)}" style="color:#a78bfa;text-decoration:none;">${escapeHtml(email)}</a>
              </td>
            </tr>
            ${
              subject
                ? `<tr><td style="padding:8px 0;color:#a1a1aa;">Subject</td><td style="padding:8px 0;color:#ededed;">${escapeHtml(subject)}</td></tr>`
                : ""
            }
            <tr>
              <td style="padding:8px 0;color:#a1a1aa;">IP</td>
              <td style="padding:8px 0;color:#71717a;font-family:ui-monospace,monospace;font-size:12px;">${escapeHtml(ip)}</td>
            </tr>
          </table>
          <div style="border-top:1px solid #1f1f23;padding-top:24px;line-height:1.65;color:#ededed;white-space:pre-wrap;">${escapeHtml(message)}</div>
          <div style="margin-top:32px;padding-top:16px;border-top:1px solid #1f1f23;font-size:12px;color:#71717a;">
            Sent from the portfolio contact form • Reply directly to respond
          </div>
        </div>
      </body>
    </html>
  `;

  const text = [
    `New portfolio enquiry`,
    ``,
    `From:    ${name}`,
    `Email:   ${email}`,
    subject ? `Subject: ${subject}` : null,
    `IP:      ${ip}`,
    ``,
    `--`,
    ``,
    message,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: finalSubject,
      html,
      text,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        {
          ok: false,
          error:
            "Couldn't deliver the message right now. Please try again, or email me directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected error. Please try again." },
      { status: 500 }
    );
  }
}
