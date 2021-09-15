import React from 'react';

import H1 from './H1';
class Counter extends React.Component {
  state = {
    contador: 0,
    nombre: 'Leandro',
  };
  handleClick(contador) {
    this.setState({ contador: contador + 1 });
  }

  componentDidMount() {
    this.setState({ contador: 1 });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contador !== prevState.contador) {
      if (this.state.contador % 2 === 0) {
        this.setState({ contador: this.state.contador, nombre: 'Diego' });
      }
      if (this.state.contador % 2 !== 0) {
        this.setState({ contador: this.state.contador, nombre: 'Leandro' });
      }
    }
  }

  componentWillUnmount() {
    console.log('Se desmonta');
    this.setState({ contador: 0, nombre: '' });
  }

  render() {
    return (
      <>
        <h2>{this.state.nombre}</h2>
        <H1 contador={this.state.contador} />
        <button onClick={() => this.handleClick(this.state.contador)}>
          Sumar al contador
        </button>
      </>
    );
  }
}

export default Counter;
