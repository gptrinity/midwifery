/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["pdf-parse", "mammoth", "xlsx"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;