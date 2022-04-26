import { ListaWrapper } from "../../styles/Lista";
import { InterfaceTarefa } from "../../types/interfaceTarefa";
import Item from "./item";

interface Props{
    tarefas: InterfaceTarefa[];
    selecionaTarefa: (tarefaSelecionada: InterfaceTarefa) => void
}


export default function Lista({ tarefas, selecionaTarefa } : Props ){
    return(
        <ListaWrapper> {/* SRP - Nesse componente, a lista só tem uma função */}
            <h2> Estudos do dia </h2>
            <ul> 
                {tarefas.map((item) => ( /* RESPONSABILIDADE LISTA = Fazer a iteração e enviar os dados via map e props */ /* INDEX = Não entendi. */
                    <Item
                    selecionaTarefa={selecionaTarefa} 
                    {...item} 
                    key={item.id}
                    /> /* RESPONSABILIDADE ITEM = Renderizar os dados enviados por lista  */
                ))}
            </ul>
        </ListaWrapper>
    )
}
