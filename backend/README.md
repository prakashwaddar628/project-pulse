# 🌀 Project Pulse – AI-Powered Sprint Analyzer

Project Pulse is a local AI-powered tool designed to help agile teams get meaningful, actionable insights from GitHub sprints.  
It fetches GitHub activity data (commits, issues, pull requests) and generates smart sprint summaries using **open-source LLMs** running **entirely offline**.

---

## 🚀 Phases Overview

| Phase | Name                          | Description                                               |
|-------|-------------------------------|-----------------------------------------------------------|
| 1️⃣    | GitHub Sprint Data Fetcher     | Collects commits, issues, and PRs via GitHub API          |
| 2️⃣    | AI Sprint Summary Generator   | Generates human-readable sprint summaries using Ollama    |
| 3️⃣    | [Upcoming] Frontend Dashboard | UI for repo selection, summary visualization & metrics    |

---

## 🛠 Tech Stack

| Layer     | Tool/Tech                  |
|-----------|----------------------------|
| Backend   | Python 3.8+, FastAPI       |
| GitHub API| REST API v3 + PAT Auth     |
| LLM Model | Mistral (via [Ollama](https://ollama.com)) |
| Local AI  | Ollama (lightweight runtime) |
| Frontend  | [Planned] React + Tailwind |

---

## 📁 Project Structure
    project-pulse/
    ├── backend/
    │ ├── main.py # FastAPI app and route definitions
    │ ├── github_fetcher.py # GitHub sprint data collector
    │ ├── sprint_summarizer.py # LLM-based summary generation
    │ ├── test_data.json # Sample sprint input for testing
    │ ├── .env # GitHub Personal Access Token
    │ ├── requirements.txt # Python dependencies
    │ └── README.md # You're reading this!


---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repo

    ```bash
    git clone https://github.com/prakashwaddar628/project-pulse.git
    cd project-pulse/backend

    - 2️⃣ Create Virtual Environment & Activate

        python -m venv venv
        venv\Scripts\activate   # Windows
    - 3️⃣ Install Dependencies

        pip install -r requirements.txt
    - 4️⃣ Add GitHub Token in .env
        Create a .env file:

        - GITHUB_TOKEN=ghp_your_token_here
            - 🔐 Generate from GitHub → Settings → Developer Settings → Personal Access Tokens → Repo scope

    - 5️⃣ Install & Start Ollama (for AI)
        - Download Ollama: https://ollama.com/download

        - Run the Mistral model (offline):
            - ollama run mistral
    - 6️⃣ Run the Backend Server
        - uvicorn main:app --reload
        - API Docs:
            - Swagger UI → http://127.0.0.1:8000/docs

    - 📦 Phase 1 – GitHub Sprint Data Fetcher
        - Fetch all relevant sprint data from a GitHub repo within a specific time window.

        - Example Request

GET /fetch_sprint/
    - ?owner=vercel
    - &repo=next.js
    - &start_date=2024-06-01T00:00:00Z
    - &end_date=2024-06-10T00:00:00Z
    - Returns

    {
      "commits": [...],
      "issues": [...],
      "pull_requests": [...]
    }

- Phase 2 – AI Sprint Summary (Local Mistral via Ollama)
    This module takes in sprint data and generates a professional summary.

    - 🔄 Test API Endpoint
     - GET /test_summary/
        - 📄 Uses sample test_data.json and returns:

    {
        "summary": "The team completed multiple UI updates, optimized dashboard performance, and resolved issue #42 during this sprint..."
    }
    No OpenAI key. No cloud API. Just Mistral running locally via Ollama 🚀

🧩 Coming Soon: Phase 3 – React UI
Select GitHub repo & date range

Visualize commit/issue/PR trends

View/download AI summaries

Export to PDF or share to Slack

🙌 Contributing
Pull requests are welcome!
If you’d like to improve prompts, add charts, or support other models (LLaMA3, CodeLLaMA), feel free to fork and contribute.

📜 License
MIT © Prakash