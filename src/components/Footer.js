import React from 'react';
import {Grid, Col, Row} from 'react-flexbox-grid';
import ColInfoFooter from './FooterItems/ColInfoFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FooterItems/footerItems.css';


const colsFooter=[
    {titulo: "CATEGORÍAS & MARCAS", idTarget: "desplegableCat", 
        lis: ["Suplementos","Plantas","Alimentación","Cosmética & higiene","Deporte","Mamá & bebé","Todas las marcas A-Z"]},
    {titulo: "SOBRE NATURITAS", idTarget: "desplegableSobre", 
        lis: ["Centro de ayuda","Contacto","¿Quiénes somos?","Métodos de pago","Política de devoluciones","Términos y condiciones","Compromiso Naturitas","Blog"]},
]

const colsFooterImg=[
    {tituloM: "SÍGUENOS EN", tituloD:"SÍGUENOS EN", idTarget: "desplegableSigue",
        as: [{href:"http://www.facebook.com", img:"/img/facebook.png"},
            {href:"http://www.instagram.com", img:"/img/instagram.png"},{href:"http://www.twitter.com", img:"/img/twitter.png"}]
    },
    {tituloM: "MÉTODOS DE PAGO", tituloD:"ACEPTAMOS", idTarget: "desplegablePago",
        as: [{href:"index.html", img:"/img/master.svg"},{href:"index.html", img:"/img/visa-real.svg"},{href:"index.html", img:"/img/transfer.svg"},
            {href:"index.html", img:"/img/paypal.svg"},{href:"index.html", img:"/img/contrar.svg"},]    
    }
]


class Footer extends React.Component{
    render(){
        return(
            <Row>
                {/*Imagen*/}
                <Col xs={12} className="d-flex flex-wrap align-items-center justify-content-center" id="colSimbolo">
                    <img src="/img/simbolo.svg" className="img-fluid" alt="imgSimbolo"/>
                </Col>
                
                <ul id="ulFooter" className="mb-0">
                    <Grid>
                        <ColInfoFooter colsFooter={colsFooter} colsFooterImg={colsFooterImg}/>
                    </Grid>
                </ul>

                <Col xs={12}id="footerCopy">©2019 Naturitas. Todos los derechos reservados.</Col>
            </Row>
        );
    }
}

export default Footer;
