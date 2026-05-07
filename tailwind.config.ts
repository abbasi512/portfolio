import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#08080a",
        "bg-elev": "#0e0e10",
        "bg-card": "#111114",
        text: {
          DEFAULT: "#ededed",
          muted: "#a1a1aa",
          dim: "#71717a",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          strong: "rgba(255,255,255,0.14)",
        },
        accent: {
          DEFAULT: "#8b5cf6",
          2: "#6366f1",
          glow: "rgba(139, 92, 246, 0.4)",
        },
        success: "#10b981",
        warn: "#f59e0b",
        pink: "#ec4899",
        cyan: "#06b6d4",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grad-1":
          "linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #06b6d4 100%)",
        "grad-2": "linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)",
        "grad-3": "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
      },
      boxShadow: {
        glow: "0 0 14px rgba(139, 92, 246, 0.4)",
        "card-hover": "0 12px 30px rgba(255,255,255,0.08)",
      },
      keyframes: {
        pulseRing: {
          "0%": { boxShadow: "0 0 0 0 rgba(16, 185, 129, 0.6)" },
          "70%": { boxShadow: "0 0 0 8px rgba(16, 185, 129, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(16, 185, 129, 0)" },
        },
        pulseAccent: {
          "0%": { boxShadow: "0 0 0 0 rgba(139, 92, 246, 0.5)" },
          "70%": { boxShadow: "0 0 0 8px rgba(139, 92, 246, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(139, 92, 246, 0)" },
        },
      },
      animation: {
        "pulse-ring": "pulseRing 2s infinite",
        "pulse-accent": "pulseAccent 2s infinite",
      },
      maxWidth: {
        page: "1180px",
      },
    },
  },
  plugins: [],
};

export default config;
