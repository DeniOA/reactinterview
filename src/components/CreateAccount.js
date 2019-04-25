import React, { Component } from 'react'
import  { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import '../style4.css';

export class CreateAccount extends Component {
  render() {
    return (
      <div className="App">
        <div id="container2">
        <div class="form-wrap2">
            <p>  <img src="http://www.officialpsds.com/images/thumbs/Spiderman-Logo-psd59240.png" alt="Logo" title="Logo" width="138" /></p>
            <h1>CompanyName</h1>
            <h2>PLACEHOLDER</h2>

            <p class="pt-3">Send money to anyone's Mobile number, Email Address or Bank Account, Receive money or just pay as invoice</p>

            <p class="text-2xl">HOW WOULD YOU LIKE TO SIGN UP?</p>
           
              <Button  component={Link} to="/createwallet" type="button" class="btn-0" >CREATE NEW WALLET </Button>
              <Button   component={Link} to="/walletlogin"  type="button" class="btn-3" >USE EXISTING BANK ACCOUNT </Button>

        </div>        
        </div>
      </div>
    )
  }
}

export default CreateAccount
