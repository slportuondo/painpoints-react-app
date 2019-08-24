import React, { Component } from 'react';

class CreatePainpoint extends Component {
  constructor(){
    super();

    this.state = {
      head: '',
      body: '',
      attachment: ''
    }
  }

  handleChange = (e) => {
    if(e.target.name !== 'image'){
      this.setState({[e.target.name]: e.target.value})
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('head', this.state.head);
    data.append('body', this.state.body);
    data.append('attachment', this.state.attachment);

    console.log(data.entries(), '--DATA SUBMITTED FROM CREATE PAINPOINT--')

    for (let pair of data.entries()){
      console.log(pair[0]  ,', ', pair[1])
    }

    const registerCall = this.props.register(data);

    registerCall.then((data) => {
        if(data.status.message === "Success"){
          this.props.history.push('/profile')
        } else {
          console.log(data, '<-- ERROR!!')
        }
    })
  }

  render() {

    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='head' placeholder='Painpoint name' onChange={this.handleChange} />
        <input type="text" name='body' placeholder='Painpoint description'  onChange={this.handleChange} />
        <button type='Submit'> Submit </button>
      </form>
    )
  }
}

export default CreateTile
