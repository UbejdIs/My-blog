
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';

const BlogList = () => {
  const blogs = [
    { id: 1, title: 'Exploring the Wilderness', description: 'Discover the joys of hiking and explore the breathtaking beauty of nature.', image: "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg" },
    {
      id: 2, title: 'Travel and have fun', description: 'Jobs fill your pocket, but adventures fill your soul. Traveling is the best thing!', image: "https://www.travelandleisure.com/thmb/MriQxOVvVJ1MLNgWUXbGl8L2rGk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-Backpacker-BUDGET0323-eeaf531276694f93966baa8fbcd2730d.jpg"
    },
    {
      id: 3, title: 'Eat only healthy food', description: 'Healthy food is good for your health!', image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2022/01/foods_to_eat_to_lose_weight.jpeg"
    }
  ];

  return (
    <div>
      <div className="content">
        <h1>Blog List</h1>
        <div className="content2">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-list-item">
            <img src={blog.image} alt="" />
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <Link to={`/blogs/${blog.id}`}>
              <button className="read-more-button">Read More</button>
            </Link>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default BlogList;
