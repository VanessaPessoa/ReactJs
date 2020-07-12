// action creator

import {NUM_MAX_ALTERADO} from './actionTypes'


export function alterarNumeroMaximo(novoNumero){
    return{
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}
