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

    try {
      const createPainpointResponse = await fetch('http://localhost:8000/painpoints/', {
        method: 'POST',
        credentials: 'include',
        body: data,
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const parsedResponse = await createPainpointResponse.json();

      if (parsedResponse) {
        this.setState({
          ...parsedResponse.data,
        })
      console.log(parsedResponse);
      return parsedResponse
      }
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    console.log('CREATE PAIIIIIIINPONTS');
    return(
      <div>
        <h1>Create a Painpoint</h1>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='head' placeholder='Painpoint name' onChange={this.handleChange} />
          <input type="text" name='body' placeholder='Painpoint description'  onChange={this.handleChange} />
          <button type='Submit'> Submit </button>
        </form>
      </div>
    )
  }
}

export default CreatePainpoint
