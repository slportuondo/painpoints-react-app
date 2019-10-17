import React from 'react'
import { Form, Input, Button } from 'semantic-ui-react'

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
      <div className='ppEditContainer'>
        <h1>Edit Painpoint</h1>
        <Form onSubmit={this.handleSubmit}>
          <Input
            type='text'
            name='head'
            placeholder="Painpoint Name"
            value={this.state.head}
            onChange={this.handleChange} />
          <br/>
          <Form.TextArea
            name='body'
            placeholder="Enter painpoint description"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <br/>
        <Button type='Submit' size='tiny'> Submit </Button>
        </Form>
      </div>
    )
  }
}

export default EditPainpoint
