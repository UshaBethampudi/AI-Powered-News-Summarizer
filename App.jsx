import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./components/NewsCard";

const categories = [
  "general",
  "technology",
  "sports",
  "health",
  "entertainment",
  "business",
  "science",
];

const App = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const fetchNews = async (cat) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/news/summarized?category=${cat}`
      );
      setNews(res.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  // 🛠 Filter out articles with no/invalid summaries + apply search
  const filteredNews = news
    .filter(
      (article) =>
        article.summary &&
        article.summary !== "❌ Summary could not be generated." &&
        (article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
         article.summary.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
            📰 AI News Summarizer
          </h1>

          {/* Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded bg-indigo-600 dark:bg-indigo-500 text-white text-sm"
          >
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-1 text-sm rounded-full ${
                category === cat
                  ? "bg-indigo-600 text-white"
                  : "bg-white dark:bg-gray-700 dark:text-white border border-gray-300 dark:border-gray-600"
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="mb-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search news..."
            className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white dark:border-gray-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* News Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.length > 0 ? (
            filteredNews.map((item, idx) => <NewsCard key={idx} {...item} />)
          ) : (
            <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
              No news found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
