import React from 'react';
import ReactDOM from 'react-dom';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import { AppContainer } from 'react-hot-loader';
import search from '../../static/css/Search.css';
import styles from '../../static/css/Layout.css';
import listprofile from '../../static/images/listProfile@2x.png';
import clearrecent from '../../static/images/clear_recent.png';
import introsearch from '../../static/images/intro_search.png';

class SearchScreen extends React.Component {
  render() {
    return (        
        <div>
        
         <SearchBar/>
         <RecentBar/>
         <RecentData/>
         <Footer/>
         </div>      
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
 
      <div></div>
         
      
    );
  }
}

class RecentBar extends React.Component {
  render() {
    return (      
        <div>
          {/*<ListSubHeader className={search.recentppl} caption='NO RECENTLY VIEWED PEOPLE' />
          <div  className={search.searchintro}>
<img className={search.searchimg} src={introsearch}/>
<div className={search.searchintrotext}>Search Name, Title, Skill, Keyword</div>
</div>*/}
        </div>         
     
    );
  }
}

class RecentData extends React.Component {
  render () {
    return (<div>
      <div className="headerred">
     </div>
  <List ripple >
    <div className={search.parentdiv}>
   <div className={search.recentdiv}> <ListSubHeader className={search.recentppl} caption='RECENTLY VIEWED PEOPLE' /></div>
<div className={search.cleardiv}><img className={search.clearimg} src={clearrecent} height={15}/></div>
    </div>
    <div className={search.recentppldetails}>
    <ListItem
      avatar={listprofile}
      caption='Amit Kumar'
      legend="Developer" 
     
    />
    
    <ListDivider />
    <ListItem
      avatar='https://static.asc.aon.net/pfimages/temp_ABB55201ah82492_LThumb.jpg'
      caption='Gaurav Saxena'
      legend='Manager'
     
    />
     <ListDivider  />
    <ListItem
      avatar='https://static.asc.aon.net/pfimages/temp_ABB55201ah0156166_LThumb.jpg'
      caption='Rahul Verma 2'
      legend='Tester'
     
    /> 
    <ListDivider  />
    </div>
  </List></div>
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



export default SearchScreen;