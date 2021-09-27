import React from 'react'
import './Item.css'
import ItemCount from '../itemCount/ItemCount'

//Functional Component
const Item = (props) => {
    return (
        <div className='container-producto'>
            <div>
                <img src={props.pictureUrl} alt="" />
            </div>
            <h3>{props.title}</h3>
            <p>{props.price}</p>
            <p>En Sock: {props.stock}</p>
            <p>Cantidad</p>
            <ItemCount stock={props.stock}></ItemCount>
            <button disabled={props.stock == 0}>Comprar</button>
        </div>
    )
}

export default Item