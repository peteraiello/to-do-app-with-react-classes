import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    fruits: ['bananas', 'apples', 'lemons'],
    value: ''
  }

  changeHandler = (event) => {
    this.setState({value: event.target.value});
  }

  submitHandler = (event) => {
    let newVal = this.state.value;
    this.state.fruits.push(newVal);
    this.setState({
      value: ''
    })
    event.preventDefault();
  }

  deleteFromList = (index) => {
    const list = this.state.fruits;
    list.splice(index, 1);
    this.setState({fruits: list})
  }
  
  render() {

    const listFruits = this.state.fruits.map((fruit, index) => {
      return <li onClick={() => this.deleteFromList(index)} key={index}>{fruit}</li>
    });

    return (
      <div className="App">
        <ul>{listFruits}</ul>
        <form onSubmit={this.submitHandler}>
          <label> Add fruit: 
            <input type="text" value={this.state.value} onChange={this.changeHandler} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

 

export default App;
