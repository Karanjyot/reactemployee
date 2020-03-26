import React, { Component } from "react";

function SearchBox(props){

    return(

        <div>
            <input onChange={props.handleInput}type ="text"></input>
        </div>
    )

}

export default SearchBox