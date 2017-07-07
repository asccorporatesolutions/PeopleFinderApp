import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class OrgChart extends React.Component {
  render() {
    return (        
        <div>
        <h1></h1>
         <Header/>
         <Manager/>
         <CurrentlySelected/>
         <Peers/>
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

class Manager extends React.Component {
  render() {
    return (    
        <div>  
        Manager
               
     </div>
    );
  }
}

class CurrentlySelected extends React.Component {
  render() {
    return (    
      <div>
        <h1>Currently Selected</h1> 
        <ViewProfile/><br/>
        <Contact/> 
        </div>   
    );
  }
}

class ViewProfile extends React.Component {
  render() {
    return (    
        <Link to="myprofile"><button type="submit">View Profile</button></Link>         
    
    );
  }
}

class Contact extends React.Component {
  render() {
    return (    
        <Link to="contact"><button type="submit">Contact</button></Link>         
    
    );
  }
}

class Peers extends React.Component {
  render() {
    return (    
        <h1>Peers</h1>         
    
    );
  }
}

export default OrgChart;