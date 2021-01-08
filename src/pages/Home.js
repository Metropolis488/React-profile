import React from "react";
import Container from "../components/Carousel";

function Home() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
            <h1 className="project">Projects</h1>
            <Container />
            </div>
            <div className="col-md-2"></div>
        </div>
        </div>
    )
}

export default Home;