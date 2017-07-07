import React from 'react';
import ReactDOM from 'react-dom';

//var url = require('../Static/images/LoginHeader.png');

class LoginScreen extends React.Component {
  render() {
    return (       
        <div>                
      <LoginHeader/>
      <LoginInput/>
      <LoginFooter/>                 
      </div>
    );
  }
}

class LoginHeader extends React.Component {
  
  render() {
    return (        
        <div>             
      
          <img alt='Aon Logo' src='' className='SplashScreen'/>
            <div className='message'>
            Sign in with your organizational account
            </div>
         
      </div>
    );
  }
}

class LoginInput extends React.Component {
  render() {
    return (
       
        <form>     
             <input type='text' placeholder='someone@example.com' />
             <p>
             <input type='password' placeholder='Password' />
             </p>
             <p>
             <button type='submit' value='Signin'>Sign in</button>
             </p>
      </form>
        
    );
  }
}

class LoginFooter extends React.Component {
  render() {
    return (
       
        <div>
           Forgot your password?
           <br/>
           Need help with account?
           <br/>
           Welcome to Aon Risk Authentication & Authorization system. Please, provide your credentials to access your applications.
      </div>
    );
  }
}


export default LoginScreen;