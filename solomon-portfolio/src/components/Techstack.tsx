import "./Techstack.css";

export function Techstack() {
  return (
    <>
      <section id="techstack" className="card fade-in-up">
        <h2>Tech Stack</h2>
        <div className="tech-grid">
          <div id="html" className="tech-card">
            <img src="../assets/html.png" alt="HTML" />
          </div>
          <div id="css" className="tech-card">
            <img src="../assets/css.png" alt="CSS" />
          </div>
          <div className="tech-card">
            <img src="../assets/js.png" alt="JavaScript" />
          </div>
          <div id="python" className="tech-card">
            <img src="../assets/python.png" alt="Python" />
          </div>
          <div id="react" className="tech-card">
            <img src="../assets/react.png" alt="React.js" />
          </div>
          <div id="arduino" className="tech-card">
            <img src="../assets/arduino.png" alt="Arduino" />
          </div>
          <div id="git" className="tech-card">
            <img src="../assets/git.png" alt="Github" />
          </div>
          <div id="nodejs" className="tech-card">
            <img src="../assets/nodejs.png" alt="Node.js" />
          </div>
        </div>
      </section>
    </>
  );
}
