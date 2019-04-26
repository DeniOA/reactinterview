import React, { Component } from 'react'
import  { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import axios from 'axios';

// import CreateAccount from './CreateAccount';




export class LoginPage extends Component {

  state = {
    clientId:"",
      clientSecret:""
  }

  onSubmit = (e) => {
    //to prevent it from submitting to the actual file
    e.preventDefault();

    this.loginPage(this.state);

  }

 loginPage = ({clientId, clientSecret}) => {

    //To make a POST REQUEST
    axios.post('https://staging.seerbitapigateway.com/cgw_bc/api/v1/auth' , {
      clientId,
      clientSecret
    })
   
    .then(res => {
      alert(res.data.ResponseMessage);

    //clear fields
    this.setState({ clientId: '', clientSecret: ''});
    }).catch(err=>{
      alert(err.response.data.ResponseMessage);
    });
  }

  onChange =(e) => this.setState({ [e.target.name]: e.target.value});

  render() {
    return (
      <div className="App">
          <div id="container">
      <div className="form-wrap">
        <p>  <img src="http://www.officialpsds.com/images/thumbs/Spiderman-Logo-psd59240.png" alt="Logo" title="Logo" width="138" /></p>
        <h1>CompanyName</h1>
        <h2>PLACEHOLDER</h2>
        (
     
        <form onSubmit={this.onSubmit}  >
          <div className="form-group">
          
            <input type="text" id="phone-number" name="clientId" placeholder="Phone Number"  value = {this.state.clientId}
        onChange={this.onChange} />

          </div>
          <div className="form-group">
           
            <input type="text" id="pwd" name="clientSecret" placeholder="Password"  value = {this.state.clientSecret}
        onChange={this.onChange} />
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
