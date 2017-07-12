import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import { Layout,Sidebar,AppBar,NavDrawer,Panel,Checkbox, IconButton } from 'react-toolbox';
import Navigation from 'react-toolbox/lib/navigation';
import theme from '../../static/css/AonAppBar.css';
import Avatar from 'react-toolbox/lib/avatar';
import aonlogo from '../../static/images/actionbar_aon_logo.png';
import navsearch from '../../static/images/searchnav.png';
import layoutcss from '../../static/css/Layout.css';
import stylecss from '../../static/css/Search.css';
import launchimg from '../../static/images/aonmenu.png';
import menu from '../../static/css/Menu.css';
//import AlarmIcon from 'react-material-icons/icons/action/alarm';
import MaterialIcon from 'react-google-material-icons';
import menusearch from '../../static/images/nav_search.png';
import menuprofile from '../../static/images/nav_profile.png';


var search1 = {
  margin: "6px"
};
class Main extends React.Component {
   state = {
        drawerActive: false,
        drawerPinned: false,
        sidebarPinned: false
    };


    toggleDrawerActive = () => {
        this.setState({ drawerActive: !this.state.drawerActive });
    };

    toggleDrawerPinned = () => {
        this.setState({ drawerPinned: !this.state.drawerPinned });
    }

    toggleSidebar = () => {
        this.setState({ sidebarPinned: !this.state.sidebarPinned });
    };
  render() {
    return (
      <div>
          {/*<Link to="search">Search</Link>
          */}
      
        <Layout>
                 <NavDrawer active={this.state.drawerActive}
                    pinned={this.state.drawerPinned} permanentAt='xxxl'
                    onOverlayClick={ this.toggleDrawerActive }>
<Navigation type='horizontal'   >
 
 <img src={launchimg} height="250" width="250" />
    </Navigation>
    <Navigation type='vertical'>
        <div className={menu.navigation}>
       <div className={menu.menuitempadding}><Link to="search" onClick={this.toggleDrawerActive}><img src={menusearch} height="25"/><span>Search</span></Link><br/></div>
        <div className={menu.menuitempadding}><Link to="myprofile" onClick={this.toggleDrawerActive}><img src={menuprofile} height="25"/><span>My Profile</span></Link>   </div>
     </div>
   
       <hr/>
<div className={menu.settingslist}>
       <Link className={menu.settings} to="settings" onClick={this.toggleDrawerActive}>Feedback</Link><br/>
       <Link className={menu.settings} to="about" onClick={this.toggleDrawerActive}>About the App</Link><br/>
       <Link className={menu.settings} to="TnC" onClick={this.toggleDrawerActive}>Terms & Conditions</Link><br/>
       <Link className={menu.settings} to="settings" onClick={this.toggleDrawerActive}>Logout</Link>
       </div>
    </Navigation>
                    </NavDrawer>
                <Panel>
                     <AppBar className={theme.data} theme={theme} title='People Finder' leftIcon='menu' onLeftIconClick={this.toggleDrawerActive} >
                        <Navigation type='horizontal' >
                            
                      
                       
                         <img src={aonlogo} height="25" style={search1}/>
                         <Link to="searchresults"><img src={navsearch} height="25" style={search1}  /></Link>
                        </Navigation></AppBar> 
                    <div>
                                   {this.props.children}         
                    </div>
                </Panel>
                <Sidebar pinned={ this.state.sidebarPinned } width={ 5 }>
                   Search
                </Sidebar>
            </Layout>
            </div>
    );
  }
}
export default Main;