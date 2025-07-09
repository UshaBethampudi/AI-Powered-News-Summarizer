import React from "react";

const NewsCard = ({ title, summary, image, url }) => {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white shadow-md rounded overflow-hidden transition-all">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm">{summary}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 mt-2 block"
        >
          🔗 Read full article →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
