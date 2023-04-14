import React, { Component } from "react";

export default class CreatModal extends Component {
  constructor() {
    super();

    this.state = {
      displayBio: false,
    };
  }

  handleShow = () => {
    this.setState({ displayBio: !this.state.displayBio });
  };
  render() {
    return (
      <div>
        {this.state.displayBio ? (
          <div>
            <p>hello, im modal</p>
            <button onClick={this.handleShow}>Show less</button>
          </div>
        ) : (
          <button onClick={this.handleShow}>Show more</button>
        )}
      </div>
    );
  }
}
