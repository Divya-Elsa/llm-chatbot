import { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setLoading(true);
    setReply("");

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      setReply(data.reply || data.error || "No response received");
    } catch (error) {
      console.error(error);
      setReply("Error connecting to backend");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111827",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <h1>My AI Chatbot</h1>

      <textarea
        rows="5"
        style={{
          width: "100%",
          maxWidth: "700px",
          padding: "15px",
          borderRadius: "10px",
          fontSize: "16px",
        }}
        placeholder="Ask something..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <br />
      <br />

      <button
        onClick={sendMessage}
        style={{
          padding: "12px 25px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Send
      </button>

      <div
        style={{
          marginTop: "30px",
          padding: "20px",
          borderRadius: "12px",
          background: "#1f2937",
          lineHeight: "1.8",
          maxWidth: "900px",
        }}
      >
        {loading ? "Thinking..." : <ReactMarkdown>{reply}</ReactMarkdown>}
      </div>
    </div>
  );
}

export default App;