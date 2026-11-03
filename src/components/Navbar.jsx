import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setActiveSection(targetId);
      setIsOpen(false);
    }
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundColor: isScrolled
          ? "rgba(16, 18, 22, 0.92)"
          : "rgba(16, 18, 22, 0.8)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: `1px solid ${isScrolled ? "var(--border-color)" : "transparent"}`,
        transition: "all 0.25s ease",
        height: "var(--nav-height)"
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "100%"
        }}
      >
        {/* Simple Text Branding (No logo graphic) */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          style={{
            fontWeight: 800,
            fontSize: "1.2rem",
            letterSpacing: "0.08em",
            color: "var(--text-primary)",
            textTransform: "uppercase"
          }}
          aria-label="Ahad Shaikh"
        >
          AHAD SHAIKH
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" style={{ display: "none" }}>
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              alignItems: "center",
              gap: "4px"
            }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={{
                      display: "inline-block",
                      padding: "8px 14px",
                      fontSize: "0.9rem",
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? "var(--accent-orange)" : "var(--text-secondary)",
                      backgroundColor: isActive
                        ? "var(--accent-orange-soft)"
                        : "transparent",
                      border: isActive
                        ? "1px solid rgba(217, 135, 85, 0.3)"
                        : "1px solid transparent",
                      borderRadius: "var(--radius-md)",
                      transition: "var(--transition)"
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--border-color)",
            backgroundColor: "var(--card-bg)",
            color: "var(--text-primary)"
          }}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "absolute",
            top: "var(--nav-height)",
            left: 0,
            right: 0,
            backgroundColor: "var(--card-bg)",
            borderBottom: "1px solid var(--border-color)",
            boxShadow: "var(--shadow-md)",
            padding: "16px 24px 24px"
          }}
        >
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "8px"
            }}
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    style={{
                      display: "block",
                      padding: "12px 16px",
                      fontSize: "0.98rem",
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? "var(--accent-orange)" : "var(--text-secondary)",
                      backgroundColor: isActive
                        ? "var(--accent-orange-soft)"
                        : "transparent",
                      borderRadius: "var(--radius-md)",
                      border: isActive ? "1px solid rgba(217, 135, 85, 0.3)" : "none"
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: block !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
