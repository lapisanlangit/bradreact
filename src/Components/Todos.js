import React, { Component } from 'react'
import Todo from "./Todo";

export default class Todos extends Component {


  render() {
    let todo;
    if (this.props.todos) {
        todo=this.props.todos.map(todo=>{
            return (
                <Todo key={todo.id} todo={todo}/>
            )
        })
        
    }
    return (
      <div>
        {todo}
      </div>
    )
  }
}
