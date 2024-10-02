import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="content">
        <h1>Welcome to My Blog</h1>
        <p>Explore more of our blogs</p>
        <Link to="/blogs">
          <button className="read-more-button">Read Latest Blog</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
