import React from 'react'
import {connect} from 'react-redux'

import Card from './Card'

 const Media = props =>{
    return(
        <Card title="Média dos números" green>
            <div>
                <span>
                    <span> Resultado: </span>
                    <strong> {( props.max + props.min)/2}</strong>
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

export default connect(mapStateToProps)(Media)