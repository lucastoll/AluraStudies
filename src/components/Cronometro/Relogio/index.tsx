import React from "react";
import { SpanRelogio, RelogioComponente } from "../../../styles/Relogio";

interface Props {
    tempo: number | undefined
}


export default function Relogio ({ tempo = 0 } : Props){
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0') /* Colocar valores tipo 1,2,3,4 como 01,02,03,04 */
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0') /* Colocar valores tipo 1,2,3,4 como 01,02,03,04 */
    return(
        <RelogioComponente>
            {/* <React.Fragment> documentar */}
                <div className="spanRelogio">{minutoDezena}</div>
                <div className="spanRelogio">{minutoUnidade}</div>
                <div className="relogioDivisao">:</div>
                <div className="spanRelogio">{segundoDezena}</div>
                <div className="spanRelogio">{segundoUnidade}</div>
            {/* </React.Fragment> */}
        </RelogioComponente>
    ) 
}