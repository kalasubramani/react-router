import { Link, useParams } from "react-router-dom";
import "./Posts.css";

const SelectedPost = ({ posts }) => {
  //get id from url
  const { id } = useParams();

  //if posts exists, find selected post from posts
  const selectedPost = posts?.find((post) => {
    return post.id === Number(id);
  });

  return (
    <>
      <div className="selected">
        <h4>{selectedPost?.title}</h4>
        <p className="postData">{selectedPost?.body}</p>
      </div>
      <Link to="/posts">Back to all posts</Link>
    </>
  );
};

export default SelectedPost;
