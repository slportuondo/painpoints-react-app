import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import SignIn from './SignIn'
import { Route, Switch } from 'react-router-dom';
import './App.css';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      email: '',
    }
  }


  login = async (data) => {
    const loginResponse = await fetch('http://localhost:8000/user/login', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const parsedResponse = await loginResponse.json();
    console.log(parsedResponse, '<---- parsedResponse in login');

    if (parsedResponse) {
      this.setState({
        ...parsedResponse.data,
      })

      return parsedResponse;

      // this.props.history.push('/tags')
    } else {
      console.log('Incorrect username and/or password');
    }
  }


  register = async (data) => {
    console.log(data, '<--- data in register in app.js');
    try {
      const registerResponse = await fetch('http://localhost:8000/user/register', {
        method: 'POST',
        credentials: 'include',
        body: data,
        headers: {
          'enctype': 'multipart/form-data'
        }
      })

      const parsedResponse = await registerResponse.json();
      console.log(parsedResponse, '<--- parsedResponse in register');

      if (parsedResponse) {
        this.setState({
          ...parsedResponse.data,
        })

        return parsedResponse

      } else {
        console.log('There was an error registering for an account');
      }

    } catch (err) {
      console.log(err)
    }
  }

  render() {
    console.log(this.state, '<--- this.state in app.js');
    return (
      <main>
        <Switch>
          <Route exact path='/' render={(props) => <SignIn {...props} />} />
          <Route exact path='/user/login' render={(props) => <Login {...props} login={this.login} />}/>
          <Route exact path='/user/register' render={(props) => <Register {...props} register={this.register} />}/>
        </Switch>

      </main>
    )
  }
}


export default App;
