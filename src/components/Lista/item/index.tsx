import { InterfaceTarefa } from "../../../types/interfaceTarefa";

export default function Item({tarefa, tempo, selecionado, completado, id}: InterfaceTarefa){
    console.log('item atual: ', {tarefa, tempo, selecionado, completado, id})
    return(
    <li className="item">
        <h3>{tarefa}</h3>
        <span>{tempo}</span>
    </li>
    )
}