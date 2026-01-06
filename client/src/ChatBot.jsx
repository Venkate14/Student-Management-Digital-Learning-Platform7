import React, { useState } from "react";

function ChatBot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hello! I am your AI Assistant. How can I help you today?" }
    ]);
    const [input, setInput] = useState("");

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = { sender: "user", text: input };
        setMessages((prev) => [...prev, userMsg]);
        setInput("");

        // Send to Backend
        fetch("http://localhost:3001/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: input })
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    setMessages((prev) => [...prev, { sender: "bot", text: "Error: " + data.error }]);
                } else {
                    setMessages((prev) => [...prev, { sender: "bot", text: data.reply || "Error: AI not responding." }]);
                }
            })
            .catch((err) => {
                console.error("Chat error:", err);
                setMessages((prev) => [...prev, { sender: "bot", text: "Server Error. Is your API Key set?" }]);
            });
    };

    return (
        <div
            style={{
                position: "fixed",
                bottom: "30px",
                right: "30px", // Right side
                zIndex: 1000,
                fontFamily: "'Inter', sans-serif"
            }}
        >
            {/* Chat Window */}
            {isOpen && (
                <div
                    className="card shadow-lg mb-3"
                    style={{
                        width: "300px",
                        height: "400px",
                        backgroundColor: "#fff",
                        border: "none",
                        borderRadius: "15px",
                        overflow: "hidden"
                    }}
                >
                    <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                        <span className="fw-bold">🤖 AI Assistant</span>
                        <button className="btn btn-sm btn-light rounded-circle" onClick={toggleChat} style={{ width: "25px", height: "25px", padding: 0, lineHeight: 0 }}>&times;</button>
                    </div>

                    <div className="card-body p-3 overflow-auto" style={{ height: "300px", background: "#f8f9fa" }}>
                        {messages.map((msg, idx) => (
                            <div key={idx} className={`d-flex ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"} mb-2`}>
                                <div
                                    className={`p-2 rounded-3 text-wrap ${msg.sender === "user" ? "bg-primary text-white" : "bg-white border text-dark"}`}
                                    style={{ maxWidth: "80%", fontSize: "0.9rem" }}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="card-footer p-2 bg-white border-top">
                        <form onSubmit={handleSend} className="d-flex gap-2">
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Ask me anything..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <button type="submit" className="btn btn-primary btn-sm">➤</button>
                        </form>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={toggleChat}
                className="btn btn-primary rounded-circle shadow-lg d-flex align-items-center justify-content-center"
                style={{ width: "60px", height: "60px", fontSize: "1.8rem", transition: "transform 0.2s" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
                🤖
            </button>
        </div>
    );
}

export default ChatBot;
