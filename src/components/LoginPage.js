import React, { Component } from 'react'
import  { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';

// import CreateAccount from './CreateAccount';




export class LoginPage extends Component {

 


  render() {
    return (
      <div className="App">
          <div id="container">
      <div className="form-wrap">
        <p>  <img src="http://www.officialpsds.com/images/thumbs/Spiderman-Logo-psd59240.png" alt="Logo" title="Logo" width="138" /></p>
        <h1>CompanyName</h1>
        <h2>PLACEHOLDER</h2>
      
        <form>
          <div className="form-group">
          
            <input type="text" id="phone-number" name="number" placeholder="Phone Number" />

          </div>
          <div className="form-group">
           
            <input type="text" id="pwd" name="password" placeholder="Password" />
          </div>
        
          <button type="submit" className="btn">Login To Your Account </button>
          <p className="bottom-text">
          
            <a href="www.google.com">Forgot Password</a>
          
          </p>
         
       
        <Button component={Link} to="/createaccount" type="button"  className="btn-2">CREATE AN ACCOUNT </Button> 
        

        </form>
      </div>

     
      </div>
      </div>
    )
  }
}

export default LoginPage
