import { ListaWrapper } from "../../styles/Lista";
import { InterfaceTarefa } from "../../types/interfaceTarefa";
import Item from "./item";


export default function Lista({ tarefas } : { tarefas: InterfaceTarefa[]}){
    return(
        <ListaWrapper> {/* SRP - Nesse componente, a lista só tem uma função */}
            <h2> Estudos do dia </h2>
            <ul> 
                {tarefas.map((item, index) => ( /* RESPONSABILIDADE LISTA = Fazer a iteração e enviar os dados via map e props */ /* INDEX = Não entendi. */
                    <Item tarefa={item.tarefa} tempo={item.tempo} selecionado={item.selecionado} completado={item.completado} id={item.id} key={index}/> /* RESPONSABILIDADE ITEM = Renderizar os dados enviados por lista  */
                ))}
            </ul>
        </ListaWrapper>
    )
}
