import React from "react"
import Navbar from "../Components/Navbar";
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <>
            <Navbar />
            <h1>Home</h1>
            <Link style={{color: "black"}} to={`/`}>
                Learn geografy
            </Link>
        </>
    )
}

export default HomePage;