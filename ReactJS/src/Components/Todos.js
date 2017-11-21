import React, { Component } from 'react';
import TodoItem from './TodoItem';
 
class Todos extends Component { 
  // deleteProject(id){
  //   this.props.onDelete(id);
 //  }
  render() {
      let TodoItems;
      if(this.props.todos){
        TodoItems = this.props.todos.map(todo => {

   return (       
    <TodoItem 
    // onDelete={this.deleteProject.bind(this)}
     key={todo.title} todo = {todo} /> 
          ); 
     });
  } 
    return (
      <div className="Todos"> 
       <h4> API Data Source: JSONPlaceholder.typicode.com </h4>
       {TodoItems}            
       </div>
    );
  }
}

export default Todos;
