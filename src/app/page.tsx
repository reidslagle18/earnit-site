"use client";

import { useEffect, useRef, useState } from "react";
import { trackSignupClick } from "@/lib/meta";

// Every CTA sends people to the App Store to download and subscribe.
const SIGNUP_URL =
  process.env.NEXT_PUBLIC_APP_STORE_URL ||
  "https://apps.apple.com/us/app/earnit-kids-earn-screen-time/id6788894863";

function Cta({
  placement,
  large,
  onEmerald,
  label = "Start your free week",
}: {
  placement: string;
  large?: boolean;
  onEmerald?: boolean;
  label?: string;
}) {
  return (
    <a
      href={SIGNUP_URL}
      className={`btn ${onEmerald ? "btn-onem" : "btn-primary"}${large ? " btn-lg" : ""}`}
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
          <Cta placement="header" label="Get started" />
        </header>

        {/* ── Hero ── */}
        <section className="hero" ref={heroRef}>
          <div className="hero-grid">
            <div>
              <h1>
                Screen time earned, <em>not given.</em>
              </h1>
              <p className="hero-sub">
                You&rsquo;re not competing with laziness. You&rsquo;re competing with a phone.
                EarnIt keeps the games locked until the chores are actually done, proved with
                a photo. Then it only takes asking once.
              </p>
              <div className="hero-cta">
                <Cta placement="hero" large />
                <p className="cta-note">
                  <strong>First week free.</strong> We remind you the day before it ends.
                  Cancel in two taps.
                </p>
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="hero-shot"
              src="/hero-thread.png"
              width={1080}
              height={1350}
              alt="An iPhone on a kitchen counter showing four unanswered texts asking a child to take the trash out."
            />
          </div>
        </section>
      </div>

      {/* ── The problem ── */}
      <div className="field">
        <div className="wrap">
          <p className="big">
            Kids average five and a half hours of screen time a day before they&rsquo;re even
            teenagers, and eight and a half by high school. Arguing about it doesn&rsquo;t work.{" "}
            <em>Incentives do.</em>
          </p>
          <p className="src">Common Sense Media census of media use, ages 8 to 18.</p>
        </div>
      </div>

      <div className="wrap">
        {/* ── How it works ── */}
        <section id="how">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>Three steps, about five minutes to set up.</h2>
          </div>
          <div className="steps">
            <div className="step">
              <span className="n">Step one</span>
              <h3>You assign real work</h3>
              <p>
                Chores, homework, reading, practice. Pick from templates or write your own,
                and set what each one is worth.
              </p>
            </div>
            <div className="step">
              <span className="n">Step two</span>
              <h3>Your kid proves it</h3>
              <p>
                A photo of the clean room. A timer for the reading. AI checks the evidence in
                seconds and you keep the final say with one tap.
              </p>
            </div>
            <div className="step">
              <span className="n">Step three</span>
              <h3>The apps open</h3>
              <p>
                Games and social apps unlock the moment you approve. No timer for you to
                police, no nightly negotiation.
              </p>
            </div>
          </div>
        </section>

        <hr className="rule" />

        {/* ── Features ── */}
        <section id="features">
          <div className="section-head">
            <span className="eyebrow">What&rsquo;s inside</span>
            <h2>Responsibility, not surveillance.</h2>
            <p>
              EarnIt never reads messages and never tracks location. It does one thing:
              makes screen time something your kid earns.
            </p>
          </div>
          <div className="features">
            <div className="feature">
              <h3>Real app locking</h3>
              <p>
                Built on Apple&rsquo;s Family Controls, the same system behind Screen Time. iOS
                enforces it, so it isn&rsquo;t an honour-system checklist.
              </p>
            </div>
            <div className="feature">
              <h3>Photo and timer proof</h3>
              <p>
                Your kid snaps the finished chore or runs a focus timer. Evidence ends the
                &ldquo;I already did it&rdquo; debate for good.
              </p>
            </div>
            <div className="feature">
              <h3>AI checks it first</h3>
              <p>
                Submissions get reviewed in seconds, so you&rsquo;re not photo-auditing bedrooms
                all evening. Override anything with one tap.
              </p>
            </div>
            <div className="feature">
              <h3>One calm dashboard</h3>
              <p>
                Every task, submission and approval in one place. Stay informed without
                hovering over anybody.
              </p>
            </div>
            <div className="feature">
              <h3>Emergency-safe, always</h3>
              <p className="safe">
                Calls, texts to you and emergency services are never locked. Not while tasks
                are pending. Not ever.
              </p>
            </div>
            <div className="feature">
              <h3>Kid-proof by design</h3>
              <p>
                Deleting the app, changing settings or restarting the phone doesn&rsquo;t lift
                the lock. Parents hold the key.
              </p>
            </div>
          </div>
        </section>

        <hr className="rule" />

        {/* ── Comparison ── */}
        <section id="compare">
          <div className="section-head">
            <span className="eyebrow">Why EarnIt</span>
            <h2>Timers police. Trackers spy. <em>EarnIt motivates.</em></h2>
          </div>
          <div className="compare">
            <table>
              <colgroup><col /><col className="usc" /><col /><col /></colgroup>
              <thead>
                <tr>
                  <th></th>
                  <th className="us">EarnIt</th>
                  <th>Screen-time timers</th>
                  <th>Tracking apps</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="q">Kids motivated to do chores</td>
                  <td className="us">By design</td>
                  <td className="no">No</td>
                  <td className="no">No</td>
                </tr>
                <tr>
                  <td className="q">Work verified with evidence</td>
                  <td className="us">Photo and timer</td>
                  <td className="no">Honour system</td>
                  <td className="no">No</td>
                </tr>
                <tr>
                  <td className="q">Reads messages, tracks location</td>
                  <td className="us">Never</td>
                  <td className="no">Sometimes</td>
                  <td className="no">That&rsquo;s the point</td>
                </tr>
                <tr>
                  <td className="q">Ends the nightly argument</td>
                  <td className="us">Rules are automatic</td>
                  <td className="no">You enforce it</td>
                  <td className="no">Starts new ones</td>
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
            <h2>Your first week is free.</h2>
            <p>
              Pick a plan and try everything for seven days. You won&rsquo;t be charged until
              the trial ends, we remind you the day before, and cancelling takes two taps.
            </p>
          </div>
          <div className="plans">
            <div className="plan">
              <span className="name">Monthly</span>
              <div className="price">
                $9.99 <span>/ month after your free week</span>
              </div>
              <ul>
                <li>Unlimited kids and tasks</li>
                <li>Real app locking</li>
                <li>Photo and timer proof</li>
                <li>AI verification</li>
                <li>Parent dashboard</li>
              </ul>
              <Cta placement="pricing_monthly" label="Start my free week" />
              <p className="trial-note">7 days free, then $9.99/month. Cancel anytime.</p>
            </div>
            <div className="plan featured">
              <span className="name">Annual</span>
              <div className="price">
                $89.99 <span>/ year after your free week</span>
              </div>
              <div className="anchor">About 25¢ a day. Save 25% on monthly.</div>
              <ul>
                <li>Unlimited kids and tasks</li>
                <li>Real app locking</li>
                <li>Photo and timer proof</li>
                <li>AI verification</li>
                <li>Parent dashboard</li>
              </ul>
              <Cta placement="pricing_annual" label="Start my free week" />
              <p className="trial-note">7 days free, then $89.99/year. Cancel anytime.</p>
            </div>
          </div>
        </section>

        <hr className="rule" />

        {/* ── FAQ ── */}
        <section id="faq">
          <div className="section-head">
            <span className="eyebrow">Questions</span>
            <h2>Fair questions, straight answers.</h2>
          </div>
          <div className="faq">
            <details>
              <summary>Is this spying on my kid?</summary>
              <p>
                No. EarnIt doesn&rsquo;t read messages, log browsing or track location. It locks
                games and social apps until tasks are done, and that&rsquo;s all. Your kid can see
                exactly what&rsquo;s locked and exactly how to earn it back, which is why they
                don&rsquo;t hate it.
              </p>
            </details>
            <details>
              <summary>What happens in an emergency?</summary>
              <p>
                Phone calls, texts to you and emergency services are never locked, no matter
                what. You can also set an emergency unlock code that opens everything
                instantly.
              </p>
            </details>
            <details>
              <summary>Can my kid just delete it?</summary>
              <p>
                No. Deleting the app, digging through settings or restarting the phone
                doesn&rsquo;t lift the lock. EarnIt runs on Apple&rsquo;s Family Controls, so iOS
                enforces it rather than an app your kid can force-quit.
              </p>
            </details>
            <details>
              <summary>What does it cost?</summary>
              <p>
                $9.99 a month or $89.99 a year, about 25¢ a day, and every plan starts with a
                full week free. You won&rsquo;t be charged until the trial ends, we remind you the
                day before, and you can cancel in two taps from your subscription settings.
              </p>
            </details>
            <details>
              <summary>What happens after the free week?</summary>
              <p>
                If EarnIt is working, do nothing and your plan starts automatically. If it
                isn&rsquo;t, cancel before the week is up and you pay nothing.
              </p>
            </details>
            <details>
              <summary>What devices do I need?</summary>
              <p>
                Your kid needs an iPhone for app locking. You can manage everything from the
                iPhone app or the web dashboard, so you can assign tasks and approve photos
                from anywhere.
              </p>
            </details>
          </div>
        </section>
      </div>

      {/* ── Closing ── */}
      <div className="field">
        <div className="wrap closing">
          <h2>
            Tonight&rsquo;s chores could be tonight&rsquo;s <em>screen time.</em>
          </h2>
          <Cta placement="final" large onEmerald />
          <p className="cta-note">
            <strong>First week free.</strong> Cancel anytime. Five-minute setup.
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

      <div className={`sticky-cta${stickyVisible ? " visible" : ""}`}>
        <Cta placement="sticky_mobile" />
      </div>
    </main>
  );
}
