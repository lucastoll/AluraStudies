import React from "react";
import { SpanRelogio } from "../../../styles/Relogio";
export function Relogio (){
    return(
        <React.Fragment>
            <SpanRelogio>0</SpanRelogio>
            <SpanRelogio>0</SpanRelogio>
            <span className="relogioDivisao">:</span>
            <SpanRelogio>0</SpanRelogio>
            <SpanRelogio>0</SpanRelogio>
        </React.Fragment>
    ) 
}