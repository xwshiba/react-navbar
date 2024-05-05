/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: '', // Set the basePath to your desired value
    output: "export",  // <=== enables static exports
    assetPrefix: isProd ? 'https://xwshiba.github.io/react-navbar/' : undefined,
};

export default nextConfig;
