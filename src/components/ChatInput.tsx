"use client";

import { cn } from "@/lib/utils";
import type { useChat } from "ai/react";
import { Send } from "lucide-react";
import { AutosizeTextarea } from "./AutoResizeTextArea";
import { Button } from "./ui/button";

type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"];
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"];
type SetInput = ReturnType<typeof useChat>["setInput"];

interface ChatInputProps {
	input: string;
	handleInputChange: HandleInputChange;
	handleSubmit: HandleSubmit;
	setInput: SetInput;
}

export const ChatInput = ({
	handleInputChange,
	handleSubmit,
	input,
	setInput,
}: ChatInputProps) => {
	return (
		<div className="absolute bottom-0 left-0 z-10 w-full">
			<div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-1 lg:mx-auto lg:max-w-4xl">
				<div className="relative flex h-full flex-1 items-stretch md:flex-col">
					<div className="relative flex w-full flex-grow flex-col p-4">
						<form onSubmit={handleSubmit} className="relative">
							<AutosizeTextarea
								autoFocus
								onChange={handleInputChange}
								value={input}
								onKeyDown={(e) => {
									if (e.key === "Enter" && !e.shiftKey) {
										e.preventDefault();
										handleSubmit();
										setInput("");
									}
								}}
								placeholder="Enter your question..."
								className={cn(
									"w-full pr-14",
									"transition-all duration-200 ease-in-out",
								)}
							/>

							<Button
								size="sm"
								type="submit"
								className="absolute top-0 right-2 bottom-0 z-10 my-auto h-10"
								variant={"ghost"}
							>
								<Send className="size-4" />
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
