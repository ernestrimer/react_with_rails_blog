import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
class PostForm extends Component {
  state = { title: '', body: '' }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPost(this.state)
    this.setState({ title: '', body: '' })
  }
  render() {
    const { title, body } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='title'
          value={title} 
          onChange={this.handleChange}
          required
          label='Title'
        />
        <Form.Input
          name='body'
          value={body} 
          onChange={this.handleChange}
          required
          label='Body'
        />
        <Form.Button color='green'>Submit</Form.Button>
      </Form>
    )
  }
}
export default PostForm;