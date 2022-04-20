import { CronometroWrapper } from '../../styles/Cronometro';
import { Botao } from '../Button';
import { Relogio }  from './Relogio';
export function Cronometro() {
    return (
        <CronometroWrapper>
            <p className='titulo'>Escolha um card e inicie o cronômetro</p>
            <div className='relogioWrapper'>
                <Relogio />
            </div>
            <Botao>Começar!</Botao>
        </CronometroWrapper>
    )
}