import React from "react";
import Image from "next/image";

const BannerImages = () => {
	return (
		<>
			<div className="flex-shrink-0 h-full overflow-hidden w-auto">
				<Image
					className="object-cover object-center"
					src="/narcos.jpeg"
					alt="Narcos"
					width={280}
					height={37}
				/>
			</div>
			<div className="flex-shrink-0 h-full w-auto">
				<Image
					className="object-cover object-center"
					src="/strangerThings.png"
					alt="Stranger Things"
					width={280}
					height={37}
				/>
			</div>
			<div className="flex-shrink-0 h-full w-auto">
				<Image
					className="object-cover object-center"
					src="/blackMirror.png"
					alt="Black Mirror"
					width={280}
					height={37}
				/>
			</div>
			<div className="flex-shrink-0 h-full w-auto">
				<Image
					className="object-cover object-center"
					src="/squidGame.png"
					alt="Squid Game"
					width={280}
					height={37}
				/>
			</div>
			<div className="flex-shrink-0 h-full w-auto">
				<Image
					className="object-cover object-center"
					src="/bigShort.jpeg"
					alt="The Big Short"
					width={280}
					height={37}
				/>
			</div>
			<div className="flex-shrink-0 h-full w-auto">
				<Image
					className="object-cover object-center"
					src="/wolfOfWallstreet.jpg"
					alt="The Wolf of Wallstreet"
					width={280}
					height={37}
				/>
			</div>
			<div className="flex-shrink-0 h-full w-auto">
				<Image
					className="object-cover object-center"
					src="/breakingBad.png"
					alt="Breaking Bad"
					width={280}
					height={37}
				/>
			</div>
		</>
	);
};

export default BannerImages;
