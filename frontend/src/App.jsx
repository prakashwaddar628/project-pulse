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
  const [loading, setLoading] = useState(false);

  const fetchSummary = async () => {
    if (!owner || !repo) return alert("Enter both owner and repo name!");
    setLoading(true);
    try {
      const isoStart = startDate.toISOString();
      const isoEnd = endDate.toISOString();
      const url = `https://127.0.0.1:8000/fetch_and_summarize/?owner=${owner}&repo=${repo}&start_date=${isoStart}&end_date=${isoEnd}`;
      const res = await axios.get(url);
      setSummary(res.data.summary);
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
      </div>
    </div>
  );
}

export default App;
