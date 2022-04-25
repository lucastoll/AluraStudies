import React, {useState} from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
import { AppStyle } from './styles/App';
import { ResetCss } from './styles/Index';
import { Cronometro } from './components/Cronometro';
import { InterfaceTarefa } from './types/interfaceTarefa';
import { v4 as uuidv4} from 'uuid'




export default function App() {
  const [tarefas, setTarefas] = useState<InterfaceTarefa[]>([
    {
      tarefa: "Adicione uma tarefa e clique no cronomêtro para começar seu timer",
      tempo: "00:00:05",
      selecionado: false,
      completado: false,
      id: uuidv4()
    }
  ])
  /* Use state tipado, pois a array de objetos com tarefas agora foi passada vazia, 
  então ele foi tipado para aceitar array do tipo InterfaceTarefa e array vazia */
  return (
    <AppStyle>
      <ResetCss />
      <Formulario setTarefas={setTarefas} /> {/* Class component */}
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </AppStyle>
  );
}


