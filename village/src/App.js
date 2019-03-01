import React, { Component } from "react";
import { Route, Link, withRouter } from "react-router-dom";

import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import axios from "axios";
import { Header, Icon, Image, Segment, Sidebar, Menu, Container } from "semantic-ui-react";

class App extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            smurfs: [],
            visible: true,
            smurf: null,
            editSmurf: false
        };
    }
    
    componentDidMount = () => {
        axios.get( "http://localhost:3333/smurfs" )
            .then( res => {
                debugger;
                this.setState( { smurfs: res.data } );
            } )
            .catch( err => console.log( err ) );
    };
    
    addSmurf = smurf => {
        debugger;
        axios.post( "http://localhost:3333/smurfs", smurf )
            .then( res => {
                debugger;
                this.setState( { smurfs: res.data } );
            } )
            .catch( err => console.log( err ) );
    };
    
    editSmurf = smurf => {
        debugger;
        axios.put( `http://localhost:3333/smurfs/${ smurf.id }`, smurf )
            .then( res => {
                debugger;
                this.setState( { smurfs: res.data, smurf: null } );
            } )
            .catch( err => console.log( err ) );
        this.props.history.push( "/" );
    };
    
    setEdit = smurf => {
        debugger;
        this.setState( { editSmurf: smurf } );
        this.props.history.push( "/edit" );
    };
    
    delete = smurfId => {
        debugger;
        axios.delete( `http://localhost:3333/smurfs/${ smurfId }` )
            .then( res => {
                debugger;
                this.setState( { smurfs: res.data } );
            } )
            .catch( err => console.log( err ) );
    };
    
    // add any needed code to ensure that the smurfs collection exists on state and it has data
    // coming from the server
    // Notice what your map function is looping over and returning inside of Smurfs.
    // You'll need to make sure you have the right properties on state and pass them down to props.
    render() {
        return (
            <Container>
                <div className="App">
                    <Sidebar.Pushable as={ Segment }>
                        <Sidebar
                            as={ Menu }
                            animation='push'
                            icon='labeled'
                            inverted
                            onHide={ this.handleSidebarHide }
                            vertical
                            visible={ this.state.visible }
                            width='thin'
                        >
                            <Link to={ "/" }>
                                <Menu.Item>
                                    <Icon name='home' />
                                    Home
                                </Menu.Item>
                            </Link>
                            <Link to={ "/add" }>
                                <Menu.Item>
                                    <Icon name='add' />
                                    Add
                                </Menu.Item>
                            </Link>
                        </Sidebar>
                        
                        <Sidebar.Pusher>
                            <Segment basic>
                                <Route
                                    exact
                                    path={ "/" }
                                    render={ () => <Smurfs
                                        smurfs={ this.state.smurfs }
                                        deleteSmurf={ this.delete }
                                        editSmurf={ this.setEdit } /> } />
                                <Route
                                    path={ "/add" }
                                    render={ () => <SmurfForm
                                        smurf={ null }
                                        formType={ "add" }
                                        addSmurf={ this.addSmurf } /> } />
                                <Route
                                    path={ "/edit" }
                                    render={ () => <SmurfForm
                                        smurf={ this.state.editSmurf }
                                        formType={ "edit" }
                                        addSmurf={ this.editSmurf } /> } />
                            </Segment>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                
                </div>
            </Container>
        
        );
    }
}

export default withRouter( App );
