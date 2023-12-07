import { useParams } from "react-router-dom";
import "./index.css";
import blogs from "../../data/blogs";
import Title from "../Title";

const BlogDetails = () => {
  const { blogId } = useParams();

  // Find the portfolio item with the matching id
  const blog = blogs.find((item) => item.id.toString() === blogId);

  if (!blog) {
    return <div>Portfolio not found</div>;
  }

  return (
    <div className="main-layout">
      <Title title={blog.title} span={blog.title} />
      <div className="inner-layout blog-details">
        <div className="blog-img">
          <img src={blog.image} alt="" />
        </div>
        <div className="u-short-margin blog-details-des">
          <h2>Description:</h2>
          <p dangerouslySetInnerHTML={{ __html: blog.description }} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
