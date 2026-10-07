import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className="page inner-page contact-page">
      <div className="page-heading">
        <div>
          <div className="kicker">LAZY ROUTE · /CONTACT</div>
          <h1>Let's <em>connect.</em></h1>
        </div>
        <p>
          Contact is independently split from the initial application bundle.
        </p>
      </div>

      <div className="contact-layout">
        <div className="contact-note">
          <div className="big-symbol">@</div>
          <h2>One page,<br />one chunk.</h2>
          <p>
            Open DevTools Network, then visit this route. You should see a
            new JavaScript request for the lazy-loaded page.
          </p>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <label>Your name</label>
          <input placeholder="Ayush" required />
          <label>Message</label>
          <textarea placeholder="Write a message..." rows="6" required />
          <button className="primary-button">
            {sent ? "Message staged ✓" : "Send message →"}
          </button>
        </form>
      </div>
    </section>
  );
}
