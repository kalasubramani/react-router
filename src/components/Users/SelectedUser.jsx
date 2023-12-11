import { Link, useParams } from "react-router-dom";
import "./UsersPage.css"

const SelectedUser = ({users})=>{
 //get the id from url 
 const {id} = useParams();
 
 //if users exists, find the selected user
 const selectedUser = users?.find((user)=>{
    return user.id === Number(id);
 });

 //form address string for selected contact
 const homeAddress =selectedUser ?
 selectedUser.address.street + " "+selectedUser.address.suite+ " "+selectedUser.address.city +" "+selectedUser.address.zipcode: "";


  return(
    <div>
      <h4>Selected User: {selectedUser?.name}</h4>
      {/* conditional display of selected contact */}
      {selectedUser && <div className="selected">
          {/* <h3>Selected contact Id # {selectedUser.id?selectedUser.id:"None"}</h3> */}
          <ul className="personalDetails">
          <li><span className="bold">Name : </span>{selectedUser ? selectedUser.name : ""}</li>
          <li><span className="bold">Id : </span>{selectedUser ? selectedUser.id : ""}</li>
          <li><span className="bold">User name : </span>{selectedUser ? selectedUser.username : ""}</li>
          <li><span className="bold">e-mail : </span>{selectedUser ? selectedUser.email : ""}</li>
          <li><span className="bold">Phone : </span>{selectedUser ? selectedUser.phone : ""}</li>
          <li><span className="bold">website : </span><a href={selectedUser ?`https://${selectedUser.website}`:""} target="_blank" rel="noreferrer" className="link">{selectedUser ? selectedUser.website : ""}</a></li>
          <li>
          <address>
          <span className="bold">Residing at: </span><a href={selectedUser ?`https://www.google.com/maps/search/${homeAddress}`:""} target="_blank" rel="noreferrer"><div className="locPin"></div><sub>Click</sub></a> <br></br>
          
           {selectedUser ? selectedUser.address.street : "NA"}<br></br>
            {selectedUser ? selectedUser.address.suite : ""}<br></br>
            {selectedUser ? selectedUser.address.city : ""}<br></br>
            {selectedUser ? selectedUser.address.zipcode : ""}
            </address>
          </li>
        </ul>
        <details className="companyDetails">
          <summary><span className="bold">Currently employed at  </span>{selectedUser ?"":"None"} </summary>         
            <p><span className="bold italic">{selectedUser ?selectedUser.company.name:""}</span><br></br>
            <span className="italic">{selectedUser ?selectedUser.company.catchPhrase:""} 
            {selectedUser ?selectedUser.company.bs:""}</span></p>
            
        </details>
        </div>}
      <Link to="/users">Back to all users</Link>
    </div>
  )

}

export default SelectedUser;