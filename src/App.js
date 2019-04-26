import React from 'react';

import './App.css';

import  { BrowserRouter as Router, Route,} from 'react-router-dom';

import LoginPage from './components/LoginPage';
import CreateAccount from './components/CreateAccount';
import CreateWallet from './components/CreateWallet';
import WalletLogin from './components/WalletLogin';



function App() {



  return (

  
   
    <Router>
        <div>
        

     <Route exact path='/' component={LoginPage} />
     <Route exact path='/login' component={LoginPage} />
     <Route exact path='/createaccount' component={CreateAccount} />
     <Route exact path='/createwallet' component={CreateWallet} />
     <Route exact path='/walletlogin' component={WalletLogin} />
    
 
    
     </div>
     </Router>
 
   
   
  );
}

export default App;
