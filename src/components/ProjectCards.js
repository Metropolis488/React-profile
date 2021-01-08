import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"

function ProjectCards(props) {
    return (
        <div>
        <Card style={{ width: "18rm" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.desc}</Card.Text>
            <Button href={props.url}>Deployed Project</Button>
            <Button href={props.git}>Github Repo</Button>
        </Card.Body>
        </Card>
        <hr></hr>
        </div>
    )
}

export default ProjectCards;

