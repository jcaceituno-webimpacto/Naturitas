import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import InfoHeader from './HeaderItems/InfoHeader';
import BusquedaEscritorioHeader from './HeaderItems/BusquedaEscritorioHeader';
import Carro from './HeaderItems/Carro';
import Menu from './HeaderItems/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderItems/headerItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const infoHeaderData = [
    {texto: '¿Necesitas ayuda? 919 019 101 I 932 711 184', dnone: true, icono: "phone-square"},
    {texto: 'Envío Gratis a partir de 45€', dnone: false, icono: "box"},
    {texto: '30 días - plazo devolución gratuita', dnone: true, icono: "sync-alt"},
]


const enlacesMenu = [
    {href:"index.html", titulo: "SUPLEMENTOS"},
    {href:"index.html", titulo: "PLANTAS"},
    {href:"index.html", titulo: "ALIMENTACIÓN"},
    {href:"index.html", titulo: "COSMÉTICA"},
    {href:"index.html", titulo: "HIGIENE"},
    {href:"index.html", titulo: "MAMÁ Y BEBÉ"},
    {href:"index.html", titulo: "DEPORTE"},
    {href:"index.html", titulo: "HUERTO"},
]


class Header extends React.Component{
    constructor(props){
        super(props);

        this.state={
            cerrado:true,
        }

        this.cambioIcono = this.cambioIcono.bind(this);
    }


    cambioIcono(valorDeHijo){
        this.setState({cerrado: valorDeHijo})
    }


    render(){
        return(
            <div className="noMarNoPad">
                <Row id="infoHeader"><InfoHeader data={infoHeaderData}/></Row>

                <Row id="headerGrande">
                    {/*Menú hamburguesa*/}
                    <Col className="d-md-none d-flex align-items-center" xs={1}>
                        <label htmlFor="inputChk" id="labelHam" className="d-flex flex-wrap align-items-top justify-content-center">
                            <FontAwesomeIcon icon={this.state.cerrado?"bars":"times"} className="iconoAw my-auto"></FontAwesomeIcon>
                        </label>
                    </Col>

                    {/*Iconos y logo*/}
                    <Col className="d-md-none align-bottom d-flex flex-wrap align-items-center justify-content-center noMarNoPad" xs={1}>
                        <FontAwesomeIcon icon="phone-square" className="iconoAw"/>
                    </Col>
                    <Col className="d-flex flex-wrap align-items-center justify-content-center" xs={7} md={3}>
                        <img src="/img/logo.jpg" alt="logo" id="logoImg" />
                    </Col>

                    {/*Form búsqueda escritorio*/}
                    <Col className="d-none d-md-flex flex-wrap align-items-center justify-content-center" md={5}>
                        <BusquedaEscritorioHeader placeholder="¿Qué buscas hoy? Encuentra entre más de 30 mil productos…"/>
                    </Col>

                    {/*Iconos derecha*/}
                    <Col className="d-flex flex-wrap align-items-center justify-content-center noMarNoPad" xs={3} md={4}>
                        <Row className="noMarNoPad rowIconos">
                            <Col className="d-none d-md-flex flex-wrap align-items-center justify-content-center colIconos" md={4}>
                                <FontAwesomeIcon icon="heart" className="mr-2 iconoAw"/><span className="textoIcono">Favoritos</span>
                            </Col>
                            <Col className="d-md-flex flex-wrap align-items-center justify-content-center colIconos" xs={6} md={4}>
                                <FontAwesomeIcon icon="user" className="mr-2 iconoAw"/><span className="textoIcono d-none d-md-inline">Mi cuenta</span>
                            </Col>
                            <Col className="d-flex flex-wrap align-items-center justify-content-right" id="colCarro" xs={6} md={3}>
                                <Carro/>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                
                {/*Form búsqueda móvil*/}
                <Row className="d-md-none" id="headerGrande2">
                    <Col xs={12} className="noMarNoPad">
                        <BusquedaEscritorioHeader placeholder="¿Qué buscas hoy?"/>
                    </Col>
                </Row>

                
                {/*Menú*/}
                <Menu cambioIcono={(valorDeHijo) => this.cambioIcono(valorDeHijo)} enlacesMenu={enlacesMenu}/>

                {/*Barra promociones*/}
                <Row>
                    <Col className="p-1" id="colPromo" xs={12}>
                        <span><strong>¡Promociones de invierno!</strong> Gastos de envío gratis para cosmética</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;