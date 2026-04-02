/** @type {import('next').NextConfig} */
// GitHub Pages project: https://<user>.github.io/<repo>/
// CSS/JS must load from /<repo>/_next/... — if basePath is wrong, the site is unstyled.
const repoSlug =
  process.env.GITHUB_REPOSITORY?.split('/')[1] ||
  process.env.GITHUB_PAGES_REPO ||
  'demo.io';

const onVercel = process.env.VERCEL === '1';
const onGithubActions = process.env.GITHUB_ACTIONS === 'true';
const explicitPages = process.env.GITHUB_PAGES === '1';
// GitHub Pages project URLs need /repoName/... — Vercel serves at domain root, so never use that basePath there
const useGhPagesBase =
  !onVercel &&
  (explicitPages || (onGithubActions && Boolean(process.env.GITHUB_REPOSITORY)));

const basePath = useGhPagesBase ? `/${repoSlug}` : '';

const nextConfig = {
  output: 'export',
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
