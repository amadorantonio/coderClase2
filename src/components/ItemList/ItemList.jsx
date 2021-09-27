import React from 'react'
import './ItemList.css'
import Item from '../Item/Item'

import { Box, CircularProgress } from '@material-ui/core';

const ItemList = ({items}) => {
    
    console.log(items)
    return(
        <div>
            {
                items.length != 0 ? (
                    items.map((item) => {
                        return(
                            <Item key={item.id} title={item.title} price={item.price} descripcion={item.descripcion} pictureUrl={item.pictureUrl} stock={item.stock}></Item>
                        )
                    })
                ) : (
                    <Box sx= {{display: 'flex'}} style={{height:500, justifyContent: 'center', alignItems:'center'}}>
                        <CircularProgress></CircularProgress>
                    </Box>
                )
                
            }
        </div>
    )
}

export default ItemList