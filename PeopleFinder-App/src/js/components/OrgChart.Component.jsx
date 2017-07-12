import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {Tab, Tabs} from 'react-toolbox';
import orgchart from '../../static/css/orgchart.css';
import listprofile from '../../static/images/listProfile@2x.png';
import officephone from '../../static/images/list_office_phone.png';
import {hashHistory} from 'react-router';
import aonlogo from '../../static/images/actionbar_aon_logo.png';
import elena from '../../static/images/girl2.jpg';
import lewisimg from '../../static/images/lewis.jpg';
import girl1 from '../../static/images/girl1.jpg';
import person2 from '../../static/images/person2.jpg';
import person3 from '../../static/images/person3.jpg';


class OrgChart extends React.Component {
  render() {
    return (        
        <div className={orgchart.wrapper}>
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
 
        <div className={orgchart.searchHeader}>
        {/*<MaterialIcon className={search.backarrow} icon="arrow_back"/>*/}
        <div className={orgchart.headcomp}><span onClick={hashHistory.goBack} className={orgchart.backarrow}><i className="material-icons">arrow_back</i></span></div>
         <div className={orgchart.headcomp1}>Org Chart</div>
         
         <div className={orgchart.headcomp2}><img src={aonlogo} height={25} className={orgchart.closeimg} /></div>
         </div> 
         
      
    );
  }
}

class Manager extends React.Component {
  render() {
    return (    
        <div className={orgchart.managerdiv}>  
        <div className={orgchart.managerheader}>MANAGER</div>
           <div className={orgchart.userdetails}>
              <div className={orgchart.userimg}><img src={elena}/></div>
              <div className={orgchart.userinfo}>
                <div className={orgchart.username}>Elena Macpherson</div>
                <div className={orgchart.designation}>Managing Director</div>
              </div>
            </div>
        </div>
       
    );
  }
}

class CurrentlySelected extends React.Component {
  render() {
    return (    
      <div className={orgchart.currentuserdiv}>  
        <div className={orgchart.currentuserheader}>Currently Selected</div>
           <div className={orgchart.userdetails}>
              <div className={orgchart.userimg}><img src={lewisimg}/></div>
              <div className={orgchart.userinfo}>
                <div className={orgchart.username}>Lewis Watson</div>
                <div className={orgchart.designation}>Delivery Manager</div>
              </div>
              <ViewProfile/>
            </div>
        </div>
    );
  }
}

class ViewProfile extends React.Component {
  render() {
    return ( 
        <div className={orgchart.currentLinkprofile}>
          <Link to="myprofile" className={orgchart.currentcontactinfo}>
            <img src={listprofile}/>
          </Link>  
          <Link to="myprofile" className={orgchart.currentcontactinfo}>
            <img src={officephone}/>
          </Link>
        </div>   
    );
  }
}



class Peers extends React.Component {
   state = {
    index: 1,
    fixedIndex: 0,
    inverseIndex: 1
  };

  handleTabChange = (index) => {
    this.setState({index});
  };

  handleFixedTabChange = (index) => {
    this.setState({fixedIndex: index});
  };

  handleInverseTabChange = (index) => {
    this.setState({inverseIndex: index});
  };

  handleActive = () => {
    console.log('Special one activated');
  };
  render() {
    var myClassNammes = 'tabmanagepeer userdetails';
    
    return (  
        
         <section>

        <Tabs  disableAnimatedBottomBorder index={this.state.fixedIndex} onChange={this.handleFixedTabChange} fixed>
          <Tab label='Manages'activeClassName={orgchart.activetab} className={orgchart.managetab}>
            
            <small>
              
               <div className={[orgchart.tabmanagepeer, orgchart.userdetails].join(' ')}>
              <div className={orgchart.userimg}><img src={person2}/></div>
              <div className={orgchart.userinfo}>
                <div className={orgchart.username}>Alan Macworth</div>
                <div className={orgchart.designation}>Senior Technical Architect</div>
              </div>
              </div>

              <div className={[orgchart.tabmanagepeer, orgchart.userdetails].join(' ')}>
              <div className={orgchart.userimg}><img src={person3}/></div>
              <div className={orgchart.userinfo}>
                <div className={orgchart.username}>Joey Bing</div>
                <div className={orgchart.designation}>Technical Lead</div>
              </div>
              </div> 

               <div className={[orgchart.tabmanagepeer, orgchart.userdetails].join(' ')}>
              <div className={orgchart.userimg}><img src={lewisimg}/></div>
              <div className={orgchart.userinfo}>
                <div className={orgchart.username}>Matt Forbes</div>
                <div className={orgchart.designation}>Manager</div>
              </div>
              </div>

              <div className={[orgchart.tabmanagepeer, orgchart.userdetails].join(' ')}>
              <div className={orgchart.userimg}><img src={girl1}/></div>
              <div className={orgchart.userinfo}>
                <div className={orgchart.username}>Phoebe Gilbert</div>
                <div className={orgchart.designation}>Senior Manager</div>
              </div>
              </div>    
             
              </small>
            
            </Tab>
          <Tab label='Peers' activeClassName={orgchart.activetab} className={orgchart.peertab}>
            <small>
              
              <div className={[orgchart.tabmanagepeer, orgchart.userdetails].join(' ')}>
              <div className={orgchart.userimg}><img src={girl1}/></div>
              <div className={orgchart.userinfo}>
                <div className={orgchart.username}>Charlie Cruise</div>
                <div className={orgchart.designation}>Senior Manager</div>
              </div>
              </div>

            <div className={[orgchart.tabmanagepeer, orgchart.userdetails].join(' ')}>
              <div className={orgchart.userimg}><img src={person3}/></div>
              <div className={orgchart.userinfo}>
                <div className={orgchart.username}>Dan Steve</div>
                <div className={orgchart.designation}>Director</div>
              </div>
              </div>
              
            
              
              </small>  
          </Tab>          
        </Tabs>
        </section>        
    
    );
  }
}

export default OrgChart;