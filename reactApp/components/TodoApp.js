import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList';
import InputLine from './InputLine';

const dummyData = [
  {taskText: 'Piano', completed: false},
  {taskText: 'Violin', completed:false},
  {taskText: 'Harp', completed:false},
  {taskText: 'Fish', completed:true}
];
class ToDoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }


  componentDidMount(){
    this.setState({
      todos: dummyData
    })
  }

  addTodo(task){
    // var taskName1 = name;
    var taskName = task['taskText'];
    // console.log(taskName);
    var completedBoolean = 'false';
    var newArr = this.state.todos.slice();
    // console.log(newArr);
    newArr.push({
      taskTest: taskName,
      completed: false
    })
    // console.log(this.state.todos);
    this.setState({
      todos: newArr
    })
  }

  removeTodo(index){
    var removed = this.state.todos.slice(0, index);
    var newArr = removed.concat(this.state.todos.slice(index+1));
    this.setState({
      todos: newArr
    })
  }

  render() {
    return(
      <div>
        <InputLine
          submit={(task)=> this.addTodo(task)}
          />
        <ToDoList
          todos={this.state.todos}
          todoXClick={(index)=>this.removeTodo(index)}
          />
      </div>
    )
  }
}


export default ToDoApp;
