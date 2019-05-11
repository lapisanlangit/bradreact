
import React, { Component } from 'react'
import Projects from './Components/Projects'
import Todos from './Components/Todos'
import AddProject from './Components/AddProject'
import uuid from 'uuid'
import axios from 'axios'

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      projects: [
      ],
      todos: []
    }
  }

  getProjects() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Bussiness Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'Ecommerce Shopping Cart',
          category: 'Web Development'
        }
      ]
    })
  }

  componentWillMount() {
    // this.getProjects();
    // this.getTodos();
  }

  componentDidMount(){
    this.getProjects();
    this.getTodos();
  }

  handleAddProject = (project) => {
    // console.log(project)
    let projects = this.state.projects;
    projects.push(project)
    this.setState({ projects: projects })
  }

  handleDeleteProject(id) {
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id)
    projects.splice(index, 1)
    this.setState({ projects: projects })

  }

  getTodos() {

    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(function (response) {
        this.setState({ todos: response.data })
      }.bind(this))
      .catch(function (error) {
       
      })
      .finally(function () {
       
      });


  }
  render() {

    return (
      <div>
        <AddProject AddProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <Todos todos={this.state.todos} />
      </div>
    )
  }
}


