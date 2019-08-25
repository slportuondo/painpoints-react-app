import React from 'react'

class EditPainpoint extends React.Component {
  constructor() {
    super();

    this.state = {
      head: this.props.painpoint.head,
      body: this.props.painpoint.body,
      attachment: this.props.painpoint.attachment
    }

  }

  editPainpoint = async (data) => {
    try {
      //TODO:
      const editedPainpoint = await fetch('http://localhost:8000/painpoints/${painpointID}', {
        method: 'PUT',
        credentials: 'include',// on every request we have to send the cookie
        body: data,
        headers: {
          'enctype': 'multipart/form-data'
        }
      })

      const parsedResponse = editedPainpoint.json()
      //TODO: change this.props to edited data if PUT request status is 201
      
    } catch (err) {
      console.log(err);
    }
  }

  componentDidMount = () => {
    this.setState({
      ...this.props
    })
  }

  handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

  handleSubmit = async (e) => {
    e.preventDefault()

    const data = new FormData();
    data.append('head', this.state.head);
    data.append('body', this.state.body);
    data.append('attachment', this.state.attachment);

    this.editPainpoint(data)
  }

  render() {
    return(
      <div>
        <h1>Edit Painpoint</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='head'
            placeholder={this.props.painpoint.head}
            value={this.state.head}
            onChange={this.handleChange} />
          <input
            type='text'
            name='body'
            placeholder={this.props.painpoint.body}
            value={this.state.body}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='attachment'
            placeholder={this.props.painpoint.attachment}
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
