import React from 'react';
import ReactDOM from 'react-dom';
const dummyData = [
  {taskText: 'Piano', completed: false},
  {taskText: 'Violin', completed:false},
  {taskText: 'Harp', completed:false},
  {taskText: 'Fish', completed:true}
];

console.log(dummyData);

class ToDoList extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ul>
          {this.props.dummyData.map((task) =>
          <li>
            <input type='submit' value='X'></input>
            {task.completed ? <strike>{task.taskText}</strike> : task.taskText}
          </li>
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
  }

  render() {
    return(
      <div>
        <InputLine />
        <ToDoList dummyData={this.props.dummyData}/>
      </div>
    )
  }
}

ReactDOM.render(<ToDoApp dummyData ={dummyData} />, document.getElementById('root'));
