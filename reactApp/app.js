import React from 'react';
import ReactDOM from 'react-dom';
const dummyData = [
  {taskText: 'Piano', completed: false},
  {taskText: 'Violin', completed:false},
  {taskText: 'Harp', completed:false},
  {taskText: 'Fish', completed:true}
];

console.log(dummyData);

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

class ToDoList extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ul>
          {this.props.todos.map((task) =>
            <Todo task={task}/>
        )}
        </ul>
      </div>
    )
  }
}

class InputLine extends React.Component{
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <input type='text' placeholder="task name..."></input>
        <input type='submit' value="Add todo"></input>

      </div>
    )
  }
}

class ToDoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    this.setState({
      todos: this.props.dummyData
    })
  }

  render() {
    return(
      <div>
        <InputLine />
        <ToDoList todos={this.state.todos}/>
      </div>
    )
  }
}

ReactDOM.render(<ToDoApp dummyData ={dummyData} />, document.getElementById('root'));
