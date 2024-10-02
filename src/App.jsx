import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import BlogList from './components/blogList/BlogList';
import BlogDetails from './components/blogDetails/BlogDetails';
import Layout from './components/layout/Layout'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout><Home /></Layout>}
        />
        <Route
          path="/blogs"
          element={<Layout><BlogList /></Layout>}
        />
        <Route
          path="/blogs/:id"
          element={<Layout><BlogDetails /></Layout>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;