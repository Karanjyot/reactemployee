import React, { Component } from "react";
import Employee from "./EmployeeTable";
import UserList from "./UserList";
import SearchBox from "./SearchBox";



// const App = () =>{


    
//     return(
//         <div>
//         <h1>hello world</h1>
//         <Employee />
//         </div>

      
//     )
// };


class App extends Component{

    state ={
        employees: [{
            id: 1,
            name: "karanjyot",
            age: "26"
        },
        {
            id: 2,
            name: "david",
            age: "20"
        },
        {
            id: 3,
            name: "mike",
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
            <h1>dogs</h1>
            <UserList filteredEmployees={filteredEmployees} sortBy={this.sortBy} />
            <SearchBox handleInput={this.handleInput}/>
        </div>
    )
}


}
export default App