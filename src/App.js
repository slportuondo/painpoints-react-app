import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import SignIn from './SignIn'
import PainpointContainer from './Body/PainpointContainer'
import FilterPainpoint from './FilterPainpoint'
import SolutionContainer from './Body/SolutionContainer'
import Profile from './Profile'
import Category from './Category'
import './App.css';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      email: '',
      id: '',
      filter: []
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
        ...parsedResponse.data
      })

      return parsedResponse.data

    } else {
      console.log('Incorrect username and/or password');
    }
  }

  // logout = async () => {
  //   const logoutResponse = await fetch('http://localhost:8000/user/logout', {
  //     method: 'POST',
  //     credentials: 'include'
  //   })

  //   this.setState({
  //     username: '',
  //     email: '',
  //     id: ''
  //   })
  // }


  register = async (data) => {
    console.log(data, '<--- data in register in App.js');
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
          ...parsedResponse.data
        })

        return parsedResponse

      } else {
        console.log('There was an error registering for an account');
      }

    } catch (err) {
      console.log(err)
    }
  }

  getUserInfo = async () => {
    try {
      console.log(this.state, '<--- state in getUserInfo');
      const userInfoResponse = await fetch('http://localhost:8000/user/' + this.state.id, {
        method: 'GET',
        credentials: 'include'
      })

      if (userInfoResponse !== 200) {
        throw Error('userInfoResponse does not work')
      }

      const parsedUserInfo = await userInfoResponse.json();
      console.log(parsedUserInfo, '<--- parsedUserInfo');

      if (parsedUserInfo) {
        this.setState({
          ...parsedUserInfo
        })
        return parsedUserInfo.data
      }

    } catch (err) {
      console.log(err);
    }
  }

  getFilter = (filteredCategories) => {
    this.setState({filter: [...filteredCategories]})
  }

  render() {
    console.log(this.state, '<--- this.state in app.js');

    return (
      <main>
        <Switch>
          <Route exact path='/' 
            render={(props) => <SignIn {...props} />} />
          <Route exact path='/user/login' 
            render={(props) => <Login {...props} login={this.login} />}/>
          <Route exact path='/user/register' 
            render={(props) => <Register {...props} register={this.register} />}/>
          <Route exact path='/painpoints' 
            render={(props) => <PainpointContainer {...props} />}/>
          <Route exact path='/solution' 
            render={(props) => <SolutionContainer {...props} />}/>
          <Route path='/user/:id' 
            render={(props) => <Profile {...props} getUserInfo={this.getUserInfo} />}/>
          <Route exact path='/categories'
            render={(props) => <Category {...props} getFilter={this.getFilter} />}/>
          <Route exact path='/painpoints/filter'
            render={(props) => <FilterPainpoint {...props} filter={this.state.filter} />} />
        </Switch>
      </main>
    )
  }
}


export default App;
