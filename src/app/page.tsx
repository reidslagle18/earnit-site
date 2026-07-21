"use client";

import { useEffect, useRef, useState } from "react";
import { trackSignupClick } from "@/lib/meta";

const SIGNUP_URL =
  process.env.NEXT_PUBLIC_SIGNUP_URL ?? "https://parentalcontrol-one.vercel.app/signup";

function Cta({
  placement,
  large,
  label = "Start free — no credit card",
}: {
  placement: string;
  large?: boolean;
  label?: string;
}) {
  return (
    <a
      href={SIGNUP_URL}
      className={`btn btn-primary${large ? " btn-lg" : ""}`}
      onClick={(e) => {
        e.preventDefault();
        trackSignupClick(SIGNUP_URL, placement);
      }}
    >
      {label}
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </a>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroBottom = heroRef.current?.getBoundingClientRect().bottom ?? 0;
      setStickyVisible(heroBottom < 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      <div className="wrap">
        <header className="site-header">
          <a href="/" className="wordmark">
            Earn<em>It</em>
          </a>
          <Cta placement="header" label="Start free" />
        </header>

        {/* ── Hero ── */}
        <section className="hero" ref={heroRef}>
          <div className="hero-grid">
            <div>
              <span className="eyebrow">For families with kids 5–17</span>
              <h1>
                Phone access earned, <em>not given.</em>
              </h1>
              <p className="hero-sub">
                Tired of screen-time battles? EarnIt locks your child&rsquo;s apps until
                real-world tasks are done — proven with photos and timers, checked by AI,
                approved by you. No nagging. No timer to police.
              </p>
              <div className="hero-cta">
                <Cta placement="hero" large />
                <p className="cta-note">
                  <strong>Free plan, forever.</strong> Set up in 5 minutes · Cancel anytime
                </p>
              </div>
            </div>

            <div className="mock" aria-hidden>
              <div className="mock-header">
                <span className="mock-title">Mason&rsquo;s phone</span>
                <span className="mock-status">Locked</span>
              </div>
              <div className="mock-task done">
                <span className="mock-check done">✓</span>
                <span className="label">Make your bed</span>
                <span className="tag">photo ✓</span>
              </div>
              <div className="mock-task done">
                <span className="mock-check done">✓</span>
                <span className="label">20 min of reading</span>
                <span className="tag">timer ✓</span>
              </div>
              <div className="mock-task">
                <span className="mock-check" />
                <span className="label">Empty the dishwasher</span>
                <span className="tag">photo</span>
              </div>
              <div className="mock-footer">1 task left → apps unlock</div>
            </div>
          </div>
        </section>
      </div>

      {/* ── Problem band ── */}
      <div className="stat-band">
        <div className="wrap">
          <p className="big">
            The average American teen spends <em>8½ hours a day</em> on entertainment
            screens. Arguing about it doesn&rsquo;t work. <em>Incentives do.</em>
          </p>
          <p className="src">Common Sense Media census of teen media use</p>
        </div>
      </div>

      <div className="wrap">
        {/* ── How it works ── */}
        <section id="how">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>Three steps to a calmer house</h2>
          </div>
          <div className="steps">
            <div className="step">
              <span className="num">Step one</span>
              <h3>You assign real tasks</h3>
              <p>
                Chores, homework, reading, practice — pick from templates or write your own.
                Each task is worth screen time.
              </p>
            </div>
            <div className="step">
              <span className="num">Step two</span>
              <h3>Kids prove it&rsquo;s done</h3>
              <p>
                A photo of the clean room. A timer for the reading. AI checks the evidence
                instantly, and you keep final say with one-tap override.
              </p>
            </div>
            <div className="step">
              <span className="num">Step three</span>
              <h3>Screen time unlocks</h3>
              <p>
                Apps stay locked until tasks are approved — then unlock automatically.
                Emergency calls and medical apps always work, locked or not.
              </p>
            </div>
          </div>
        </section>

        <hr className="rule" />

        {/* ── Features ── */}
        <section id="features">
          <div className="section-head">
            <span className="eyebrow">What&rsquo;s inside</span>
            <h2>Built for responsibility, not surveillance</h2>
            <p>
              EarnIt doesn&rsquo;t read messages or track location. It does one thing well:
              make screen time something kids earn.
            </p>
          </div>
          <div className="features">
            <div className="feature">
              <h3>Real app locking</h3>
              <p>
                Built on Apple&rsquo;s own Family Controls — the same system behind Screen
                Time. Not an honor-system checklist.
              </p>
            </div>
            <div className="feature">
              <h3>Photo &amp; timer proof</h3>
              <p>
                Kids snap the finished chore or run a focus timer. Evidence ends the
                &ldquo;I already did it&rdquo; debate for good.
              </p>
            </div>
            <div className="feature">
              <h3>AI auto-verify</h3>
              <p>
                AI reviews each submission in seconds so you&rsquo;re not photo-auditing
                bedrooms all day. Override anything with one tap.
              </p>
            </div>
            <div className="feature">
              <h3>One calm dashboard</h3>
              <p>
                Every task, submission, and approval in one place. Stay informed without
                hovering.
              </p>
            </div>
            <div className="feature">
              <h3>Emergency-safe, always</h3>
              <p className="safe">
                Calls, emergency services, and medical apps are never locked. Ever.
              </p>
            </div>
            <div className="feature">
              <h3>Kid-proof by design</h3>
              <p>
                Deleting the app, toggling settings, or restarting the phone doesn&rsquo;t
                break the lock. Parents hold the key.
              </p>
            </div>
          </div>
        </section>

        <hr className="rule" />

        {/* ── Comparison ── */}
        <section id="compare">
          <div className="section-head">
            <span className="eyebrow">Why EarnIt</span>
            <h2>Timers police. Trackers spy. EarnIt motivates.</h2>
          </div>
          <div className="compare">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th className="earnit">EarnIt</th>
                  <th>Screen-time timers</th>
                  <th>Surveillance apps</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Kids motivated to do chores</td>
                  <td className="yes">Yes — that&rsquo;s the point</td>
                  <td className="no">No</td>
                  <td className="no">No</td>
                </tr>
                <tr>
                  <td>Verified with real evidence</td>
                  <td className="yes">Photos, timers, AI review</td>
                  <td className="no">Honor system</td>
                  <td className="no">—</td>
                </tr>
                <tr>
                  <td>Reads messages / tracks location</td>
                  <td className="yes">Never</td>
                  <td className="no">Sometimes</td>
                  <td className="no">That&rsquo;s all it does</td>
                </tr>
                <tr>
                  <td>Ends the daily argument</td>
                  <td className="yes">Rules are automatic</td>
                  <td className="no">You&rsquo;re the timer cop</td>
                  <td className="no">Creates new ones</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <hr className="rule" />

        {/* ── Pricing ── */}
        <section id="pricing">
          <div className="section-head">
            <span className="eyebrow">Pricing</span>
            <h2>Start free. Upgrade if it works.</h2>
          </div>
          <div className="plans">
            <div className="plan">
              <span className="name">Free</span>
              <div className="price">
                $0 <span>forever</span>
              </div>
              <ul>
                <li>Up to 2 kids</li>
                <li>5 tasks per kid</li>
                <li>Photo &amp; timer proof</li>
                <li>Real app locking</li>
                <li>Parent dashboard</li>
              </ul>
              <Cta placement="pricing_free" label="Start free" />
            </div>
            <div className="plan featured">
              <span className="name">Premium</span>
              <div className="price">
                $9.99 <span>/ month</span>
              </div>
              <div className="anchor">or $89.99/year — about 25¢ a day</div>
              <ul>
                <li>Unlimited kids</li>
                <li>Unlimited tasks</li>
                <li>AI auto-verify</li>
                <li>Advanced schedules &amp; routines</li>
                <li>Priority support</li>
              </ul>
              <Cta placement="pricing_premium" label="Try Premium free for 7 days" />
              <p className="trial-note">
                7 days free · no charge until the trial ends · cancel in two taps
              </p>
            </div>
          </div>
        </section>

        <hr className="rule" />

        {/* ── FAQ ── */}
        <section id="faq">
          <div className="section-head">
            <span className="eyebrow">Questions</span>
            <h2>Fair questions, straight answers</h2>
          </div>
          <div className="faq">
            <details>
              <summary>Is this spyware?</summary>
              <p>
                No. EarnIt doesn&rsquo;t read messages, log browsing, or track location. It
                locks apps until tasks are done — that&rsquo;s it. Kids see exactly what&rsquo;s
                locked and exactly how to earn it back, which is why they don&rsquo;t hate it.
              </p>
            </details>
            <details>
              <summary>What if my kid has an emergency?</summary>
              <p>
                Phone calls, emergency services, and medical apps are never locked, no matter
                what. Parents can also set an emergency unlock code that opens everything
                instantly.
              </p>
            </details>
            <details>
              <summary>How does the locking actually work?</summary>
              <p>
                On the kid&rsquo;s iPhone, EarnIt uses Apple&rsquo;s Family Controls framework —
                the same system that powers Screen Time. That means the lock is enforced by
                iOS itself, not by an app your kid can force-quit.
              </p>
            </details>
            <details>
              <summary>Can my kid cheat it?</summary>
              <p>
                Deleting the app, changing settings, or restarting the phone doesn&rsquo;t lift
                the lock. And because tasks need photo or timer evidence reviewed by AI (and
                you), &ldquo;yeah I did it&rdquo; doesn&rsquo;t unlock anything.
              </p>
            </details>
            <details>
              <summary>What does it cost?</summary>
              <p>
                The free plan (2 kids, 5 tasks each) is free forever — no credit card to
                start. Premium is $9.99/month or $89.99/year with a 7-day free trial, and
                you can cancel anytime from your Apple subscription settings.
              </p>
            </details>
            <details>
              <summary>What devices do I need?</summary>
              <p>
                Kids need an iPhone for app locking. Parents manage everything from the web
                dashboard or the iPhone app — assign tasks, review proof, and approve from
                anywhere.
              </p>
            </details>
          </div>
        </section>
      </div>

      {/* ── Final CTA ── */}
      <div className="stat-band">
        <div className="wrap final" style={{ padding: "96px 24px" }}>
          <h2 style={{ color: "var(--bg)" }}>
            Tonight&rsquo;s chores could be tonight&rsquo;s <em style={{ color: "#34d399" }}>screen time.</em>
          </h2>
          <Cta placement="final" large />
          <p className="cta-note" style={{ color: "rgba(244,241,235,0.6)" }}>
            Free plan forever · No credit card · 5-minute setup
          </p>
        </div>
      </div>

      <div className="wrap">
        <footer>
          <span>© {new Date().getFullYear()} EarnIt</span>
          <span>
            <a href="https://parentalcontrol-one.vercel.app/privacy">Privacy</a>
            <a href="https://parentalcontrol-one.vercel.app/terms">Terms</a>
            <a href="https://parentalcontrol-one.vercel.app/login">Log in</a>
          </span>
        </footer>
      </div>

      {/* ── Sticky mobile CTA ── */}
      <div className={`sticky-cta${stickyVisible ? " visible" : ""}`}>
        <Cta placement="sticky_mobile" />
      </div>
    </main>
  );
}
