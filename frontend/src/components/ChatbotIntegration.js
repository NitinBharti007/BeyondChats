import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCopy, FaEnvelope } from "react-icons/fa";

const ChatbotIntegration = () => {
  const navigate = useNavigate();
  const [showIntegrationModal, setShowIntegrationModal] = useState(false);
  const [activeTab, setActiveTab] = useState("code");
  const [showChatbot, setShowChatbot] = useState(false);

  const handleTestIntegration = () => {
    const isSuccess = Math.random() > 0.5; // 50% success rate for demo
    navigate(isSuccess ? "/integration-success" : "/integration-failure");
  };

  const IntegrationModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <div className="flex mb-4">
          <button
            className={`flex-1 p-2 ${activeTab === "code" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setActiveTab("code")}
          >
            Copy Code
          </button>
          <button
            className={`flex-1 p-2 ${activeTab === "email" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setActiveTab("email")}
          >
            Email Instructions
          </button>
        </div>

        {activeTab === "code" ? (
          <div>
            <p className="mb-2">Add this code to your website's &lt;head&gt;:</p>
            <div className="bg-gray-100 p-4 rounded mb-4 relative overflow-auto">
              <code className="break-words block">{'<script src="https://cdn.beyondchats.com/chatbot.js"></script>'}</code>
              <button
                className="absolute top-2 right-2 text-blue-500"
                onClick={() => navigator.clipboard.writeText('<script src="https://cdn.beyondchats.com/chatbot.js"></script>')}
              >
                <FaCopy />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="mb-4">Enter developer's email:</p>
            <input
              type="email"
              placeholder="developer@company.com"
              className="w-full p-2 border rounded mb-4"
            />
            <button
              className="w-full bg-green-500 text-white p-2 rounded"
              onClick={() => window.location.href = "mailto:?body=Please find integration instructions..."}
            >
              <FaEnvelope className="inline mr-2" />
              Send Instructions
            </button>
          </div>
        )}

        <button
          className="w-full mt-4 bg-gray-200 p-2 rounded"
          onClick={() => setShowIntegrationModal(false)}
        >
          Close
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Feedback Bar */}
      <div className="bg-blue-500 text-white p-2 text-center">
        <button
          className="underline"
          onClick={() => alert("Feedback form would open here")}
        >
          Chatbot not working as intended? Share feedback
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Chatbot Integration</h1>

        <div className="space-y-4">
          <button
            onClick={() => setShowChatbot(true)}
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          >
            Test Chatbot
          </button>

          <button
            onClick={() => setShowIntegrationModal(true)}
            className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition"
          >
            Integrate on Your Website
          </button>

          <button
            onClick={handleTestIntegration}
            className="w-full bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 transition"
          >
            Test Integration
          </button>
        </div>

        {/* Chatbot Preview */}
        {showChatbot && (
          <div className="fixed bottom-4 right-4 w-80 h-96 bg-white shadow-lg rounded-t-lg">
            <div className="flex justify-between items-center bg-gray-100 p-2 rounded-t-lg">
              <h3 className="font-bold">Chatbot Preview</h3>
              <button
                className="text-gray-500"
                onClick={() => setShowChatbot(false)}
              >
                ×
              </button>
            </div>
            <iframe
              src="https://example.com"
              className="w-full h-full"
              title="Chatbot Demo"
            />
          </div>
        )}

        {showIntegrationModal && <IntegrationModal />}
      </div>
    </div>
  );
};

export default ChatbotIntegration;
