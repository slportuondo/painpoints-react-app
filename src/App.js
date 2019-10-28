import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import SignIn from './SignIn'
import PainpointContainer from './Body/PainpointContainer'
import FilterPainpoint from './FilterPainpoint'
import SolutionContainer from './Body/SolutionContainer'
import Profile from './Profile'
import Category from './Category'
import Header from './Header'
import './App.css';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      username: 'jchon',
      email: 'jchon@gmail.com',
      id: '1',
      filter: [],
      loggedIn: true,
      incorrectLogin: false,
      userAlreadyExists: false
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

    if (parsedResponse.status.code !== 200) {

        const { history } = this.props
        if (history) history.push('/user/login')
        this.setState({incorrectLogin: true})

    } else {

      this.setState({
        ...parsedResponse.data,
        loggedIn: true
      })
      
      const { history } = this.props
      if (history) history.push('/categories')
    }
  }

  logout = async () => {
    await fetch('http://localhost:8000/user/logout', {
      method: 'POST',
      credentials: 'include'
    })

    this.setState({
      username: '',
      email: '',
      id: '',
      loggedIn: false
    })
  }

  register = async (data) => {
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

      if (parsedResponse.status.code === 200) {
        this.setState({
          ...parsedResponse.data,
          loggedIn: true
        })

        const { history } = this.props
        if (history) history.push('/categories')

      } else {
        const { history } = this.props
        if (history) history.push('/user/register')
        this.setState({userAlreadyExists: true})
      }

    } catch (err) {
      console.log(err)
    }
  }

  getFilter = (filteredCategories) => {
    this.setState({filter: [...filteredCategories]})
  }

  render() {
    // console.log(this.state, '<--- this.state in app.js');

    return (
      <main>
        <Switch>
          <Route exact path='/'
            render={(props) => <SignIn {...props} />} />
          <Route exact path='/user/login'
            render={(props) => <Login {...props} incorrectLogin={this.state.incorrectLogin} login={this.login} />}/>
          <Route exact path='/user/register'
            render={(props) => <Register {...props} userAlreadyExists={this.state.userAlreadyExists} register={this.register} />}/>


          {
            this.state.loggedIn ? 
            <Route>
              <Header 
                logout={this.logout} 
                userId={this.state.id}
                username={this.state.username}
              /> 
              <Route
                path='/user/:id'
                render={(props) => <Profile {...props} getUserInfo={this.getUserInfo} />}
              />
              <Route 
                exact path='/painpoints'
                render={(props) => <PainpointContainer {...props} userId={this.state.id}/>}
              />
              <Route 
                exact path='/painpoint/:id'
                render={(props) => <SolutionContainer {...props} />}
              />
              <Route 
                exact path='/categories'
                render={(props) => <Category {...props} getFilter={this.getFilter} />}
              />
              <Route 
                exact path='/painpoints/filter'
                render={(props) => <FilterPainpoint {...props} filter={this.state.filter} />}
              />
            </Route>
            : <Redirect to='/' /> 
          }

        </Switch>

      </main>
    )
  }
}


export default withRouter(App);
