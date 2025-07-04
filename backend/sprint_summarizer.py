import ollama

def prepare_summary_prompt(data: dict) -> str:
    commits = data.get("commits", [])
    issues = data.get("issues", [])
    prs = data.get("pull_requests", [])

    prompt = f"""
You are a project manager assistant.
Summarize the following sprint activity clearly and concisely:

Commits: {len(commits)}  
PRs: {len(prs)}  
Issues: {len(issues)}  

PR Titles:
{chr(10).join([pr['title'] for pr in prs])}

Issue Titles:
{chr(10).join([issue['title'] for issue in issues if 'pull_request' not in issue])}

Give:
1. What was accomplished  
2. What’s pending or blocked  
3. Any technical highlights
    """.strip()

    return prompt

def generate_ai_summary(prompt: str) -> str:
    response = ollama.chat(model='llama3', messages=[
        {'role': 'user', 'content': prompt}
    ])
    return response['message']['content']