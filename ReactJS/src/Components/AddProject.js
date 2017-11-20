import React, { Component } from 'react'; 

class AddProject extends Component { 
  constructor(){
    super();
    this.state = {
      newProject:{}
    }
  }
  static defaultProps = {
    categories: ['X-option 1', 'X-option 2', 'X-option 3','X-option 4', 'X-option 5', 'X-option 6']
  }

  handleSubmit(e){
   if(this.refs.title.value === ''){
    alert('Title is requreisd');
  } else {
    this.setState({newProject:{
      title: this.refs.title.value,
      category: this.refs.category.value
    }}, function(){
     // console.log(this.state);
      this.props.addProject(this.state.newProject);
    });
  }
   console.log(this.refs.title.value);
   console.log(this.refs.category.value);
   // document.write('submitted@ successfully!');
    e.preventDefault();
  }
  
  render() { 
    let categoryOptions = this.props.categories.map(category => {
        return <option key = {category} value={category}>{category} </option>
    });
    return (
      <div> 
       <h3> Add Project</h3>         
       <form onSubmit={this.handleSubmit.bind(this)}>
       <div>
       <label>Title  </label><br />
       <input type="text" ref="title" /> <br />
       </div>
       <div>
       <label>Category  </label><br />
       <select  ref="category" > 
       {categoryOptions}
       </select>
       </div>
       <input type="submit" value="Submit" />
       </form>   
      </div>
    );
  }
}

export default AddProject;
