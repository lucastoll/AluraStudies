import React from "react";
import { ListaWrapper } from "../../styles/Lista";
import Item from "./item";

export default function lista(){
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'Javascript',
        tempo: '01:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }, {
        tarefa: 'Typescript',
        tempo: '03:00:00'
    }]
    return(
        <ListaWrapper> {/* SRP - Nesse componente, a lista só tem uma função */}
            <h2> Estudos do dia </h2>
            <ul> 
                {tarefas.map((item, index) => ( /* RESPONSABILIDADE LISTA = Fazer a iteração e enviar os dados via map e props */ /* INDEX = Não entendi. */
                    <Item tarefa={item.tarefa} tempo={item.tempo} key={index}/> /* RESPONSABILIDADE ITEM = Renderizar os dados enviados por lista  */
                ))}
            </ul>
        </ListaWrapper>
    )
}


{/* {tarefas.map(item => <p> {item.tarefa} </p>)} */} {/* Exemplo zuado do exercício */}