/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = { fs: false, module: false };
        }
        return config;
    },
};

export default nextConfig;
