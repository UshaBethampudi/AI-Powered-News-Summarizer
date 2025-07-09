const axios = require("axios");

// Simple summarizer: Extracts first 2–3 sentences
const summarizeText = (text) => {
  if (!text) return null;

  const sentences = text.match(/[^\.!\?]+[\.!\?]+/g); // split into sentences
  if (!sentences || sentences.length === 0) return null;

  return sentences.slice(0, 2).join(" ");
};

const getSummarizedNews = async (req, res) => {
  try {
    const category = req.query.category || "general";

    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&category=${category}&apiKey=${process.env.NEWS_API_KEY}`
    );

    const articles = response.data.articles;

    // Only include articles with valid summary
    const summaries = articles
      .map((article) => {
        const content = article.content || article.description || "";
        const summary = summarizeText(content);

        if (!summary || summary.length < 20) return null;

        return {
          title: article.title,
          url: article.url,
          image: article.urlToImage,
          summary,
        };
      })
      .filter(Boolean); // Removes nulls

    res.json(summaries);
  } catch (err) {
    console.error("❌ News API error:", err.message);
    res.status(500).json({ error: "Failed to fetch and summarize news." });
  }
};

module.exports = { getSummarizedNews };
