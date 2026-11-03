import React from "react";
import { Mail, Phone, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon, TryHackMeIcon } from "../assets/icons/SocialIcons";

export default function Contact() {
  return (
    <section id="contact" className="section section-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">// 07. CONNECT</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Available for discussions regarding SOC operations, Blue Team opportunities, threat detection initiatives, and technical collaboration.
          </p>
        </div>

        {/* Contact Information Layout (No Form) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px"
          }}
        >
          {/* Direct Communication Channels Card */}
          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "22px",
              padding: "32px",
              borderTop: "4px solid var(--accent-orange)"
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "8px"
                }}
              >
                Direct Communication
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                Reach out directly via personal or academic email, or phone.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {/* Personal Email */}
              <a
                href="mailto:ahadshaikh7355@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 16px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-color)",
                  backgroundColor: "var(--bg-secondary)",
                  transition: "var(--transition)"
                }}
                className="contact-card-link"
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <Mail size={18} color="var(--accent-orange)" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em"
                    }}
                  >
                    Personal Email
                  </div>
                  <div
                    style={{
                      fontSize: "0.94rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    }}
                  >
                    ahadshaikh7355@gmail.com
                  </div>
                </div>
                <ExternalLink size={15} color="var(--text-muted)" />
              </a>

              {/* College Email */}
              <a
                href="mailto:ahad.shaikh@somaiya.edu"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 16px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-color)",
                  backgroundColor: "var(--bg-secondary)",
                  transition: "var(--transition)"
                }}
                className="contact-card-link"
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <Mail size={18} color="var(--accent-blue)" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em"
                    }}
                  >
                    College Email
                  </div>
                  <div
                    style={{
                      fontSize: "0.94rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    }}
                  >
                    ahad.shaikh@somaiya.edu
                  </div>
                </div>
                <ExternalLink size={15} color="var(--text-muted)" />
              </a>

              {/* Phone */}
              <a
                href="tel:+917304357519"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 16px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-color)",
                  backgroundColor: "var(--bg-secondary)",
                  transition: "var(--transition)"
                }}
                className="contact-card-link"
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <Phone size={18} color="var(--accent-orange)" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em"
                    }}
                  >
                    Phone (Direct)
                  </div>
                  <div
                    style={{
                      fontSize: "0.94rem",
                      fontWeight: 600,
                      color: "var(--text-primary)"
                    }}
                  >
                    +91 7304357519
                  </div>
                </div>
                <ExternalLink size={15} color="var(--text-muted)" />
              </a>
            </div>
          </div>

          {/* Professional Platforms Card */}
          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "22px",
              padding: "32px",
              borderTop: "4px solid var(--accent-blue)"
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "8px"
                }}
              >
                Professional Networks &amp; Platforms
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                Connect on LinkedIn, review technical repositories on GitHub, or inspect practical labs on TryHackMe.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ahad-shaikh-747625279/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 16px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-color)",
                  backgroundColor: "var(--bg-secondary)",
                  transition: "var(--transition)"
                }}
                className="contact-card-link"
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <LinkedinIcon size={18} color="var(--accent-blue)" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em"
                    }}
                  >
                    LinkedIn Profile
                  </div>
                  <div
                    style={{
                      fontSize: "0.94rem",
                      fontWeight: 600,
                      color: "var(--accent-blue)"
                    }}
                  >
                    ahad-shaikh-747625279
                  </div>
                </div>
                <ExternalLink size={15} color="var(--text-muted)" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/AhadShaikh12"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 16px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-color)",
                  backgroundColor: "var(--bg-secondary)",
                  transition: "var(--transition)"
                }}
                className="contact-card-link"
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <GithubIcon size={18} color="var(--text-primary)" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em"
                    }}
                  >
                    GitHub Repositories
                  </div>
                  <div
                    style={{
                      fontSize: "0.94rem",
                      fontWeight: 600,
                      color: "var(--text-primary)"
                    }}
                  >
                    github.com/AhadShaikh12
                  </div>
                </div>
                <ExternalLink size={15} color="var(--text-muted)" />
              </a>

              {/* TryHackMe */}
              <a
                href="https://tryhackme.com/p/AhadShk"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "14px 16px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--border-color)",
                  backgroundColor: "var(--bg-secondary)",
                  transition: "var(--transition)"
                }}
                className="contact-card-link"
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <TryHackMeIcon size={18} color="var(--accent-orange)" />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "0.74rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em"
                    }}
                  >
                    TryHackMe Lab Profile
                  </div>
                  <div
                    style={{
                      fontSize: "0.94rem",
                      fontWeight: 600,
                      color: "var(--accent-orange)"
                    }}
                  >
                    tryhackme.com/p/AhadShk
                  </div>
                </div>
                <ExternalLink size={15} color="var(--text-muted)" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
