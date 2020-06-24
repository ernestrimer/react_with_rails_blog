import React, { Component } from 'react';
import { Header, Button, Icon } from 'semantic-ui-react';
class Post extends Component {
  render() {
    const { title, body, id } = this.props
    return(
      <>
        <div>
          <Header>{title}</Header>
          <p>
            {body}
          </p>
        </div>
        <Button icon color='yellow'>
          <Icon name='pencil' />
        </Button>
        <Button icon color='red'>
          <Icon name='trash' />
        </Button>
      </>
    )
  }
}
export default Post;