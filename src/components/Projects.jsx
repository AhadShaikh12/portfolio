import React from "react";
import { projects } from "../data/projects";
import { ExternalLink, ShieldAlert, Cpu, CheckCircle2 } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="section section-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">// 03. FEATURED PROJECTS</div>
          <h2 className="section-title">Actual Cybersecurity Projects</h2>
          <p className="section-subtitle">
            Deployed web-based cybersecurity platforms designed for log analysis, threat investigation, and practical security operations.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "28px"
          }}
        >
          {projects.map((project) => {
            const isOrange = project.accentType === "orange";
            const accentColor = isOrange ? "var(--accent-orange)" : "var(--accent-blue)";
            
            return (
              <div
                key={project.id}
                className="card"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  padding: "32px",
                  borderTop: `4px solid ${accentColor}`,
                  backgroundColor: "var(--card-bg)"
                }}
              >
                <div>
                  {/* Top Badge & Status Header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                      marginBottom: "16px"
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        color: accentColor,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em"
                      }}
                    >
                      {project.badge}
                    </span>

                    <span className="badge badge-success">
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          backgroundColor: "#4ADE80",
                          display: "inline-block"
                        }}
                      />
                      Live Application
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "var(--text-primary)",
                      marginBottom: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px"
                    }}
                  >
                    {isOrange ? (
                      <ShieldAlert size={22} color={accentColor} />
                    ) : (
                      <Cpu size={22} color={accentColor} />
                    )}
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p
                    style={{
                      fontSize: "0.96rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.65,
                      marginBottom: "22px"
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Key Capabilities Box */}
                  <div
                    style={{
                      backgroundColor: "var(--bg-secondary)",
                      border: "1px solid var(--border-color)",
                      borderRadius: "var(--radius-md)",
                      padding: "18px",
                      marginBottom: "22px"
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        marginBottom: "12px"
                      }}
                    >
                      Core Capabilities &amp; Focus:
                    </div>

                    <ul
                      style={{
                        listStyle: "none",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px"
                      }}
                    >
                      {project.keyFunctionality.map((item, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "8px",
                            fontSize: "0.88rem",
                            color: "var(--text-secondary)",
                            lineHeight: 1.45
                          }}
                        >
                          <CheckCircle2
                            size={15}
                            color={accentColor}
                            style={{ flexShrink: 0, marginTop: "3px" }}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Tags */}
                  <div style={{ marginBottom: "26px" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.76rem",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                        marginBottom: "10px"
                      }}
                    >
                      Tools &amp; Techniques:
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="tag"
                          style={{
                            fontSize: "0.8rem",
                            padding: "4px 10px",
                            backgroundColor: "var(--card-bg)"
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live Button Action */}
                <div
                  style={{
                    borderTop: "1px solid var(--border-color)",
                    paddingTop: "20px"
                  }}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={isOrange ? "btn btn-primary" : "btn btn-blue"}
                    style={{ width: "100%", justifyContent: "center" }}
                    aria-label={`Open ${project.title} live application`}
                  >
                    <span>{project.buttonText}</span>
                    <ExternalLink size={15} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
