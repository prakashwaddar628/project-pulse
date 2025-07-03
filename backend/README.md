# 🌀 Project Pulse – GitHub Sprint Data Fetcher (Phase 1)

Project Pulse is an AI-powered sprint analyzer tool designed to help agile teams get intelligent insights from their GitHub repositories.  
This is **Phase 1**, which focuses on **fetching sprint data** such as commits, issues, and pull requests from a given GitHub repository within a selected date range.

---

## 🚀 Features

- Fetch commits between a start and end date  
- Get open/closed issues for that sprint  
- Extract pull requests (based on issue type)  
- Ready to integrate with AI sprint summarizer (Phase 2)

---

## 🛠 Tech Stack

- **Backend:** FastAPI
- **API Integration:** GitHub REST API
- **Auth:** GitHub Personal Access Token
- **Environment:** Python 3.8+

---

## 🧱 Project Structure

    backend/
    ├── main.py # FastAPI app and route handler
    ├── github_fetcher.py # GitHub API logic
    ├── .env # GitHub token (NOT tracked in Git)
    ├── requirements.txt # Project dependencies
    └── README.md # You're reading this!

---

## 🔧 Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/prakashwaddar628/project-pulse.git
cd project-pulse/backend

2️⃣ Create a Virtual Environment

    - python -m venv venv
    - source venv/bin/activate  # Windows: venv\Scripts\activate

3️⃣ Install Dependencies
    - pip install -r requirements.txt

4️⃣ Create a .env File
    - GITHUB_TOKEN=ghp_your_github_personal_access_token_here
🔐 To generate a token:
GitHub → Settings → Developer Settings → Personal Access Tokens → Generate Token → Select repo scope

🚀 Run the Server

    uvicorn main:app --reload
    Example API Usage

    GET /fetch_sprint/?owner=vercel&repo=next.js&start_date=2024-06-01T00:00:00Z&   end_date=2024-06-10T00:00:00Z
This will return:
    - List of commits
    - List of issues (open/closed)
    - Filtered pull requests

📦 API Response Structure

    {
        "commits": [...],
        "issues": [...],
        "pull_requests": [...]
    }

🧩 What's Next?
In Phase 2, we'll use this data to generate:

    - AI-powered sprint summaries

    - Risk detection

    - Developer activity insights

Stay tuned!

🤝 Contributing
Pull requests are welcome! If you have suggestions for improvements, feel free to fork the repo and submit a PR.
```
