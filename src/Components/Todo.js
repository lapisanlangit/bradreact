import React, { Component } from 'react'

export default class Todo extends Component {
 
  render() {
    return (
      <li className="Project">
        <strong>{this.props.todo.id}</strong> - {this.props.todo.title}
      </li>
    )
  }
}
