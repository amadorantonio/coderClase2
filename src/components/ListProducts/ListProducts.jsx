import React from 'react'
import Product from '../Product/Product'

export default class ListProducts extends React.Component {
    render(){
        return(
            <div>
                <Product title='Bicicleta Mercurio Ranger 27.5"' price="$7,199 mxn"></Product>
                <Product title='Bicicleta de Montaña Rising Assault 26" color Negro"' price="$4,999 mxn"></Product>
                <Product title='Bicicleta Huffy Deluxe 26" color Verde"' price="$5,299 mxn"></Product>
            </div>
        )
    }
}