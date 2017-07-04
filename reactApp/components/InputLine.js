import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      typedText:''
    }
  }

handleSubmit(e){
  e.preventDefault();
  // this.props.submit({taskText: this.state.taskName, completed:false});
  // var f =   this.props.submit({taskText: this.state.taskName, completed:false});
  this.props.submit({taskText: this.state.typedText, completed: false})
  this.setState({
    typedText:''
  });
}

handleTyping(e){
  this.setState({
    typedText: e.target.value
  })
}

  render() {
    return(
      <div>
        <form>
          <input type='text' placeholder="task name..." value={this.state.typedText} onChange={(e) => this.handleTyping(e)}></input>
          <input type='submit' value="Add todo" onClick={(e) => this.handleSubmit(e)}></input>
        </form>
      </div>
    )
  }
}

export default InputLine;
