import React from "react";
import { GraduationCap, ShieldCheck, Search, Database, Lock, BookOpen } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap size={20} color="var(--accent-orange)" />,
      title: "Final-Year BCA Student",
      desc: "Pursuing Bachelor of Computer Applications at Somaiya Vidyavihar University."
    },
    {
      icon: <ShieldCheck size={20} color="var(--accent-blue)" />,
      title: "SOC Operations & Blue Team",
      desc: "Dedicated to defensive methodology, security monitoring, and incident response."
    },
    {
      icon: <Database size={20} color="var(--accent-orange)" />,
      title: "SIEM & Log Analysis",
      desc: "Investigating system events, authentication traces, and anomalies across network data."
    },
    {
      icon: <Search size={20} color="var(--accent-blue)" />,
      title: "Threat Detection & Malware Analysis",
      desc: "Analyzing attack vectors, malicious file indicators, and suspicious behavioral anomalies."
    },
    {
      icon: <Lock size={20} color="var(--accent-orange)" />,
      title: "Ethical Hacking & Web Security",
      desc: "Gaining offensive perspective to strengthen defenses and mitigate OWASP vulnerabilities."
    },
    {
      icon: <BookOpen size={20} color="var(--accent-blue)" />,
      title: "Continuous Practical Learning",
      desc: "Advancing knowledge through hands-on labs, TryHackMe exercises, and technical projects."
    }
  ];

  return (
    <section id="about" className="section section-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">// 01. ABOUT ME</div>
          <h2 className="section-title">Background &amp; Security Orientation</h2>
          <p className="section-subtitle">
            Academic foundation and specialized focus in Security Operations, threat investigation, and defensive systems.
          </p>
        </div>

        {/* Narrative & Focus Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
            alignItems: "stretch"
          }}
        >
          {/* Main Written Narrative Card */}
          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "20px",
              borderLeft: "4px solid var(--accent-orange)"
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.82rem",
                  color: "var(--accent-blue)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "8px"
                }}
              >
                Ahad Shaikh • BCA Final Year
              </div>

              <h3
                style={{
                  fontSize: "1.35rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "18px"
                }}
              >
                Cybersecurity Enthusiast | SOC &amp; Blue Team
              </h3>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  color: "var(--text-secondary)",
                  fontSize: "0.98rem",
                  lineHeight: 1.8
                }}
              >
                <p>
                  I am currently pursuing my Bachelor of Computer Applications (BCA) and building my knowledge in Cybersecurity. My primary areas of interest include SOC Operations, Blue Team Security, SIEM Monitoring, Threat Detection, Malware Analysis, and Network Security.
                </p>

                <p>
                  I am interested in understanding how security incidents occur, analyzing suspicious activities, investigating logs, and learning how organizations identify and respond to cyber threats.
                </p>

                <p>
                  I continuously improve my technical knowledge through practical exercises, cybersecurity labs, and independent projects.
                </p>
              </div>
            </div>

            {/* Bottom Tagline Callout */}
            <div
              style={{
                padding: "14px 16px",
                backgroundColor: "var(--bg-secondary)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-color)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.86rem",
                color: "var(--accent-orange)",
                marginTop: "12px"
              }}
            >
              &ldquo;Understanding threats. Analyzing signals. Strengthening security.&rdquo;
            </div>
          </div>

          {/* Highlights Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px"
            }}
          >
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px"
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  {item.icon}
                </div>
                <h4
                  style={{
                    fontSize: "0.98rem",
                    fontWeight: 700,
                    color: "var(--text-primary)"
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
