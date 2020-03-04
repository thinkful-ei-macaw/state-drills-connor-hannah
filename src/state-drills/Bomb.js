
import React from 'react';

class Bomb extends React.Component {
  state = {
    count: 0,
  }

  

  // Called after component mounts
  componentDidMount() {
    this.interval = setInterval(() => {
      let newCount = this.state.count + 1;
     // console.log(newCount);
      this.setState({
        count: newCount
      });
    }, 1000);
  } 

  tickTock() {
    console.log(this.state.count);
    if (this.state.count >= 8){
      clearInterval(this.interval);
      return 'BOOM!!!!';
  }
  else if (this.state.count % 2 !== 0){
    return 'tock';
  }
  else if (this.state.count % 2 === 0){
    return 'tick';
  }
  }

  render() {
    return (
      <div>
        <p>
        {this.tickTock()}
        </p>
      </div>
    )
  };


  componentWillUnmount() {
    clearInterval(this.interval);
  }
}


export default Bomb;