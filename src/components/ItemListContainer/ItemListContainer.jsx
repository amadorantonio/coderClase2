import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'

//Functional Component
const ItemListContainer = ({greeting}) => {

    const [items, setItems] = useState([])

    const getItems = new Promise((resolve) => {
        setTimeout(() => {
            const mockProducts = [
                {
                    id: 1,
                    title: 'Ranger 27.5"',
                    price: "$7,199 mxn",
                    description: 'Bicicleta de vanguardia, rodada en pleno crecimiento. Pioneros en la fabricación y comercialización de esta rodada en precio de entrada. Un sueño para quien busca una nueva sensación al manejo de la bicicleta de montaña.',
                    stock: 9,
                    pictureUrl: 'https://mail.bicicletasmercurio.com.mx/wp-content/uploads/2017/08/RANGER-R27.5-GRIS-VERDE-PERFIL-4.jpg'
                },
                {
                    id: 2,
                    title: 'Cruiser R26',
                    price: "$4,999 mxn",
                    description: 'Bicicleta para mujer que busca expresar su estilo de la moda, una bicicleta con un concepto actual y retro, excelente para rodar tanto en pavimento, tierra o arena, con un avance cómodo gracias a la relación de su rueda libre, y segura por su frenado contra pedal.',
                    stock: 5,
                    pictureUrl: 'https://mail.bicicletasmercurio.com.mx/wp-content/uploads/2017/08/300754-CruiserR26-Purpura.jpg'
                },
                {
                    id: 3,
                    title: 'Skiller DH R20',
                    price: "$3,499 mxn",
                    description: 'La Bicicleta para el niño que busca algo más que una simple bicicleta, un concepto motocross, de colores agresivos y apegados a las tendencias, una bicicleta que será la diferencia entre una simple rodada, y una aventura extraordinaria.',
                    stock: 0,
                    pictureUrl: 'https://mail.bicicletasmercurio.com.mx/wp-content/uploads/2017/08/300766-VERDE-NEON-NEGRO-NARANJA-L-01.jpg'
                }
            ]
            resolve(mockProducts)
        }, 2000);
    })

    useEffect(() =>{
        getItems.then((res)=>{
            console.log('respuesta de promesa', res)
            setItems(res)
        })
    }, [])
    
    return(
        <div>
            <div>{ greeting }</div>
            <ItemList items={items}></ItemList>
        </div>
    )
}

export default ItemListContainer