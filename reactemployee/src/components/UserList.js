import React, { Component } from "react";
import Employee from "./Employee"

function UserList(props){
    let employees = props.filteredEmployees.map((user, i) =>{
        return <Employee key ={i} id ={user.id}name= {user.name} age={user.age} />
    })
    return (
        <div>
   
  <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col"><button onClick ={()=> props.sortBy("name")}>Full Name</button></th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  {employees}

  </table>
           
        </div>
    )
}

export default UserList