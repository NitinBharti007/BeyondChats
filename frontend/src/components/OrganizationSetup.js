import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ScrapingStatus from "./ScrapingStatus";

const OrganizationSetup = () => {
  const [companyName, setCompanyName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [description, setDescription] = useState("");
  const [scrapingStatus, setScrapingStatus] = useState(null);
  const navigate = useNavigate();

  const fetchMetaDescription = async () => {
    if (!websiteUrl) {
      alert("Please enter a valid website URL.");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/fetch-meta", { url: websiteUrl });
      if (response.data.success) {
        setDescription(response.data.description);
      } else {
        alert("Failed to fetch meta-description. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching meta-description:", error);
      alert("Failed to fetch meta-description. Please check the URL and try again.");
    }
  };

  const fetchScrapingStatus = async () => {
    const response = await axios.get("http://localhost:5000/scraping-status");
    setScrapingStatus(response.data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Setup Organization</h2>
        <form>
          <input
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="url"
            placeholder="Website URL"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Company Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="button"
            onClick={fetchMetaDescription}
            className="w-full p-3 mb-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
          >
            Auto-fetch Meta Description
          </button>
          <button
            type="button"
            onClick={fetchScrapingStatus}
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Check Scraping Status
          </button>
        </form>
        {scrapingStatus && <ScrapingStatus data={scrapingStatus} />}
        <button
          onClick={() => navigate("/chatbot-integration")}
          className="w-full p-3 mt-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300"
        >
          Proceed to Chatbot Integration
        </button>
      </div>
    </div>
  );
};

export default OrganizationSetup;