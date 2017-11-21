import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import logo from './logo.svg';
import uuid from 'uuid';
import $ from 'jquery';
import './App.css';
import './' 
import Todos from './Components/Todos';

class AppApi extends Component { 
    constructor() { 
      super(); 
      this.state = {
      projects: [],
      todos:[]
     }
    }

    getTodos(){ // this is where we make our request (jquery is easy)
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({todos: data}, function(){
          console.log(this.state)
        });
      }.bind(this),
      error: function(xhr, status, err){
    console.log(err);
      }
    });
    }
    getProjects(){
      // this is life-cycle method  
    this.setState({projects: [  //  data will go to componentWillMount();
  {
        id:uuid.v4(),
        title: ' title 1 ', 
        category: 'Page One'
       },{
        id:uuid.v4(),
        title: ' title  2 ',
        category: 'Page Two'
       },{
        id:uuid.v4(),
        title: ' title  3 ', 
        category: 'Page Three'
       },{
        id:uuid.v4(),
        title: ' title  4', 
        category: 'Page Four'
  }
       ]});
    }
    componentWillMount(){ //  data removed, placed into getProjects();
    this.getProjects();
    this.getTodos();
    }
    
    componentDidMount(){
    this.getTodos();
    } 
    handleAddProject(project){
      console.log(project);
      let projects = this.state.projects;
      projects.push(project);
      this.setState({projects:projects});
    }
    handleDeleteProject(id){
      let projects= this.state.projects;
      let index = projects.findIndex(x => x.id === id);
      projects.splice(index, 1);
      this.setState({projects:projects});
    }
    render() { 
    return (
      <div className="AppApi">  

      <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">GEN-REACT API - 1 </h1>

      </div >
      <AddProject addProject={this.handleAddProject.bind(this)} />
      <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
       <hr />
      <Todos todos={this.state.todos} /> 

       
        
      </div>
    );
  }
}

export default AppApi;
