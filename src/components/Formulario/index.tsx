import React, { Component } from 'react';
import Botao from '../Button';

class Formulario extends React.Component{
    render(){
        return(
            <form>
                <div><label htmlFor="tarefa">Adicione uma nova tarefa</label><input type="text" name="tarefa" id="tarefa" placeholder='O que você quer estudar?' required/></div>
                <div><label htmlFor="tempo"></label><input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="02:00:00" required/></div>
                <Botao />
            </form>
    );
  }
}

export default Formulario;