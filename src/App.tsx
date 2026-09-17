import { useState } from "react";
import "./App.css";

const features = [
  {
    number: "01",
    title: "Personal Statistics",
    text: "Understand your performance with K/D/A, ACS, ADR, KAST, headshot percentage and more.",
  },
  {
    number: "02",
    title: "Match History",
    text: "Review completed matches with results, maps, agents, RR changes and detailed performance.",
  },
  {
    number: "03",
    title: "Performance Analytics",
    text: "Track trends across your games and identify how your performance changes over time.",
  },
  {
    number: "04",
    title: "Agent & Map Stats",
    text: "See how your performance varies across agents, maps and sides.",
  },
  {
    number: "05",
    title: "Rank Progression",
    text: "Follow your competitive progress and review your historical rank and RR changes.",
  },
  {
    number: "06",
    title: "Find Players",
    text: "Use LFG to find other VALORANT players and build a group to play with.",
  },
];

const matches = [
  {
    result: "WIN",
    score: "13 - 9",
    map: "Ascent",
    agent: "Jett",
    kda: "24/17/6",
    acs: "271",
    adr: "169",
    hs: "28%",
    rr: "+18",
  },
  {
    result: "WIN",
    score: "13 - 7",
    map: "Haven",
    agent: "Jett",
    kda: "21/14/8",
    acs: "248",
    adr: "157",
    hs: "31%",
    rr: "+20",
  },
  {
    result: "LOSS",
    score: "9 - 13",
    map: "Bind",
    agent: "Raze",
    kda: "18/21/5",
    acs: "224",
    adr: "141",
    hs: "24%",
    rr: "-17",
  },
  {
    result: "WIN",
    score: "13 - 11",
    map: "Lotus",
    agent: "Jett",
    kda: "26/19/4",
    acs: "276",
    adr: "174",
    hs: "29%",
    rr: "+19",
  },
];

