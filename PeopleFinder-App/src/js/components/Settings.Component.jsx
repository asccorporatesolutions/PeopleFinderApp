import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class Settings extends React.Component {
  render() {
    return (        
        <div>
        <h1></h1>
         <Header/>
         <Data/>
         <Logout/>
         </div>      
    );
  }
}

class Header extends React.Component {
  render() {
    return (
 
        <h1>Header</h1>
         
      
    );
  }
}

class Data extends React.Component {
  render() {
    return (    
        <div>  
       Leave PeopleFinder Feedback<br/>
               About the App<br/>
               Terms and Conditions<br/>
     </div>
    );
  }
}



class Logout extends React.Component {
  render() {
    return (    
        <div>Logout </div>       
    
    );
  }
}

export default Settings;