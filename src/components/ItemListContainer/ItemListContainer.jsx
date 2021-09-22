import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'

//Functional Component
const ItemListContainer = ({greeting}) => {
    const [products, setProduct] = useState([])

    const getProducts = new Promise((resolve) => {
        setTimeout(() => {
            const mockProducts = [
                {
                    id: 1,
                    name: 'Shampoo for Man',
                    descripcion: 'Shampoo para caballero',
                    stock: 9,
                    img: 'bici1.jpg'
                },
                {
                    id: 2,
                    name: 'Jabón Zote',
                    descripcion: 'Jabón para ropa',
                    stock: 5,
                    img: 'bici2.jpg'
                },
                {
                    id: 2,
                    name: 'Jabón Zote',
                    descripcion: 'Jabón para ropa',
                    stock: 0,
                    img: 'bici2.jpg'
                }
            ]
            resolve(mockProducts)
        }, 3000);
    })

    useEffect(() =>{
        getProducts.then((res)=>{
            console.log('respuesta de promesa', res)
            setProduct(res)
        })
    }, [])

    return(
        <div>
            <div>{ greeting }</div>
            
            {products.map((product) => {
                    return(
                        <Product key={product.id} title={product.name} price="$7,199 mxn" image={product.img} stock={product.stock}></Product>
                    )
                })
            }
            {/* <Product title='Bicicleta Mercurio Ranger 27.5"' price="$7,199 mxn"></Product>
            <Product title='Bicicleta de Montaña Rising Assault 26" color Negro"' price="$4,999 mxn"></Product>
            <Product title='Bicicleta Huffy Deluxe 26" color Verde"' price="$5,299 mxn"></Product> */}
        </div>
    )
}

export default ItemListContainer