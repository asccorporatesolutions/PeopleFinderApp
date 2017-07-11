import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import contact from '../../static/css/contact.css';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import contactimg from '../../static/images/contact.png';
import officephone from '../../static/images/list_office_phone.png';
import officemail from '../../static/images/list_office_email.png';
import officelocation from '../../static/images/list_location.png';
import bootstrap from 'react-bootstrap';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';

var search1 = {
  margin: "6px"
};

class Contact extends React.Component {
  render() {
    return (        
        <div className={contact.wrapper}>
        <h1></h1>
         <Header/>         
         <UserData/>          
         <AddToContacts/>
         <PhoneInformation/>
         <EmailInformation/>
         <AddressInfo/>
         <DeskLocation/>
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
       <div>
         <div id="content" className={["col-xs-12", contact.content,"col-md-12"].join(' ')}> 
       <img className={contact.img} src='https://static.asc.aon.net/pfimages/temp_ABB55201ah82492_MThumb.jpg'/>
       
       <div className={contact.userinfo}>
         <span className={contact.name}> Gaurav Saxena </span>
       <br/> <span className={contact.designation}> Manager II </span>
       </div>
             
      </div>
     <hr className={contact.hrrule}/>
      </div>
               
   
    );
  }
}

class AddToContacts extends React.Component {
  render() {
    return (    
      <div className={contact.AddToContacts}>
        <div className={contact.AddToContactsdiv}>
        <div className={contact.AddToContactsimg}><img src={contactimg}/></div>
        <div className={contact.AddToContactstext}>Add to Contacts</div>
        </div>
        </div>  
    );
  }
}

class PhoneInformation extends React.Component {
  render() {
    return (   
      <div> 
          <div className={contact.detailheader}>
            PHONE
          </div>

          <div className={contact.details}>

                  <div className={contact.leftdetails}>
                    
                            <div className={contact.detailsubheader}>Office</div>
                            
                            <span className={contact.actualdetail}>+91124471500</span>
                    
                    </div>

                  <div className={contact.rightimg}>
                            <img src={officephone}/>
                    </div>


            </div>

          
</div>
    
    );
  }
}



class EmailInformation extends React.Component {
  render() {
    return (    
        <div> 
          <div className={contact.detailheader}>
            EMAIL ADDRESS
          </div>

          <div className={contact.details}>

                  <div className={contact.leftdetails}>
                    
                            <div className={contact.detailsubheader}>Office</div>
                            
                            <span className={contact.actualdetail}>gaurav.saxena.2@aonhewitt.com</span>
                    
                    </div>

                  <div className={contact.rightimg}>
                            <img src={officemail}/>
                    </div>


            </div>

          
</div>       
    
    );
  }
}



class AddressInfo extends React.Component {
  render() {
    return (    
       <div> 
          <div className={contact.detailheader}>
            ADDRESS
          </div>

          <div className={contact.details}>

                  <div className={contact.leftdetails}>
                    
                            <div className={contact.detailsubheader}></div>
                            
                            <div className={contact.actualdetail}>Ground to 13th Floor, Building No.2
                              <div>Gurgaon,HR</div>
                              <div>122001,India</div>
                            </div>                    
                    </div>
                  <div className={contact.rightimg}>
                            <img src={officelocation}/>
                    </div>
            </div>          
</div>            
    
    );
  }
}

class DeskLocation extends React.Component {
  render() {
    return (    
       <div> 
          <div className={contact.detailheader}>
            
          </div>

          <div className={contact.details}>

                  <div className={contact.leftdetails}>
                    
                            <div className={contact.detailsubheader}>Desk Location</div>
                            
                            <span className={contact.actualdetail}>AonCenter12060E
                              
                            </span>                    
                    </div>
                  <div className={contact.rightimg}>
                           
                    </div>
            </div>          
</div>            
    
    );
  }
}



export default Contact;