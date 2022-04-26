import { InterfaceTarefa } from "../../../types/interfaceTarefa";
interface Props extends InterfaceTarefa{
    selecionaTarefa: (tarefaSelecionada: InterfaceTarefa) => void
}

export default function Item({tarefa, tempo, selecionado, completado, id, selecionaTarefa}: Props){
    
    return(
    <li className={`item ${selecionado ? "itemSelecionado" : ''} ${completado ? "itemCompletado" : ''}`} onClick={() => !completado && selecionaTarefa(
        {
        tarefa,
        tempo,
        selecionado,
        completado,
        id
    }
    )}>
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
        {completado && <span className="concluido" aria-label="tarefa completada"></span>} {/* Se completado = true -> renderizar span */}
    </li>
    )
}