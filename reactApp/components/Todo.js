import React from 'react';
import ReactDOM from 'react-dom';


class Todo extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li>
        <input type='submit' value='X'></input>
        {this.props.task.completed ? <strike>{this.props.task.taskText}</strike> : this.props.task.taskText}
      </li>
    )
  }
}
export default Todo;
