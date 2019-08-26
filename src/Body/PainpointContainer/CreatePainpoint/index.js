import React from 'react';

class CreatePainpoint extends React.Component {
  constructor(){
    super()

    this.state = {
      head: '',
      body: '',
      attachment: ''
    }
  }

  handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

  handleSubmit = async (e) => {
    e.preventDefault()
    this.props.addPainpoint(this.state)
  }

  render() {
    return(
      <div>
        <h1>Create a Painpoint</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='head'
            placeholder='Painpoint name'
            value={this.state.head}
            onChange={this.handleChange} />
          <input
            type='text'
            name='body'
            placeholder='Painpoint description'
            value={this.state.body}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='attachment'
            placeholder='attach a file'
            value={this.state.attachment}
            onChange={this.handleChange}
          />
          <button type='Submit'> Submit </button>
        </form>
      </div>
    )
  }
}

export default CreatePainpoint
