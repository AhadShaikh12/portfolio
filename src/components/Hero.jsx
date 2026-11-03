import React from "react";
import { ArrowRight, Mail, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, TryHackMeIcon } from "../assets/icons/SocialIcons";

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const focusAreas = [
    "SOC Operations",
    "Blue Team",
    "SIEM Monitoring",
    "Threat Detection",
    "Malware Analysis",
    "Network Security",
    "Ethical Hacking"
  ];

  return (
    <section
      id="home"
      style={{
        paddingTop: "60px",
        paddingBottom: "80px",
        position: "relative"
      }}
    >
      <div className="container">
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "left" }}>
          
          {/* Subtle Technical Status Pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "6px 14px",
              borderRadius: "var(--radius-pill)",
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--border-color)",
              marginBottom: "28px"
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "var(--accent-orange)",
                display: "inline-block",
                boxShadow: "0 0 8px rgba(217, 135, 85, 0.6)"
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "var(--accent-blue)",
                letterSpacing: "0.03em"
              }}
            >
              SOC OPERATIONS • BLUE TEAM DEFENSE • BCA FINAL YEAR
            </span>
          </div>

          {/* Primary Name */}
          <h1
            style={{
              fontSize: "clamp(2.6rem, 5.5vw, 4.4rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "12px"
            }}
          >
            AHAD SHAIKH
          </h1>

          {/* Professional Role Title */}
          <h2
            style={{
              fontSize: "clamp(1.2rem, 2.4vw, 1.65rem)",
              fontWeight: 600,
              color: "var(--accent-orange)",
              marginBottom: "24px",
              letterSpacing: "-0.01em"
            }}
          >
            Cybersecurity Enthusiast | SOC &amp; Blue Team
          </h2>

          {/* Core Introduction Paragraph */}
          <p
            style={{
              fontSize: "clamp(1rem, 1.6vw, 1.12rem)",
              color: "var(--text-secondary)",
              lineHeight: 1.75,
              maxWidth: "820px",
              marginBottom: "24px"
            }}
          >
            I am a final-year BCA student passionate about Cybersecurity, with a strong interest in Security Operations, Blue Team, SIEM Monitoring, Threat Detection, and Ethical Hacking. I enjoy understanding security threats, analyzing logs, exploring security tools, and developing practical knowledge through hands-on exercises and projects.
          </p>

          {/* Tagline Container with Monospace Accent */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 18px",
              backgroundColor: "var(--card-bg)",
              borderLeft: "3px solid var(--accent-orange)",
              borderTop: "1px solid var(--border-color)",
              borderRight: "1px solid var(--border-color)",
              borderBottom: "1px solid var(--border-color)",
              borderRadius: "0 var(--radius-md) var(--radius-md) 0",
              fontFamily: "var(--font-mono)",
              fontSize: "0.92rem",
              fontWeight: 500,
              color: "var(--text-primary)",
              marginBottom: "32px"
            }}
          >
            &ldquo;Understanding threats. Analyzing signals. Strengthening security.&rdquo;
          </div>

          {/* Focus Areas Chips */}
          <div style={{ marginBottom: "36px" }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "12px"
              }}
            >
              Core Focus Disciplines:
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {focusAreas.map((area, idx) => (
                <span
                  key={idx}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8rem",
                    fontWeight: 500,
                    padding: "5px 12px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-color)",
                    color: "var(--accent-blue)"
                  }}
                >
                  <span style={{ color: "var(--accent-orange)" }}>#</span>
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
              alignItems: "center",
              marginBottom: "36px"
            }}
          >
            <button
              onClick={() => scrollTo("projects")}
              className="btn btn-primary"
              style={{ padding: "13px 26px" }}
            >
              <span>Explore My Work</span>
              <ArrowRight size={17} />
            </button>

            <button
              onClick={() => scrollTo("contact")}
              className="btn btn-outline"
              style={{ padding: "13px 26px" }}
            >
              <span>Contact Me</span>
              <Mail size={17} />
            </button>
          </div>

          {/* Verified Social Profile Links (with LinkedIn prominent) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
              paddingTop: "24px",
              borderTop: "1px solid var(--border-color)"
            }}
          >
            <span
              style={{
                fontSize: "0.82rem",
                fontWeight: 600,
                color: "var(--text-muted)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginRight: "4px"
              }}
            >
              Direct Profiles:
            </span>

            {/* LinkedIn Prominent */}
            <a
              href="https://www.linkedin.com/in/ahad-shaikh-747625279/"
              target="_blank"
              rel="noopener noreferrer"
              className="tag"
              style={{
                display: "inline-flex",
                gap: "8px",
                borderColor: "rgba(129, 154, 184, 0.4)",
                backgroundColor: "var(--card-bg)"
              }}
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon size={16} color="var(--accent-blue)" />
              <span style={{ fontWeight: 600, color: "var(--accent-blue)" }}>LinkedIn</span>
              <ExternalLink size={13} color="var(--text-muted)" />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/AhadShaikh12"
              target="_blank"
              rel="noopener noreferrer"
              className="tag"
              style={{ display: "inline-flex", gap: "8px" }}
              aria-label="GitHub Profile"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
              <ExternalLink size={13} color="var(--text-muted)" />
            </a>

            {/* TryHackMe */}
            <a
              href="https://tryhackme.com/p/AhadShk"
              target="_blank"
              rel="noopener noreferrer"
              className="tag"
              style={{ display: "inline-flex", gap: "8px" }}
              aria-label="TryHackMe Profile"
            >
              <TryHackMeIcon size={16} color="var(--accent-orange)" />
              <span>TryHackMe</span>
              <ExternalLink size={13} color="var(--text-muted)" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
