import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-main)",
        borderTop: "1px solid var(--border-color)",
        padding: "24px 0"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px"
        }}
      >
        {/* Name and Copyright */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "0.88rem",
            color: "var(--text-secondary)"
          }}
        >
          <span
            style={{
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "0.05em"
            }}
          >
            AHAD SHAIKH
          </span>
          <span style={{ color: "var(--border-color)" }}>•</span>
          <span>Copyright &copy; 2026</span>
        </div>

        {/* Minimal Navigation / Contact Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "0.85rem",
            color: "var(--text-secondary)"
          }}
        >
          <a
            href="https://github.com/AhadShaikh12"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--text-secondary)", transition: "var(--transition)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            GitHub
          </a>
          <span style={{ color: "var(--border-color)" }}>|</span>
          <a
            href="https://www.linkedin.com/in/ahad-shaikh-747625279/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-blue)", transition: "var(--transition)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent-blue)")}
          >
            LinkedIn
          </a>
          <span style={{ color: "var(--border-color)" }}>|</span>
          <a
            href="https://tryhackme.com/p/AhadShk"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--accent-orange)", transition: "var(--transition)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--accent-orange)")}
          >
            TryHackMe
          </a>
          <span style={{ color: "var(--border-color)" }}>|</span>
          <a
            href="mailto:ahadshaikh7355@gmail.com"
            style={{ color: "var(--text-secondary)", transition: "var(--transition)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
