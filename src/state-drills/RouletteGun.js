import React from 'react';

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 3
  };

  state = {
    spinningTheChamber: false,
    chamber: null,
  }

  componentWillUnmount() {
    clearTimeout(this.timeout)
  } 

  handleClick = () => {
    this.setState({spinningTheChamber: true});
    this.timeout = setTimeout(() => {
      const randomChamber = [Math.ceil(Math.random() * 3)];
      this.setState({spinningTheChamber: false, chamber: randomChamber})
      console.log(this.state.chamber)
    }, 2000)  
  }

  renderDisplay() {
    const { chamber, spinningTheChamber } = this.state
    const { bulletInChamber } = this.props
    if (spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ...'
    } else if (chamber === bulletInChamber) {
      return 'BANG!!!!!'
    } else {
      return 'you\'re safe!'
    }
  }

  render() {
    return (
      <div className="RouletteGun">
        
        <button type="button" onClick={this.handleClick}>Pull the trigger!</button>
        <p>
          {this.renderDisplay()}
        </p>
      </div>
    )
  }
    
}

export default RouletteGun;