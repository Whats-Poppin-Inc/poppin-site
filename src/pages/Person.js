import React from "react";
import { useParams } from "react-router";
import '../App.css';
import PersonCard from "../layouts/PersonCard";
import logo from "../logo.png";

function Person(props){
    let params = useParams();
    return(
        <h1>Test {params.Name}</h1>
    )
}
export default Person;