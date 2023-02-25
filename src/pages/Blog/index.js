import { useParams } from "react-router-dom";
import { blogs } from "../../config/data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Chip from "../../components/common/Chip";
import EmptyList from "../../components/common/EmptyList";
import "./styles.css";

const Blog = (props) => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let newBlog = blogs.find((blogs_p) => blogs_p.id === parseInt(id));
    if (newBlog) {
      setBlog(newBlog);
    }
  }, []);

  return (
    <div>
      <Link to="/">
        <span>&#8592;</span> Go Back
      </Link>

      {blog ? (
        <div className="blog-wrap">
          Published on {blog.createdAt}
          <h1>{blog.title}</h1>
          <div className="blog-wrap__subcategory">
            {blog.subCategory.map((category, index) => (
              <div>
                <Chip key={index} label={category} />
              </div>
            ))}
          </div>
          <div>
            <img className="blog-wrap__cover" src={blog.cover} />
          </div>
          <div className="blog-wrap__description">{blog.description}</div>
        </div>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};
export default Blog;
