import React from 'react';
import { useParams } from "react-router-dom";
import './BlogDetails.css';

const blogs = [
  { id: 1, title: 'Exploring the Wilderness', about: "Nature is an inherent character or constitution,[1] particularly of the ecosphere or the universe as a whole. In this general sense nature refers to the laws, elements and phenomena of the physical world, including life. Although humans are part of nature, human activity or humans as a whole are often described as at times at odds, or outright separate and even superior to nature.[2]",  description: 'Discover the joys of hiking and explore the breathtaking beauty of nature.', image: "https://www.bsr.org/images/heroes/bsr-focus-nature-hero.jpg" },
  
    {
      id: 2, title: 'Travel and have fun',about: "The origin of the word travel is most likely lost to history. The term travel may originate from the Old French word travail, which means 'work'.[2] According to the Merriam-Webster dictionary, the first known use of the word travel was in the 14th century. It also states that the word comes from Middle English travailen, travelen (which means to torment, labor, strive, journey) and earlier from Old French travailler (which means to work strenuously, toil).",  description: 'Jobs fill your pocket, but adventures fill your soul. Traveling is the best thing!', image: "https://www.travelandleisure.com/thmb/MriQxOVvVJ1MLNgWUXbGl8L2rGk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-Backpacker-BUDGET0323-eeaf531276694f93966baa8fbcd2730d.jpg"
    },
    {
      id: 3, title: 'Eat only healthy food',about: "A healthy diet includes the following: Fruit, vegetables, legumes (e.g. lentils and beans), nuts and whole grains (e.g. unprocessed maize, millet, oats, wheat and brown rice). At least 400 g (i.e. five portions) of fruit and vegetables per day (2), excluding potatoes, sweet potatoes, cassava and other starchy roots.",   description: 'Healthy food is good for your health!', image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/health/wp-content/uploads/2022/01/foods_to_eat_to_lose_weight.jpeg"
    }
];

const getBlogById = (id) => {
  return blogs.find(blog => blog.id === parseInt(id));
}

const BlogDetails = () => {
  const { id } = useParams();
  const blog = getBlogById(id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-details">
      <h1>{blog.title}</h1>
      <p>{blog.about}</p>
      <img src={blog.image} alt={blog.title} />
      <p>{blog.description}</p>
    </div>
  );
}

export default BlogDetails;
