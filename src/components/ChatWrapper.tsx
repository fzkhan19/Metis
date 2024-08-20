"use client";

import { type Message, useChat } from "ai/react";
import { ChatInput } from "./ChatInput";
import { Messages } from "./Messages";

export const ChatWrapper = ({
	sessionId,
	initialMessages,
}: {
	sessionId: string;
	initialMessages: Message[];
}) => {
	const { messages, handleInputChange, handleSubmit, input, setInput } =
		useChat({
			api: "/api/chat-stream",
			body: { sessionId },
			initialMessages,
		});

	return (
		<div className="relative flex min-h-full flex-col justify-between gap-2 bg-background">
			<div className="flex flex-1 flex-col justify-between bg-background text-foreground">
				<Messages messages={messages} />
			</div>

			<ChatInput
				input={input}
				handleInputChange={handleInputChange}
				handleSubmit={handleSubmit}
				setInput={setInput}
			/>
		</div>
	);
};
