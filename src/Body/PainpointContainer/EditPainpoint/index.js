import React from 'react'

class EditPainpoint extends React.Component {
  constructor() {
    super();

    this.state = {
      head: '',
      body: ''
    }
  }

  componentDidMount() {
    this.setState({
      head: this.props.painpointToEdit.painpoint.head,
      body: this.props.painpointToEdit.painpoint.body
    })
  }

  // static getDerivedStateFromProps() {
  //
  // }

  handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

  handleSubmit = async (e) => {
    e.preventDefault()
    this.props.updatePainpoint(this.state, this.props.painpointToEdit.painpoint.id)
  }

  render() {
    console.log("props in render() PainpointContainer");
    console.log(this.props);
    return(
      <div>
        <h1>Edit Painpoint</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='head'
            placeholder="Painpoint Name"
            value={this.state.head}
            onChange={this.handleChange} />
          <input
            type='text'
            name='body'
            placeholder="Enter painpoint description"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <button type='Submit'> Submit </button>
        </form>
      </div>
    )
  }
}

export default EditPainpoint
