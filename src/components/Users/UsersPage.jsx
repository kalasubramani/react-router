import { Link } from "react-router-dom"
import "./UsersPage.css"

const UsersPage=({users})=>{
  // if users exists map it to list
  const userdata = users?.map((user)=>{
    // map each user to a list item - with a child - Link
    return (<li key={user.id} className="listitem"><Link to={`/users/${user.id}`}>{user.name}</Link></li>)
  })

  return(
    <div className="users">
      <h4>User List</h4>
       <ul className="liststyle">
        {/* display list of users */}
        {userdata}
       </ul>
    </div>
  )
}

export default UsersPage;