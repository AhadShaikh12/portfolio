import React from "react";
import { skillCategories } from "../data/skills";
import { Shield, Wrench, GlobeLock, Code2, Monitor } from "lucide-react";

export default function Skills() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case "soc-blue-team":
        return <Shield size={18} color="var(--accent-orange)" />;
      case "security-tools":
        return <Wrench size={18} color="var(--accent-blue)" />;
      case "web-security":
        return <GlobeLock size={18} color="var(--accent-orange)" />;
      case "programming-databases":
        return <Code2 size={18} color="var(--accent-blue)" />;
      case "operating-systems":
        return <Monitor size={18} color="var(--accent-orange)" />;
      default:
        return <Shield size={18} color="var(--accent-orange)" />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">// 02. COMPETENCIES</div>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Core competencies organized across defensive security operations, specialized tools, web application security, programming, and environments.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px"
          }}
        >
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px"
              }}
            >
              {/* Category Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  borderBottom: "1px solid var(--border-color)",
                  paddingBottom: "14px"
                }}
              >
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
                  {getCategoryIcon(category.id)}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--text-primary)"
                    }}
                  >
                    {category.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--text-muted)",
                      marginTop: "2px"
                    }}
                  >
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginTop: "4px"
                }}
              >
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="tag"
                    style={{
                      fontSize: "0.84rem",
                      padding: "5px 12px"
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
