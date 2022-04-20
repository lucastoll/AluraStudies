import React from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
import { AppStyle } from './styles/App';
import { ResetCss } from './styles/Index';
import { Cronometro } from './components/Cronometro';



export default function App() {
  return (
    <AppStyle>
      <ResetCss />
      <Formulario /> {/* Class component */}
      <Lista />
      <Cronometro />
    </AppStyle>
  );
}


