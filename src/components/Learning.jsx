import React, { useEffect, useRef, useState } from "react";
import { tryHackMeData } from "../data/learning";
import { ExternalLink, Trophy, Target, ShieldCheck } from "lucide-react";
import { TryHackMeIcon } from "../assets/icons/SocialIcons";

/**
 * Official TryHackMe Badge Embed Component
 * Preserves exact natural aspect ratio (400px x 172px)
 * Scales responsively without clipping or unwanted vertical empty space.
 */
function TryHackMeBadge() {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Compute scale dynamically on window resize to fit narrow mobile viewports (< 400px)
  useEffect(() => {
    const updateScale = () => {
      if (wrapperRef.current) {
        const availableWidth = wrapperRef.current.clientWidth || 400;
        const targetWidth = Math.min(availableWidth, 400);
        setScale(targetWidth < 400 ? targetWidth / 400 : 1);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    // The TryHackMe official script generates an iframe with exact natural dimensions: 400px x 172px
    const iframe = document.createElement("iframe");
    iframe.title = "OFFICIAL TRYHACKME BADGE";
    iframe.style.width = "400px";
    iframe.style.height = "172px";
    iframe.style.border = "none";
    iframe.style.background = "transparent";
    iframe.style.display = "block";
    iframe.style.margin = "0 auto";
    iframe.setAttribute("scrolling", "no");

    iframe.srcdoc = `<!DOCTYPE html>
<html>
<head>
  <base target="_blank">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body {
      margin: 0;
      padding: 0;
      width: 400px;
      height: 172px;
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: visible;
    }
  </style>
</head>
<body>
  <script src="https://tryhackme.com/badge/t/446f989a63ae467990f6ee9b4d6eaab3ea184c52268c85e77f253fa0d041207df11c4b33fe63e60b4e0cdcf1e911ed83?theme=dark"></script>
</body>
</html>`;

    iframe.onload = () => {
      setTimeout(() => {
        try {
          const doc = iframe.contentDocument || iframe.contentWindow?.document;
          if (doc && (doc.querySelector("iframe") || doc.querySelector("img") || (doc.body && doc.body.innerHTML.trim().length > 100))) {
            setIsLoaded(true);
          } else {
            setHasError(true);
          }
        } catch {
          setIsLoaded(true);
        }
      }, 700);
    };

    iframe.onerror = () => {
      setHasError(true);
    };

    container.appendChild(iframe);

    const timer = setTimeout(() => {
      setIsLoaded((prev) => {
        if (!prev) setHasError(true);
        return prev;
      });
    }, 4000);

    return () => {
      clearTimeout(timer);
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  if (hasError) {
    return (
      <div
        style={{
          padding: "16px",
          backgroundColor: "var(--bg-secondary)",
          borderRadius: "var(--radius-md)",
          border: "1px solid rgba(217, 135, 85, 0.35)",
          textAlign: "center",
          width: "100%",
          maxWidth: "400px",
          margin: "0 auto"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "6px" }}>
          <Trophy size={16} color="var(--accent-orange)" />
          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--text-primary)" }}>
            Verified TryHackMe Practitioner
          </span>
        </div>
        <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "12px" }}>
          Live ranking, completed rooms, and badges can be verified on my public profile.
        </p>
        <a
          href="https://tryhackme.com/p/AhadShk"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm"
          style={{ borderColor: "rgba(217, 135, 85, 0.4)", color: "var(--accent-orange)", width: "fit-content", margin: "0 auto" }}
        >
          <span>View Public Profile (@AhadShk)</span>
          <ExternalLink size={13} />
        </a>
      </div>
    );
  }

  return (
    <div
      ref={wrapperRef}
      className="thm-badge-wrapper"
      style={{
        width: "100%",
        maxWidth: "400px",
        height: `${Math.round(172 * scale)}px`,
        position: "relative",
        overflow: "visible"
      }}
    >
      {!isLoaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--text-muted)",
            fontSize: "0.8rem",
            fontFamily: "var(--font-mono)"
          }}
        >
          Loading TryHackMe badge...
        </div>
      )}

      {/* Proportional Scaled Container */}
      <div
        style={{
          width: "400px",
          height: "172px",
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          display: isLoaded ? "block" : "none",
          flexShrink: 0
        }}
      >
        <div ref={containerRef} style={{ width: "400px", height: "172px" }} />
      </div>
    </div>
  );
}

