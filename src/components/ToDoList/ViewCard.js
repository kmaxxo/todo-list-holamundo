import React from 'react';
import NewCard from './NewCard'

class ViewCard extends React.Component {

  render() {

    if (this.props.visible) {
      return (
        <>
          <NewCard itemData={this.props.todoItem} />
        </>
      )
    } else {
      return(<></>)
    }
  }
}

export default ViewCard