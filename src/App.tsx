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
    "No. The 1.2 wallpaper preview works on all supported iPhones with a demo slider and static image sharing. The current App Store app includes a flick detector on conventional iPhones. Hold your phone securely, make a gentle wrist flick, then settle again for a score from 0 to 100. Fold readings and the angle game require a supported folding iPhone.",
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
    "Degree 1.2 prepares your selected pair’s intact or transformed image and sound. The older color-image experiment remains in Tools. You import the shortcut, select your wallpaper and enable an available automation yourself. Fold triggers and their timing depend on your device and iOS. Degree does not silently install automations or promise an exact trigger angle.",
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
const pairs = [
  ["glass", "Sapphire"], ["porcelain", "Porcelain"], ["ice", "Deep freeze"],
  ["paper", "Paper sun"], ["marble", "Marble loop"], ["moon", "Moonfall"],
  ["bloom", "Soft landing"], ["prism", "Spectrum"], ["vinyl", "Broken record"], ["arch", "After the arch"],
];
function Landing() {
  const [broken, setBroken] = useState(false);
  return <>
    <section className="hero wallpaper-hero">
      <div className="hero-copy">
        <div className="eyebrow"><i className="status-dot" /> WALLPAPERS · TESTFLIGHT PREVIEW</div>
        <h1>Perfect.<br /><em>Until you fold.</em></h1>
        <p>Two sides to every wallpaper. A pristine picture when open. A beautiful fracture, fold or transformation on the other side.</p>
        <a className="nav-download" href="#experience">Explore all ten pairs ↓</a>
        <div className="beta-notice">The wallpaper collection is being tested in Degree 1.2. The App Store version currently offers angle and flick tools.</div>
        <StoreLink />
      </div>
      <div className="wallpaper-stage">
        <img src={`/wallpapers/glass-${broken ? "broken" : "intact"}.jpg`} alt={broken ? "Sapphire glass sphere broken into fragments" : "A flawless sapphire glass sphere"} width="720" height="720" />
        <button onClick={() => setBroken(!broken)} aria-pressed={broken}>{broken ? "Unfold · restore the picture" : "Fold · reveal the other side"} <span>↗</span></button>
        <p>Interactive illustration · not a live hinge reading</p>
      </div>
    </section>
    <section id="experience" className="wallpaper-collection">
      <div className="section-intro"><div className="eyebrow">TEN SCENES. TWENTY IMAGES.</div><h2>A different kind<br />of before & after.</h2><p>Glass, ice, paper, stone and more. Every pair is bundled offline, ready to preview and make your own.</p></div>
      <div className="pair-grid">{pairs.map(([id, title]) => <article key={id}><div className="pair-images"><img src={`/wallpapers/${id}-intact.jpg`} alt={`${title}, intact`} loading="lazy" width="420" height="420" /><img src={`/wallpapers/${id}-broken.jpg`} alt={`${title}, transformed`} loading="lazy" width="420" height="420" /></div><h3>{title}</h3><p>Intact / transformed</p></article>)}</div>
    </section>
    <section id="compatibility" className="beyond">
      <div className="eyebrow">IN THE 1.2 PREVIEW</div><h2>Your wallpaper.<br />With a little personality.</h2>
      <div className="beyond-grid"><article><h3>See it. Hear it.</h3><p>On a supported folding iPhone, the in-app preview follows the hinge. Choose Glass crack, Paper fold, Faaa… or no sound. Any iPhone running iOS 27.0+ can try the demo slider and share either image as a static wallpaper.</p></article><article><h3>Take it to your Home Screen.</h3><p>Prepared Opened and Closed shortcuts return the matching image and your chosen sound. Import both, choose a Photo wallpaper and enable the available automation in Shortcuts.</p><p className="fine">iOS controls automation timing. An exact 180° background trigger is not promised. Degree cannot directly change system wallpaper or silently enable an automation.</p></article></div>
    </section>
    <section className="experience"><div className="section-intro"><div className="eyebrow">THE TOOLS YOU ALREADY KNOW</div><h2>Keep your<br />playful side.</h2><p>The live angle, angle game, device illustration and Live Activity remain in Tools on supported folding iPhones. Other iPhones retain the gentle flick score. Background Live Activities show the last reading and time.</p><p>These angle and flick tools are available in the current App Store app.</p></div><AngleStage /></section>
    <section className="questions"><div><div className="eyebrow">A FEW THINGS TO KNOW</div><h2>Good questions.</h2><a className="text-link" href="/support/">Visit support ↗</a></div><FAQs /></section>
  </>;
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
          Degree 1.2 adds paired wallpapers in TestFlight; 1.1 introduces advertising and optional usage analytics. This policy
          covers both versions, including the TestFlight preview and the separate 1.1 update awaiting App Review. Degree
          1.0 remains ad-free and does not include analytics.
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
        <h2>Set up paired wallpapers · Degree 1.2 TestFlight</h2>
        <ol><li>Choose a pair in the collection and tap Set up wallpapers. Pick your sound, including No sound if preferred.</li><li>Add both prepared copies: Opened uses the intact image; Closed uses the transformed image. Select an active Photo wallpaper during import and keep Show Preview off.</li><li>Run each shortcut once while unlocked, allow its actions, and use Run verification test in Degree. A completed test confirms the final action ran; visually check the wallpaper too.</li><li>In Shortcuts, edit each copy → Automation, then attach the corresponding device fold trigger if your OS offers it. Enable automatic execution and running while locked only as desired. App Is Opened is a different trigger.</li><li>Change the selected pair or sound in Degree to update future runs. Exact fold trigger angles and wallpaper-update timing are controlled by iOS. If the trigger is unavailable, use the shortcuts manually or share either image as a static wallpaper.</li></ol>
        <p>The in-app live preview uses a small tolerance near 180°; that threshold does not control Home or Lock Screen automations. Other iPhones can use the demo slider. To stop wallpaper automation, disable the copies in Shortcuts.</p>
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
          Glass crack and Paper fold are original Degree sounds. The optional Faaa… sound in
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
