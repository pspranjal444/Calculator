import React, { Component } from 'react';

class Display extends Component{
    

    render(){
        return(
            <div>
                <input type="text" readOnly value={this.props.number}></input>
            </div>
        );
    }
}

export default Display;