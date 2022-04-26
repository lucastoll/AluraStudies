import React from "react";
import { SpanRelogio } from "../../../styles/Relogio";

interface Props {
    tempo: number | undefined
}


export default function Relogio ({ tempo = 0 } : Props){
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0') /* Colocar valores tipo 1,2,3,4 como 01,02,03,04 */
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0') /* Colocar valores tipo 1,2,3,4 como 01,02,03,04 */
    return(
        <React.Fragment>
            <SpanRelogio>{minutoDezena}</SpanRelogio>
            <SpanRelogio>{minutoUnidade}</SpanRelogio>
            <span className="relogioDivisao">:</span>
            <SpanRelogio>{segundoDezena}</SpanRelogio>
            <SpanRelogio>{segundoUnidade}</SpanRelogio>
        </React.Fragment>
    ) 
}