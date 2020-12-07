import React, { Component } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';

class Main extends Component{
    render(){
        return(
            <div className="main">
                <span className="logo-google">
                    <span className="g1">G</span>
                    <span className="g2">o</span>
                    <span className="g3">o</span>
                    <span className="g4">g</span>
                    <span className="g5">l</span>
                    <span className="g6">e</span>
                </span>
                <AiOutlineShareAlt/>
            </div>
        );
    }
}

export default Main;