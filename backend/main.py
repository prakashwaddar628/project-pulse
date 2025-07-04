from fastapi import FastAPI
from github_fetcher import fetch_github_data

app = FastAPI()

@app.get('/fetch_sprint/')
def fetch_sprint(owner:str, repo:str, start_date:str, end_date:str):
    return fetch_github_data(owner, repo, start_date, end_date)