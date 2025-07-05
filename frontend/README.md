# 🖥️ Project Pulse – Frontend Dashboard (Phase 3)

This is the **frontend** interface for **Project Pulse**, an AI-powered sprint analyzer tool for GitHub repositories.  
In **Phase 3**, the React-based UI enables users to select repositories, choose date ranges, and generate real-time AI sprint summaries using a local LLM via FastAPI backend.

---

## ⚙️ Tech Stack

- **React** (Vite)
- **Tailwind CSS** for styling
- **Axios** for API calls
- **react-datepicker** for date selection
- **FastAPI** backend integration (Phase 1 & 2)

---

## 🧱 Project Structure

    frontend/
    ├── public/
    ├── src/
    │ ├── App.jsx # Main dashboard UI
    │ ├── index.css # Tailwind directives
    │ └── main.jsx # React entry point
    ├── tailwind.config.js # Tailwind config
    ├── postcss.config.js # PostCSS config
    ├── package.json
    └── README.md

## 🚀 Getting Started

### 1️⃣ Install dependencies

    ```bash
    cd frontend
    npm install

2️⃣ Setup Tailwind (already included, but in case of reset)

    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    Edit tailwind.config.js:

    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
      ],
      theme: { extend: {} },
      plugins: [],
    };
    And in src/index.css, add:

    @tailwind base;
    @tailwind components;
    @tailwind utilities;
📦 Running the App
    Start the development server:
    npm run dev
    Visit: http://localhost:5173

🧠 Features
🔍 Input GitHub owner + repo

📅 Select sprint start and end dates

⚡ Fetch and summarize sprint activity using local AI (via backend)

📄 Displays intelligent sprint summary in real-time

🔌 API Dependency
Ensure your FastAPI backend is running at:

    http://127.0.0.1:8000/fetch_and_summarize/
    This endpoint should return a response like:

    {
        "summary": "During this sprint, the team merged 24 PRs, resolved 15 issues, and deployed the beta release..."
    }

🧩 What’s Next?
    Add charts for commit/issue trends 📊
    Display raw commits / issues / PRs 🧾
    Export summaries as PDF 📝
    Add authentication for team dashboards 🔒

🤝 Contributing
Pull requests are welcome. Feel free to fork the repo and propose improvements!

🧠 Credits
Built with ❤️ by Master Prakash
Frontend – Phase 3 of Project Pulse