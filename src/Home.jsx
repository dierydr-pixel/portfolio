export default function Home() {
  var currentYear = new Date().getFullYear();
  return (
    <div className="App">
      <header className="header">
        <div className="header-container">
          <a href="#" className="logo">
            Diery Rivera<span className="logo-detail"> Portfolio</span>
          </a>

          <nav className="nav" aria-label="Main Navigation">
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
      <div>
        <figure
          style={{
            margin: 0,
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://coddy.tech/embed-editor?lang=python&theme=light&code=bmFtZSA9IGlucHV0KCJXaGF0IGlzIHlvdXIgbmFtZT8gIikKYWdlID0gaW50KGlucHV0KCJIb3cgb2xkIGFyZSB5b3U_ICIpKQoKcHJpbnQoZiJIZWxsbywge25hbWV9ISIpCnByaW50KGYiTmV4dCB5ZWFyIHlvdSB3aWxsIGJlIHthZ2UgKyAxfS4iKQo&stdin=QWxpY2UKMzAK&credit=0"
            width="100%"
            height="300"
            style={{
              display: "block",
              border: 0,
              width: "100%",
            }}
            title="Python code editor by Coddy"
            loading="lazy"
          ></iframe>
          <figcaption
            style={{
              boxSizing: "border-box",
              padding: "5px 12px",
              font: "11px/1.4 system-ui,-apple-system,sans-serif",
              color: "#64748b",
              background: "#f1f5f9",
              borderTop: "1px solid #e2e8f0",
              textAlign: "right",
            }}
            dir="ltr"
          >
            Powered by{" "}
            <a
              href="https://coddy.tech/embed"
              target="_blank"
              rel="noopener"
              style={{
                color: "#0077ff",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Coddy
            </a>
          </figcaption>
        </figure>
      </div>
      <section className="hero">
        <img
          src="./Images/VQAC7430.JPG"
          alt="Portrait of Diery Rivera"
          className="profile-image"
        />

        <div className="hero-content">
          <p className="hero-label">HI, I'M DIERY</p>
          <p>{currentYear}</p>
          <h1>Software Engineer</h1>
          <p className="hero-description">
            I’m learning to design and build reliable applications, turning
            ideas into practical projects.
          </p>
          <div className="hero-action">
            <a href="#projects" className="button button-primary">
              View My Work
            </a>

            <a href="#contact" className="button button-secondary">
              Contact Me
            </a>
          </div>
          <div className="social-links">
            <a href="https://github.com/dashboard"> GitHub ↗ </a>

            <a href="https://www.linkedin.com/in/diery-rivera-cartagena-a2a61a406/">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>
      <section className="Editor">
        <div id="editor">some text</div>
        <script
          src="./Fuente/ace.js"
          type="text/javascript"
          charset="utf-8"
        ></script>
        <script>var editor = ace.edit("editor");</script>
      </section>
      <section className="projects" id="projects">
        <h2>Selected Projects</h2>

        <div className="projects-grid">
          <article className="project-card">
            <div className="project-preview">Project preview</div>

            <div className="project-info">
              <h3>Project title</h3>
              <p>Project description coming soon.</p>
            </div>
          </article>
          <article className="project-card">
            <div className="project-preview">Project preview</div>

            <div className="project-info">
              <h3>Project title</h3>
              <p>Project description coming soon.</p>
            </div>
          </article>
        </div>
      </section>
      <section className="contact" id="contact">
        <div>
          <h2>Let's Connect</h2>
          <p>Have a question or an opportunity? I'd love to hear from you!</p>
        </div>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=diery.dr@gmail.com"
          className="button button-primary"
          target="blank"
          rel="noopener noreferrer"
        >
          Email Me ↗
        </a>
      </section>
      <footer className="footer">
        <p> 2026 Diery Rivera. All rights reserved.</p>
      </footer>
    </div>
  );
}
