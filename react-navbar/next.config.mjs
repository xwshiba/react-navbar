/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '', // Set the basePath to your desired value
    output: "export",  // <=== enables static exports
    assetPrefix: isProd ? '/react-navbar' : undefined,
};

export default nextConfig;
