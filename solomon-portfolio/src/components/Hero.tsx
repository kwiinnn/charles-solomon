import "./Hero.css";

export function Hero() {
  return (
    <>
      <section className="hero">
        <div className="card intro fade-in-up">
          <h1>Hi, I'm Charles Solomon.</h1>
          <p className="muted">
            I craft clean interfaces and simple interactions. I enjoy turning
            complex ideas into accessible, beautiful experiences.
          </p>

          <div className="grid-2 intro-grid">
            <div>
              <h2>Focus</h2>
              <p className="muted">
                Frontend Development, Embedded Systems, Product Thinking
              </p>
            </div>
            <div>
              <h2>Location</h2>
              <p className="muted">Cagayan de Oro City, Philippines</p>
            </div>
          </div>

          <a
            href="https://www.facebook.com/reel/746942924569357"
            target="_blank"
            id="featured-project"
            className="card"
          >
            <h2>Featured Project</h2>
            <p className="muted featured-project-description">ProVision PH</p>
          </a>
        </div>

        <aside className="card profile fade-in-up">
          <img
            className="avatar"
            src="assets/gradpic-nobg.png"
            alt="Charles Solomon"
          />
          <div className="profile-name">Charles Solomon</div>
          <div className="muted">Frontend Developer · Software Engineer</div>
        </aside>
      </section>
    </>
  );
}
