import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

// const User= ({ match })=>{
//     return(
//         <h1>User {match.params.name} page</h1>
//     )
// }
const User= ()=>{
    const {name,lname} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(navigate);
    return(
        <>
            <h1>User {name} {lname} page</h1>
            <p>The file location is {location.pathname}</p>
    
            <button onClick={()=> navigate("/")} > Go Home Page </button>
        </>
    )
}
export default User;