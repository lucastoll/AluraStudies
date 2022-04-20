import React from 'react';
import { FormularioWrapper } from '../../styles/Formulario';
import { Botao } from '../Button';

class Formulario extends React.Component{
    render(){
        return(
            <FormularioWrapper>
                <div className='inputContainer'><label htmlFor="tarefa">Adicione uma nova tarefa</label><input type="text" name="tarefa" id="tarefa" placeholder='O que você quer estudar?' required/></div>
                <div className='inputContainer'><label htmlFor="tempo">Tempo</label><input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="02:00:00" required/></div>
                <Botao>Adicionar</Botao>
            </FormularioWrapper>
    );
  }
}

export default Formulario;