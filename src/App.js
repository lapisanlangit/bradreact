
import React, { Component } from 'react'
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'

export default class App extends Component {

  constructor(){
    super()
    this.state={
      projects:[   
      ]
    }
  }

  componentWillMount(){
      this.setState({projects:[
        {
          title:'Bussiness Website',
          category:'Web Design'
        },
        {
          title:'Social App',
          category:'Mobile Development'
        },
        {
          title:'Ecommerce Shopping Cart',
          category:'Web Development'
        }
      ]})
  }
 
  render() {

    return (
      <div>
      <AddProject/>
      <Projects projects={this.state.projects}/>
      </div>
    )
  }
}


