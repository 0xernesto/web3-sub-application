"use client";
import Image from "next/image";
import BannerImages from "../components/BannerImages";
import { SubscriptionWidget } from "@0xernesto/web3-subscription-widget";

export default function Home() {
	// Use a reliable Quicknode RPC URL
	const rpcUrlMap = {
		5: process.env.PRIVATE_GOERLI_RPC,
	};

	const theme = {
		primaryColor: "#cc0202",
		goodColor: "#47A66F",
		badColor: "#CC4545",
		primaryTextColor: "#000000",
		secondaryTextColor: "#4A4A4A",
		buttonTextColor: "#FFFFFF",
		containerBackgroundColor: "#FEF7EA",
		containerOutlineColor: "#DDF087",
		dropdownBackgroundColor: "#FEF7EA",
		dropdownOutlineColor: "#000000",
		optionActiveColor: "#C9C9C9",
		fontFamily: "sans-serif",
	};

	const lockConfig = {
		iconUrl:
			"https://images.ctfassets.net/y2ske730sjqp/4aEQ1zAUZF5pLSDtfviWjb/ba04f8d5bd01428f6e3803cc6effaf30/Netflix_N.png",
		lockAddress: "0x33201c65f9e7faa6d17d16c218dbc0ddf51c91b7",
		lockNetwork: 5,
		lockName: "Netflix 30 Day Subscription",
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="relative w-full min-w-[300px] flex items-center justify-center">
				<Image
					className="relative dark:drop-shadow-[0_0_0.3rem_#cc0202]"
					src="/logoNetflix.svg"
					alt="Netflix Logo"
					width={280}
					height={37}
					priority
				/>
			</div>
			<div className="mt-14">
				<span className="text-3xl font-bold">
					Unlimited Entertainment, One Click Away
				</span>
			</div>
			<div className="flex w-screen items-center justify-center my-14 h-52 animate-banner">
				<BannerImages />
				<BannerImages />
			</div>
			<div className="p-2 w-full h-full flex-col flex items-center justify-center">
				<SubscriptionWidget
					rpcUrlMap={rpcUrlMap}
					lockConfig={lockConfig}
					maxWidth={600}
					theme={theme}
				/>
			</div>
			<div className="mt-5">
				<span className="font-bold">LEGAL DISCLAIMER: </span>
				<span className="text small">
					This is an independent proof-of-concept and not affiliated
					with or endorsed by Netflix, Inc. No trademark or copyright
					infringement intended. This is for educational use only.
				</span>
			</div>
		</main>
	);
}