export default function Learning() {
  return (
    <section id="learning" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">// 06. PRACTICAL LEARNING</div>
          <h2 className="section-title">TryHackMe Achievements &amp; Practical Learning</h2>
          <p className="section-subtitle">
            Consistent hands-on skills development through active security labs, threat challenges, and practical exercises.
          </p>
        </div>

        {/* Prominent Achievement Statistics Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
            marginBottom: "32px"
          }}
        >
          {/* Stat 1: TOP 1% */}
          <div
            className="card"
            style={{
              padding: "24px 20px",
              borderTop: "4px solid var(--accent-orange)",
              display: "flex",
              alignItems: "center",
              gap: "18px"
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid rgba(217, 135, 85, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              <Trophy size={24} color="var(--accent-orange)" />
            </div>
            <div>
              <div
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 800,
                  color: "var(--accent-orange)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em"
                }}
              >
                TOP 1%
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginTop: "3px"
                }}
              >
                ON TRYHACKME
              </div>
              <div
                style={{
                  fontSize: "0.76rem",
                  color: "var(--text-muted)",
                  marginTop: "2px"
                }}
              >
                Global user ranking
              </div>
            </div>
          </div>

          {/* Stat 2: 100+ ROOMS */}
          <div
            className="card"
            style={{
              padding: "24px 20px",
              borderTop: "4px solid var(--accent-blue)",
              display: "flex",
              alignItems: "center",
              gap: "18px"
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid rgba(129, 154, 184, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              <Target size={24} color="var(--accent-blue)" />
            </div>
            <div>
              <div
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 800,
                  color: "var(--accent-blue)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em"
                }}
              >
                100+
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginTop: "3px"
                }}
              >
                ROOMS COMPLETED
              </div>
              <div
                style={{
                  fontSize: "0.76rem",
                  color: "var(--text-muted)",
                  marginTop: "2px"
                }}
              >
                Hands-on security labs
              </div>
            </div>
          </div>

          {/* Stat 3: ACTIVE PRACTICE */}
          <div
            className="card"
            style={{
              padding: "24px 20px",
              borderTop: "4px solid #4ADE80",
              display: "flex",
              alignItems: "center",
              gap: "18px"
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--bg-secondary)",
                border: "1px solid rgba(74, 222, 128, 0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              <ShieldCheck size={24} color="#4ADE80" />
            </div>
            <div>
              <div
                style={{
                  fontSize: "1.75rem",
                  fontWeight: 800,
                  color: "#4ADE80",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em"
                }}
              >
                ACTIVE
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                  marginTop: "3px"
                }}
              >
                HANDS-ON PRACTICE
              </div>
              <div
                style={{
                  fontSize: "0.76rem",
                  color: "var(--text-muted)",
                  marginTop: "2px"
                }}
              >
                Continuous challenge solving
              </div>
            </div>
          </div>
        </div>

        {/* Master Profile & Badge Showcase Card */}
        <div
          className="card"
          style={{
            padding: "36px",
            borderLeft: "4px solid var(--accent-orange)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "36px",
            alignItems: "start"
          }}
        >
          {/* Left Column: Narrative, Tags, CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--bg-secondary)",
                    border: "1px solid var(--border-color)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <TryHackMeIcon size={24} color="var(--accent-orange)" />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    TryHackMe
                  </h3>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--accent-blue)", fontWeight: 600 }}>
                    @{tryHackMeData.username}
                  </span>
                </div>
              </div>

              <span
                className="badge badge-orange"
                style={{
                  padding: "5px 12px",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                <Trophy size={13} />
                TOP 1% ON TRYHACKME
              </span>
            </div>

            {/* Description */}
            <p style={{ fontSize: "0.96rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
              {tryHackMeData.description}
            </p>

            {/* Focus Areas as Small Tags */}
            <div>
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
                Hands-On Focus Disciplines:
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                {tryHackMeData.focusAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="tag"
                    style={{
                      fontSize: "0.8rem",
                      padding: "4px 11px",
                      backgroundColor: "var(--bg-secondary)"
                    }}
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div style={{ paddingTop: "8px" }}>
              <a
                href={tryHackMeData.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: "fit-content" }}
                aria-label="Visit TryHackMe Profile of Ahad Shaikh"
              >
                <span>Visit TryHackMe Profile</span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Neat, Subtle Badge Card */}
          <div className="thm-badge-card">
            <div className="thm-badge-header">
              OFFICIAL TRYHACKME BADGE
            </div>
            <TryHackMeBadge />
          </div>
        </div>
      </div>
    </section>
  );
}
