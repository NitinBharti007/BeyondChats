import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const SuccessScreen = () => {
  const navigate = useNavigate();
  const [confetti, setConfetti] = useState(true);

  useEffect(() => {
    // Stop confetti after 5 seconds
    const timer = setTimeout(() => setConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {confetti && <Confetti />}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h2 className="text-3xl font-bold mb-6 text-green-500">Integration Successful! 🎉</h2>

        <div className="space-y-4">
          <button
            onClick={() => navigate("/admin")}
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
          >
            Explore Admin Panel
          </button>

          <button
            onClick={() => navigate("/chat")}
            className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition"
          >
            Start Talking to Your Chatbot
          </button>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Share your success!</h3>
          <div className="flex justify-center space-x-4">
            <button className="text-blue-600 hover:text-blue-700">
              <FaFacebook size={24} />
            </button>
            <button className="text-blue-400 hover:text-blue-500">
              <FaTwitter size={24} />
            </button>
            <button className="text-blue-700 hover:text-blue-800">
              <FaLinkedin size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessScreen;