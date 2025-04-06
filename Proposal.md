# Google Summer of Code 2025 Proposal

## Project Title: Integrate Problem Creator with Create/Edit Problem Workflows

**Name:** Xiulin Chen  
**Email:** cxl0603@gmail.com  
**GitHub:** [isabelccc](https://github.com/isabelccc)  
**GitHub Verification Handle:** cxl0603  


---

## Technical Skills

**Programming Languages:** Python, C++, PHP, TypeScript, JavaScript, SQL, Bash
**Frameworks & Tools:** Vue.js, React, Next.js, Flask, Node.js, Docker, Git, GitHub Actions, MySQL/PostgreSQL, REST APIs ,AWS

**Experience:**
- Implemented custom search engine and query compiler in C++
- Built and deployed a web-based assistant (TriLearn) with React, Tailwind, Flask, and GPT-4 APIs

**Link to omegaUp merged PRs: (at least one is required)**
- Contributor to omegaUp: https://github.com/omegaup/omegaup/pull/8138, https://github.com/omegaup/omegaup/pull/8150

---

## Education

**University:** University of Michigan – Ann Arbor  
**Major:** Computer Science  
**Minor:** Statistics  
**Expected Graduation:** December 2025

---

## Motivation

omegaUp’s mission to democratize competitive programming education resonates deeply with me. I’ve always been passionate about open learning and developer tools — and this project combines both. By eliminating zip-based workflows and enabling seamless problem creation, this proposal supports the broader vision of empowering instructors and mentors worldwide to contribute more easily.
Benefits to the Community

This project will:
- Simplify the problem authoring experience
- Remove reliance on zip uploads/downloads
- Enable real-time editing
- Reduce entry barriers for educators and mentors
- Increase contribution quality and accessibility

---

## Detailed Project Description

[omegaUp Create/Edit UI]
        |
     (iframe)
        ↓
[ Problem Creator UI ]
        ↑
  JSON Metadata via postMessage
        ↓
[ Backend REST API ]

### Backend

**Languages:** PHP, TypeScript

#### REST Endpoints

1. `/api/problem/saveMetadata/` (POST)
   - Save problem metadata (title, validator, cases, statements) as JSON
   - Store as draft in `problems_draft/`

2. `/api/problem/loadMetadata/` (GET)
   - Load metadata for existing problems

3. `/api/problem/validateMetadata/` (POST)
   - Validate structure using existing ProblemParams logic

4. `/api/problem/commitMetadata/` (POST)
   - Convert JSON to zip, use internal `apiCreate` or `apiUpdate`

#### Optional: Version Tracking

- Create `Problems_Drafts` table with versioning, timestamp, and author ID

### Frontend

**Tech Stack:** Vue.js, TypeScript, Axios, Bootstrap

#### Integration Plan

	1.	Embed Editor: Open Problem Creator in an <iframe> or modal.
	2.	Data Passing: Use postMessage to send/receive JSON metadata between the iframe and parent.
	3.	Metadata Binding: When saving, automatically fill in omegaUp’s form fields using returned metadata.
	4.	UX Improvements: Show loading indicators, validation errors, and success confirmations.

#### File Structure
```
frontend/www/js/omegaup/problem/
 ├── Create.vue
 ├── Edit.vue
 └── ProblemCreatorModal.vue
```

---

## User Experience

- "Use Problem Creator" button launches editor
- Metadata is loaded, edited, then saved without file download/upload
- Problem auto-fills omegaUp fields post-save
- Editing triggers re-open in view/edit mode

---

## Alternatives Considered

**Custom CMS inside omegaUp:** Not scalable or intuitive for external contributors  
**Manual content push via scripts:** Lacks feedback loop and revision history

---

## Security Impact

- All endpoints require authentication and permission checks
- File operations are scoped to the authenticated user
- JSON validation prevents injection or corrupted data
- No external scripts or third-party access required

---

## Deployment Plan

- REST APIs deployed via normal omegaUp pipeline
- Frontend modal added to Vue components
- Database migration for draft table (if used)
- Document GitHub webhook setup (if required in later extensions)

---

## Testing Plan

### Backend:
- Unit tests with PHPUnit for each endpoint
- Validation cases for invalid JSON and missing fields
- Integration tests for full metadata → zip → create
- Security checks on permission scopes

### Frontend:
- Vue unit tests for modal/iframe communication
- Cypress e2e: Create → Edit → Save → Validate → Commit flow
- Manual test for error handling, preview mode, auth permissions

---

## Timeline and Hours

| Period | Tasks | Estimated Hours |
|--------|-------|-----------------|
| Community Bonding (May 20 – June 16) | Understand omegaUp’s structure, study course repo workflow, submit minor PR | 20 |
| Week 1–2 | GitHub integration and token auth | 40 |
| Week 3–4 | Sync backend scripts and test with staging | 40 |
| Week 5–6 | Add preview UI for maintainers, write automated CI validators | 50 |
| Week 7–8 | Frontend UI for public GitHub content browsing | 50 |
| Week 9–10 | UX polish, error handling, and fallback content logic | 40 |
| Week 11 | Final QA, full demo test with course content | 30 |
| Week 12 | Submit final code and documentation | 30 |
| **Total** |  | **300+ hours** |

---

## Commitment

- Weekly Availability: 40 hours  
- No summer classes, internships, or travel  
- Fully committed to GSoC for the entire program duration

---

Thank you for considering my proposal! I’m excited to contribute to omegaUp and help build tools that make programming education more accessible.
