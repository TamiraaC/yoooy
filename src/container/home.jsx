import React from "react";
import { Link } from "react-router-dom";
import "./home.css"
import Text from "../components/text";
import Title from "../components/title2";
const Home = () => {
    return (
        <div className="button">
           <div className="buttons">
            <div className="text2">
            <Text/>
            <Title/>
            <Title/>
            </div>
            <div className="button-1">
                    <button className="button-1-1"><Link to={"/red"}>More</Link></button>
                    <button className="button-1-2"><Link to={"/white"}>More</Link></button> 
                    <button className="button-1-3"><Link to={"/green"}>More</Link></button>
            </div>
           </div>
        </div>
    ) 
    }
export default Home