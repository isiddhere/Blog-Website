import "./styles.css";
import { Link } from "react-router-dom";

const BlogItem = (props) => {
  return (
    <div className="blogItem">
      <Link to={`/blog/${props.blogs.id}`}>
        <img src={props.blogs.cover} className="cover" />
      </Link>
      <div className="category">{props.blogs.category}</div>
      <Link to={`/blog/${props.blogs.id}`}>
        <div>
          <h4>{props.blogs.title}</h4>
        </div>
      </Link>
      <Link to={`/blog/${props.blogs.id}`}>
        <p className="description">{props.blogs.description}</p>
      </Link>
      <div className="authorContainer">
        <img src={props.blogs.authorAvatar} className="authorAvatar" />
        <h3>
          {props.blogs.authorName}
          <p>{props.blogs.createdAt}</p>
        </h3>
      </div>
    </div>
  );
};

export default BlogItem;
