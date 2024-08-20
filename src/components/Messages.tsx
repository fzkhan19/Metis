import type { Message as TMessage } from "ai/react";
import { MessageSquare } from "lucide-react";
import { Message } from "./Message";

interface MessagesProps {
	messages: TMessage[];
}

export const Messages = ({ messages }: MessagesProps) => {
	return (
		<div className="no-scrollbar flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
			{messages.length ? (
				messages.map((message) => (
					<Message
						key={message.id}
						content={message.content}
						isUserMessage={message.role === "user"}
					/>
				))
			) : (
				<div className="flex flex-1 flex-col items-center justify-center gap-2">
					<MessageSquare className="size-8 text-blue-500" />
					<h3 className="font-semibold text-white text-xl">You're all set!</h3>
					<p className="text-foreground text-sm">
						Ask your first question to get started.
					</p>
				</div>
			)}
		</div>
	);
};
