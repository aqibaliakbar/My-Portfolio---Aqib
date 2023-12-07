import blogs from "../../data/blogs";
import Title from "../../components/Title";
import "./index.css"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";



const BlogPage = () => {
   const itemVariants = {
     hidden: { opacity: 0, x: -30 },
     visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
   };
  
  return (
    <div className="main-layout">
      <Title title={"Blogs"} span={"Blogs"} />
      <div className="inner-layout blogs-details">
        {blogs.map((blog) => {
          return (
            <motion.div
              key={blog.id}
              className="blog-item"
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              <div className="image">
                <img src={blog.image} alt="blog-Img" />
              </div>
              <h4 className="title">
                <Link to={`/blogs/${blog.id}`} className="blog-title">
                  <h6>{blog.title}</h6>
                </Link>
              </h4>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;
