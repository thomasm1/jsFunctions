/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	productionBrowserSourceMaps: true,
	experimental: {
		newNextLinkBehavior: false
	}
};

module.exports = nextConfig;
