import React, { Component } from "react";

function SearchBox(props){

    return(

        <div>
            <input onChange={props.handleInput}type ="text" placeholder="search"></input>
        </div>
    )

}

export default SearchBox