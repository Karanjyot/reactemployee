import React, { useState, useEffect } from "react";
import axios from "axios";
const Employee = () =>{

const [employee, setEmployee] = useState([])
const [search, setSearch] = useState("")

const employeeArr =[]

    
 const fetchEmployee = async () =>{

    const response = await axios.get (

        'https://jsonplaceholder.typicode.com/users'
    );

setEmployee(response.data);

console.log(response.data)
console.log(employee)

employeeArr.push(employee)

 };   
    
 useEffect(()=>{
    fetchEmployee();
 },[])
 

    return (

   
        <div>
            
            <ul>{employee.map(record => <li>{record.name}</li>)}</ul>
        
            {/* <input type="submit" onClick={handleFormSubmit}></input> */}
            <h1>{employee.name}</h1>
            <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Full Name</th>
      <th scope="col">Username</th>
      <th scope="col">email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{employee.name}</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

        </div>
    )

}

export default Employee