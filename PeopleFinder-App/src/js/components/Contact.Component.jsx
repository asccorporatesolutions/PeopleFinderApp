import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import contact from '../../static/css/contact.css';
import theme from '../../static/css/AonAppBar.css';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import contactimg from '../../static/images/contact.png';
import officephone from '../../static/images/list_office_phone.png';
import officemail from '../../static/images/list_office_email.png';
import officelocation from '../../static/images/list_location.png';
import bootstrap from 'react-bootstrap';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';
import lewisimg from '../../static/images/lewis.jpg';
import {hashHistory} from 'react-router';
import aonlogo from '../../static/images/actionbar_aon_logo.png';


var search1 = {
  margin: "6px"
};

class Contact extends React.Component {
  render() {
    return (        
        <div className={contact.wrapper}>
        
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
 
        <div className={contact.searchHeader}>
        {/*<MaterialIcon className={search.backarrow} icon="arrow_back"/>*/}
        <div className={contact.headcomp}><span onClick={hashHistory.goBack} className={contact.backarrow}><i className="material-icons">arrow_back</i></span></div>
         <div className={contact.headcomp1}>Contact</div>
         
         <div className={contact.headcomp2}><img src={aonlogo} height={25} className={contact.closeimg} /></div>
         </div> 
         
      
    );
  }
}

class UserData extends React.Component {
  render() {
    return (    
       <div>
         <div id="content" className={["col-xs-12", contact.content,"col-md-12"].join(' ')}> 
       <img className={contact.img} src={lewisimg}/>
       
       <div className={contact.userinfo}>
         <span className={contact.name}> Lewis Watson </span>
       <br/> <span className={contact.designation}> Delivery Manager </span>
       </div>
             
      </div>
     <hr className={contact.hrrule}></hr>
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
                            
                            <span className={contact.actualdetail}>312.744.5000</span>
                    
                    </div>

                  <div className={contact.rightimg}>
                            <img height={25} src={officephone}/>
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
                            
                            <span className={contact.actualdetail}>lewis.watson@gmail.com</span>
                    
                    </div>

                  <div className={contact.rightimg}>
                            <img height={25} src={officemail}/>
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
                            
                            <div className={contact.actualdetail}>5801 S Ellis Ave,
                              <div>Chicago, IL</div>
                              <div>60637, USA</div>
                            </div>                    
                    </div>
                  <div className={contact.rightimg}>
                            <img height={25} src={officelocation}/>
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
                            
                            <span className={contact.actualdetail}>12th Floor
                              
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