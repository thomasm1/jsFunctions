import React, { PureComponent, useState, useEffect } from "react";
import PostCreate from "../components/PostCreate";
import PostList from "../components/PostList";
import NewsList from "../components/NewsList";
import Header from "./Header";
import Footer from "./Footer";
import Filter from "../components/Filter";
import axios from "axios";
import { CATEGORY_BASE_URL } from "../config";

class Dashboard extends PureComponent {
  constructor() {
    super();
    this.state = {
      news: [], 
      footerText:
        "&copy; 2021 All Rights Reserved | thomasmaestas.net | The News Room",
      filtered: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    try {
      const response = await axios.get(`${CATEGORY_BASE_URL}/categories`);
      const categories = response.data;
      this.setState({ news: categories, filtered: categories, loading: false });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  };

  getKeywords = (keywords) => {
    if (keywords === "") {
      this.setState({ filtered: this.state.news });
      return;
    }
    const filteredCategories = this.state.news
      .map((category) => ({
        ...category,
        news: category.news.filter((item) =>
          (item.title.toLowerCase().includes(keywords.toLowerCase())  ||
          item.url.toLowerCase().includes(keywords.toLowerCase()))
        ),
      }))
      .filter((category) => category.news.length > 0); 

    this.setState({ filtered: filteredCategories });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <Filter getKeywords={this.getKeywords}>
              {this.state.loading && <div>Loading...</div>}
              {!this.state.loading && (
                <NewsList newsProp={this.state.filtered} />
              )}
            </Filter>
          </div>
          <hr />
          <hr />
          <div className="row">
            <div className="col-md-8">
              <h1>Write Post</h1>
              <PostCreate />
              <hr />
              <hr />
              <h1>Posts</h1>
              <PostList />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Dashboard;
