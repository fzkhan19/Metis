import { cn } from "@/lib/utils";
import { BoltIcon, User } from "lucide-react";

interface MessageProps {
	content: string;
	isUserMessage: boolean;
}

export const Message = ({ content, isUserMessage }: MessageProps) => {
	return (
		<div
			className={cn({
				"bg-background": isUserMessage,
				"bg-background/25": !isUserMessage,
			})}
		>
			<div className="p-6 py-2">
				<div className="mx-auto flex max-w-3xl items-start gap-1">
					<div
						className={cn(
							"flex aspect-square size-8 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 md:size-10",
							{
								"border-blue-700 bg-blue-950 text-zinc-200": isUserMessage,
							},
						)}
					>
						{isUserMessage ? (
							<User className="size-5" />
						) : (
							<BoltIcon className="size-5 text-white" />
						)}
					</div>

					<div className="mt-1 ml-6 flex w-full flex-col">
						<div className="flex items-center space-x-2">
							<span className="font-semibold text-gray-900 text-sm dark:text-white">
								{isUserMessage ? "You" : "Metis"}
							</span>
						</div>

						<p className="py-2 font-normal text-gray-900 text-sm dark:text-white">
							{content}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
