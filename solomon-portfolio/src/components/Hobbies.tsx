import './Hobbies.css';

export function Hobbies () {
  return (
    <>
      <section id="hobbies" className="card fade-in-up">
        <h2>Hobbies</h2>
        <div className="hobbies">
          <div id="guitar" className="hobby">
            <div className="icon">🎸</div>
            <div className="hobby-title">Guitar</div>
            <div className="muted">Playing and learning chords</div>
          </div>

          <div id="puzzles" className="hobby">
            <div className="icon">🧩</div>
            <div className="hobby-title">Puzzles</div>
            <div className="muted">Rubik's cube & logic puzzles</div>
          </div>

          <div id="robotics" className="hobby">
            <div className="icon">🛠️</div>
            <div className="hobby-title">Robotics</div>
            <div className="muted">Small electronics and prototypes</div>
          </div>

          <div id="learning" className="hobby">
            <div className="icon">📚</div>
            <div className="hobby-title">Learning</div>
            <div className="muted">Exploring physics, biology, and CS topics</div>
          </div>

          <div id="games" className="hobby">
            <div className="icon">🎮</div>
            <div className="hobby-title">Games</div>
            <div className="muted">Online strategy games</div>
          </div>

          <div id="studying" className="hobby">
            <div className="icon">⛹️</div>
            <div className="hobby-title">Sports</div>
            <div className="muted">Basketball, chess, and badminton.</div>
          </div>
        </div>
      </section>
    </>
  );
}