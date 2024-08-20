"use client";
import { BoltIcon, Home, Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "../ui/sheet";

import { ToggleTheme } from "./toggle-theme";

interface RouteProps {
	href: string;
	label: string;
}

const routeList: RouteProps[] = [
	{
		href: "/",
		label: "Home",
	},
];

export const Navbar = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<header
			className={cn(
				"absolute top-0 right-0 left-0 z-40 mx-auto flex w-full items-center justify-between",
				"rounded-none border border-secondary p-4",
				"shadow-[0_4px_10px_rgb(0,0,0,0.2)] shadow-primary/30",
				"border-0 hover:shadow-primary/70",
				"transition-all duration-500 ease-in-out",
				"bg-white/50 saturate-150 backdrop-blur dark:bg-black/50",
			)}
		>
			<Link className="flex items-center px-2 font-bold text-lg" href="/">
				<BoltIcon
					className="mr-3 rounded-md border border-secondary bg-gradient-to-tr from-primary via-primary/80 to-primary p-1.5 text-primary-foreground"
					size={32}
				/>
				Metis
			</Link>
			{/* <!-- Mobile --> */}
			<div className="flex items-center lg:hidden">
				<Sheet open={isOpen} onOpenChange={setIsOpen}>
					<SheetTrigger asChild>
						<Menu
							className="cursor-pointer lg:hidden"
							onClick={() => setIsOpen(!isOpen)}
						/>
					</SheetTrigger>
					<SheetContent
						className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl border-secondary bg-card"
						side="left"
					>
						<div>
							<SheetHeader className="mb-4 ml-4">
								<SheetTitle className="flex items-center">
									<Link className="flex items-center" href="/">
										<BoltIcon className="mr-2 h-9 w-9 rounded-lg border border-secondary bg-gradient-to-tr from-primary via-primary/80 to-primary p-1.5 text-primary-foreground" />
										Metis
									</Link>
								</SheetTitle>
							</SheetHeader>

							<div className="flex flex-col gap-2">
								{routeList.map(({ href, label }) => (
									<Button
										key={href}
										asChild
										className="justify-start text-base"
										variant="ghost"
										onClick={() => setIsOpen(false)}
									>
										<Link href={href}>{label}</Link>
									</Button>
								))}
							</div>
						</div>

						<SheetFooter className="flex-col items-start justify-start sm:flex-col">
							<Separator className="mb-2" />

							<ToggleTheme />
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</div>

			<div className="hidden items-center lg:flex">
				<Link className="mx-3" href={"/"}>
					<Button className="w-full justify-start" size="sm" variant="ghost">
						<Home className="size-5" />
					</Button>
				</Link>
				<ToggleTheme />
			</div>
		</header>
	);
};
