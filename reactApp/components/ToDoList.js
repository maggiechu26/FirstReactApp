import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

class ToDoList extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ul>
          {this.props.todos.map((task) =>
            <Todo
              task={task}
              
            />
        )}
        </ul>
      </div>
    )
  }
}
export default ToDoList;
