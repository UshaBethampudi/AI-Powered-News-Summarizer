# 🧠 AI-Powered News Summarizer

An intelligent **AI-integrated MERN Stack** web app that fetches real-time news using **NewsAPI** and summarizes each article with **Natural Language Processing (NLP)**. Users can explore news by category, search through articles, and switch between light/dark modes — all in a modern, responsive UI.

---

## 🚀 Features

- 📰 **Live News Feed** from multiple categories
- 🤖 **AI-Powered Summarization** using simple NLP logic
- 🔍 **Search Filter** to find relevant articles quickly
- 📂 **Category Filter** (Technology, Business, Sports, etc.)
- 🌗 **Dark/Light Mode Toggle**
- 📱 **Fully Responsive** on all devices

---

## 🧰 Technologies Used

### ✅ Full Stack (MERN):
- **Express.js** – REST API backend
- **React.js** – Frontend UI with hooks
- **Node.js** – Server environment

### ✅ AI / NLP:
- Custom **text summarizer** using sentence segmentation  
- Logic-based **Natural Language Processing**

### ✅ Other Tools:
- **NewsAPI** – Real-time news data
- **Axios** – HTTP requests
- **Tailwind CSS** – UI styling
- **dotenv** – Secure environment configs

---

## 📁 Project Structure

ai-news-summarizer/
├── client/ # React frontend
│ ├── components/ # Reusable UI elements
│ ├── App.js
│ └── ...
├── server/ # Express backend
│ ├── controllers/
│ ├── routes/
│ ├── index.js
│ └── ...
└── .env # API keys

---

## 🔐 Environment Variables

Create a `.env` file inside the `server/` folder:

```env
NEWS_API_KEY=your_newsapi_key
🛠️ Setup Instructions
1. Clone the Repository
git clone https://github.com/UshaBethampudi/ai-news-summarizer.git
2. Backend Setup
cd server
npm install
npm start
3. Frontend Setup
cd client
npm install
npm start
🎯 Use Case
This app helps:

🧑‍💻 Developers demonstrate AI + MERN integration

🗞️ Readers skim news with quick summaries

🧠 Employers assess real-world NLP projects

📃 License
Open source under MIT License

🙋‍♀️ Author
Developed by Usha Sravanthi Bethampudi
