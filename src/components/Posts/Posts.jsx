import { Link } from "react-router-dom";
import "./Posts.css"

const PostsPage=({posts})=>{

//if posts exists, map to list item 
  const postdata = posts?.map((post)=>{
     return (<li key={post.id} className="listitem postItem"><Link to={`/posts/${post.id}`}> {post.title}</Link> </li>)
  })

  return(
    <div className="users">
      <h4>User Posts</h4>      
          <ul className="liststyle">
            {/* display post data as list item */}
          {postdata}
         </ul>      
    </div>
  )
}

export default PostsPage;