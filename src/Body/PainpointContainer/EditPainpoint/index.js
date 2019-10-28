import React from 'react'

class EditPainpoint extends React.Component {
  constructor() {
    super();

    this.state = {
      head: '',
      body: '',
      attachment: ''
    }
  }

  componentDidMount() {
    this.setState({
      head: this.props.painpointToEdit.painpoint.head,
      body: this.props.painpointToEdit.painpoint.body,
      attachment: this.props.painpointToEdit.painpoint.attachment
    })
  }

  handleChange = (e) => {
		this.setState({[e.target.name]: e.target.value})
	}

  handleSubmit = async (e) => {
    e.preventDefault()
    this.props.updatePainpoint(this.state, this.props.painpointToEdit.categories, this.props.painpointToEdit.painpoint.id)
  }

  render() {
    return(
      <div className='ppEditContainer'>
        <h2 className='ppTitle'>Edit Painpoint</h2>
        <form className='ppCreateForm' onSubmit={this.handleSubmit}>
          <input
            className='ppCreateFormInputBody'
            id='ppEditFormHead'
            type='text'
            name='head'
            placeholder="Painpoint Name"
            value={this.state.head}
            onChange={this.handleChange} />
          <textarea
            className='ppCreateFormInputBody'
            name='body'
            placeholder="Enter painpoint description"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <button 
            className='ppEditSubmit'
            style={{backgroundColor: '#62806A'}}
          >Submit</button>
        </form>
      </div>
    )
  }
}

export default EditPainpoint
