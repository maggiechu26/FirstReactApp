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

  render() {
    return(
      <div>
        <InputLine />
        <ToDoList todos={this.state.todos}/>
      </div>
    )
  }
}
export default ToDoApp;
