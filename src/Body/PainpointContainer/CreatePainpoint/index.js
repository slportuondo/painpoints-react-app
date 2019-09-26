import React from 'react'
import { Input, Form, TextArea, Button } from 'semantic-ui-react'

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
        <Form onSubmit={this.handleSubmit}>
          <Input
            size='fluid'
            type='text'
            name='head'
            placeholder='Painpoint name'
            value={this.state.head}
            onChange={this.handleChange} />
          <br/>
          <TextArea
            type='text'
            name='body'
            placeholder='Painpoint description'
            value={this.state.body}
            onChange={this.handleChange}
          />
          <br/>
          <Input
              size='fluid'
              type='text'
              name='attachment'
              placeholder='attach a file'
              value={this.state.attachment}
              onChange={this.handleChange}
            /><br/>
          <Button size='large' type='sumbit'>Submit Changes</Button>
        </Form>
      </div>
    )
  }
}

export default CreatePainpoint
