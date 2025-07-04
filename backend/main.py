from fastapi import FastAPI
from github_fetcher import fetch_github_data
from sprint_summarizer import prepare_summary_prompt, generate_ai_summary

# test import from mocktest
from mock_data import mock_data

app = FastAPI()

@app.get('/fetch_sprint/')
def fetch_sprint(owner:str, repo:str, start_date:str, end_date:str):
    return fetch_github_data(owner, repo, start_date, end_date)

@app.get('/sprint_summary/')
def sprint_summary(owner:str, repo:str, start_date:str, end_date:str):
    data = fetch_github_data(owner, repo, start_date, end_date)
    prompt = prepare_summary_prompt(data)
    summary = generate_ai_summary(prompt)
    return {"summary": summary, "raw-data": data}

# test data
@app.get("/test_summary/")
def test_summary():
    prompt = prepare_summary_prompt(mock_data)
    summary = generate_ai_summary(prompt)
    return {"summary": summary}