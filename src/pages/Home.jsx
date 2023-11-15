import React from "react";
import Header from "../components/Header";
import "../css/Home.css"

function Home(){
    return(
        <div>
            <div>
                <Header />
            </div>
            <div className="homeContainer">
                <h1>Home</h1>
            </div>
        </div>
    )
}
export default Home