import { useEffect, useState } from 'react'
import axios from 'axios'
import {Link,useLocation,Route,Routes} from 'react-router-dom'
import './App.css'
import HomePage from './components/Home';
import UsersPage from './components/Users/UsersPage';
import PostsPage from './components/Posts/Posts';
import SelectedUser from './components/Users/selectedUser';
import SelectedPost from './components/Posts/SelectedPost';

function App() {
  //useState to track data
  const [users, setUserData] = useState([]);
  const [posts,setPostData]=useState([]);

  //useLocation hook
  const {pathname}= useLocation();
 
  //fetch user data
  useEffect(()=>{
      //call api
      const fetchUserData = async ()=>{
        const {data}=await axios.get("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
        setUserData(data);
      }//fetch

      fetchUserData();
    },[] );

    //fetch posts data
useEffect(()=>{
  //call api
  const fetchPostsData = async ()=>{
      const {data} = await axios.get("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/posts");
      setPostData(data);
  }
  fetchPostsData();
},[]);

  return (
    <>
      <div className="container">
       <h3>React router ...</h3>
       {/* add a nav bar to the page */}
       <nav className="navBar">        
        <Link to='/' className={pathname==="/"?'highlight': 'normal'}>Home</Link>
        <Link to='/users' className={pathname==="/users"?'highlight': 'normal'}>Users {users.length}</Link>   
        <Link to='/posts' className={pathname==="/posts"?'highlight': 'normal'}>Posts {posts.length}</Link>            
       </nav>
        {/* add routes to components based on url path */}
       <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/users' element={<UsersPage users={users}/>} />
        <Route path='/posts' element={<PostsPage posts={posts}/>}/>
        <Route path='/users/:id' element={<SelectedUser users={users}/> }/>
        <Route path='/posts/:id' element={<SelectedPost posts={posts}/>} />
       </Routes>
      </div>    
    </>
  )
}

export default App
