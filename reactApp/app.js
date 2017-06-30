import React from 'react';
import ReactDOM from 'react-dom';
const dummyData = ['Piano', 'Violin', 'Harp', 'Fish'];


class ToDoList extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <ul>
          {this.props.dummyData.map((task) => <li><input type='submit' value='X'></input> {task} </li> )}
        </ul>
      </div>
    )
  }
}
ReactDOM.render(<ToDoList dummyData ={dummyData} />, document.getElementById('root'));