function App() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenu(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="site">
      {/* =========================================
          NAVIGATION
      ========================================== */}

      <header className="site-nav">
        <div className="nav-inner">
          <button
            className="site-brand"
            onClick={() => scrollTo("top")}
            type="button"
          >
            <span className="site-brand-mark">V</span>

            <span className="site-brand-name">VALYX</span>
          </button>

          <nav className={`desktop-nav ${mobileMenu ? "open" : ""}`}>
            <button type="button" onClick={() => scrollTo("features")}>
              Features
            </button>

            <button type="button" onClick={() => scrollTo("preview")}>
              Product
            </button>

            <button type="button" onClick={() => scrollTo("how-it-works")}>
              How it works
            </button>

            <button type="button" onClick={() => scrollTo("privacy")}>
              Privacy
            </button>
          </nav>

          <div className="nav-actions">
            <button
              className="nav-connect"
              type="button"
              onClick={() => scrollTo("connect")}
            >
              Connect Riot Account
            </button>

            <button
              className="mobile-menu-button"
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setMobileMenu(!mobileMenu)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* =========================================
            HERO
        ========================================== */}

        <section className="hero">
          <div className="hero-grid" />

          <div className="hero-inner">
            <div className="hero-copy">
              <div className="hero-eyebrow">
                <span className="status-dot" />
                PERSONAL VALORANT ANALYTICS
              </div>

              <h1>
                Your matches.
                <br />
                Your stats.
                <br />
                <span>Your progress.</span>
              </h1>

              <p className="hero-description">
                VALYX is a native Windows application designed to help
                VALORANT players understand their own gameplay through
                detailed personal statistics and historical match analysis.
              </p>

              <div className="hero-actions" id="connect">
                <button
                  className="primary-button"
                  type="button"
                  onClick={() => scrollTo("preview")}
                >
                  Explore VALYX
                  <span>→</span>
                </button>

                <button
                  className="secondary-button"
                  type="button"
                  onClick={() => scrollTo("how-it-works")}
                >
                  How it works
                </button>
              </div>

              <div className="hero-note">
                <span>●</span>
                Built for personal improvement
              </div>
            </div>

            <div className="hero-product">
              <ProductDashboard />
            </div>
          </div>
        </section>

        {/* =========================================
            INTRO
        ========================================== */}

        <section className="intro-section">
          <div className="section-container intro-grid">
            <div className="section-label">
              <span>01</span>
              THE PRODUCT
            </div>

            <div>
              <h2>
                A clearer view of
                <br />
                <span>your own performance.</span>
              </h2>

              <p className="large-text">
                VALYX turns your completed VALORANT matches into a personal
                performance history. Instead of focusing on what other
                players are doing, it gives you the information needed to
                review your own games and understand your progress.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================
            PRODUCT PREVIEW
        ========================================== */}

        <section className="preview-section" id="preview">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <div className="section-kicker">THE VALYX EXPERIENCE</div>

                <h2>
                  Built around
                  <br />
                  <span>your matches.</span>
                </h2>
              </div>

              <p>
                A focused desktop experience for reviewing your personal
                VALORANT performance.
              </p>
            </div>

            <div className="large-dashboard-frame">
              <div className="dashboard-browser-bar">
                <div className="browser-dots">
                  <span />
                  <span />
                  <span />
                </div>

                <span className="browser-title">VALYX — Dashboard</span>
              </div>

              <div className="dashboard-preview">
                <PreviewSidebar />

                <div className="preview-main">
                  <div className="preview-topbar">
                    <div>
                      <h3>Dashboard</h3>
                      <p>Your VALORANT performance at a glance.</p>
                    </div>

                    <div className="preview-settings">⚙</div>
                  </div>

                  <div className="preview-welcome">
                    <div>
                      <span className="preview-eyebrow">
                        PLAYER PROFILE
                      </span>

                      <h4>Your VALORANT performance</h4>

                      <p>
                        Connect your Riot account to import your match history
                        and build your personal performance profile.
                      </p>

                      <button type="button">Connect Riot Account</button>
                    </div>

                    <strong>V</strong>
                  </div>

                  <div className="preview-stats">
                    <PreviewStat label="CURRENT RANK" value="ASC 3" />
                    <PreviewStat label="K/D" value="1.24" />
                    <PreviewStat label="ACS" value="247" />
                    <PreviewStat label="ADR" value="158" />
                    <PreviewStat label="HS%" value="28%" />
                  </div>

                  <div className="preview-columns">
                    <div className="preview-panel">
                      <div className="preview-panel-header">
                        <strong>Recent Matches</strong>
                        <span>Last 5</span>
                      </div>

                      {matches.map((match, index) => (
                        <PreviewMatch key={`${match.map}-${index}`} {...match} />
                      ))}
                    </div>

                    <div className="preview-panel performance-panel">
                      <div className="preview-panel-header">
                        <strong>Performance</strong>
                        <span>Overview</span>
                      </div>

                      <div className="preview-performance-list">
                        <PreviewPerformance label="Win Rate" value="60%" />
                        <PreviewPerformance label="K/D" value="1.24" />
                        <PreviewPerformance label="ACS" value="247" />
                        <PreviewPerformance label="ADR" value="158" />
                        <PreviewPerformance label="Headshot %" value="28%" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            FEATURES
        ========================================== */}

        <section className="features-section" id="features">
          <div className="section-container">
            <div className="section-heading compact">
              <div>
                <div className="section-kicker">WHAT YOU CAN TRACK</div>

                <h2>
                  Everything about
                  <br />
                  <span>your performance.</span>
                </h2>
              </div>

              <p>
                VALYX brings your historical match information together in one
                focused place.
              </p>
            </div>

            <div className="features-grid">
              {features.map((feature) => (
                <article className="feature-card" key={feature.number}>
                  <span className="feature-number">{feature.number}</span>

                  <div className="feature-line" />

                  <h3>{feature.title}</h3>

                  <p>{feature.text}</p>

                  <span className="feature-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================
            ANALYTICS
        ========================================== */}

        <section className="analytics-section">
          <div className="section-container analytics-grid">
            <div className="analytics-copy">
              <div className="section-kicker">PERSONAL ANALYTICS</div>

              <h2>
                See the
                <br />
                <span>trend.</span>
              </h2>

              <p>
                A single match tells you what happened. A history of matches
                helps you understand how you are performing over time.
              </p>

              <div className="analytics-list">
                <div>
                  <strong>01</strong>
                  <span>Performance trends</span>
                </div>

                <div>
                  <strong>02</strong>
                  <span>Rank progression</span>
                </div>

                <div>
                  <strong>03</strong>
                  <span>Agent statistics</span>
                </div>

                <div>
                  <strong>04</strong>
                  <span>Map & weapon statistics</span>
                </div>
              </div>
            </div>

            <div className="analytics-visual">
              <AnalyticsCard />
            </div>
          </div>
        </section>

        {/* =========================================
            HOW IT WORKS
        ========================================== */}

        <section className="how-section" id="how-it-works">
          <div className="section-container">
            <div className="section-heading">
              <div>
                <div className="section-kicker">ACCOUNT CONNECTION</div>

                <h2>
                  From Riot account
                  <br />
                  <span>to your analytics.</span>
                </h2>
              </div>

              <p>
                VALYX uses Riot Sign On and player opt-in to access permitted
                account and VALORANT data.
              </p>
            </div>

            <div className="steps">
              <Step
                number="01"
                title="Connect"
                text="Start by connecting your Riot Account through Riot Sign On."
              />

              <Step
                number="02"
                title="Opt in"
                text="Explicitly authorize VALYX to access the data required for the application."
              />

              <Step
                number="03"
                title="Sync"
                text="Permitted VALORANT match and account information is processed for your profile."
              />

              <Step
                number="04"
                title="Understand"
                text="Review your completed matches, statistics and performance trends."
              />
            </div>
          </div>
        </section>

        {/* =========================================
            PRIVACY / SAFETY
        ========================================== */}

        <section className="privacy-section" id="privacy">
          <div className="section-container privacy-grid">
            <div>
              <div className="section-kicker">DESIGNED RESPONSIBLY</div>

              <h2>
                Your data.
                <br />
                <span>Your performance.</span>
              </h2>
            </div>

            <div className="privacy-content">
              <p className="privacy-intro">
                VALYX is designed around historical analysis and personal
                improvement rather than providing an advantage during an
                active match.
              </p>

              <div className="privacy-items">
                <PrivacyItem
                  title="Riot Account opt-in"
                  text="Account connection is handled through Riot Sign On with player authorization."
                />

                <PrivacyItem
                  title="Personal analysis"
                  text="The core experience focuses on reviewing your own completed matches and performance."
                />

                <PrivacyItem
                  title="No gameplay automation"
                  text="VALYX does not automate gameplay, interact with game memory, manipulate Vanguard or modify the VALORANT client."
                />

                <PrivacyItem
                  title="No opponent scouting"
                  text="The product is not designed to provide pre-match opponent scouting or real-time enemy statistics."
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================
            FINAL CTA
        ========================================== */}

        <section className="cta-section">
          <div className="cta-decoration">V</div>

          <div className="section-container cta-content">
            <div className="section-kicker">VALYX</div>

            <h2>
              Your matches.
              <br />
              <span>Your progress.</span>
            </h2>

            <p>
              A focused way to understand your VALORANT performance over time.
            </p>

            <button
              className="primary-button"
              type="button"
              onClick={() => scrollTo("top")}
            >
              Back to top
              <span>↑</span>
            </button>
          </div>
        </section>
      </main>

      {/* =========================================
          FOOTER
      ========================================== */}

      <footer className="site-footer">
        <div className="section-container footer-top">
          <div className="footer-brand">
            <div className="site-brand">
              <span className="site-brand-mark">V</span>
              <span className="site-brand-name">VALYX</span>
            </div>

            <p>Your matches. Your stats. Your progress.</p>
          </div>

          <div className="footer-links">
            <div>
              <span>PRODUCT</span>

              <button type="button" onClick={() => scrollTo("features")}>
                Features
              </button>

              <button type="button" onClick={() => scrollTo("preview")}>
                Product
              </button>

              <button type="button" onClick={() => scrollTo("how-it-works")}>
                How it works
              </button>
            </div>

            <div>
              <span>LEGAL</span>

              <button type="button">Privacy Policy</button>
              <button type="button">Terms of Service</button>
            </div>

            <div>
              <span>PROJECT</span>

              <button type="button">Contact</button>
              <button type="button">Support</button>
            </div>
          </div>
        </div>

        <div className="section-container footer-bottom">
          <p>© 2026 VALYX. All rights reserved.</p>

          <p>
            VALYX isn't endorsed by Riot Games and doesn't reflect the views
            or opinions of Riot Games or anyone officially involved in
            producing or managing Games properties.
          </p>
        </div>

        <div className="riot-disclaimer">
          Riot Games, and all associated properties are trademarks or
          registered trademarks of Riot Games, Inc.
        </div>
      </footer>
    </div>
  );
}

