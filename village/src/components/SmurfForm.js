import React, { Component } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

class SmurfForm extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            name: ( this.props.smurf ? this.props.smurf.name : "" ),
            age: ( this.props.smurf ? this.props.smurf.age : "" ),
            height: ( this.props.smurf ? this.props.smurf.height : "" ),
            id: ( this.props.smurf ? this.props.smurf.id : null ),
            formType: this.props.formType
        };
    }
    
    addSmurf = event => {
        event.preventDefault();
        
        // add code to create the smurf using the api
        const smurf = {
            id: this.state.id,
            name: this.state.name,
            age: this.state.age,
            height: this.state.height
        };
        this.props.addSmurf( smurf );
        
        this.setState( {
            id: null,
            name: "",
            age: "",
            height: ""
        } );
    };
    
    handleInputChange = e => {
        this.setState( { [ e.target.name ]: e.target.value } );
    };
    
    render() {
        return (
            <div className="SmurfForm">
                <Form onSubmit={ this.addSmurf }>
                    <input
                        onChange={ this.handleInputChange }
                        placeholder="name"
                        value={ this.state.name }
                        name="name"
                    />
                    <input
                        onChange={ this.handleInputChange }
                        placeholder="age"
                        value={ this.state.age }
                        name="age"
                    />
                    <input
                        onChange={ this.handleInputChange }
                        placeholder="height"
                        value={ this.state.height }
                        name="height"
                    />
                    <Button type="submit">{ ( this.state.formType === "add" ? "Add" :
                        "Edit" ) }</Button>
                </Form>
            </div>
        );
    }
}

export default SmurfForm;
