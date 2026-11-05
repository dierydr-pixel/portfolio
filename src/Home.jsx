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
