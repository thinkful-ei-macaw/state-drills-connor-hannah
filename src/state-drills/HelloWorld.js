import React from 'react';
// import css file


class HelloWorld extends React.Component {
  // Set the initial state
  state = {
      who: 'world',
  };

  handleButtonClick = string => {
      this.setState({
          who: string,
      });
  };

  render() {
      return (
          <div className="HelloWorld">
             <p>Hello {this.state.who}</p>
             <button type="button" onClick={() => this.handleButtonClick('Friend!')}>Friend!</button>
             <button type="button" onClick={() => this.handleButtonClick('React!')}>React!</button>
             <button type="button" onClick={() => this.handleButtonClick('World!')}>World!</button>
          </div>
      );
  }
}

export default HelloWorld;
