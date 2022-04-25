import React from 'react';
import { FormularioWrapper } from '../../styles/Formulario';
import { InterfaceTarefa } from '../../types/interfaceTarefa';
import { Botao } from '../Button';
import { v4 as uuidv4} from 'uuid'

class Formulario extends React.Component<{
    setTarefas: React.Dispatch<React.SetStateAction<InterfaceTarefa[]>>
}>{
    state = {
        tarefa: "",
        tempo: "00:00"
    }

    adicionarTarefa(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault(); /* Não atualizar a pag ao dar submit no formulario */
        this.props.setTarefas(tarefasAntigas =>
             [
                ...tarefasAntigas, 
                {
                    ...this.state,
                    selecionado: false, 
                    completado: false,
                    id: uuidv4() /* Id criado com a bibilioteca npm i uuid, é uma função pronta que da um id unico para cada tarefa nossa */
                }
            ]
        );
        /* Por padrão o SetState importado da maneira que foi tem como parametro seu state antigo, nomeado de tarefasAntigas (não importa o nome) nessa ocasiao,
        dessa maneira, não precisamos importas tarefas e fazer um:
        setTarefas ([...tarefas, {tarefa : "Estudar estado", tempo: "05:00:00"}])*/
        this.setState({            
            tarefa: "",
            tempo: "00:00"
        })
        /* Resetar state para resetar campo do input ao adicionar tarefa, isso só é possivel pelo onchange usando o evento nos inputs */

    }

    render(){
        return(
            <FormularioWrapper onSubmit={this.adicionarTarefa.bind(this)}> {/* Associa a função adicionarTarefa ao escopo this (Class formulario)*/}
                <div className='inputContainer'><label htmlFor="tarefa">Adicione uma nova tarefa</label>
                <input 
                type="text" 
                name="tarefa" 
                id="tarefa" 
                placeholder='O que você quer estudar?' 
                required
                value={this.state.tarefa} /* Valor vazio definido no state inicial */
                onChange={event => this.setState({...this.state, tarefa: event.target.value})} /* Atualizar o input text no DOM, sem isso ao digitar no input ele não muda o valor */
                
                />
                </div>
                <div className='inputContainer'><label htmlFor="tempo">Tempo</label>
                <input type="time"
                step="1"
                name="tempo"
                id="tempo"
                min="00:00:00"
                max="02:00:00"
                required 
                value={this.state.tempo} /* Value inicial, igual a 00:00 definido no objeto lá em cima */
                onChange={event => this.setState({...this.state, tempo: event.target.value})} /* Pegar valor do input e atualizar no DOM, sem isso ao clicar no input time ele não atualiza*/
                />
                </div>
                <Botao type="submit">Adicionar</Botao>
            </FormularioWrapper>
    );
  }
}

export default Formulario;