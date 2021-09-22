import React, {useState} from 'react'
import './ItemCount.css'

const ItemCount = (props) => {
    let [itemCount, setItemCount] = useState(1)
    const agregarStock = () => {
        if(props.stock > itemCount){
            setItemCount(itemCount + 1)
        }
    }
    const quitarStock = () => {
        if(itemCount > 1){
            setItemCount(itemCount - 1)
        }
    }
    if(props.stock === 0){
        itemCount = 0
    }
    return(
        <div className='cantidadContainer'>
            <button onClick={quitarStock}>-</button>
            <div className="divCounter">
                {itemCount}
            </div>
            <button onClick={agregarStock}>+</button>
        </div>
    )
}

export default ItemCount