/* =========================================
   PRODUCT DASHBOARD
========================================= */

function ProductDashboard() {
  return (
    <div className="hero-dashboard">
      <div className="hero-dashboard-top">
        <div className="mini-sidebar">
          <div className="mini-brand">
            <span>V</span>
          </div>

          <div className="mini-nav active" />
          <div className="mini-nav" />
          <div className="mini-nav" />
          <div className="mini-nav" />
          <div className="mini-nav" />
        </div>

        <div className="hero-dashboard-content">
          <div className="mini-header">
            <div>
              <span>Dashboard</span>
              <small>Your performance at a glance.</small>
            </div>

            <i>⚙</i>
          </div>

          <div className="mini-welcome">
            <div>
              <span>PLAYER PROFILE</span>
              <strong>Your VALORANT performance</strong>
              <p>Personal match analytics and historical performance.</p>
            </div>

            <b>V</b>
          </div>

          <div className="mini-stat-row">
            <MiniStat label="RANK" value="ASC 3" />
            <MiniStat label="K/D" value="1.24" />
            <MiniStat label="ACS" value="247" />
            <MiniStat label="ADR" value="158" />
            <MiniStat label="HS%" value="28%" />
          </div>

          <div className="mini-bottom-grid">
            <div className="mini-panel">
              <div className="mini-panel-title">
                <span>Recent Matches</span>
                <small>Last 5</small>
              </div>

              <div className="mini-match">
                <em className="green">WIN</em>
                <div>
                  <strong>13 - 9</strong>
                  <span>Ascent · Jett</span>
                </div>
                <b>24/17/6</b>
                <i className="green">+18</i>
              </div>

              <div className="mini-match">
                <em className="green">WIN</em>
                <div>
                  <strong>13 - 7</strong>
                  <span>Haven · Jett</span>
                </div>
                <b>21/14/8</b>
                <i className="green">+20</i>
              </div>

              <div className="mini-match">
                <em className="red">LOSS</em>
                <div>
                  <strong>9 - 13</strong>
                  <span>Bind · Raze</span>
                </div>
                <b>18/21/5</b>
                <i className="red">-17</i>
              </div>
            </div>

            <div className="mini-panel">
              <div className="mini-panel-title">
                <span>Performance</span>
                <small>Overview</small>
              </div>

              <div className="mini-performance">
                <span>Win Rate</span>
                <b>60%</b>
              </div>

              <div className="mini-performance">
                <span>K/D</span>
                <b>1.24</b>
              </div>

              <div className="mini-performance">
                <span>ACS</span>
                <b>247</b>
              </div>

              <div className="mini-performance">
                <span>ADR</span>
                <b>158</b>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-glow" />
    </div>
  );
}

