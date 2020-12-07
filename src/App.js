import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/main';

class App extends Component {

  render(){
    return(
      <div className="App">
         <Navbar/>
         <Main/>

         <div className="search">
           <div className="input-search">

           </div>
           <div className="text-language">
            <span className="text">Google offered:</span>
            <a href="#" className="link-language">Português (Brasil)</a>
           </div>
         </div>
         
      </div>
    );
  }

}
export default App;