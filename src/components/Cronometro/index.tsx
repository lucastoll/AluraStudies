import { useEffect, useState } from 'react';
import { tempoParaSegundos } from '../../common/util/time';
import { CronometroWrapper } from '../../styles/Cronometro';
import { InterfaceTarefa } from '../../types/interfaceTarefa';
import { Botao } from '../Button';
import Relogio   from './Relogio';

interface Props {
    selecionado: InterfaceTarefa | undefined,
    /* O primeiro não esta selecionado, então é preciso dizer que o selecionado também pode ser undefined */
    finalizarTarefa: () => void
}

export function Cronometro({ selecionado, finalizarTarefa } : Props ) {
    const [tempo, setTempo] = useState<number>();
    useEffect(() => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo)) /* if(selecionado?.tempo) -> Se selecionado existir -> se selecionado.tempo existir -> executar if */ 
        }

        /* Essa maravilha do Javascript moderno tem o nome de optional chaining, ou encadeamento opcional, 
        que te permite verificar um encadeamento para não haver problemas de tempo of null, no caso de selecionado ser null.
        if(selecionado && selecionado.tempo)
        */

    }, [selecionado]) /* Sempre que selecionado mudar, executar a função */

    function regressiva(contador: number = 0){
        setTimeout(() => {
            if(contador > 0){
                setTempo(contador - 1)
                return regressiva(contador -1) /* LOOP - Função recursiva    */
            }
            finalizarTarefa()
        }, 1000)
    }
    
    return (
        <CronometroWrapper>
            <p className='titulo'>Escolha um card e inicie o cronômetro</p>
            <div className='relogioWrapper'>
                <Relogio tempo={tempo}/>
                <Botao onClick={() => regressiva(tempo)}>Começar!</Botao>
            </div>
        </CronometroWrapper>
    )
}