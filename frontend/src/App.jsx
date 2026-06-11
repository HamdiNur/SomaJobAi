import { useState, useRef, useEffect } from "react"
import axios from "axios"
import LandingPage from "./LandingPage"

const SESSION_ID = "user_" + Math.random().toString(36).substr(2, 9)
const API = "https://somajobai.onrender.com"

export default function App() {
  const [page, setPage] = useState("landing") // "landing" or "chat"
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "👋 Salaam! I'm SomaJobs AI — your personal career advisor for Somalia & East Africa.\n\nI can help you with:\n📄 CV Analysis\n💼 Job Matching\n📚 Learning Paths\n🎤 Interview Prep\n✍️ CV Rewriting\n\nUpload your CV or tell me what you're looking for!"
    }
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const bottomRef = useRef(null)
  const fileRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const send = async () => {
    if (!input.trim() || loading) return
    const userMsg = input.trim()
    setInput("")
    setMessages(prev => [...prev, { role: "user", text: userMsg }])
    setLoading(true)
    try {
      const res = await axios.post(`${API}/chat`, { session_id: SESSION_ID, message: userMsg })
      setMessages(prev => [...prev, { role: "ai", text: res.data.reply }])
    } catch {
      setMessages(prev => [...prev, { role: "ai", text: "⚠️ Something went wrong. Make sure your backend is running." }])
    }
    setLoading(false)
  }

  const handleUpload = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setUploading(true)
    setMessages(prev => [...prev, { role: "user", text: `📄 Uploaded CV: ${file.name}` }])
    const formData = new FormData()
    formData.append("file", file)
    try {
      const res = await axios.post(`${API}/upload-cv`, formData, { headers: { "Content-Type": "multipart/form-data" } })
      setMessages(prev => [...prev, { role: "ai", text: res.data.reply }])
    } catch {
      setMessages(prev => [...prev, { role: "ai", text: "⚠️ Could not read your CV. Make sure it's a PDF file." }])
    }
    setUploading(false)
    e.target.value = ""
  }

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send() }
  }

  const quickActions = ["Analyze my CV", "Match me jobs", "Build learning path", "Interview prep", "Rewrite my CV"]

  if (page === "landing") return <LandingPage onGetStarted={() => setPage("chat")} />

  return (
    <div style={{ minHeight: "100vh", background: "#0a0f0d", color: "#fff", display: "flex", flexDirection: "column", fontFamily: "'Inter', sans-serif" }}>

      {/* HEADER */}
      <div style={{ background: "#0d1a12", borderBottom: "1px solid #1a2e23", padding: "0.9rem 1.5rem", display: "flex", alignItems: "center", gap: 12, position: "sticky", top: 0, zIndex: 50 }}>
        <button onClick={() => setPage("landing")} style={{ background: "transparent", border: "none", color: "#6b7280", cursor: "pointer", fontSize: 18, padding: 0, marginRight: 4 }}>←</button>
        <div style={{ width: 36, height: 36, background: "linear-gradient(135deg, #22c55e, #16a34a)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 16 }}>S</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15, fontWeight: 600, letterSpacing: "-0.01em" }}>SomaJobs <span style={{ color: "#22c55e" }}>AI</span></div>
          <div style={{ fontSize: 11, color: "#4b5563" }}>Career advisor for Somalia & East Africa 🇸🇴</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", animation: "pulse 2s infinite" }}></div>
          <span style={{ fontSize: 12, color: "#4b5563" }}>Online</span>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div style={{ background: "#060d09", borderBottom: "1px solid #1a2e23", padding: "0.7rem 1.5rem", display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        {quickActions.map(action => (
          <button key={action} onClick={() => setInput(action)}
            style={{ fontSize: 12, background: "#0d1a12", border: "1px solid #1a2e23", color: "#9ca3af", padding: "5px 12px", borderRadius: 999, cursor: "pointer", transition: "all 0.15s" }}
            onMouseEnter={e => { e.target.style.background = "#166534"; e.target.style.color = "#fff"; e.target.style.borderColor = "#22c55e" }}
            onMouseLeave={e => { e.target.style.background = "#0d1a12"; e.target.style.color = "#9ca3af"; e.target.style.borderColor = "#1a2e23" }}>
            {action}
          </button>
        ))}
        <button onClick={() => fileRef.current.click()} disabled={uploading}
          style={{ fontSize: 12, background: "#14532d", border: "1px solid #166534", color: "#4ade80", padding: "5px 12px", borderRadius: 999, cursor: "pointer", marginLeft: "auto", display: "flex", alignItems: "center", gap: 5 }}>
          {uploading ? "⏳ Reading..." : "📄 Upload CV"}
        </button>
        <input ref={fileRef} type="file" accept=".pdf" onChange={handleUpload} style={{ display: "none" }} />
      </div>

      {/* MESSAGES */}
      <div style={{ flex: 1, overflowY: "auto", padding: "1.5rem 1rem", maxWidth: 780, width: "100%", margin: "0 auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ display: "flex", justifyContent: msg.role === "user" ? "flex-end" : "flex-start", alignItems: "flex-start", gap: 8 }}>
              {msg.role === "ai" && (
                <div style={{ width: 30, height: 30, background: "linear-gradient(135deg, #22c55e, #16a34a)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, flexShrink: 0, marginTop: 2 }}>S</div>
              )}
              <div style={{
                maxWidth: "78%", padding: "0.75rem 1rem", borderRadius: 14, fontSize: 13, lineHeight: 1.6, whiteSpace: "pre-wrap",
                background: msg.role === "user" ? "#166534" : "#0d1a12",
                border: msg.role === "user" ? "1px solid #15803d" : "1px solid #1a2e23",
                color: msg.role === "user" ? "#fff" : "#e5e7eb",
                borderBottomRightRadius: msg.role === "user" ? 4 : 14,
                borderBottomLeftRadius: msg.role === "ai" ? 4 : 14,
              }}>
                {msg.text}
              </div>
            </div>
          ))}

          {(loading || uploading) && (
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 30, height: 30, background: "linear-gradient(135deg, #22c55e, #16a34a)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, flexShrink: 0 }}>S</div>
              <div style={{ background: "#0d1a12", border: "1px solid #1a2e23", borderRadius: 14, borderBottomLeftRadius: 4, padding: "0.75rem 1rem", display: "flex", gap: 5, alignItems: "center" }}>
                {[0, 150, 300].map((delay, i) => (
                  <div key={i} style={{ width: 7, height: 7, background: "#22c55e", borderRadius: "50%", animation: `bounce 1s ${delay}ms infinite` }}></div>
                ))}
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* INPUT */}
      <div style={{ background: "#0d1a12", borderTop: "1px solid #1a2e23", padding: "1rem 1.5rem" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", display: "flex", gap: 10, alignItems: "flex-end" }}>
          <textarea value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey}
            placeholder="Type your message or paste your CV here..."
            rows={1}
            style={{ flex: 1, background: "#060d09", border: "1px solid #1a2e23", borderRadius: 10, padding: "0.75rem 1rem", color: "#fff", fontSize: 13, resize: "none", outline: "none", fontFamily: "inherit", lineHeight: 1.5 }}
            onFocus={e => e.target.style.borderColor = "#22c55e"}
            onBlur={e => e.target.style.borderColor = "#1a2e23"}
          />
          <button onClick={send} disabled={loading || !input.trim()}
            style={{ background: input.trim() && !loading ? "#22c55e" : "#1a2e23", color: input.trim() && !loading ? "#000" : "#374151", border: "none", borderRadius: 10, padding: "0.75rem 1.25rem", fontWeight: 700, fontSize: 13, cursor: input.trim() ? "pointer" : "default", transition: "all 0.15s", flexShrink: 0 }}>
            Send
          </button>
        </div>
        <p style={{ textAlign: "center", fontSize: 11, color: "#1f2937", marginTop: 8 }}>
          Press Enter to send · SomaJobs AI v1.0 · Built for Somalia 🇸🇴
        </p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #060d09; }
        ::-webkit-scrollbar-thumb { background: #1a2e23; border-radius: 2px; }
      `}</style>
    </div>
  )
}