module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0d66d0", // deep logo blue
          secondary: "#1a82e2", // mid logo blue
          light: "#5fb0ff", // lighter wave blue
          soft: "#eaf3ff", // pale blue background
          ink: "#0d1b3d",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 12px 45px rgba(13, 102, 208, 0.18)",
        card: "0 18px 60px rgba(13, 27, 61, 0.08)",
      },
      backgroundImage: {
        "grid-light":
          "linear-gradient(rgba(13,102,208,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(13,102,208,0.08) 1px, transparent 1px)",
        "wave-fade":
          "radial-gradient(ellipse at 20% 20%, rgba(13,102,208,0.08), transparent 55%), radial-gradient(ellipse at 80% 10%, rgba(31,135,233,0.08), transparent 50%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseEdge: {
          "0%, 100%": { opacity: 0.2 },
          "50%": { opacity: 1 },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "pulse-edge": "pulseEdge 6s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};
