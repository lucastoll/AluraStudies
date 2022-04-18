import React from "react";

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
    }]
    return(
        <aside>
            <h2> Estudos do dia </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <li key={index}>
                        <h3>{item.tarefa}</h3>
                        <span>{item.tempo}</span>
                    </li>
                ))}
                {/* {tarefas.map(item => <p> {item.tarefa} </p>)} */} {/* Exemplo zuado do exercício */}
            </ul>
        </aside>
    )
}

