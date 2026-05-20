"use client";

import { useState, useRef, useEffect } from "react";
import {
    MessageCircle,
    X,
    Send,
    Bot,
    User,
    Sparkles,
    Minimize2,
} from "lucide-react";

interface Message {
    id: number;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
}

export default function AIChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hello! I'm Arani AI Assistant. How can I help you build your next-gen solution today?",
            sender: "bot",
            timestamp: new Date(),
        },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const botResponses = [
        "We specialize in Native Mobile Development for iOS & Android. Would you like to know more about our mobile solutions?",
        "Our AI automation services can transform your business processes. We use cutting-edge ML models and NLP systems.",
        "We build scalable cloud architectures on AWS, Azure, and GCP with auto-scaling and multi-region deployment.",
        "MERN Stack with TypeScript is our specialty. We create enterprise-grade full-stack applications.",
        "Our DevOps team can set up CI/CD pipelines, Docker containers, and Kubernetes orchestration.",
        "I'd be happy to connect you with our solutions architect. What specific challenge are you looking to solve?",
        "We've delivered 500+ projects for enterprise clients worldwide. I can share some case studies with you.",
        "Our security-first approach ensures your data is protected with strong encryption and compliance standards.",
    ];

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: messages.length + 1,
            text: input,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        setTimeout(() => {
            const botMessage: Message = {
                id: userMessage.id + 1,
                text: botResponses[Math.floor(Math.random() * botResponses.length)],
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);
        }, 1200);
    };

    return (
        <>
            {/* Toggle button */}
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400 transition-colors"
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                {isOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <div className="relative">
                        <MessageCircle className="h-6 w-6" />
                        <span className="absolute -top-1 -right-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                )}
            </button>

            {/* Chat window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-40 flex h-[420px] w-[360px] flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center gap-3 border-b border-slate-800 bg-slate-900 px-4 py-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
                            <Bot className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center gap-2">
                                <h3 className="text-sm font-semibold text-white">Arani AI</h3>
                                <Sparkles className="h-3.5 w-3.5 text-sky-400" />
                            </div>
                            <p className="mt-0.5 flex items-center gap-1 text-xs text-slate-400">
                                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                Online
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800"
                            aria-label="Minimize chat"
                        >
                            <Minimize2 className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 space-y-3 overflow-y-auto bg-slate-950 px-3 py-3">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex items-start gap-2 ${message.sender === "user" ? "flex-row-reverse" : ""
                                    }`}
                            >
                                <div
                                    className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${message.sender === "bot"
                                            ? "bg-sky-500/10 text-sky-400"
                                            : "bg-slate-800 text-slate-100"
                                        }`}
                                >
                                    {message.sender === "bot" ? (
                                        <Bot className="h-4 w-4" />
                                    ) : (
                                        <User className="h-4 w-4" />
                                    )}
                                </div>
                                <div
                                    className={`max-w-[70%] rounded-2xl px-3 py-2 text-sm ${message.sender === "bot"
                                            ? "bg-slate-900 border border-slate-800 text-slate-100"
                                            : "bg-sky-500 text-slate-950"
                                        }`}
                                >
                                    <p className="leading-relaxed">{message.text}</p>
                                    <p className="mt-1 text-[10px] text-slate-400">
                                        {message.timestamp.toLocaleTimeString([], {
                                            hour: "2-digit",
                                            minute: "2-digit",
                                        })}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex items-start gap-2">
                                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
                                    <Bot className="h-4 w-4" />
                                </div>
                                <div className="inline-flex items-center gap-1 rounded-2xl bg-slate-900 px-3 py-2">
                                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-bounce" />
                                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-bounce [animation-delay:0.15s]" />
                                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-bounce [animation-delay:0.3s]" />
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="border-t border-slate-800 bg-slate-900 px-3 py-3">
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleSend();
                                }}
                                placeholder="Type your message..."
                                className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                            />
                            <button
                                type="button"
                                onClick={handleSend}
                                disabled={!input.trim()}
                                className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-slate-950 hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
                            >
                                <Send className="h-5 w-5" />
                            </button>
                        </div>
                        <p className="mt-2 flex items-center justify-center gap-1 text-[11px] text-slate-500">
                            <Sparkles className="h-3 w-3" />
                            <span>Arani AI assistant for quick pre‑sales questions.</span>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}