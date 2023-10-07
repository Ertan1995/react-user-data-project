import Navi from "./components/Navi"

import UsersList from "./components/UsersList"
import '../src/style/App.css';
import { useEffect, useState } from "react";
import AddUser from "./components/AddUser";


// http://localhost:3005/data




function App() {
  const [users,setUsers]=useState([]);
const getData=async()=>{
const response =await fetch("http://localhost:3005/data")
const result=await response.json();
setUsers(result);
}

useEffect(()=>{getData();},[])
  return (
    <div className="app-container">

     <Navi />
     <AddUser users={users} setUsers={setUsers}/>
     <UsersList users={users.filter(user=>!user.isDeleted)}/>
     
    </div>
  );
}

export default App;
