export default function LandingPage({ onGetStarted }) {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#0a0f0d", minHeight: "100vh", color: "#fff", overflowX: "hidden" }}>

      {/* NAV */}
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.2rem 2rem", borderBottom: "1px solid #1a2e23", position: "sticky", top: 0, background: "rgba(10,15,13,0.95)", backdropFilter: "blur(12px)", zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #22c55e, #16a34a)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 16 }}>S</div>
          <span style={{ fontWeight: 600, fontSize: 16, letterSpacing: "-0.02em" }}>SomaJobs <span style={{ color: "#22c55e" }}>AI</span></span>
        </div>
        <div style={{ display: "flex", gap: "2rem", fontSize: 14, color: "#9ca3af" }}>
          <a href="#features" style={{ color: "#9ca3af", textDecoration: "none" }}>Features</a>
          <a href="#how" style={{ color: "#9ca3af", textDecoration: "none" }}>How it works</a>
          <a href="#stats" style={{ color: "#9ca3af", textDecoration: "none" }}>Impact</a>
        </div>
        <button onClick={onGetStarted} style={{ background: "#22c55e", color: "#000", border: "none", borderRadius: 8, padding: "0.5rem 1.2rem", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>
          Try for free →
        </button>
      </nav>

      {/* HERO */}
      <section style={{ maxWidth: 900, margin: "0 auto", padding: "6rem 2rem 4rem", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#0d2218", border: "1px solid #166534", borderRadius: 999, padding: "0.4rem 1rem", fontSize: 12, color: "#4ade80", marginBottom: "2rem" }}>
          <span style={{ width: 6, height: 6, background: "#4ade80", borderRadius: "50%", display: "inline-block", animation: "pulse 2s infinite" }}></span>
          Built for AI Summit Somalia 2026
        </div>

        <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 1.5rem" }}>
          Your career advisor,<br />
          <span style={{ background: "linear-gradient(90deg, #22c55e, #4ade80)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>built for Somalia.</span>
        </h1>

        <p style={{ fontSize: "1.15rem", color: "#9ca3af", maxWidth: 580, margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
          Somalia has 67% youth unemployment and no AI career platform built for its market.
          SomaJobs AI changes that — analyzing your CV, matching real jobs, and coaching you for interviews. In Somali and English.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={onGetStarted} style={{ background: "#22c55e", color: "#000", border: "none", borderRadius: 10, padding: "0.85rem 2rem", fontWeight: 700, fontSize: 15, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
            Start now — it's free
            <span>→</span>
          </button>
          <button onClick={onGetStarted} style={{ background: "transparent", color: "#fff", border: "1px solid #374151", borderRadius: 10, padding: "0.85rem 2rem", fontWeight: 600, fontSize: 15, cursor: "pointer" }}>
            Upload your CV
          </button>
        </div>

        <p style={{ fontSize: 12, color: "#4b5563", marginTop: "1rem" }}>No account needed · Works in Somali & English · Free to use</p>
      </section>

      {/* STATS */}
      <section id="stats" style={{ borderTop: "1px solid #1a2e23", borderBottom: "1px solid #1a2e23", background: "#060d09" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", padding: "3rem 2rem", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem", textAlign: "center" }}>
          {[
            { num: "67%", label: "Youth unemployment in Somalia" },
            { num: "70%", label: "Of Somalis are under 30" },
            { num: "5", label: "AI modes in one platform" },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, color: "#22c55e", letterSpacing: "-0.03em" }}>{s.num}</div>
              <div style={{ fontSize: 13, color: "#6b7280", marginTop: 4, lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ maxWidth: 960, margin: "0 auto", padding: "5rem 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ fontSize: 12, color: "#22c55e", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>What SomaJobs AI does</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em", margin: 0 }}>Five tools. One conversation.</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
          {[
            { icon: "📄", title: "CV Analyzer", desc: "Upload your PDF CV. Get a skills breakdown, profile strength score out of 10, and honest gap analysis in seconds." },
            { icon: "💼", title: "Job Matcher", desc: "AI matches you to real jobs in Mogadishu, Hargeisa, Nairobi — UN agencies, NGOs, private sector, and startups." },
            { icon: "🚀", title: "Learning Path", desc: "Identifies your top 3 skill gaps and gives you a free course for each with a 30-day action plan." },
            { icon: "🎤", title: "Interview Coach", desc: "Live mock interview. AI asks you questions one by one, then gives honest feedback and a better version of your answer." },
            { icon: "✍️", title: "CV Rewriter", desc: "Rewrites your weak bullet points into strong, specific, impactful lines using action verbs and measurable results." },
          ].map((f, i) => (
            <div key={i} style={{ background: "#0d1a12", border: "1px solid #1a2e23", borderRadius: 14, padding: "1.5rem", transition: "border-color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.borderColor = "#22c55e"}
              onMouseLeave={e => e.currentTarget.style.borderColor = "#1a2e23"}>
              <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 8px", color: "#f9fafb" }}>{f.title}</h3>
              <p style={{ fontSize: 13, color: "#6b7280", margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}

          {/* Somali language card — full width */}
          <div style={{ background: "linear-gradient(135deg, #052e16, #0d2218)", border: "1px solid #166534", borderRadius: 14, padding: "1.5rem", gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <div style={{ fontSize: 36 }}>🇸🇴</div>
            <div>
              <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 6px", color: "#4ade80" }}>Speaks Somali natively</h3>
              <p style={{ fontSize: 13, color: "#6b7280", margin: 0, lineHeight: 1.6 }}>Write in Somali, get responses in Somali. SomaJobs AI understands the local job market, major employers, and regional context that global platforms miss entirely.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ background: "#060d09", borderTop: "1px solid #1a2e23", borderBottom: "1px solid #1a2e23" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "5rem 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p style={{ fontSize: 12, color: "#22c55e", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>How it works</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700, letterSpacing: "-0.02em", margin: 0 }}>Three steps to your next job</h2>
          </div>

          {[
            { step: "01", title: "Upload your CV or describe yourself", desc: "Drop your PDF CV or just type your background in Somali or English. SomaJobs AI reads everything instantly." },
            { step: "02", title: "Get your personalized analysis", desc: "See your skills, profile score, matched jobs, skill gaps, and a learning roadmap — all tailored to Somalia's job market." },
            { step: "03", title: "Practice and apply with confidence", desc: "Run a mock interview, rewrite your CV, follow your 30-day learning plan, and apply to real jobs with direct links." },
          ].map((s, i) => (
            <div key={i} style={{ display: "flex", gap: "1.5rem", marginBottom: "2.5rem", alignItems: "flex-start" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#22c55e", background: "#0d2218", border: "1px solid #166534", borderRadius: 8, padding: "4px 10px", flexShrink: 0, marginTop: 2 }}>{s.step}</div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 600, margin: "0 0 6px" }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#6b7280", margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 700, margin: "0 auto", padding: "6rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 1rem" }}>
          Ready to find your opportunity?
        </h2>
        <p style={{ fontSize: 15, color: "#6b7280", marginBottom: "2rem", lineHeight: 1.7 }}>
          Join thousands of young Somalis using AI to take control of their careers.
        </p>
        <button onClick={onGetStarted} style={{ background: "#22c55e", color: "#000", border: "none", borderRadius: 10, padding: "1rem 2.5rem", fontWeight: 700, fontSize: 16, cursor: "pointer" }}>
          Start for free — no account needed →
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid #1a2e23", padding: "2rem", textAlign: "center", fontSize: 13, color: "#374151" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
          <div style={{ width: 24, height: 24, background: "linear-gradient(135deg, #22c55e, #16a34a)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 11 }}>S</div>
          <span style={{ fontWeight: 600, color: "#6b7280" }}>SomaJobs AI</span>
        </div>
        Built for AI Summit Somalia 2026 🇸🇴 · Free to use · Made with ❤️ for Somalia's youth
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        html { scroll-behavior: smooth; }
        a:hover { color: #22c55e !important; }
      `}</style>
    </div>
  )
}