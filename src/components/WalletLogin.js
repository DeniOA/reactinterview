import React, { Component } from 'react'
import '../style2.css';
import '../style3.css';

import axios from 'axios';



export class WalletLogin extends Component {


  state = {
    wallet: [{
      clientId:""
     
    }]
  }

  onSubmit = (e) => {
    //to prevent it from submitting to the actual file
    e.preventDefault();

    this.walletLogin(this.state.wallet);
    
    //clear fields
    this.setState({ clientId: ''});

  }

 loginPage = (clientId, clientSecret) => {

    //To make a POST REQUEST
    axios.post('https://staging.seerbitapigateway.com/cgw_bc/api/v1/auth' , {
      clientId:"",
      
    })
   
    .then(res => this.setState({ wallet: [...this.state.wallet, res.data] }));
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
          <form action=""  onSubmit={this.onSubmit} >
            <div className="form-group">
              <label for="bank">Choose Your Financial Institution</label>
              <select name="bank" class="dropdown" id="bank">
                  <option disabled value>FCMB</option>
                  <option value="FCMB">FCMB</option>
                  <option value="Access">Access</option>
                  <option value="GTB">GTB</option>
                  <option value="Diamond">Diamond</option>
                  <option value="n/a">Not Applicable</option>
              </select>
              
            </div>
            <div className="form-group">
              <label for="pwd">Enter Account Number</label>
              <input type="text" id="pwd" name="name" placeholder="Account number" value = {this.state.clientId}
        onChange={this.onChange} />
            </div>
            <div className="text-xl">

              <p className="text-xl"><strong>Hecfgfe</strong></p>
            </div>
            <div className="form-group">
              <label for="pwda">Enter Code</label>
              <input type="text" id="pwda" name="name" placeholder="Code" />
            </div>
           
              <button type="submit" class="btn">Continue </button>
            </form>
          </div>
      </div>
      </div>
    )
  }
}

export default WalletLogin
