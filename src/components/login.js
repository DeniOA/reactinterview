import React, { Component } from 'react'
import LoginPage from './LoginPage';

export class login extends Component {

  state = {
    page: 1,
    phoneNumber: '',
    password: '',
    financialInstitution: '',
    accountNumber: '',
    code: ''
  }


  //Next Page
  nextPage = () => {
    const { page } = this.state;
    this.setState({
      page: page + 1
    });
  }

  //Previous Page
  prevPage = () => {
    const { page } = this.state;
    this.setState({
      page: page - 1
    });
  }

  //Handle fields change
  handleChange = input => e => {
    this.setState({[input]: e.target.value })
  }

  render() {
   
  }
}

export default login
