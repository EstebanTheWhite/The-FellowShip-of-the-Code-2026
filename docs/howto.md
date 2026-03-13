# Guide: GitHub & The Red Book of Westmarch

This guide explains how to **work, submit, and document your work** for the **Application Design & Development** course.

**Table of Contents**

- [Guide: GitHub \& The Red Book of Westmarch](#guide-github--the-red-book-of-westmarch)
  - [1. Setting up Your Development Environment](#1-setting-up-your-development-environment)
  - [2. Updating The Red Book](#2-updating-the-red-book)
  - [3. Submission \& Workflow](#3-submission--workflow)
  - [4. Networking \& Peer Feedback (Lord of the Tweets)](#4-networking--peer-feedback-lord-of-the-tweets)
  - [5. AI Usage Guidelines](#5-ai-usage-guidelines)
  - [6. Grading](#6-grading)
  - [7. General Tips](#7-general-tips)

---

## 1. Setting up Your Development Environment

1. Create a new GitHub account: [github.com/join](https://github.com/join).
   1. Set your GitHub username to your team name.
2. Create a new repository named **The-Fellowship-of-the-Code-2026**.
3. Initialize the repository with a `/README.md` file.
4. Create the following project structure in the repository:

        The-Fellowship-of-the-Code-2026/
        │
        ├── README.md  ← The Red Book of Westmarch (index)
        ├── chapters/  ← chapters of The Red Book (e.g., "chapter-1-setting-out.md")
        └── artifacts/ ← artifacts of The Fellowship Companion
             └── artifact-x/ ← specific artifact (e.g., "artifact-1-situation-intent.md")
                  └── src/   ← flowcharts (*.mermaid.md), wireframes (images), code (*.html, *.css, *.js)

5. Open the repository in **GitHub Codespaces**:
   - In GitHub, open your repository.
   - Click **Code** -> **Codespaces** -> **Create codespace on main**.
   - Wait until VS Code (web) starts.
6. Fill `/README.md` using our [template](../templates/readme.md):
   - Open [`/templates/readme.md`](../templates/readme.md).
   - Copy the structure/content into your repository root `/README.md`.
   - Replace placeholders with your team-specific content.
7. Install these minimal VS Code extensions in Codespaces:
   - **Markdown All in One**
   - **Markdown Preview Mermaid Support**
   - **markdownlint**
8. Commit and push your setup so your repository is ready for class work.
9. Create and verify **GitHub Pages**:
   - In your repository, open **Settings** -> **Pages**.
   - Under **Build and deployment**, set **Source** to **Deploy from a branch**.
   - Select branch **main** and folder **/ (root)**, then save.
   - Wait until GitHub shows the Pages URL.
   - Open the URL and confirm your content is visible as a website.

---

## 2. Updating The Red Book

Every phase includes a **Red Book update**, reflecting on:

- What you built
- How you approached it
- AI assistance used (explanations, modifications, limitations)
- Lessons learned

Please refer to our [official chapter template](../templates/chapter.md).

**Structure:**

    # The Red Book of Westmarch - Chapter X: Title

    ## Summary

    - Brief description of the artifact and its purpose.

    ## Artifact

    - Link to the artifact
    - Tasks

    ## AI Assistance

    - Explanations, modifications, limitations

    ## Lessons Learned

    - Insights, challenges, reflections

Reflect updates in `/README.md` and as linked files in `/chapters/`.

## 3. Submission & Workflow

- All deliverables live in your repository in the correct folders.
- Each assignment deliverable must be stored on GitHub and the GitHub repository link (assignment/chapter specific) must then be submitted in MS Teams.
- Red Book update is mandatory but not graded (used for feedback & peer engagement).
- Keep your artifact separate from the reflection, but always link them.
- Peer sharing occurs on our [peer platform](https://www.nafra.at/adad_st2026/): comment and like others' work (intrinsic rewards only).

## 4. Networking & Peer Feedback (Lord of the Tweets)

- Share your journey on our peer platform ([Lord of the Tweets](https://www.nafra.at/adad_st2026/)).
  - Use the specific GutHub pages link (e.g., *`https://username.github.io/The-Fellowship-of-the-Code-2026/artifacts/artifact-1/artifact-1-situation-intent.html`*).
    - Not the GitHub repository link (except for "*.mermaid.md" files, here use the repository link).
  - Only share your artifact, not the chapter.
- Engage with others' work (comment/like).
- Best engagement will receive recognition/prizes.

## 5. AI Usage Guidelines

- AI is allowed and encouraged for coding, design, and logic tasks.
- You must document outputs, limitations, and modifications in The Red Book.
- You should be able to explain what the AI produced, not just copy results.

**We are not interested in:**

- Prompt engineering
- Praising AI
- Hiding AI usage

**We are interested in:**

- What AI misunderstood
- Where you had to correct it
- What you decided, not the AI

## 6. Grading

**You are not graded on:**

- How much code you write
- How *"advanced"* your solution is

**You are graded on:**

- Whether you can think like someone who works with developers
- Whether you can explain decisions
- Whether you can reflect on tools (including AI)

*`Perfect code is not required. Intent and structure are.`*

## 7. General Tips

- Think like a developer: **clarity, structure, and purpose matter** more than fancy code.
- Commit often with meaningful messages.
- Keep artifacts organized and named consistently.
- **Update The Red Book** after each task (it tracks your journey).
- **Check the templates** in [`/templates/`](../templates/) for formatting guidance.
- **Check the examples** in [`/examples/`](../examples/) for illustrations of *"weak"* outputs.
- Use the LOTR narrative to make your documentation memorable and interesting.
