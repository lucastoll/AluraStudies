import React from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista';

export default function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Formulario /> {/* Class component */}
      <Lista />
    </div>
  );
}


