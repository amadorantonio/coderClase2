import { Grid, Button } from "@material-ui/core";
import React from "react";
import './ItemDetail.css'
import ItemCount from "../itemCount/ItemCount"

const ItemDetail = ({item}) => {
    return(
        <div>
            <p>ItemDtail</p>
            <Grid container spacing={2}>
                <Grid item md={12}><h1>{item.title}</h1></Grid>
                <Grid item md={1}></Grid>
                <Grid item md={6}>
                    <img src={item.pictureUrl} height='500px'></img>
                </Grid>
                <Grid item md={4}>
                    <p className='textDescription'>{item.description}</p>
                    <p><h3>{item.price}</h3></p>
                    <p>{item.stock} unidades disponibles</p>
                    <ItemCount stock={item.stock}></ItemCount>
                    <Button variant="contained" disabled={item.stock === 0}>Comprar</Button>
                </Grid>
                <Grid item md={1}></Grid>
            </Grid>
        </div>
    )
} 

export default ItemDetail