import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import contact from '../../static/css/contact.css';

var search1 = {
  margin: "6px"
};

class Contact extends React.Component {
  render() {
    return (        
        <div>
        <h1></h1>
         <Header/>
         <UserData/>
         <AddToContacts/>
         <PhoneInformation/>
         <EmailInformation/>
         <AddressInfo/>
         </div>      
    );
  }
}

class Header extends React.Component {
  render() {
    return (
 
        <h1></h1>
         
      
    );
  }
}

class UserData extends React.Component {
  render() {
    return (    
       
         <div id="content" className={contact.content}> 
       <img className={contact.img} src='https://static.asc.aon.net/pfimages/temp_ABB55201ah82492_MThumb.jpg'/>
       <div className={contact.userinfo}>
         <span className={contact.name}> Gaurav Saxena </span>
       <br/> <span className={contact.designation}> Manager II </span>
       </div>
       
       
      </div>
               
   
    );
  }
}

class AddToContacts extends React.Component {
  render() {
    return (    
      <div className={contact.AddToContacts}>
        <button type="submit">Add To Contacts</button>
        </div>  
    );
  }
}

class PhoneInformation extends React.Component {
  render() {
    return (   
      <div> 
          Phone number
          <Call/>
</div>
    
    );
  }
}

class Call extends React.Component {
  render() {
    return (    
        <button type="submit">Call</button>         
    
    );
  }
}

class EmailInformation extends React.Component {
  render() {
    return (    
        <div>
        Email Address
        <Email/>
        </div>        
    
    );
  }
}

class Email extends React.Component {
  render() {
    return (    
        <div>
       <button type="submit">Email</button>
        </div>        
    
    );
  }
}

class AddressInfo extends React.Component {
  render() {
    return (    
        <div>
        Office Address
       <Map/>
        </div>        
    
    );
  }
}

class Map extends React.Component {
  render() {
    return (    
        <div>
      <button type="submit">Map</button>
        </div>        
    
    );
  }
}

export default Contact;