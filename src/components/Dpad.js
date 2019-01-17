import React, { Component } from 'react';

class Dpad extends Component {
  render = () => {
    return (
      <div>
        <button>up</button>
        <button>left</button>
        <button>right</button>
        <button>down</button>
      </div>
    );
  };
}

export default Dpad;