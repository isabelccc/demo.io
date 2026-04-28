'use client';

import SplineSection from './SplineSection';

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const resumePath = `${base}/Isabel_chen.pdf`;

export default function PortfolioClient() {
  return (
    <div className="ae-wrap">
      <header className="ae-header">
        <a href="#">Isabel Chen</a>
      </header>

      <section className="ae-hero">
        <h1>Isabel Chen</h1>
        <p className="ae-lead">
          Software engineer with experience across backend services, distributed systems, and full-stack web tools—from
          contest platforms and search infra to analytics pipelines and research tooling.
        </p>
        <p className="ae-edu">
          <em>University of Michigan, Ann Arbor · B.S. Computer Science · Graduated August 2025.</em>
        </p>
        <ul className="ae-links">
          <li><a href="https://github.com/isabelccc" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="mailto:cxl0603@gmail.com">Email</a></li>
          <li><a href={resumePath} download>Resume</a></li>
        </ul>
      </section>

      <ul className="ae-highlights">
        <li>
          <strong>100K+</strong> users on a coding contest platform; secure multi-language execution in ephemeral Docker
          sandboxes with isolation, limits, and sub-second to seconds-level feedback
        </li>
        <li>
          <strong>85%</strong> API latency reduction (<strong>300ms → 50ms</strong>); analytics interfaces serving{' '}
          <strong>50K+</strong> monthly queries
        </li>
        <li>
          <strong>60%</strong> lower database error rates and <strong>35%</strong> MTTR improvement via persistence-layer
          reliability work (queries, transactions, schema constraints)
        </li>
        <li>
          Distributed C++ crawler/indexer at <strong>~10K docs/sec</strong>; search at <strong>P50 5ms</strong> /{' '}
          <strong>P95 20ms</strong> / <strong>P99 50ms</strong> with <strong>85–95%</strong> cache hit rate on hot URLs
        </li>
      </ul>

    

      <section id="experience" className="ae-section">
        <h2>Experience</h2>

        <div className="ae-block">
          <h3>OmegaUp</h3>
          <p className="ae-meta">Software Developer · PHP · MySQL · Redis · Python · Remote · Oct 2025 – Present</p>
          <p className="ae-subline">Education platform</p>
          <ul>
            <li>
              Resolved cross-stack production issues across backend services, MySQL, and Redis on Linux, improving
              reliability for a coding contest platform serving <strong>100K+</strong> users with large-scale concurrent code
              runs.
            </li>
            <li>
              Designed and implemented a secure multi-language code execution platform using ephemeral Docker sandboxes
              (network / file-system isolation, CPU and memory limits, timeouts) for untrusted code, delivering{' '}
              <strong>sub-second to seconds-level</strong> execution feedback.
            </li>
            <li>
              Persistence-layer reliability engineering (query optimization, transaction boundaries, schema constraint
              remediation): <strong>60%</strong> reduction in database error rates and <strong>35%</strong> lower MTTR.
            </li>
          </ul>
        </div>

        <div className="ae-block">
          <h3>Springer Capital</h3>
          <p className="ae-meta">Full Stack Developer Intern · Python · TypeScript · WebSocket · Chicago, IL · Aug 2025 – Oct 2025</p>
          <p className="ae-subline">Financial services</p>
          <ul>
            <li>
              Re-architected analytics pipelines (Python, Redis, ClickHouse) on a small team:{' '}
              <strong>85%</strong> API latency reduction (<strong>300ms → 50ms</strong>) and real-time data dashboards.
            </li>
            <li>
              Shipped TypeScript workflow features and real-time views using REST and WebSocket APIs for latency-sensitive
              internal tools.
            </li>
            <li>
              End-to-end analytics dashboards (React, TypeScript) handling <strong>50K+</strong> monthly queries for
              enterprise decision-making.
            </li>
            <li>
              CI/CD consolidating <strong>12</strong> microservices into a monorepo with automated GKE deployments: release
              cycles from <strong>30 minutes → 5 minutes</strong>.
            </li>
          </ul>
        </div>

        <div className="ae-block">
          <h3>University of Michigan</h3>
          <p className="ae-meta">Software Engineering Intern &amp; Research Assistant · Ann Arbor, MI · Aug 2024 – Mar 2025</p>
          <ul>
            <li>
              Optimized backend data retrieval with TypeScript and state management improvements:{' '}
              <strong>15%</strong> faster server response times.
            </li>
            <li>
              Led <strong>5</strong> interns building a web-based email management platform (React, Node.js) with Google OAuth
              2.0 and Gmail API integration.
            </li>
            <li>
              AWS Lambda pipeline (Python, DynamoDB, API Gateway) for research activity logging—saved researchers{' '}
              <strong>50+</strong> hours per month.
            </li>
          </ul>
        </div>

        <div className="ae-block">
          <h3>Temu</h3>
          <p className="ae-meta">Software Engineer Intern · C++ · Redis · Shanghai, China · Jun 2024 – Sep 2024</p>
          <p className="ae-subline">E-commerce</p>
          <ul>
            <li>
              C++ distributed crawler/indexer with <strong>16</strong> worker threads:{' '}
              <strong>~10K docs/sec</strong> index-build throughput via segment-based indexing.
            </li>
            <li>
              Low-latency search at scale with Redis caching: <strong>P50 5ms</strong> / <strong>P95 20ms</strong> /{' '}
              <strong>P99 50ms</strong>, <strong>85–95%</strong> cache hit rate on hot URLs.
            </li>
            <li>
              Crawl deduplication cut redundant fetches by <strong>60–80%</strong>, reducing bandwidth and processing
              overhead.
            </li>
            <li>
              Linear-scaling indexing/storage pipelines: ~<strong>2GB</strong> memory per <strong>1M</strong> docs, stable{' '}
              <strong>60–70%</strong> CPU under multicore load.
            </li>
          </ul>
        </div>
      </section>

      <section id="projects" className="ae-section">
        <h2>Projects</h2>
        <p className="ae-repos-link">
          <a href="https://github.com/isabelccc?tab=repositories" target="_blank" rel="noopener noreferrer">All repositories on GitHub →</a>
        </p>

        <article className="ae-project">
          <h3>
            Cartograph
            <span className="ae-wip">In progress</span>
          </h3>
          <p className="ae-subline">Headless commerce core (Vendure-style kernel)</p>
          <p className="ae-tech">
            TypeScript · Node.js · Drizzle ORM · SQLite · REST · plugin/kernel · BullMQ-ready workers
          </p>
          <p>
            Monorepo commerce backend inspired by{' '}
            <a href="https://vendure.io/" target="_blank" rel="noopener noreferrer">Vendure</a>
            : catalog, carts, checkout with inventory reservation, Stripe, multi-tenant admin vs shop APIs, transactional
            outbox, and optional OIDC—with a slim core-api composition layer and domain logic in shared packages.
          </p>
          <p className="ae-project-links">
            <a href="https://github.com/isabelccc/cartograph" target="_blank" rel="noopener noreferrer">
              View on GitHub →
            </a>
          </p>
        </article>

        <article className="ae-project">
          <h3>
            Meridian{' '}
            <span className="ae-project-year">2026</span>
          </h3>
          <p className="ae-subline">Edge-style HTTP proxy · systems programming challenge</p>
          <p className="ae-tech">
            Systems · networking · HTTP · concurrency · observability-minded design
          </p>
          <p>
            A from-scratch exploration of what sits between clients and upstreams: connection lifecycle, request
            forwarding, back-pressure, and the sharp edges where correctness meets performance. Built as a focused
            systems challenge—tight scope, clear contracts, and room to iterate on routing, resilience, and how the
            proxy behaves under load.
          </p>
          <p className="ae-project-links">
            <a href="https://github.com/isabelccc/prox-challenge" target="_blank" rel="noopener noreferrer">
              View on GitHub →
            </a>
          </p>
        </article>

        <article className="ae-project">
          <h3>
            PortCheck{' '}
            <span className="ae-project-year">2026</span>
          </h3>
          <p className="ae-subline">Disclosure documents · DAG approvals · compliance demo</p>
          <p className="ae-tech">
            Next.js · React · TypeScript · PostgreSQL · Drizzle ORM · Turborepo · Server Actions · React Flow
          </p>
          <p>
            Monorepo demo for versioned fund disclosure documents: parallel review workflows modeled as a DAG (React
            Flow), server-enforced QA and sign-off gates, filing workspace with checklists and redlines, and an append-only
            audit trail—business rules enforced in Server Actions, not UI-only.
          </p>
          <div className="ae-preview">
            <div className="ae-preview-chrome">
              <div className="ae-preview-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="ae-preview-url">port-check.vercel.app/documents</div>
              <a
                className="ae-preview-open"
                href="https://port-check.vercel.app/documents"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open
                <span className="ae-preview-open-icon" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
            <div className="ae-preview-body">
              <iframe
                src="https://port-check.vercel.app/documents"
                title="PortCheck documents demo"
                loading="lazy"
              />
            </div>
          </div>
          <p className="ae-project-links">
            <a href="https://port-check.vercel.app/documents" target="_blank" rel="noopener noreferrer">Open live demo →</a>
            <span className="ae-project-links-sep" aria-hidden="true">
              {' · '}
            </span>
            <a href="https://github.com/isabelccc/PortCheck" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
          </p>
        </article>

        <article className="ae-project">
          <h3>
            terilearn{' '}
            <span className="ae-project-year">2025</span>
          </h3>
          <p className="ae-tech">TypeScript · full stack · learning / AI product</p>
          <p>
            Learning-focused product work in TypeScript—content workflows, quizzes, and tooling aimed at making study
            and review faster (aligned with Trilearn-style AI learning features).
          </p>
          <a href="https://github.com/isabelccc/terilearn" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
        </article>

        <article className="ae-project">
          <h3>
            web-crawler{' '}
            <span className="ae-project-year">2025</span>
          </h3>
          <p className="ae-tech">C++ · multithreading · search / indexing</p>
          <p>
            C++ crawler and indexing-oriented codebase (MIT)—pairs well with distributed search and high-throughput
            crawl work (e.g. Temu-scale indexing and segment-based pipelines).
          </p>
          <a href="https://github.com/isabelccc/web-crawler" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
        </article>

        <article className="ae-project">
          <h3>
            Cove{' '}
            <span className="ae-project-year">2024</span>
          </h3>
          <p className="ae-tech">
            React · Redux · Material-UI · Node.js · Express · MongoDB · JWT · Google OAuth · search · pagination ·
            moderation
          </p>
          <p>
            Cove is a MERN-stack app for invite-only “circles”: members share photo posts, comments, and tags in a
            private space (no public discovery). The React + Redux + Material-UI client talks to a Node/Express + MongoDB
            API with JWT and Google sign-in, content moderation, search, pagination, and user profiles—packaged as a
            full-stack social product focused on trusted groups rather than open feeds.
          </p>
          <div className="ae-preview">
            <div className="ae-preview-chrome">
              <div className="ae-preview-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className="ae-preview-url">cove-gamma.vercel.app</div>
              <a
                className="ae-preview-open"
                href="https://cove-gamma.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open
                <span className="ae-preview-open-icon" aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
            <div className="ae-preview-body">
              <iframe
                src="https://cove-gamma.vercel.app/"
                title="Cove live demo"
                loading="lazy"
              />
            </div>
          </div>
          <p className="ae-project-links">
            <a href="https://cove-gamma.vercel.app/" target="_blank" rel="noopener noreferrer">Open live demo →</a>
            <span className="ae-project-links-sep" aria-hidden="true">
              {' · '}
            </span>
            <a href="https://github.com/isabelccc/mern-memories" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
          </p>
        </article>
      </section>

      <section id="skills" className="ae-section">
        <h2>Skills</h2>
        <p className="ae-skills-block">
          <strong>Languages</strong>{' '}
          <strong>Python</strong> · <strong>TypeScript</strong> · JavaScript · PHP · C++ · SQL
        </p>
        <p className="ae-skills-block">
          <strong>Backend &amp; data</strong> MySQL · Redis · ClickHouse · DynamoDB · PostgreSQL · Drizzle · Node.js · Express · REST · WebSocket · GraphQL
        </p>
        <p className="ae-skills-block">
          <strong>Infra</strong> Docker · Linux · AWS (Lambda, API Gateway) · GKE · CI/CD · microservices
        </p>
        <p className="ae-skills-block">
          <strong>Frontend</strong> React · HTML/CSS · Tailwind · Material-UI · Redux
        </p>
      </section>

      

      <footer className="ae-footer">© 2026 Isabel Chen</footer>
    </div>
  );
}
