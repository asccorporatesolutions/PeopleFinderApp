import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import { Layout, NavDrawer, Panel, Sidebar,AppBar, Checkbox, IconButton } from 'react-toolbox';
import Navigation from 'react-toolbox/lib/navigation';
import profile from '../../static/css/profileview.css';
import contactphoto from '../../static/images/introProfile@3x.png';
import orgchartimg from '../../static/images/introOrgchart@3x.png';
import locationicon from '../../static/images/locationicon.png';
import lewisimg from '../../static/images/lewis.jpg';

class MyProfile extends React.Component {
  render() {
    return (        
        <div>       
         
         <ProfileData/>
         <Footer/>
         </div>      
    );
  }
}

class Header extends React.Component {
  render() {
    return (
 <div>
       
        
      </div>
    );
  }
}

// class Settings extends React.Component {
//   render() {
//     return (
 
//         <Link to="settings"><button type="submit">Settings</button></Link>
         
      
//     );
//   }
// }

class ProfileData extends React.Component {
  render() {
    return (    
          
        <div id="wrapper" className={profile.wrapper}>
  <div id="content" className={profile.content}> 
       <img src={lewisimg} height="100" width="100"/>
       <div id="sidebar" className={profile.sidebar}>
      <ContactImg/>
 <OrgChartImg/>   
</div> 
       <br/> <span className={profile.name}> Lewis Watson </span>
      <br/> <span className={profile.title}> Delivery Manager </span>
       <br/> <span className={profile.bu}> Business Unit </span>
        <br/> <span className={profile.location}><img src={locationicon}/><span className={profile.city}> Chicago</span> </span>
       
      </div> 
   <div className={profile.details}>
<br/><div id="content2" className={profile.header}>My Summary </div>          
  <div id="content2" className={profile.contents}> I have 10 years of experience working with youth agencies. I have a bachelor’s degree in outdoor education. I raise money, train leaders, and organize units. I have raised over $100,000 each of the last six years. I consider myself a good public speaker, and I have a good sense of humor. </div>   
  
  <div id="content2" className={profile.header}>Ask  Me About </div>          
  <div id="content2" className={profile.contents}>Accounts, organize units</div> 
        
        </div>     
     </div>
    );
  }
}

class ContactImg extends React.Component {
  render() {
    return (    
     <div className={profile.contact}><Link to="contact"><img src={contactphoto} height="60" width="60"/><div>Contact</div></Link>  
    </div>
    );
  }
}

class OrgChartImg extends React.Component {
  render() {
    return (   
         <div className={profile.orgchart}>
       <Link to= "orgchart"> <img src={orgchartimg} height="60" width="60"/><div>Org Chart</div></Link> 
        </div>
    
    );
  }
}

class Footer extends React.Component {
  render() {
    return (    
       <div></div>        
    
    );
  }
}

export default MyProfile;