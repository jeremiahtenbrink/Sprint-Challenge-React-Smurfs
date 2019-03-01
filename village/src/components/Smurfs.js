import React, { Component } from "react";

import Smurf from "./Smurf";

class Smurfs extends Component {
    render() {
        return (
            <div className="Smurfs">
                <h1>Smurf Village</h1>
                <ul>
                    { this.props.smurfs.map( smurf => {
                        return (
                            <Smurf
                                key={ smurf.id }
                                smurf={ smurf }
                                editSmurf={ this.props.editSmurf }
                                deleteSmurf={ this.props.deleteSmurf }
                            />
                        );
                    } ) }
                </ul>
            </div>
        );
    }
}

Smurf.defaultProps = {
    smurfs: [],
};

export default Smurfs;
