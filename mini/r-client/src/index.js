import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import Dashboard from "./views/Dashboard"; 
import NewsList from './components/NewsList'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// import "./assets/css/bootstrap.min.css";
import './assets/css/style.css'; 
const App = () => {
  return (
    <BrowserRouter>
      <header className="app-header">
        <div className="header-content">
          <NavLink
            to="/"
            className="nav-link"
            style={({ isActive }) => ({ color: isActive ? '#aaa' : '#bbb' })}
          >
            Write!
          </NavLink>
          <NavLink
            to="/posts"
            className="nav-link"
            style={({ isActive }) => ({ color: isActive ? '#aaa' : '#bbb' })}
          >
            Posts
          </NavLink>
          <NavLink
            to="/news"
            className="nav-link"
            style={({ isActive }) => ({ color: isActive ? '#aaa' : '#bbb' })}
          >
            News by Category
          </NavLink>
        </div>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/posts/:id" element={<PostItem />} />
          <Route path="/posts" element={<PostList />} />
          {/* <Route path="/news/:id" element={<NewsList />} /> */}
          <Route path="/news" element={<NewsList/>} />
          <Route path="/" element={<Dashboard />} />
          <Route path="*" element={<h3>Oops, page not found</h3>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
