import React from 'react';

class H1 extends React.Component {
  render() {
    return (
      <>
        <h1>counter: {this.props.contador}</h1>
      </>
    );
  }
}

export default H1;
