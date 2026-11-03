import React from "react";
import { educationData } from "../data/education";
import { GraduationCap, Landmark, Calendar, Award, Clock } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="section section-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">// 05. ACADEMICS</div>
          <h2 className="section-title">Education &amp; Academic Performance</h2>
          <p className="section-subtitle">
            Formal undergraduate degree records and official semester-wise CGPA performance.
          </p>
        </div>

        {/* Master Degree Card */}
        <div
          className="card"
          style={{
            marginBottom: "32px",
            padding: "36px",
            borderLeft: "4px solid var(--accent-orange)"
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              marginBottom: "16px"
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.8rem",
                  fontFamily: "var(--font-mono)",
                  fontWeight: 600,
                  color: "var(--accent-orange)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: "8px"
                }}
              >
                <GraduationCap size={16} />
                Undergraduate Degree
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.4rem, 2.8vw, 1.8rem)",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  lineHeight: 1.25
                }}
              >
                {educationData.degree}
              </h3>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "6px",
                  fontSize: "1rem",
                  color: "var(--accent-blue)",
                  fontWeight: 500
                }}
              >
                <Landmark size={17} />
                <span>{educationData.university}</span>
              </div>
            </div>

            {/* Status Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
                borderRadius: "var(--radius-pill)",
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--text-primary)"
              }}
            >
              <Calendar size={15} color="var(--accent-orange)" />
              <span>Status: {educationData.currentStatus}</span>
            </div>
          </div>

          <p
            style={{
              fontSize: "0.94rem",
              color: "var(--text-secondary)",
              lineHeight: 1.65,
              maxWidth: "800px"
            }}
          >
            {educationData.description}
          </p>
        </div>

        {/* Semester-wise Performance Grid */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.82rem",
              fontWeight: 700,
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            <Award size={16} color="var(--accent-orange)" />
            Semester-Wise Academic Evaluation:
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
              gap: "16px"
            }}
          >
            {educationData.semesters.map((sem, idx) => {
              const isAwaited = sem.cgpa.toLowerCase().includes("awaited");
              return (
                <div
                  key={idx}
                  className="card"
                  style={{
                    padding: "20px 16px",
                    textAlign: "center",
                    backgroundColor: isAwaited
                      ? "rgba(23, 27, 34, 0.6)"
                      : "var(--card-bg)",
                    border: sem.highlight
                      ? "1px solid var(--accent-orange)"
                      : "1px solid var(--border-color)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px"
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "var(--accent-blue)",
                      textTransform: "uppercase"
                    }}
                  >
                    {sem.semester}
                  </span>

                  <span
                    style={{
                      fontSize: isAwaited ? "1rem" : "1.45rem",
                      fontWeight: 800,
                      color: isAwaited
                        ? "var(--text-muted)"
                        : "var(--text-primary)",
                      letterSpacing: "-0.01em"
                    }}
                  >
                    {sem.cgpa}
                  </span>

                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "4px",
                      marginTop: "4px"
                    }}
                  >
                    {isAwaited ? (
                      <span className="badge badge-neutral" style={{ fontSize: "0.72rem" }}>
                        <Clock size={11} />
                        {sem.status}
                      </span>
                    ) : (
                      <span className="badge badge-success" style={{ fontSize: "0.72rem" }}>
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <p
            style={{
              marginTop: "16px",
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              fontStyle: "italic",
              textAlign: "left"
            }}
          >
            * Official university evaluation records. Semesters 5 &amp; 6 results are awaited.
          </p>
        </div>
      </div>
    </section>
  );
}
