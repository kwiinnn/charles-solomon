import "./Contacts.css";

export function Contacts() {
  return (
    <>
      <section id="contact" className="card fade-in-up">
        <h2>Contact</h2>
        <p className="muted contact-description">
          Want to work together, ask a question, or say hi? Send a message
          below.
        </p>

        <form className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            aria-label="Your name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            aria-label="Your email"
            required
          />
          <textarea
            name="message"
            placeholder="Tell me about your project"
            aria-label="Message"
            required
          ></textarea>
          <div className="contact-form-actions">
            <button className="btn btn-ghost" type="reset">
              Clear
            </button>
            <button className="btn btn-primary" type="submit">
              Send message
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
