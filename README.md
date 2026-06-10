# SomaJobs AI 🇸🇴
### AI-Powered Job & Skills Matching Platform for Somalia & East Africa

> Built for the **AI Summit Somalia 2026** — addressing the region's 67% youth unemployment crisis through artificial intelligence.

---

## 🌐 Live Demo

| | URL |
|---|---|
| 🖥️ **Frontend** | [soma-job-ai.vercel.app](https://soma-job-ai.vercel.app) |
| ⚙️ **Backend API** | [somajobai.onrender.com](https://somajobai.onrender.com) |

---

## 📌 The Problem

Somalia faces one of the world's most severe youth unemployment crises:

- **67%** youth unemployment rate
- **70%** of the population is under 30
- **0** dedicated AI-powered job platforms built for the Somali market
- Millions of young people with skills but no clear path to opportunity

SomaJobs AI bridges that gap.

---

## 💡 What It Does

SomaJobs AI is a conversational career advisor that speaks Somali and English, built specifically for young people in Somalia and East Africa. It has 5 intelligent modes:

| Mode | Trigger | What it does |
|---|---|---|
| 📄 **CV Analyzer** | Upload PDF or paste CV | Extracts skills, scores profile strength, identifies gaps |
| 💼 **Job Matcher** | "Match me" | Suggests 5 real jobs with Somalia-specific context |
| 🚀 **Learning Path** | "I want to become X" | Identifies skill gaps + recommends free courses + 30-day plan |
| 🎤 **Interview Coach** | "I have an interview at UNDP" | Runs live mock interview, gives feedback on answers |
| ✍️ **CV Rewriter** | "Rewrite my CV" | Rewrites weak bullet points into strong, impactful ones |

---

## 🌍 Why Somalia-Specific?

Unlike generic job platforms, SomaJobs AI knows:

- **Major employers** — UN agencies (UNDP, UNICEF, WHO, WFP), INGOs (Save the Children, IRC, NRC), Hormuud, Somtel, Premier Bank, Dahabshiil
- **Local job boards** — Akhtari.com, ReliefWeb, UN Jobs, Fuzu
- **In-demand skills** — M&E, grant writing, data analysis, IT, Somali-English translation
- **Regional context** — Mogadishu, Hargeisa, Kismaayo, Nairobi job markets
- **Speaks Somali** — responds fully in Somali when the user writes in Somali

---

## 🛠️ Tech Stack

### Backend
| Tool | Purpose |
|---|---|
| Python 3.13 | Programming language |
| FastAPI | API framework |
| Google Gemini 2.5 Flash | AI brain |
| PyMuPDF | PDF CV reading |
| python-dotenv | Environment variable management |
| Render | Cloud hosting |

### Frontend
| Tool | Purpose |
|---|---|
| React + Vite | UI framework |
| Tailwind CSS | Styling |
| Axios | API communication |
| Vercel | Cloud hosting |

---

## 🚀 Run Locally

### Prerequisites
- Python 3.10+
- Node.js 18+
- Google Gemini API key (free at [aistudio.google.com](https://aistudio.google.com))

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
```

Create a `.env` file in the `backend` folder:
```
GEMINI_API_KEY=your-gemini-api-key-here
```

Start the backend:
```bash
uvicorn main:app --reload
```

Backend runs at: `http://127.0.0.1:8000`

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

> ⚠️ For local development, make sure `App.jsx` uses `http://127.0.0.1:8000` not the production URL.

---

## 📁 Project Structure

```
SomaJobAi/
├── backend/
│   ├── main.py           # FastAPI server + all AI routes
│   ├── requirements.txt  # Python dependencies
│   └── .env              # API keys (never committed to GitHub)
├── frontend/
│   ├── src/
│   │   ├── App.jsx       # Main React component
│   │   └── index.css     # Tailwind CSS
│   ├── package.json
│   └── vite.config.js
└── README.md
```

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Health check |
| POST | `/chat` | Send a message to SomaJobs AI |
| POST | `/upload-cv` | Upload a PDF CV for analysis |

### Example `/chat` request
```json
{
  "session_id": "user_abc123",
  "message": "I have a degree in Computer Science and need a job in Mogadishu"
}
```

### Example `/upload-cv` request
```
POST /upload-cv
Content-Type: multipart/form-data
file: [your-cv.pdf]
```

---

## 🎯 Features

- ✅ Conversational AI career advisor
- ✅ PDF CV upload and analysis
- ✅ Full Somali language support
- ✅ Somalia & East Africa job market knowledge
- ✅ 5 intelligent modes in one conversation
- ✅ Error handling for API limits
- ✅ Mobile responsive design
- ✅ Free to use

---


## 👨‍💻 Built By

**Hamdi Nur**
Built for the AI Summit Somalia 2026
Somalia 🇸🇴

---

## 📄 License

MIT License — free to use, modify, and distribute.

---

> *"Somalia has 67% youth unemployment and zero AI-powered job platforms built for our market. SomaJobs AI is changing that — one career at a time."*