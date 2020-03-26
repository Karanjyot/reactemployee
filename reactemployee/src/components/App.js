import React, { Component } from "react";
import Employee from "./EmployeeTable";
import UserList from "./UserList";
import SearchBox from "./SearchBox";



class App extends Component{

    state ={
        employees: [{
            id: 1,
            name: "Lebron",
            age: "40"
        },
        {
            id: 2,
            name: "Jordan",
            age: "50"
        },
        {
            id: 3,
            name: "Kawhi",
            age: "200"
        },
    ],
    searchUser: ""
};

handleInput = (e) =>{
    this.setState({ searchUser:e.target.value })

}

render(){
    let filteredEmployees = this.state.employees.filter((user) =>{
        return user.name.toLowerCase().includes(this.state.searchUser.toLowerCase())
    })
    return(
        <div>
            <h1>Employees</h1>
            <SearchBox handleInput={this.handleInput}/>
            <UserList filteredEmployees={filteredEmployees} sortBy={this.sortBy} />
          
        </div>
    )
}


}
export default App