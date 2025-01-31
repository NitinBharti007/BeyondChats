# BeyondChats UI

This project implements the UI/UX for setting up a chatbot for new businesses using React and Tailwind CSS.

## Project Structure
\`\`\`
beyondchats/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Registration.js
│   │   │   ├── OrganizationSetup.js
│   │   │   ├── ChatbotIntegration.js
│   │   │   ├── ScrapingStatus.js
│   │   │   ├── SuccessScreen.js
│   │   │   └── FailureScreen.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   ├── tailwind.config.js
│   └── postcss.config.js
└── README.md
\`\`\`

## Features
- **User Registration**
  - Enter name, email, password
  - Continue with Google (UI only)
  - Email verification step
- **Organization Setup**
  - Enter company name, website URL, and description
  - Auto-fetch meta description (UI placeholder for now)
- **Scraping Status**
  - Display detected and pending webpages
  - Show scraped data chunks per page (dummy data)
- **Chatbot Integration**
  - Embed chatbot UI preview on client's website
  - Integration guide & email instructions
  - Testing UI with success/failure handling
- **Success & Failure Screens**
  - Confetti UI for successful integration
  - Failure UI with retry options

## Installation & Setup
1. **Clone the repository**
   \`\`\`sh
   git clone https://github.com/your-username/beyondchats-ui.git
   cd beyondchats/frontend
   \`\`\`
2. **Install dependencies**
   \`\`\`sh
   npm install
   \`\`\`
3. **Run the development server**
   \`\`\`sh
   npm start
   \`\`\`
4. **Build for production**
   \`\`\`sh
   npm run build
   \`\`\`

## Technologies Used
- React.js
- Tailwind CSS
- Node.js (for setup only, no backend functionality)

## Contributing
If you'd like to contribute, feel free to fork this repository, create a feature branch, and submit a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, please reach out to [your-dev.nitin63@gmail.com](mailto:dev.nitin63@gmail.com).
