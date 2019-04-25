import React, { Component } from 'react'
import '../style2.css';


export class CreateWallet extends Component {
  render() {
    return (
      <div className="App">
          <div id="container">
        <div className="form-wrap">
            <p>  <img src="http://www.officialpsds.com/images/thumbs/Spiderman-Logo-psd59240.png" alt="Logo" title="Logo" width="138" /></p>
            <h1>CompanyName</h1>
            <h2>PLACEHOLDER</h2>
            <p className="pt-3">Send money to anyone's Mobile number, Email Address or Bank Account, Receive money or just pay as invoice</p>
          <form>
            <div className="form-group">
              <label for="phone" className="lab">Enter Phone Number</label>
              <input type="text" id="phone" name="name" />
            </div>
            <div className="form-group">
              <label for="pwd">Choose a Password</label>
              <input type="text" id="pwd" name="name" />
            </div>
            <div className="form-group">
              <label for="pwda">Enter a Password Again</label>
              <input type="text" id="pwda" name="name" />
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
