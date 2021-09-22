import React from 'react'
import productImg from '../../assets/img/bici1.jpg'
import './Product.css'
import ItemCount from '../itemCount/ItemCount'

//Functional Component
const Product = (props) => {
    return (
        <div className='container-producto'>
            <div>
                <img src={productImg} alt="" />
            </div>
            <h3>{props.title}</h3>
            <p>{props.price}</p>
            <p>En Sock: {props.stock}</p>
            <p>Cantidad</p>
            <ItemCount stock={props.stock}></ItemCount>
            <button>Comprar</button>
        </div>
    )
}

export default Product

//Class Component
// export default class Product extends React.Component {
//     render(){
//         return(
//             <div>
//                 Componente de tipo clase {this.props.nombre}
//             </div>
//         )
//     }
// }