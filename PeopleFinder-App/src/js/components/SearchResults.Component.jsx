import React from 'react';
import ReactDOM from 'react-dom';
import search from '../../static/css/Search.css';
import actionbarclose from '../../static/images/actionbar_close.png';
import MaterialIcon from 'react-google-material-icons';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import listprofile from '../../static/images/listProfile@2x.png';
import {hashHistory} from 'react-router';

class SearchResults extends React.Component {
  render() {
    return (        
        <div>
        
         <SearchHeader/>   
        
         <NotSearched/>
          <Results/>
         
         </div>      
    );
  }
}

class SearchHeader extends React.Component {
  render() {
    return (        
        <div className={search.searchHeader}>
        {/*<MaterialIcon className={search.backarrow} icon="arrow_back"/>*/}
        <div className={search.headcomp}><span onClick={hashHistory.goBack} className={search.backarrow}><i className="material-icons">arrow_back</i></span></div>
         <div className={search.headcomp1}><input className={search.searchBox} type="text" placeholder="Search..."/></div>
         
         <div className={search.headcomp2}><img src={actionbarclose} className={search.closeimg} /></div>
         </div>      
    );
  }
}

class Results extends React.Component {
  render() {
    return (        
        <div>
        
        <div>
      <div className="headerred">
     </div>
  <List ripple >
    <div>
    <ListSubHeader className={search.searchcount} caption='3 People' />

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
         
         </div>      
    );
  }
}

class NotSearched extends React.Component {
  render() {
    return (        
        <div>
        
        
      {/*<div className="headerred">
     
  <List ripple >
   
    <ListSubHeader className={search.searchcount} caption='SUGGESTIONS' />

   
    </List>
         
         </div>  */}
         </div>    
    );
  }
}



export default SearchResults;