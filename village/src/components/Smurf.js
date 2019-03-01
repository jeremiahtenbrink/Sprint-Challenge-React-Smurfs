import React from "react";
import { Card, Button } from "semantic-ui-react";

const Smurf = ( { smurf, editSmurf, deleteSmurf } ) => {
    return (
        <Card className="Smurf">
            <Card.Content>
                <Card.Header>{ smurf.name }</Card.Header>
                <strong>Height: { smurf.height } tall</strong>
                <p>Age: { smurf.age } smurf years old</p>
            </Card.Content>
            <Card.Content extra>
                <Button onClick={ () => editSmurf( smurf ) }>Edit</Button>
                <Button onClick={ () => deleteSmurf( smurf.id ) }>Delete</Button>
            </Card.Content>
        </Card>
    );
};

Smurf.defaultProps = {
    name: "",
    height: "",
    age: ""
};

export default Smurf;

