import "./Heaeder.css";

export function Header() {
  return (
    <>
      <header>
        <div className="brand">
          <img
            className="logo"
            src="../assets/imaisu.png"
            alt="Charles Solomon Logo"
          />
          <div>
            <div>Charles Solomon</div>
            <div className="muted">Frontend Developer · Software Engineer</div>
          </div>

          <div className="socials">
            <a
              href="https://www.linkedin.com/in/charles-solomon-34aa1b2a1/"
              aria-label="LinkedIn"
              target="_blank"
            >
              <img src="../assets/LinkedIn.svg" alt="LinkedIn" />
            </a>
            <a
              href="https://github.com/kwiinnn"
              aria-label="GitHub"
              target="_blank"
            >
              <img src="../assets/Github.svg" alt="GitHub" />
            </a>
            <a
              href="https://www.facebook.com/Charles.10solomon/"
              aria-label="Facebook"
              target="_blank"
            >
              <img src="../assets/Facebook.svg" alt="Facebook" />
            </a>
            <a
              href="mailto:solomon23charles@gmail.com"
              aria-label="Email"
              target="_blank"
            >
              <img src="../assets/Google.svg" alt="Email" />
            </a>
          </div>
        </div>

        <nav className="header">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#hobbies">Hobbies</a>
          <a href="#contact">Contact</a>
          <a
            href="index-de.html"
            className="lang-toggle"
            aria-label="Switch to German"
          >
            DE
          </a>
          <label
            htmlFor="theme-switch"
            className="theme-toggle"
            aria-label="Toggle dark mode"
          >
            <span className="theme-icon">🌙</span>
          </label>
        </nav>
      </header>
    </>
  );
}
