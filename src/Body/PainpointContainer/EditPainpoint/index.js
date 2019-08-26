import React from 'react'

class EditPainpoint extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ...props.painpointToEdit
    }
  }

  handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

  handleSubmit = async (e) => {
    e.preventDefault()
    this.props.editPainpoint(this.state)
  }

  render() {
    return(
      <div>
        <h1>Edit Painpoint</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='head'
            placeholder={this.props.head}
            value={this.state.head}
            onChange={this.handleChange} />
          <input
            type='text'
            name='body'
            placeholder={this.props.body}
            value={this.state.body}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='attachment'
            placeholder={this.props.attachment}
            value={this.state.attachment}
            onChange={this.handleChange}
          />
          <button type='Submit'> Submit </button>
        </form>
      </div>
    )
  }
}

export default EditPainpoint
