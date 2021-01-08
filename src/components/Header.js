import React from "react";
import "./style.css";
import photo from "../assets/aliens.JPG"

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h1 className="display-4 lead">Matt Steiner</h1>
                    <p className="lead">Product Management</p>
                    <p className="lead">Web Development</p>
                </div>
                <div className="col-md-4 header1">
                <img class="img-fluid mx-auto d-block header2" src={photo} alt="Norway"></img>
                </div>
            </div>
            </div>
        </div>
    )
} 

export default Header;