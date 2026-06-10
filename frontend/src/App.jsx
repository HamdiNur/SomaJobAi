import { useState, useRef, useEffect } from "react"
import axios from "axios"

const SESSION_ID = "user_" + Math.random().toString(36).substr(2, 9)

export default function App() {
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "👋 Salaam! I'm SomaJobs AI — your personal career advisor for Somalia & East Africa.\n\nI can help you with:\n📄 CV Analysis\n💼 Job Matching\n📚 Learning Paths\n🎤 Interview Prep\n\nShare your CV or just tell me what you're looking for!"
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
      const res = await axios.post("http://127.0.0.1:8000/chat", {
        session_id: SESSION_ID,
        message: userMsg
      })
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
    setMessages(prev => [...prev, {
      role: "user",
      text: `📄 Uploaded CV: ${file.name}`
    }])

    const formData = new FormData()
    formData.append("file", file)

    try {
      const res = await axios.post("http://127.0.0.1:8000/upload-cv", formData, {
        headers: { "Content-Type": "multipart/form-data" }
      })
      setMessages(prev => [...prev, { role: "ai", text: res.data.reply }])
    } catch {
      setMessages(prev => [...prev, { role: "ai", text: "⚠️ Could not read your CV. Make sure it's a PDF file." }])
    }
    setUploading(false)
    e.target.value = ""
  }

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

const quickActions = ["Analyze my CV", "Match me jobs", "Build learning path", "Interview prep", "Rewrite my CV"]
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col">

      {/* HEADER */}
      <div className="bg-gray-900 border-b border-gray-800 px-6 py-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-xl font-bold">
          S
        </div>
        <div>
          <h1 className="text-lg font-semibold">SomaJobs AI</h1>
          <p className="text-xs text-gray-400">Career advisor for Somalia & East Africa 🇸🇴</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
          <span className="text-xs text-gray-400">Online</span>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <div className="bg-gray-900 border-b border-gray-800 px-6 py-3 flex gap-2 flex-wrap">
        {quickActions.map(action => (
          <button
            key={action}
            onClick={() => setInput(action)}
            className="text-xs bg-gray-800 hover:bg-green-600 border border-gray-700 hover:border-green-500 text-gray-300 hover:text-white px-3 py-1.5 rounded-full transition-all"
          >
            {action}
          </button>
        ))}

        {/* CV UPLOAD BUTTON */}
        <button
          onClick={() => fileRef.current.click()}
          disabled={uploading}
          className="text-xs bg-green-700 hover:bg-green-600 border border-green-600 text-white px-3 py-1.5 rounded-full transition-all flex items-center gap-1 ml-auto"
        >
          {uploading ? "⏳ Reading CV..." : "📄 Upload CV"}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept=".pdf"
          onChange={handleUpload}
          className="hidden"
        />
      </div>

      {/* MESSAGES */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 max-w-3xl w-full mx-auto">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            {msg.role === "ai" && (
              <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-sm font-bold mr-2 mt-1 flex-shrink-0">
                S
              </div>
            )}
            <div className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm whitespace-pre-wrap leading-relaxed ${
              msg.role === "user"
                ? "bg-green-600 text-white rounded-br-sm"
                : "bg-gray-800 text-gray-100 rounded-bl-sm"
            }`}>
              {msg.text}
            </div>
          </div>
        ))}

        {(loading || uploading) && (
          <div className="flex justify-start">
            <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-sm font-bold mr-2 flex-shrink-0">
              S
            </div>
            <div className="bg-gray-800 px-4 py-3 rounded-2xl rounded-bl-sm">
              <div className="flex gap-1 items-center h-5">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay:"0ms"}}></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay:"150ms"}}></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{animationDelay:"300ms"}}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <div className="bg-gray-900 border-t border-gray-800 px-4 py-4">
        <div className="max-w-3xl mx-auto flex gap-3 items-end">
          <textarea
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Type your message or paste your CV text here..."
            rows={1}
            className="flex-1 bg-gray-800 border border-gray-700 focus:border-green-500 outline-none text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm resize-none"
          />
          <button
            onClick={send}
            disabled={loading || !input.trim()}
            className="bg-green-500 hover:bg-green-400 disabled:bg-gray-700 disabled:text-gray-500 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-all"
          >
            Send
          </button>
        </div>
        <p className="text-center text-xs text-gray-600 mt-2">
          Press Enter to send · SomaJobs AI v1.0 · Built for Somalia 🇸🇴
        </p>
      </div>

    </div>
  )
}