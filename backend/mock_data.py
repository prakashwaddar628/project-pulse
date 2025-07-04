mock_data = {
    "commits": [
        {"sha": "a1", "commit": {"message": "Add login API endpoint"}},
        {"sha": "a2", "commit": {"message": "Fix bug in checkout flow"}},
        {"sha": "a3", "commit": {"message": "Refactor dashboard component"}},
        {"sha": "a4", "commit": {"message": "Update README and docs"}},
    ],
    "issues": [
        {"title": "Fix login redirect issue", "state": "closed"},
        {"title": "Add loading spinner on payment page", "state": "open"},
        {"title": "Improve responsiveness on mobile", "state": "closed"},
        {"title": "Error 500 on order placement", "state": "open"},
        {"title": "Pull request: Merge feature/cart-service", "pull_request": {"url": "https://github.com/..."}}
    ],
    "pull_requests": [
        {"title": "Merge feature/cart-service"},
        {"title": "Hotfix: checkout crash on empty cart"},
        {"title": "Refactor: clean up utils and constants"}
    ]
}
