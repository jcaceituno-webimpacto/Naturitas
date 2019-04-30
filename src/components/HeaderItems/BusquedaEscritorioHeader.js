import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import './headerItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'react-bootstrap/Button';


class BusquedaEscritorioHeader extends React.Component{
    render(){
        const {placeholder}=this.props;

        return(
            <form action="#" className="formulario m-0 p-0">
                <Row className="m-0 p-0">
                    <Col className="noMarNoPad" xs={10} md={11}>
                        <div className="form-group">
                            <input type="text" placeholder={placeholder} className="pl-2 pl-md-0 inputBuscar" id="inputGrande"/>
                        </div>
                    </Col>
                    <Col className="noMarNoPad" xs={2} md={1}>
                        <Button className="iconoBusqueda"><FontAwesomeIcon icon="search"/></Button>
                    </Col>
                </Row>
            </form>
        );
    }
}

export default BusquedaEscritorioHeader;