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
      tarefa: "Tarefa teste",
      tempo: "00:00:05",
      selecionado: false,
      completado: false,
      id: uuidv4()
    }
  ])

  const [selecionado, setSelecionado] = useState<InterfaceTarefa>(); /* state tipado */
  function selecionaTarefa(tarefaSelecionada: InterfaceTarefa){ /* function tipada */
    setSelecionado(tarefaSelecionada); 

    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      /* Faz um loop nas tarefas, caso o seu id seja igual o tarefaSelecionada a prop selecionado daquela tarefa passa para true */
    })))
  }

  function finalizarTarefa(){
    if(selecionado) {
      setSelecionado(undefined);
      setTarefas(tarefasAnteriores => 
        tarefasAnteriores.map(tarefa => {
          if(tarefa.id === selecionado.id){
            return {
              ...tarefa, 
              selecionado: false,
              completado: true
            }
          }
          return tarefa;
        }))
    }
  }

  return (
    <AppStyle>
      <ResetCss />
      <Formulario setTarefas={setTarefas} /> {/* Class component */}
      <Lista 
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
      />
      <Cronometro finalizarTarefa={finalizarTarefa} selecionado={selecionado}/>
    </AppStyle>
  );
}


