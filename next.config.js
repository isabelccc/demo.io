/** @type {import('next').NextConfig} */
// GitHub Pages project site: https://<user>.github.io/<repo>/
// Build for deploy: GITHUB_PAGES=1 npm run build (see package.json "deploy")
const basePath = process.env.GITHUB_PAGES === '1' ? '/demo.io' : '';

const nextConfig = {
  output: 'export',
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
};

export default nextConfig;
