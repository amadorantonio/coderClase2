import React from 'react'
import Product from '../Product/Product'

//Functional Component
const ItemListContainer = ({greeting}) => {
    return(
        <div>
            <div>{ greeting }</div>
            <Product title='Bicicleta Mercurio Ranger 27.5"' price="$7,199 mxn"></Product>
            <Product title='Bicicleta de Montaña Rising Assault 26" color Negro"' price="$4,999 mxn"></Product>
            <Product title='Bicicleta Huffy Deluxe 26" color Verde"' price="$5,299 mxn"></Product>
        </div>
    )
}

export default ItemListContainer