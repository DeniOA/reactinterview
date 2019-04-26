import React, { Component } from 'react'
import '../style2.css';

import axios from 'axios';


export class CreateWallet extends Component {



  state = {
    createwallet: [{
      clientId:"",
      clientSecret:""
    }]
  }

  onSubmit = (e) => {
    //to prevent it from submitting to the actual file
    e.preventDefault();

    this.createWallet(this.state.login);
    
    //clear fields
    this.setState({ clientId: '', clientSecret: ''});

  }

 createWallet = (clientId, clientSecret) => {

    //To make a POST REQUEST
    axios.post('https://staging.seerbitapigateway.com/cgw_bc/api/v1/auth' , {
      clientId:"",
      clientSecret:""
      
    })
   
    .then(res => this.setState({ createwallet: [...this.state.createwallet, res.data] }));
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
            <p className="pt-3">Send money to anyone's Mobile number, Email Address or Bank Account, Receive money or just pay as invoice</p>
          <form  onSubmit={this.onSubmit}  > 
            <div className="form-group">
              <label for="phone" className="lab">Enter Phone Number</label>
              <input type="text" id="phone" name="name"  value = {this.state.clientId}
        onChange={this.onChange}  />
            </div>
            <div className="form-group">
              <label for="pwd">Choose a Password</label>
              <input type="text" id="pwd" name="name"  value = {this.state.clientSecret}
        onChange={this.onChange} />
            </div>
            <div className="form-group">
              <label for="pwda">Enter a Password Again</label>
              <input type="text" id="pwda" name="name" value = {this.state.clientSecret}
        onChange={this.onChange} />
            </div>
           
              <div className="captcha">
                <div className="spinner">
                  <label>
                    <input type="checkbox" onclick="$(this).attr('disabled','disabled');" />
                    <span className="checkmark"><span>&nbsp;</span></span>
                  </label>
                </div>
                <div className="text">
                  I'm not a robot
                </div>
                <div className="logo">
                  <img src="https://forum.nox.tv/core/index.php?media/9-recaptcha-png/" alt="recaptcha" />
                  <p>reCAPTCHA</p>
                  <small>Privacy - Terms</small>
                </div>
              </div>
              <p className="text-red">This reCAPTCHA is for testing purposes only. Please report to the site admin if you are seeing this.</p>
              <button type="submit" className="btn">Continue </button>
            </form>
          </div>
      </div>
      </div>
    )
  }
}

export default CreateWallet;
