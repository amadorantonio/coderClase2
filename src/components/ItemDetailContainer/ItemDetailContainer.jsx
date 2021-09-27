import React, {useState, useEffect} from 'react'
import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'

import { Box, CircularProgress } from '@material-ui/core';

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})

    const getItem = new Promise((resolve) => {
        setTimeout(() => {
            const mockItem = 
                {
                    id: 1,
                    title: 'Ranger 27.5"',
                    price: "$7,199 mxn",
                    description: 'Bicicleta de vanguardia, rodada en pleno crecimiento. Pioneros en la fabricación y comercialización de esta rodada en precio de entrada. Un sueño para quien busca una nueva sensación al manejo de la bicicleta de montaña.',
                    stock: 9,
                    pictureUrl: 'https://mail.bicicletasmercurio.com.mx/wp-content/uploads/2017/08/RANGER-R27.5-GRIS-VERDE-PERFIL-4.jpg'
                }
            resolve(mockItem)
        }, 2000);
    })

    useEffect(() =>{
        getItem.then((res)=>{
            console.log('respuesta de promesa', res)
            setItem(res)
        })
    }, [])
    
    return(
        <div>
            <p>ItemDetalContainer</p>
            {
                item.id ? (
                    <ItemDetail item={item}></ItemDetail>
                ) : (
                    <Box sx= {{display: 'flex'}} style={{height:500, justifyContent: 'center', alignItems:'center'}}>
                        <CircularProgress></CircularProgress>
                    </Box>
                )
            }
        </div>
    )
}

export default ItemDetailContainer