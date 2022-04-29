import { ListaWrapper } from "../../styles/Lista";
import { InterfaceTarefa } from "../../types/interfaceTarefa";
import Item from "./item";

interface Props{
    tarefas: InterfaceTarefa[];
    selecionaTarefa: (tarefaSelecionada: InterfaceTarefa) => void
}


export default function Lista({ tarefas, selecionaTarefa } : Props ){
    return(
        <ListaWrapper>
            <h2> Estudos do dia </h2>
            <ul> 
                {tarefas.map((item) => ( /* RESPONSABILIDADE LISTA = Fazer a iteração e enviar os dados via map e props */ 
                    <Item
                    selecionaTarefa={selecionaTarefa} 
                    {...item}  /* == tarefa = {item.tarefa} tempo = {item.tempo} */
                    key={item.id}
                    /> /* RESPONSABILIDADE ITEM = Renderizar os dados enviados por lista  */
                ))}
            </ul>
        </ListaWrapper>
    )
}
