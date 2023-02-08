import React from "react";
import "./text.css"
import zurag from "../assest/banner3.jpg"
const Text = () =>{
    return(
        <div className="text">
            <h1>
                TITLE 1
            </h1>
            <div className="text-1">
               <img src={zurag} alt="/"/> 
            </div>
            <h3>
            Lorem ipsum dolor sit amet,
             consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Ut enim ad minim veniam, quis nostrud exercitation
             ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
               cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
            </h3>
        </div>
    )
}
export default Text