import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  FileImage,
  FileText,
  Merge,
  Minimize2,
  LogIn,
} from "lucide-react";

import "./Navbar.css";

function Navbar() {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <a href="/">
          <span className="logo-icon">❤</span>
          <span>docupine</span>
        </a>
      </div>

      {/* Desktop Navigation */}
      <div className="desktop-nav">

        <a href="/" className="nav-link">
          Home
        </a>

        {/* Tools Dropdown */}
        <div className="tools-container">

          <button
            className="tools-button"
            onClick={() => setToolsOpen(!toolsOpen)}
          >
            <span>Tools</span>
            <ChevronDown
              size={17}
              className={toolsOpen ? "rotate-icon" : ""}
            />
          </button>

          {toolsOpen && (
            <div className="tools-dropdown">

              <a href="/image-to-pdf">
                <FileImage size={20} />
                <div>
                  <strong>Image to PDF</strong>
                  <small>Convert images to PDF</small>
                </div>
              </a>

              <a href="/merge-pdf">
                <Merge size={20} />
                <div>
                  <strong>Merge PDF</strong>
                  <small>Combine multiple PDFs</small>
                </div>
              </a>

              <a href="/compress-pdf">
                <Minimize2 size={20} />
                <div>
                  <strong>Compress PDF</strong>
                  <small>Reduce PDF size</small>
                </div>
              </a>

              <a href="/pdf-to-image">
                <FileText size={20} />
                <div>
                  <strong>PDF to Image</strong>
                  <small>Convert PDF pages</small>
                </div>
              </a>

            </div>
          )}

        </div>

        <a href="/pricing" className="nav-link">
          Pricing
        </a>

      </div>

      {/* Desktop Right Side */}
      <div className="desktop-actions">

        <a href="/login" className="login-button">
          <LogIn size={18} />
          Login
        </a>

        <a href="/signup" className="signup-button">
          Sign Up
        </a>

      </div>

      {/* Mobile Hamburger */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={27} /> : <Menu size={27} />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">

          <a href="/">Home</a>

          <div className="mobile-tools-title">
            Tools
          </div>

          <a href="/image-to-pdf">
            <FileImage size={18} />
            Image to PDF
          </a>

          <a href="/merge-pdf">
            <Merge size={18} />
            Merge PDF
          </a>

          <a href="/compress-pdf">
            <Minimize2 size={18} />
            Compress PDF
          </a>

          <a href="/pdf-to-image">
            <FileText size={18} />
            PDF to Image
          </a>

          <a href="/pricing">
            Pricing
          </a>

          <a href="/login">
            Login
          </a>

          <a href="/signup" className="mobile-signup">
            Sign Up
          </a>

        </div>
      )}

    </nav>
  );
}

export default Navbar;
