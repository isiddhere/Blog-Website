import BlogItem from "./BlogItem";
import "./styles.css";
import EmptyList from "../../common/EmptyList";

const BlogList = (props) => {
  if (props.blogs_arr.length == 0) {
    return (
      <EmptyList />
    );
  }

  return (
    <div>
      <div className="blogList-wrap">
        {props.blogs_arr.map((blogs_arr_p) => (
          <BlogItem blogs={blogs_arr_p} key={blogs_arr_p.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
