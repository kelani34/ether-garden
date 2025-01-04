import Image from "next/image";

export default function Home() {
	return (
		<div className="">
			<Image
				src="/images/nextjs.png"
				alt="Next.js Logo"
				width={500}
				height={500}
			/>
		</div>
	);
}
