import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import logo from './logo.svg';
import './App.css';
 

class App extends Component { 
    constructor() { 
      super(); 
      this.state = {
      projects: []
     }
    }


    componentWillMount(){   // this is life-cycle method
this.setState({projects: [  
  {
        title: 'Xpansiv1 ', 
        category: 'Page One'
       },{
        title: 'Xpansiv2',
        category: 'Page Two'
       },{
        title: 'Xpansiv3 ', 
        category: 'Page Three'
       },{
        title: 'Xpansiv4', 
        category: 'Page Four'
  }
       ]
});
    }
    handleAddProject(project){
      console.log(project);
      let projects = this.state.projects;
      projects.push(project);
      this.setState({projects:projects});
    }

    render() { 
    return (
      <div className="App">
      <AddProject addProject={this.handleAddProject.bind(this)} />
      <Projects projects={this.state.projects} />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">XPANSIV REACT - 1 </h1>
	      </div >
       
        
      </div>
    );
  }
}

export default App;
