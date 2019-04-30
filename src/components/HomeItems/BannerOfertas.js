import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homeItems.css';
import Button from 'react-bootstrap/Button';


class BannerOfertas extends React.Component{
    render(){
        return(
            <div>
                {/*Banner rebajas*/}
                <Row id="banner">
                    <Col id="colBanner" xs={12}>
                        <p className="tituloCar">Rebajas -70%</p>
                        <p className="subtituloCar">Hasta 50% en productos seleccionados</p>
                        <Button className="compra p-2 pl-5 pr-5">COMPRA YA</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default BannerOfertas;