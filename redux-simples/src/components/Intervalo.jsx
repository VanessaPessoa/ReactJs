import './Intervalo.css'
import React from 'react'
import {connect} from 'react-redux'

import Card from './Card'

const Intervalo = props =>{


    return(
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
                <span>
                    <strong> Mínimo </strong>
                    <input type="number" value={props.min} readOnly/> 
                </span>

                <span>
                    <strong> Máximo </strong>
                    <input type="number" value={props.max} readOnly/> 
                </span>
            </div>
       
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        min: state.numeros.min,
        max : state.numeros.max
    }
}

export default connect(mapStateToProps)(Intervalo)