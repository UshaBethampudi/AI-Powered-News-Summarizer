import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";

const Home = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/news/summarized");
        setNews(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        🧠 AI-Based News Summarizer
      </h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading summaries...</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {news.map((item, index) => (
            <NewsCard key={index} news={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
