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

   
<img width="800" alt="Screenshot 2025-04-05 at 10 48 36 PM" src="https://github.com/user-attachments/assets/cb32a11b-eb9a-41bf-81af-cf2b37dcb2e2" />


               

### Backend

**Languages:** PHP, TypeScript

#### REST Endpoints

1. `/api/problem/saveMetadata/` (POST)
   - Save problem metadata (title, validator, cases, statements) as JSON
   - Store as draft in `problems_draft/`
- possible request parameters:
<pre lang="md">
```ts
{
  problem_alias: string;             // Unique alias for the problem
  title: string;                    
  source: string;                   
  visibility: number;                // Visibility level (e.g. 1 = public)
  languages: string[];               // List of allowed languages
  time_limit: number;                // Time limit in milliseconds
  memory_limit: number;              // Memory limit in kilobytes
  overall_wall_time_limit: number;   
  validator: {                       // Validator configuration
    name: string;                    
    custom_validator?: {            
      language: string;           
      source: string;               
    }
  };
  statements: {                    
    [language: string]: {          
      markdown: string;             
      images: {                      
        [filename: string]: string;  
      }
    }
  };
  test_cases: {                  
    cases: Array<{
      name: string;                  
      weight: number;                
      input: string;            
      output: string;         
    }>;
    sample_cases: Array<{
      name: string;
      input: string;
      output: string;
    }>;
  };
}
```
</pre>

- anticipated response:

<pre lang="md">
```ts
{
  status: string;                  
  draft_id: number;                
  timestamp: number;               
}
 ```
</pre>
2. `/api/problem/loadMetadata/` (GET)
- Load metadata for existing problems
- requested parameter:

<pre lang="md">
```ts
{
  problem_alias?: string;          
  draft_id?: number;             
}
 ```
</pre>

- response (typecript):
<pre lang="md">
```ts
{
  status: string;                   
  metadata: {                      
    // ...all problem fields
  },
  drafts?: Array<{                  
    draft_id: number;
    timestamp: number;
    identity_id: number;
    username: string;
  }>
}
 ```
</pre>

3. `/api/problem/validateMetadata/` (POST)
   - Validate structure using existing ProblemParams logic
   - Request Parameters:  `Same as saveMetadata`
   - Response :
<pre lang="md">
```ts
{
  status: string;                  
  errors: Array<{                 
    field: string;                
    message: string;               
    type: string;                   
  }>
}
 ```
</pre>


4. `/api/problem/commitMetadata/` (POST)
   - Convert JSON to zip, use internal `apiCreate` or `apiUpdate`
   - Request Parameters:
<pre lang="md">
```ts
{
  draft_id: number;                 // Draft ID to commit
  problem_alias?: string;           // Optional: specify a specific alias for new problems
  commit_message?: string;          // Optional: message describing the changes
}
 ```
</pre>
- response:
<pre lang="md">
```ts
{
  status: string;                  // 'ok' on success
  problem_alias: string;           // The problem alias (useful for newly created problems)
}
 ```
</pre>
#### Optional: Version Tracking

- Create `Problems_Drafts` table with versioning, timestamp, and author ID
 <img width="800" src="https://www.mermaidchart.com/raw/4944f0ea-4e04-4c24-905a-01aa598177e7?theme=light&version=v0.1&format=svg"/>

  Client                      Backend                      Database
  |                            |                            |
  |-- saveMetadata() --------->|                            |
  |                            |-- validate metadata ------>|
  |                            |-- store in ProblemDrafts ->|
  |<-- draft_id, timestamp ----|                            |
  |                            |                            |
  |-- loadMetadata() --------->|                            |
  |                            |-- retrieve draft ---------->|
  |                            |<-- metadata ----------------|
  |<-- problem metadata -------|                            |
  |                            |                            |
  |-- validateMetadata() ----->|                            |
  |                            |-- validate structure & content |
  |<-- validation result ------|                            |
  |                            |                            |
  |-- commitMetadata() ------->|                            |
  |                            |-- retrieve draft ---------->|
  |                            |<-- draft data --------------|
  |                            |-- create temp files -------|
  |                            |-- build problem zip -------|
  |                            |-- update/create problem --->|
  |<-- problem_alias ----------|                            |

### Frontend

**Tech Stack:** Vue.js, TypeScript, Axios, Bootstrap

#### Integration Plan

- Embed Editor: Open Problem Creator in an <iframe> or modal.
- Data Passing: Use postMessage to send/receive JSON metadata between the iframe and parent.
- Metadata Binding: When saving, automatically fill in omegaUp’s form fields using returned metadata.
- UX Improvements: Show loading indicators, validation errors, and success confirmations.

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


| **Phase** | **Period** | **Tasks** | **Details** | **Estimated Hours** |
|-----------|------------|-----------|-------------|---------------------|
| Phase 1: Planning & Architecture | Community Bonding (May 20 – June 16) | Explore codebase, repo structure, workflows | Study Problem Creator design, omegaUp backend, submit a minor bugfix PR | 20 |
| | Week 1 | Design architecture | Define iframe-based flow, REST endpoints, DB schema for drafts/versioning | 15 |
| | Week 2 | Write tech spec | Detail frontend/backend interfaces, postMessage contracts, security rules | 15 |
| Phase 2: Backend Implementation | Week 3 | Draft save/load endpoints | Create `/saveMetadata`, `/loadMetadata`, file-based or DB draft storage | 25 |
| | Week 4 | Validate and commit APIs | Add `/validateMetadata`, `/commitMetadata`, zip assembly, permissions check | 25 |
| | Week 5 | Test case + versioning logic | Implement upload, preview, diff, rollback logic; update DB schema if needed | 30 |
| | Week 6 | Integrate with ProblemController | Wire endpoints into existing create/edit logic; handle legacy zip workflows | 20 |
|  Phase 3: Frontend Integration | Week 7 | Build Vue modal/iframe UI | Embed Problem Creator, add tab navigation, use `postMessage` bridge | 30 |
| | Week 8 | Draft autosave + state recovery | Implement timed autosave, load draft on reload, unsaved warning | 30 |
| | Week 9 | Edit UI + version control | Add view/edit tabs, version history viewer, rollback options | 40 |
| | Week 10 | Metadata, statement, test case editors | Build markdown preview, case validator UI, real-time field validation | 50 |
| Phase 4: Testing & QA | Week 11 | Backend + frontend test coverage | PHPUnit tests for APIs, Vue unit tests, Cypress end-to-end workflows | 30 |
| | Week 12 | Manual QA, bug fixes, polish | Fix regressions, ensure backward compatibility, prepare demo test run | 20 |
|  Phase 5: Docs & Final Submission | Week 12 | Write user + dev documentation | Usage guide, dev notes, tutorial for adding/editing problems via new flow | 10 |
| |  | Final submission | Upload code, write GSoC report, link screencast (optional) | 10 |
| **TOTAL** | **May 20 – August 25** | | | **350 hours** |

---

## Commitment

- Weekly Availability: 40 hours  
- No summer classes, internships, or travel  
- Fully committed to GSoC for the entire program duration

---

Thank you for considering my proposal! I’m excited to contribute to omegaUp and help build tools that make programming education more accessible.
