import React, { Component } from "react";

class Avatar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="avatar">
        <div className="avatar-img">
          <img src={this.props.image} alt="#" />
        </div>
        <span className={`isOnline ${this.props.isOnline}`}></span>
      </div>
    );
  }
}

export default Avatar;