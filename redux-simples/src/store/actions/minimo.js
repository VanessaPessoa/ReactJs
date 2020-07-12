import {NUM_MIN_ALTERADO} from './actionTypes'

// action creator
export function alterarNumeroMinimo(novoNumero){
    return{
        type: NUM_MIN_ALTERADO,
        payload: novoNumero
    }
}
