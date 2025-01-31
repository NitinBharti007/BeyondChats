import { useNavigate } from "react-router-dom";

const FailureScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
        <h2 className="text-3xl font-bold mb-6 text-red-500">Integration Not Detected ⚠️</h2>
        <p className="mb-6">We couldn't verify the chatbot installation. Please check:</p>

        <ul className="text-left list-disc pl-6 mb-8">
          <li>Code snippet is placed in &lt;head&gt; section</li>
          <li>No typos in the implementation</li>
          <li>Website is publicly accessible</li>
        </ul>

        <button
          onClick={() => navigate(-1)}
          className="w-full bg-purple-500 text-white p-3 rounded-lg hover:bg-purple-600 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default FailureScreen;