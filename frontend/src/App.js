import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import OrganizationSetup from "./components/OrganizationSetup";
import ChatbotIntegration from "./components/ChatbotIntegration";
import SuccessScreen from "./components/SuccessScreen";
import FailureScreen from "./components/FailureScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/setup-organization" element={<OrganizationSetup />} />
        <Route path="/chatbot-integration" element={<ChatbotIntegration />} />
        <Route path="/integration-success" element={<SuccessScreen />} />
        <Route path="/integration-failure" element={<FailureScreen />} />
      </Routes>
    </Router>
  );
};

export default App;