import React, { Component } from "react";


function Employee(props){

    return(

        <React.Fragment>

    <tbody>
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.name}</td>
      <td>{props.age}</td>
    </tr>
  </tbody>
  </React.Fragment>
    )
}

export default Employee