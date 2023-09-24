/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		PRIVATE_GOERLI_RPC: process.env.PRIVATE_GOERLI_RPC,
	},
};

module.exports = nextConfig;
