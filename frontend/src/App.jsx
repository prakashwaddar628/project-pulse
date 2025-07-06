import { useState } from "react";
import axios from "axios";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [owner, setOwner] = useState("");
  const [repo, setRepo] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [summary, setSummary] = useState("");
  const [rowdata, setRowdata] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchSummary = async () => {
    if (!owner || !repo) return alert("Enter both owner and repo name!");
    setLoading(true);
    try {
      const isoStart = startDate.toISOString();
      const isoEnd = endDate.toISOString();
      const url = `http://127.0.0.1:8000/sprint_summary/?owner=${owner}&repo=${repo}&start_date=${isoStart}&end_date=${isoEnd}`;
      const res = await axios.get(url);
      if (res.status !== 200) {
        throw new Error("Failed to fetch summary");
      }
      if (!res.data.summary) {
        throw new Error("No summary data found");
      }
      if (!res.data.commits || !res.data.issues || !res.data.pull_requests) {
        throw new Error("Incomplete data received");
      }
      if (
        res.data.commits.length === 0 &&
        res.data.issues.length === 0 &&
        res.data.pull_requests.length === 0
      ) {
        throw new Error(
          "No commits, issues, or pull requests found in the specified date range"
        );
      }
      if (res.data.summary.length === 0) {
        throw new Error("Summary is empty");
      }
      if (res.data.summary.length > 1000) {
        throw new Error("Summary is too long, please refine your query");
      }
      if (
        res.data.commits.length > 100 ||
        res.data.issues.length > 100 ||
        res.data.pull_requests.length > 100
      ) {
        throw new Error(
          "Too many commits, issues, or pull requests. Please refine your date range."
        );
      }
      if (res.data.commits.some((c) => !c.commit || !c.commit.message)) {
        throw new Error("Some commits are missing commit messages");
      }
      if (res.data.issues.some((issue) => !issue.title || !issue.number)) {
        throw new Error("Some issues are missing titles or numbers");
      }
      if (res.data.pull_requests.some((pr) => !pr.title || !pr.number)) {
        throw new Error("Some pull requests are missing titles or numbers");
      }
      setSummary(res.data.summary);
      console.log(res.data);
      setRowdata({
        commits: res.data.commits,
        issues: res.data.issues,
        pull_requests: res.data.pull_requests,
      });
    } catch (err) {
      console.error(err);
      alert("Error fetching summary!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-indigo-700">
          🌀 Project Pulse – Sprint Summary
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="GitHub Owner (e.g. vercel)"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
            className="w-full p-2 border rounded-md"
          />

          <input
            type="text"
            placeholder="GitHub repo (e.g. next.js)"
            value={repo}
            onChange={(e) => setRepo(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
          <div className="flex gap-4 items-center">
            <div>
              <p className="text-sm text-gray-600">Start Date:</p>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="p-2 border rounded-md w-full"
              />
            </div>
            <div>
              <p className="text-sm text-gray-600">End Date:</p>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="p-2 border rounded-md w-full"
              />
            </div>
          </div>

          <button
            onClick={fetchSummary}
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition"
            disabled={loading}
          >
            {loading ? "Fetching..." : "Generate Sprint Summary"}
          </button>
        </div>

        {summary && (
          <div className="bg-gray-50 border p-4 rounded-md whitespace-pre-wrap text-gray-800">
            <h2 className="text-lg font-semibold mb-2 text-indigo-600">
              Summary
            </h2>
            {summary}
          </div>
        )}
        {rowdata && (
          <div className="mt-4">
            <h2 className="text-lg font-bold text-indigo-700 mb-2">
              Raw Sprint DAta
            </h2>
            <div className="bg-white border rounded-lg p-4 max-h-[400px] overflow-y-auto text-sm">
              <div>
                <h3 className="font-semibold text-gray-700">Commits</h3>
                <ul className="list-disc pl-4">
                  {rowdata.commits.slice(0, 5).map((c, i) => (
                    <li key={i} className="mb-1">
                      {c.commit?.message}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700">Issues</h3>
                <ul className="list-disc pl-4">
                  {rowdata.issues.slice(0, 5).map((issue, i) => (
                    <li key={i}>
                      #{issue.number}-{issue.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-700">Pull Requests</h3>
                <ul className="list-disc pl-4">
                  {rowdata.pull_requests.slice(0, 5).map((pr, i) => (
                    <li key={i}>
                      #{pr.number}-{pr.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
