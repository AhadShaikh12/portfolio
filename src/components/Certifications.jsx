import React from "react";
import { certifications } from "../data/certifications";
import { Award, Calendar, Clock, Hash, Building, CheckCircle2, ShieldCheck } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">// 04. CREDENTIALS</div>
          <h2 className="section-title">Certifications &amp; Completed Training</h2>
          <p className="section-subtitle">
            Formal technical certifications, specialized coursework, and verified training credentials presented in comprehensive text records.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(330px, 1fr))",
            gap: "24px"
          }}
        >
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "26px",
                position: "relative"
              }}
            >
              <div>
                {/* Header with Title and Platform Badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "12px",
                    marginBottom: "14px"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "var(--radius-md)",
                        backgroundColor: "var(--bg-secondary)",
                        border: "1px solid var(--border-color)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0
                      }}
                    >
                      <Award size={18} color="var(--accent-orange)" />
                    </div>
                    <div>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.76rem",
                          color: "var(--accent-blue)",
                          textTransform: "uppercase",
                          letterSpacing: "0.04em"
                        }}
                      >
                        {cert.platform}
                      </span>
                      <h3
                        style={{
                          fontSize: "1.15rem",
                          fontWeight: 700,
                          color: "var(--text-primary)",
                          lineHeight: 1.3
                        }}
                      >
                        {cert.name}
                      </h3>
                    </div>
                  </div>

                  {/* Top Performer Badge for Internshala */}
                  {cert.achievement && (
                    <span className="badge badge-orange">
                      ★ {cert.achievement}
                    </span>
                  )}
                </div>

                {/* Metadata Box: Issuer, Date, Duration, Cert # */}
                <div
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-color)",
                    borderRadius: "var(--radius-md)",
                    padding: "12px 14px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    fontSize: "0.82rem",
                    marginBottom: "16px"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-secondary)" }}>
                    <Building size={14} color="var(--accent-blue)" />
                    <span>
                      <strong style={{ color: "var(--text-primary)" }}>Issuing Organization:</strong> {cert.issuingOrg}
                      {cert.department && ` (${cert.department})`}
                    </span>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-secondary)" }}>
                    <Calendar size={14} color="var(--accent-blue)" />
                    <span>
                      <strong style={{ color: "var(--text-primary)" }}>Completed:</strong> {cert.completionDate}
                    </span>
                  </div>

                  {cert.duration && (
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-secondary)" }}>
                      <Clock size={14} color="var(--accent-blue)" />
                      <span>
                        <strong style={{ color: "var(--text-primary)" }}>Duration:</strong> {cert.duration}
                      </span>
                    </div>
                  )}

                  {cert.certificateNumber && (
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-secondary)" }}>
                      <Hash size={14} color="var(--accent-orange)" />
                      <span>
                        <strong style={{ color: "var(--text-primary)" }}>Certificate ID:</strong>{" "}
                        <span style={{ fontFamily: "var(--font-mono)", color: "var(--accent-orange)" }}>
                          {cert.certificateNumber}
                        </span>
                      </span>
                    </div>
                  )}

                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", marginTop: "2px" }}>
                    Verified Recipient: <span style={{ color: "var(--text-secondary)" }}>{cert.completedBy}</span>
                  </div>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                    marginBottom: "16px"
                  }}
                >
                  {cert.description}
                </p>

                {/* Topics Covered */}
                <div style={{ marginBottom: "16px" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.76rem",
                      fontWeight: 600,
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginBottom: "8px"
                    }}
                  >
                    Topics Covered:
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px"
                    }}
                  >
                    {cert.topics.map((topic, tIdx) => (
                      <li
                        key={tIdx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "7px",
                          fontSize: "0.84rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.4
                        }}
                      >
                        <CheckCircle2
                          size={13}
                          color="var(--accent-blue)"
                          style={{ flexShrink: 0, marginTop: "3px" }}
                        />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Learned */}
                {cert.skillsLearned && (
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.76rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginBottom: "8px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px"
                      }}
                    >
                      <ShieldCheck size={13} color="var(--accent-orange)" />
                      Skills Learned:
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                      {cert.skillsLearned.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="tag"
                          style={{
                            fontSize: "0.78rem",
                            padding: "3px 9px",
                            backgroundColor: "var(--bg-secondary)"
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
