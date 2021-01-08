import React from "react";
import ProjectCards from "../components/ProjectCards"
import Projects from "../assets/projects.json";

function Container() {
    return (
        <div>
            {Projects.map(x =>
                <ProjectCards
                title={x.title}
                url={x.url}
                git={x.gitHub}
                img={x.img}
                desc={x.description}
                />
                )}
        </div>
    )
}

export default Container;