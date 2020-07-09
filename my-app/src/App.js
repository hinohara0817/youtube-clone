import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';

function App() {
  return (
    <div className="App">
      Hello world
      <Counter></Counter>
      <User name={"Taro"} />
      <User name={"Shinya"} />
      <User />
    </div>
  );
}

class Counter extends Component {
  constructor(props){
    super(props)
    this.state = {count: 0}
  }
  handlePlusButton = () => {
    const currentCount = this.state.count
    this.setState({count: currentCount + 1})
  }
  render(){
    return (
      <React.Fragment>
        <div>test {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+</button>
      </React.Fragment>
    )
  }
}
const User = (props) => {
  return <div>Hi, I am {props.name}</div>
}

User.defaultProps = {
  name: "Hanako"
}

User.propTypes = {
  name: PropTypes.string,
  name: PropTypes.string.isRequired
}

export default App;
