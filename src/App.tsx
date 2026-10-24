import { useState, type CSSProperties } from "react";
import "./App.css";
import policy from "./privacy-policy.json";
const store = "https://apps.apple.com/us/app/degree-fold-flick/id6820294808";
function Brand() {
  return (
    <a className="brand" href="/" aria-label="Degree home">
      <img
        className="brand-symbol"
        src="/degree-mark.png"
        alt=""
        width="36"
        height="36"
      />
      degree<span>°</span>
    </a>
  );
}
function StoreLink() {
  return (
    <a className="store-link" href={store}>
      <svg width="20" height="24" viewBox="0 0 24 28" aria-hidden="true">
        <path
          fill="currentColor"
          d="M17.5 0c.2 2-1 4.2-2.3 5.4-1.3 1.2-2.8 1.9-4.5 1.8-.3-1.8.8-3.8 2-5C14 1 16 .1 17.5 0ZM22 20.6c-.6 1.4-.9 2.1-1.7 3.3-1.1 1.7-2.7 3.8-4.6 3.8-1.7 0-2.2-1.1-4.5-1.1-2.4 0-2.9 1.1-4.6 1.1-1.8 0-3.4-1.9-4.5-3.7C-1 19.1-.7 11.4 4.4 8.8c1.8-.9 3.8-.5 5.2 0 1 .4 1.5.6 2 .6.5 0 1-.2 2-.6 1.8-.6 3.5-1 5.2-.1 1.4.7 2.2 1.5 3 2.6-4.5 2.5-3.8 8.9.2 9.3Z"
        />
      </svg>
      <span>
        <small>Download on the</small>
        <strong>App Store</strong>
      </span>
      <span aria-hidden="true">↗</span>
    </a>
  );
}
function Header() {
  return (
    <header className="site-header">
      <Brand />
      <nav aria-label="Main navigation">
        <a href="/#experience">The experience</a>
        <a href="/#compatibility">Your iPhone</a>
        <a href="/support/">Support</a>
      </nav>
      <a className="nav-download" href={store}>
        Get Degree <span>↗</span>
      </a>
    </header>
  );
}
function Footer() {
  return (
    <footer>
      <div>
        <Brand />
        <p>A little curiosity. A different perspective.</p>
      </div>
      <div className="footer-links">
        <a href="/privacy/">Privacy</a>
        <a href="/support/">Support</a>
        <a href="mailto:aadi@elevatr.app">Say hello ↗</a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Aditya Sharma · An Elevatr app</span>
        <span>Made for the way you move.</span>
      </div>
    </footer>
  );
}
function AngleStage() {
  const [angle, setAngle] = useState(120),
    [target, setTarget] = useState<number | null>(null);
  return (
    <div
      className="angle-stage"
      style={{ "--fold": `${(180 - angle) * 0.5}deg` } as CSSProperties}
    >
      <div className="stage-top">
        <span>
          <i /> LIVE IN DEGREE
        </span>
        <span>01 / FOLD</span>
      </div>
      <div className="instrument" aria-hidden="true">
        <svg viewBox="0 0 400 260" className="dial">
          <defs>
            <linearGradient id="arc" x1="0" x2="1">
              <stop stopColor="#ba7760" />
              <stop offset="1" stopColor="#ffd4af" />
            </linearGradient>
          </defs>
          <path d="M40 210 A160 160 0 0 1 360 210" className="dial-track" />
          {Array.from({ length: 37 }, (_, i) => {
            const a = Math.PI + (i * Math.PI) / 36,
              r = i % 3 === 0 ? 139 : 145;
            return (
              <line
                key={i}
                x1={200 + 151 * Math.cos(a)}
                y1={210 + 151 * Math.sin(a)}
                x2={200 + r * Math.cos(a)}
                y2={210 + r * Math.sin(a)}
                className={i % 3 === 0 ? "major" : "minor"}
              />
            );
          })}
          <path
            d="M40 210 A160 160 0 0 1 360 210"
            className="dial-progress"
            pathLength="180"
            strokeDasharray={`${angle} 180`}
          />
          <text x="38" y="240">
            0°
          </text>
          <text x="341" y="240">
            180°
          </text>
        </svg>
        <div className="degree-readout">
          <span>{angle}</span>
          <sup>°</sup>
          <small>
            {angle === 180
              ? "Fully open"
              : angle === 0
                ? "Closed"
                : "Partially open"}
          </small>
        </div>
      </div>
      <div className="phone-illustration" aria-hidden="true">
        <div className="phone-half left">
          <span className="phone-glow" />
          <span className="phone-line" />
        </div>
        <div className="phone-half right">
          <span className="camera" />
          <span className="phone-glow" />
          <span className="phone-line" />
        </div>
      </div>
      <div className="stage-control">
        <div className="control-label">
          <label htmlFor="angle">A change of perspective.</label>
          <span>DRAG TO FOLD</span>
        </div>
        <input
          id="angle"
          aria-label="Demo hinge angle"
          type="range"
          min="0"
          max="180"
          step="1"
          value={angle}
          onChange={(e) => setAngle(Number(e.target.value))}
        />
        <div className="demo-game">
          <button onClick={() => setTarget(target === null ? 75 : null)}>
            {target === null ? "Try the angle game ＋" : "End demo −"}
          </button>
          <span aria-live="polite">
            {target === null
              ? "Interactive preview · not a sensor reading"
              : Math.abs(angle - target) <= 2
                ? "Perfect. You found 75°."
                : `Find 75° · ${Math.abs(angle - target)}° to go`}
          </span>
        </div>
      </div>
    </div>
  );
}
const faqs = [
  [
    "Do I need a folding iPhone?",
    "No. On other supported iPhones, Degree becomes a flick detector. Hold your phone securely, make a gentle wrist flick, then settle again for a score from 0 to 100. Fold readings and the angle game require a supported folding iPhone.",
  ],
  [
    "Is Degree a precision measuring tool?",
    "Degree shows the angle reported by iOS. The system controls reading frequency and granularity. A decimal place is formatting, not a guarantee of measurement accuracy.",
  ],
  [
    "Does the Live Activity update in the background?",
    "The Live Activity uses hinge readings while Degree is active. In the background, it shows the last reading and its time. It is not a continuous background hinge sensor.",
  ],
  [
    "Can folding change my wallpaper?",
    "Degree prepares a color image and a sound for an optional Shortcuts experiment. You import the shortcut, select your wallpaper and enable an available automation yourself. Fold triggers and their timing depend on your device and iOS. Degree does not silently install automations or promise an exact trigger angle.",
  ],
  [
    "What happens to my readings?",
    "Hinge readings and flick scores are processed on your device. Shortcut experiment logs also stay local unless you export them. See the privacy policy for details about the currently released app.",
  ],
];
function FAQs() {
  return (
    <div className="faq-list">
      {faqs.map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <span aria-hidden="true">＋</span>
          </summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}
function Landing() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <i className="status-dot" /> A LITTLE MORE PLAY. A NEW PERSPECTIVE.
          </div>
          <h1>
            A new angle
            <br />
            on your <em>iPhone.</em>
          </h1>
          <p>
            Turn a fold into a number. A flick into a score.
            <br />
            Explore the small movements that make your phone feel a little more
            alive.
          </p>
          <StoreLink />
          <div className="hero-meta">
            <span>Free to download</span>
            <span>iOS 27.0+</span>
          </div>
          <a className="explore" href="#experience">
            SCROLL TO EXPLORE <span>↓</span>
          </a>
        </div>
        <AngleStage />
      </section>
      <div className="intro-line">
        <span>BUILT AROUND A SIMPLE IDEA</span>
        <p>
          Your phone moves.
          <br />
          <span>Make something of it.</span>
        </p>
        <span className="intro-mark" aria-hidden="true">
          ↗
        </span>
      </div>
      <section id="experience" className="experience">
        <div className="section-intro">
          <div className="eyebrow">01 — THE EXPERIENCE</div>
          <h2>
            Curiosity,
            <br />
            in motion.
          </h2>
          <p>
            One simple screen. A few delightful ways to see what your iPhone can
            do.
          </p>
        </div>
        <div className="feature-stories">
          <article className="feature-story">
            <div className="story-number">01</div>
            <div>
              <span className="mini-label">ON SUPPORTED FOLDING IPHONES</span>
              <h3>Every degree, revealed.</h3>
              <p>
                Watch your hinge angle change as you fold. A responsive device
                illustration follows along, while the layout keeps the readout
                clear of the fold.
              </p>
              <div className="inline-stat">
                <strong>
                  0<span>—</span>180<span>°</span>
                </strong>
                <span>
                  A fresh perspective,
                  <br />
                  from closed to fully open.
                </span>
              </div>
            </div>
          </article>
          <article className="feature-story">
            <div className="story-number">02</div>
            <div>
              <span className="mini-label">THE ANGLE GAME</span>
              <h3>Find your sweet spot.</h3>
              <p>
                A target angle. A live difference. Fold until you find the right
                position, then hear a small sound of success. The whole
                challenge stays on one screen.
              </p>
              <div className="game-strip">
                <span>
                  TARGET <b>75°</b>
                </span>
                <div className="game-track">
                  <i />
                </div>
                <span className="warm">3° TO GO</span>
              </div>
            </div>
          </article>
          <article className="feature-story">
            <div className="story-number">03</div>
            <div>
              <span className="mini-label">ON OTHER IPHONES</span>
              <h3>No fold? Give it a flick.</h3>
              <p>
                A gentle wrist flick, a return to rest, and a score from 0 to
                100. Reset and have another go. More force isn't the goal; a
                clean finish is.
              </p>
              <div className="flick-strip">
                <svg
                  viewBox="0 0 300 60"
                  aria-label="Illustrative motion waveform"
                >
                  <path d="M0 30H55l8-3 8 6 9-3h15l8-15 9 36 10-49 11 56 12-40 9 17 10-5h136" />
                </svg>
                <span>
                  86<small>/ 100</small>
                </span>
              </div>
            </div>
          </article>
        </div>
      </section>
      <section className="beyond">
        <div className="beyond-top">
          <div className="eyebrow">02 — A LITTLE FURTHER</div>
          <h2>
            Small details.
            <br />
            More possibilities.
          </h2>
        </div>
        <div className="beyond-grid">
          <article>
            <div
              className="island-demo"
              aria-label="Illustrative Live Activity"
            >
              <span className="island-dot" />
              <span>
                120<span className="warm">°</span>
              </span>
              <i />
              <span className="island-wave">⌁</span>
            </div>
            <span className="mini-label">A GLANCE AWAY</span>
            <h3>Take the angle with you.</h3>
            <p>
              Start a Live Activity to bring the latest reading to supported
              Lock Screen and Dynamic Island surfaces.
            </p>
            <p className="fine">
              Shows the last reading when Degree is in the background.
            </p>
          </article>
          <article>
            <div className="shortcut-demo" aria-hidden="true">
              <span className="color-swatch a" />
              <span className="color-swatch b" />
              <span className="color-swatch c" />
              <span className="sound-glyph">♪</span>
            </div>
            <span className="mini-label">FOR THE CURIOUS</span>
            <h3>Make your own fold experiment.</h3>
            <p>
              Use a prepared shortcut to change a wallpaper color and play a
              sound. Local run logs help you explore when its actions execute.
            </p>
            <p className="fine">
              Requires user setup in Shortcuts. Available triggers vary.
            </p>
          </article>
        </div>
      </section>
      <section id="compatibility" className="compatibility">
        <div>
          <div className="eyebrow">03 — YOUR IPHONE, YOUR WAY</div>
          <h2>
            Made to fold.
            <br />
            Happy to flick.
          </h2>
          <p>Degree adapts to the capabilities of your phone.</p>
        </div>
        <div className="compat-table">
          <table>
            <thead>
              <tr>
                <th>What you can do</th>
                <th>
                  Folding iPhone<small>iOS 27.1+</small>
                </th>
                <th>
                  Other iPhones<small>iOS 27.0+</small>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Live hinge angle", true, false],
                ["Angle game + illustration", true, false],
                ["Hinge Live Activity", true, false],
                ["Fold shortcut experiment", true, false],
                ["Flick scoring", false, true],
              ].map(([label, ...values]) => (
                <tr key={String(label)}>
                  <td>{label}</td>
                  {values.map((v, i) => (
                    <td key={i} className={v ? "available" : ""}>
                      <span aria-hidden="true">{v ? "✓" : "—"}</span>
                      <span className="sr-only">
                        {v ? "Available" : "Not available"}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="fine">
            Fold features require hardware and system support. Shortcut
            automations are configured separately by you.
          </p>
        </div>
      </section>
      <section className="questions">
        <div>
          <div className="eyebrow">A FEW THINGS TO KNOW</div>
          <h2>Good questions.</h2>
          <a className="text-link" href="/support/">
            Need a hand? ↗
          </a>
        </div>
        <FAQs />
      </section>
      <section className="closing">
        <span className="closing-orbit" aria-hidden="true" />
        <div className="eyebrow">A NEW WAY TO LOOK AT IT</div>
        <h2>
          Go on.
          <br />
          Change your angle.
        </h2>
        <StoreLink />
        <p>Free on the App Store · iOS 27.0 or later</p>
      </section>
    </>
  );
}
function Privacy() {
  return (
    <article className="document">
      <div className="eyebrow">DEGREE / PRIVACY</div>
      <h1>
        Your motion.
        <br />
        <em>Your device.</em>
      </h1>
      <p className="document-lead">
        Clear information about what Degree uses, what stays local, and the
        choices you control.
      </p>
      <div className="notice">
        <strong>Version information</strong>
        <p>
          This policy covers the released Degree 1.0 app, which does not include
          advertising or analytics. An ad-supported update is in development;
          its privacy information will be published when that update is ready.
        </p>
      </div>
      <p className="fine">Updated {policy.updated}</p>
      {policy.sections.map((s) => (
        <section key={s.title}>
          <h2>{s.title}</h2>
          <p>{s.text}</p>
        </section>
      ))}
      <section>
        <h2>This website</h2>
        <p>
          This website is hosted on GitHub Pages. We do not add advertising
          scripts, analytics, cookies or account sign-in. The angle preview runs
          locally in your browser. GitHub logs and stores visitors’ IP addresses
          for security purposes. Following external links uses those services
          under their own privacy policies.
        </p>
      </section>
      <a
        className="text-link"
        href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
      >
        GitHub’s privacy statement ↗
      </a>
    </article>
  );
}
function Support() {
  return (
    <article className="document">
      <div className="eyebrow">DEGREE / SUPPORT</div>
      <h1>
        Let's find
        <br />
        <em>the right angle.</em>
      </h1>
      <p className="document-lead">
        Need help with a reading, a flick, or your first shortcut? Start here.
      </p>
      <a
        className="support-mail"
        href="mailto:aadi@elevatr.app?subject=Degree%20support"
      >
        aadi@elevatr.app ↗
      </a>
      <p className="fine">
        Include your iPhone model, iOS version, app version and what happened.
        Share a shortcut run log only if you want us to see it.
      </p>
      <section>
        <h2>Your first fold shortcut</h2>
        <ol className="setup-steps">
          <li>
            Open Degree on your supported folding iPhone and choose{" "}
            <strong>Create fold shortcut</strong>.
          </li>
          <li>
            Follow the in-app guide to import the prepared shortcut. Choose a
            wallpaper for it to update and authorize its actions.
          </li>
          <li>
            Run it manually first. Confirm that its color and sound actions
            work.
          </li>
          <li>
            In Shortcuts, create a personal automation using an appropriate
            trigger available on your device, and select the prepared shortcut.
          </li>
          <li>
            Test slowly on your device. Use Degree's local run log to compare
            action times. Trigger availability and timing are controlled by iOS.
          </li>
        </ol>
      </section>
      <section>
        <h2>Flicks, gently.</h2>
        <p>
          Hold your phone securely. Start an attempt, let the phone rest, make a
          gentle wrist flick, then settle it again. A simulator cannot measure a
          real wrist flick. You can reset after a result and try again.
        </p>
      </section>
      <section>
        <h2>Useful answers</h2>
        <FAQs />
      </section>
      <section>
        <h2>Sound credits</h2>
        <p>
          Glass crack is an original Degree sound. The optional Faaa… sound in
          the upcoming update uses “Fah” Scream, sound 3591, published by
          BigSoundBank under CC0.
        </p>
        <a
          className="text-link"
          href="https://bigsoundbank.com/fah-scream-s3591.html"
        >
          View sound source ↗
        </a>
      </section>
    </article>
  );
}
export default function App({
  path = typeof window === "undefined" ? "/" : window.location.pathname,
}: {
  path?: string;
}) {
  const page = path.replace(/\/$/, "");
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        {page === "/privacy" ? (
          <Privacy />
        ) : page === "/support" ? (
          <Support />
        ) : (
          <Landing />
        )}
      </main>
      <Footer />
    </>
  );
}
