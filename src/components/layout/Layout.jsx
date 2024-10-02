import { Link } from 'react-router-dom';
import "../layout/layoutt.css"
const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <div className="the-tittle-layout">
        <h1>My Blog</h1>
        </div>
        <div className="the-subtittle-layout">
          <h3>Blogs</h3>
          </div>
      </nav>
      <div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
