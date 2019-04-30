import React from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomeItems/homeItems.css';
import BannerOfertas from './HomeItems/BannerOfertas';
import BannerComida from './HomeItems/BannerComida';
import BannerInfo from './HomeItems/BannerInfo';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const bannersComidaHome = [
    "/img/banner1.jpg",
    "/img/banner2.jpg",
]

const bannersInfoEscritorio = [
    {icono: "seedling", titulo: "+30 mil productos", subtitulo: "de bienestar saludable"},
    {icono: "percent", titulo: "15% de descuento", subtitulo: "respecto a otras tiendas"},
    {icono: "truck", titulo: "Envío gratis", subtitulo: "a partir de 45€"},
    {icono: "box-open", titulo: "Devolución garantizada", subtitulo: "durante 30 días"},
]


class Home extends React.Component{
    render(){
        return(
            <div>
                {/*Banner rebajas*/}
                <BannerOfertas/>

                {/*Banner comida*/}
                <Grid>
                    <Row className="mt-3" id="bannerComida">
                        <BannerComida imagenes={bannersComidaHome}/>
                    </Row>
                </Grid>

                {/*Botón ofertas*/}
                <Row className="mt-4 d-md-none" id="rowOfertasChat">
                    <Col className="text-center" xs={12}>
                        <Button id="bOfertas">TODAS LAS OFERTAS</Button>
                    </Col>
                </Row>

                {/*Icono chat*/}
                <Row className="d-md-none">
                    <Col xs={12}>
                        <span id="chat"><FontAwesomeIcon icon="comment-dots"/></span>
                    </Col>
                </Row>

                {/*Banners info escritorio*/}
                <Grid className="d-none d-md-block">
                    <Row className="mt-5">
                        <BannerInfo bannerInfoData={bannersInfoEscritorio}/>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Home;