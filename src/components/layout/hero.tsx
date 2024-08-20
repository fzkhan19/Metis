"use client";
import {cn} from "@/lib/utils";
import {ArrowRightCircle} from "lucide-react";
import {useRouter} from "next/navigation";
import {useState} from "react";
import {Button} from "../ui/button";
import {Cover} from "../ui/cover";
import {Input} from "../ui/input";
import {WavyBackground} from "../ui/wavy-background";

export default function HeroSection() {
	const [link, setLink] = useState("");
	const router = useRouter();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push(`/${link}`);
	};

	return (
		<WavyBackground
			waveWidth={10}
			blur={12}
			className="mx-auto flex max-w-7xl flex-col items-center justify-center"
		>
			<h1
				className={cn(
					"relative z-20 mx-auto mt-6 max-w-7xl",
					"bg-gradient-to-b from-foreground to-primary/70",
					"bg-clip-text text-center",
					"font-semibold text-4xl text-transparent md:text-6xl lg:text-7xl",
				)}
			>
				<div className="pb-4 font-bold">Talk to Any Webpage</div>
				<Cover>Instantly!</Cover>
			</h1>
			<form className="relative mt-32 w-5/6 max-w-2xl md:w-full" onSubmit={handleSubmit}>
 				<Input
					className={cn(
						"h-16 pr-[68px] text-lg",
						"placeholder:text-base focus:placeholder-transparent md:placeholder:text-center",
						"transition-all duration-200 ease-in-out",
					)}
					placeholder="Enter your link"
					value={link}
					onChange={(e) => setLink(decodeURIComponent(e.target.value))}
				/>
				<Button className="absolute top-2 right-2 h-12" type="submit">
					<ArrowRightCircle />
				</Button>
			</form>
		</WavyBackground>
	);
}
