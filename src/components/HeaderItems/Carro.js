import React from 'react';
import './headerItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Carro extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            totalPrice: 29.54,
            nProducts: 17
        }
    }

    render(){
        const {totalPrice} = this.state;
        const {nProducts} = this.state;
        return(
            <div>
                <FontAwesomeIcon icon="shopping-bag" className="mr-2 iconoAw"/>
                <span id="nCarrito" className="d-flex flex-wrap align-items-center justify-content-center">{nProducts}</span>
				<span id="precioCarro" className="d-none d-md-inline">€{totalPrice}</span>
            </div>
        );
    }
}

export default Carro;