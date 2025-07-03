import requests
import os
from dotenv import load_dotenv

load_dotenv()
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")

def fetch_github_data(owner, repo, start_date, end_date):
    headers = {
        "Authorization" : f"token {GITHUB_TOKEN}"
    }

    commit_url = f"https://api.github.com/repos/{owner}/{repo}/commits"
    commit_params = {"since": start_date, "until": end_date}
    commits = requests.get(commit_url, headers=headers, params=commit_params).json()

    issue_url = f"https://api.github.com/repos/{owner}/{repo}/issues"
    issue_params = {"since": start_date, "state": "all"}
    issues = requests.get(issue_url, headers=headers, params=issue_params).json()

    pull_requests = [issue for issue in issues if "pull_request" in issue]

    return {
        "commits" : commits,
        "issues" : issues,
        "pull_requests" : pull_requests
    }