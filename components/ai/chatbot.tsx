"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Bot, User, Sparkles, Minimize2 } from "lucide-react";

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
        "We build scalable cloud architectures on AWS, Azure, and GCP. Our solutions include auto-scaling and multi-region deployment.",
        "MERN Stack with TypeScript is our specialty! We create enterprise-grade full-stack applications.",
        "Our DevOps team can set up CI/CD pipelines, Docker containers, and Kubernetes orchestration for your project.",
        "I'd be happy to connect you with our solutions architect. What specific challenge are you looking to solve?",
        "We've delivered 500+ projects for enterprise clients worldwide. Let me share some case studies with you.",
        "Our security-first approach ensures your data is protected with industry-leading encryption and compliance standards.",
    ];

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: messages.length + 1,
            text: input,
            sender: "user",
            timestamp: new Date(),
        };

        setMessages([...messages, userMessage]);
        setInput("");
        setIsTyping(true);

        // Simulate bot response
        setTimeout(() => {
            const botMessage: Message = {
                id: messages.length + 2,
                text: botResponses[Math.floor(Math.random() * botResponses.length)],
                sender: "bot",
                timestamp: new Date(),
            };
            setMessages((prev) => [...prev, botMessage]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <>
            {/* Chatbot Toggle Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center shadow-2xl hover:shadow-neon-blue/50 transition-all"
                style={{
                    boxShadow: "0 10px 40px rgba(0, 212, 255, 0.4), 0 0 20px rgba(184, 69, 255, 0.3)",
                }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X className="w-7 h-7 text-white" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            className="relative"
                        >
                            <MessageCircle className="w-7 h-7 text-white" />
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chatbot Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed bottom-24 right-6 z-50 w-[380px] h-[480px] rounded-3xl overflow-hidden flex flex-col shadow-2xl"
                        style={{
                            background: "linear-gradient(135deg, rgba(10, 10, 15, 0.98) 0%, rgba(26, 26, 36, 0.98) 100%)",
                            backdropFilter: "blur(40px)",
                            border: "1px solid rgba(0, 212, 255, 0.3)",
                            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 212, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                        }}
                    >
                        {/* Header */}
                        <div
                            className="p-5 flex items-center space-x-3 relative overflow-hidden"
                            style={{
                                background: "linear-gradient(135deg, #00d4ff 0%, #b845ff 100%)",
                            }}
                        >
                            {/* Animated Background */}
                            <div className="absolute inset-0 opacity-20">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent chatbot-shimmer" />
                            </div>

                            <div className="relative w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                                <Bot className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1 relative">
                                <h3 className="font-bold text-white flex items-center space-x-2 text-lg">
                                    <span>Arani AI</span>
                                    <Sparkles className="w-4 h-4 animate-pulse" />
                                </h3>
                                <p className="text-xs text-white/90 flex items-center space-x-1">
                                    <span className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                                    <span>Online 24/7</span>
                                </p>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(false)}
                                className="relative w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                            >
                                <Minimize2 className="w-4 h-4 text-white" />
                            </motion.button>
                        </div>

                        {/* Messages */}
                        <div
                            className="flex-1 overflow-y-auto p-4 space-y-3"
                            style={{
                                background: "rgba(10, 10, 15, 0.6)",
                            }}
                        >
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex items-start space-x-2 ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                                        }`}
                                >
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.sender === "bot"
                                                ? "bg-gradient-to-br from-neon-blue to-neon-purple shadow-lg"
                                                : "bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600"
                                            }`}
                                    >
                                        {message.sender === "bot" ? (
                                            <Bot className="w-4 h-4 text-white" />
                                        ) : (
                                            <User className="w-4 h-4 text-white" />
                                        )}
                                    </div>
                                    <div
                                        className={`max-w-[70%] rounded-2xl p-3 ${message.sender === "bot"
                                                ? "bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-neon-blue/30 shadow-lg"
                                                : "bg-gradient-to-r from-neon-blue to-neon-purple shadow-lg"
                                            }`}
                                        style={{
                                            backdropFilter: "blur(10px)",
                                        }}
                                    >
                                        <p className="text-sm text-white leading-relaxed">{message.text}</p>
                                        <p className="text-xs text-white/60 mt-1.5">
                                            {message.timestamp.toLocaleTimeString([], {
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex items-start space-x-2"
                                >
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center shadow-lg">
                                        <Bot className="w-4 h-4 text-white" />
                                    </div>
                                    <div
                                        className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-neon-blue/30 rounded-2xl px-5 py-3"
                                        style={{ backdropFilter: "blur(10px)" }}
                                    >
                                        <div className="flex space-x-1.5">
                                            <div className="w-2 h-2 bg-neon-blue rounded-full animate-bounce" />
                                            <div
                                                className="w-2 h-2 bg-neon-purple rounded-full animate-bounce"
                                                style={{ animationDelay: "0.2s" }}
                                            />
                                            <div
                                                className="w-2 h-2 bg-neon-pink rounded-full animate-bounce"
                                                style={{ animationDelay: "0.4s" }}
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div
                            className="p-4 border-t"
                            style={{
                                background: "rgba(15, 15, 20, 0.95)",
                                borderColor: "rgba(0, 212, 255, 0.2)",
                                backdropFilter: "blur(20px)",
                            }}
                        >
                            <div className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                    placeholder="Type your message..."
                                    className="flex-1 bg-gray-900/80 border border-gray-700/50 rounded-xl px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue focus:ring-2 focus:ring-neon-blue/30 transition-all"
                                    style={{
                                        backdropFilter: "blur(10px)",
                                    }}
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleSend}
                                    disabled={!input.trim()}
                                    className="w-11 h-11 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl flex items-center justify-center hover:shadow-lg hover:shadow-neon-blue/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-5 h-5 text-white" />
                                </motion.button>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 text-center flex items-center justify-center space-x-1">
                                <Sparkles className="w-3 h-3" />
                                <span>Powered by Arani AI Engine v2.0</span>
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
