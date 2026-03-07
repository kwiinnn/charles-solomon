import "./Education.css";

export function Education() {
  return (
    <>
      <section id="education" className="card fade-in-up">
        <h2>Education</h2>
        <div className="undergrad">
          <div className="univlogo">
            <img
              src="assets/upmin.png"
              alt="University of the Philippines - Mindanao Logo"
            />
          </div>
          <p className="muted education-info">
            <strong>University of the Philippines - Mindanao</strong>
            <br />
            <strong>BS Computer Science</strong>
            <br />
            2025 - 2029
          </p>
        </div>
        <div className="highschool">
          <div className="univlogo">
            <img src="assets/ldcu.png" alt="Liceo de Cagayan University Logo" />
          </div>
          <p className="muted education-info">
            <strong>Liceo de Cagayan University</strong>
            <br />
            <strong>Secondary Education</strong>
            <br />
            <strong id="with-highest">With Highest Honors</strong>
            <br />
            2019 - 2025
          </p>
        </div>
      </section>
    </>
  );
}
