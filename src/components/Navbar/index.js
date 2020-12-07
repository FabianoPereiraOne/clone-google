import React, { Component } from 'react';
import {AiOutlineAudio, AiOutlineMenu, AiOutlineSearch, AiOutlineAppstore} from 'react-icons/ai'
import logo from '../resources/android.png'

class Navbar extends Component{
    render(){
        return(
            <div className="nav">
                <div className="nav-left">
                    <AiOutlineMenu/>
                    <a href="#">all</a>
                    <a href="#">images</a>
                </div>
                    <div className="nav-right">
                    <AiOutlineAppstore/>
                    <img src={logo} alt="logo"/>
                </div>
            </div>
        );
    }
}
export default Navbar;