import "./Skills.css";

export function Skills() {
  return (
    <>
      <section id="skills" className="card fade-in-up">
        <h2>Skills</h2>
        <div className="skills">
          <div className="skill">
            <div className="label">
              <span>HTML & CSS</span>
              <span className="muted">90%</span>
            </div>
            <div className="bar">
              <span className="skill-bar-fill width-90"></span>
            </div>
          </div>
          <div className="skill">
            <div className="label">
              <span>Python</span>
              <span className="muted">95%</span>
            </div>
            <div className="bar">
              <span className="skill-bar-fill width-95"></span>
            </div>
          </div>
          <div className="skill">
            <div className="label">
              <span>C</span>
              <span className="muted">85%</span>
            </div>
            <div className="bar">
              <span className="skill-bar-fill width-85"></span>
            </div>
          </div>
          <div className="skill">
            <div className="label">
              <span>MediaPipe / Computer Vision</span>
              <span className="muted">80%</span>
            </div>
            <div className="bar">
              <span className="skill-bar-fill width-80"></span>
            </div>
          </div>
          <div className="skill">
            <div className="label">
              <span>Arduino / Robotics</span>
              <span className="muted">90%</span>
            </div>
            <div className="bar">
              <span className="skill-bar-fill width-90"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
