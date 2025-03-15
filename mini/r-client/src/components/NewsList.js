import React from "react";
import NewsAdd from "./NewsAdd";

const NewsList = ({ newsProp }) => {
  if (!newsProp || !Array.isArray(newsProp)) {
    return <div>No news available.</div>;
  }
  return (
    <>
      <div className="news-list-container">
        {newsProp.map((category) => (
          <div key={category.id} className="post-item-container">
            <div className="post-header">
              <h6 className="post-title">_name_{category.name}</h6>
            </div>

            <div className="post-body">
              <ul>
              <li className="news-item-li">category.description: {category.description}</li>
                {Array.isArray(category.news) &&
                  category.news.map((item) => (
                    <li key={item.id} className="news-item-li">
                      <span>{"category.news.id:____"}{item.id}</span><br />
                      <span>{"category.news.title:__"}{item.title}</span><br />
                      <span>{"category.news.url:___"}</span>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="post-content"
                      >
                         {item.url}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="post-footer">
              Add a new research URL
              <NewsAdd categorySelected={category} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewsList;
