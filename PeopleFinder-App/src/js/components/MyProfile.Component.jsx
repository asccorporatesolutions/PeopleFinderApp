import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import { Layout, NavDrawer, Panel, Sidebar,AppBar, Checkbox, IconButton } from 'react-toolbox';
import Navigation from 'react-toolbox/lib/navigation';
import profile from '../../static/css/profileview.css';
import contactphoto from '../../static/images/introProfile@3x.png';
import orgchartimg from '../../static/images/introOrgchart@3x.png';
import locationicon from '../../static/images/locationicon.png';


class MyProfile extends React.Component {
  render() {
    return (        
        <div>
        <h1></h1>
         <Header/>
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

class Settings extends React.Component {
  render() {
    return (
 
        <Link to="settings"><button type="submit">Settings</button></Link>
         
      
    );
  }
}

class ProfileData extends React.Component {
  render() {
    return (    
          
        <div id="wrapper" className={profile.wrapper}>
  <div id="content" className={profile.content}> 
       <img src='https://static.asc.aon.net/pfimages/temp_ABB55201ah82492_LThumb.jpg' height="100" width="100"/>
       <div id="sidebar" className={profile.sidebar}>
      <Contact/>
 <OrgChart/>   
</div> 
       <br/> <span className={profile.name}> Gaurav Saxena </span>
      <br/> <span className={profile.title}> Manager II </span>
       <br/> <span className={profile.bu}> Aon Service Corporation </span>
        <br/> <span className={profile.location}><img src={locationicon}/><span className={profile.city}> Gurgaon</span> </span>
       
      </div> 
   <div className={profile.details}>
<br/><div id="content2" className={profile.header}>My Summary </div>          
  <div id="content2" className={profile.contents}>I am a SharePoint developer based in our Gurgaon .Have worked upon Microsoft.Net, C#, SQL ,MOSS,SharePoint 2010, Sharepoint 2013, SharePoint Designer 2010,InfoPath 2010, XML, XSLT, LINQ , JQuery,Saas,HTML5, BootStrap, Saas, Angular 2, Xamarin. </div>   
  
  <div id="content2" className={profile.header}>Ask  Me About </div>          
  <div id="content2" className={profile.contents}>Sharepoint, C# , SQL Server</div> 
        
        </div>     
     </div>
    );
  }
}

class Contact extends React.Component {
  render() {
    return (    
     <div className={profile.contact}><Link to="contact"><img src={contactphoto} height="60" width="60"/><div>Contact</div></Link>  
    </div>
    );
  }
}

class OrgChart extends React.Component {
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