function PreviewSidebar() {
  const items = [
    "Dashboard",
    "Profile",
    "Matches",
    "Analytics",
    "Agents",
    "Maps",
    "Weapons",
    "Leaderboard",
    "LFG",
  ];

  return (
    <aside className="preview-sidebar">
      <div className="preview-brand">
        <span>V</span>

        <div>
          <strong>VALYX</strong>
          <small>PERSONAL STATS</small>
        </div>
      </div>

      <div className="preview-nav">
        {items.map((item, index) => (
          <div
            className={`preview-nav-item ${index === 0 ? "active" : ""}`}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>

      <div className="preview-sidebar-bottom">Settings</div>
    </aside>
  );
}

function PreviewStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="preview-stat">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function PreviewMatch({
  result,
  score,
  map,
  agent,
  kda,
  acs,
  rr,
}: {
  result: string;
  score: string;
  map: string;
  agent: string;
  kda: string;
  acs: string;
  adr: string;
  hs: string;
  rr: string;
}) {
  return (
    <div className="preview-match">
      <span className={result === "WIN" ? "win" : "loss"}>
        {result}
      </span>

      <div>
        <strong>{score}</strong>
        <small>
          {map} · {agent}
        </small>
      </div>

      <div>
        <strong>{kda}</strong>
        <small>K/D/A</small>
      </div>

      <div>
        <strong>{acs}</strong>
        <small>ACS</small>
      </div>

      <span className={rr.startsWith("+") ? "win" : "loss"}>
        {rr}
      </span>
    </div>
  );
}

function PreviewPerformance({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="preview-performance">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function AnalyticsCard() {
  const bars = [42, 58, 49, 68, 63, 76, 71, 84, 78, 92, 87, 96];

  return (
    <div className="analytics-card">
      <div className="analytics-card-header">
        <div>
          <span>PERFORMANCE TREND</span>
          <strong>ACS</strong>
        </div>

        <small>LAST 12 MATCHES</small>
      </div>

      <div className="chart">
        <div className="chart-grid-line line-one" />
        <div className="chart-grid-line line-two" />
        <div className="chart-grid-line line-three" />

        <div className="bars">
          {bars.map((height, index) => (
            <div className="bar-wrap" key={index}>
              <div
                className="bar"
                style={{ height: `${height}%` }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="chart-footer">
        <span>LOW</span>
        <strong>247 AVG ACS</strong>
        <span>HIGH</span>
      </div>
    </div>
  );
}

function Step({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="step">
      <span className="step-number">{number}</span>

      <div className="step-line" />

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}

function PrivacyItem({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="privacy-item">
      <span>✓</span>

      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
}

function MiniStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

export default App;