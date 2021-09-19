import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


export default class CartWidget extends React.Component {
    render(){
        return(
            <div>
                <button variant="contained">
                    <ShoppingCartIcon></ShoppingCartIcon>
                        9
                </button>
            </div>
        )
    }
}