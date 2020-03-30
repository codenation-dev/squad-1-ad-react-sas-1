import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Container from './components/Container'

function App() {
  return (
    <div className="App">
      <Container fluid style={{ backgroundColor: 'tomato', height: 120, color: 'white' }}>
        <div>Aqui um exemplo de container centralizado com 100% da tela</div>
        <br />
        <code>
          {`<Container fluid>
              elementos html aqui
            </Container>
          `}
        </code>
      </Container>
      <Container style={{ backgroundColor: 'lightblue', height: 120, color: '#444' }}>
        Aqui um exemplo de container centralizado
        <br />
        <code>
          {`<Container >
              elementos centralizados do html aqui
            </Container>
          `}
        </code>
      </Container>
      <Container  className="bg-green" fluid style={{ height: 120, color: '#444' }}>
        <div>Aqui um exemplo adicionando estilos via className</div>
        <br />
        <code>
          {`<Container className="minha-classe">
            elementos centralizados do html aqui
            </Container>
          `}
        </code>
      </Container>
    </div>
  );
}

export default App;
