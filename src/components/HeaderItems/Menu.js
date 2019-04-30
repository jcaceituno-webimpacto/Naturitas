import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import './headerItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Menu extends React.Component{

    constructor(props){
        super(props);

        this.state={
            cerrado: true,
            ancho: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.updateWindowWidth = this.updateWindowWidth.bind(this);
    }

    componentDidMount() {
        this.updateWindowWidth();
        window.addEventListener('resize', this.updateWindowWidth);
    }


    abrirMenu(){
        this.setState({cerrado: false});
        this.props.cambioIcono(false);
    }


    cerrarMenu(){
        this.setState({cerrado: true});
        this.props.cambioIcono(true);
    }


    updateWindowWidth() {
        const {enlacesMenu}=this.props;

        var anchoVentana=window.innerWidth;

        if(anchoVentana>767 && !this.state.cerrado){
            this.cerrarMenu();
        }
        

        this.setState({ancho: anchoVentana});
        this.formatLiText(enlacesMenu);
    }


    handleChange(){
        const isCerrado=this.state.cerrado;

        isCerrado?this.abrirMenu():this.cerrarMenu();
    }


    formatLiText(enlacesMenu){
        return enlacesMenu.map(enlace=>
            <li key={enlace.titulo}>
                <a href={enlace.href}>
                    {this.state.ancho>767?
                        <span>{enlace.titulo.toUpperCase()}</span>
                    :
                        <span>{enlace.titulo.charAt(0).toUpperCase() + enlace.titulo.slice(1).toLowerCase()}</span>
                    }
                </a>
            </li>
        );
    }


    render(){
        const {enlacesMenu}=this.props;

        return(
            <Row>
                <Col xs={12} className="noMarNoPad" id="divMenu">
                    <input type="checkbox" id="inputChk" className="d-none" checked={!this.state.cerrado} onChange={this.handleChange}/>
                
                    <div id="menu">
                        <ul id="ulPrincipal" className="noMarNoPad">
                            <li className="liNormal d-md-none pt-3"><span id="bvLeft">Bienvenido</span><span id="bvRight">Juan Carlos</span></li>

                            <hr className="d-md-none"/>

                            <li className="liNormal liFloat float-md-right" id="liRojo"><a href="index.html">Ofertas <FontAwesomeIcon icon="percentage"/></a></li>
                            <li className="liNormal liFloat float-md-right"><a href="index.html">Nuestras marcas</a></li>

                            <hr className="d-md-none"/>
                            
                            <li className="tituloMenu d-md-none"><a href="index.html">CATEGORÍAS</a></li>
                            {this.formatLiText(enlacesMenu)}

                            <hr className="d-md-none"/>

                            <li className="tituloMenu d-md-none"><a href="index.html">TEMAS DE SALUD</a></li>	
                            <li className="d-md-none"><a href="index.html">Indicaciones</a></li>
                            <li className="d-md-none"><a href="index.html">Dietas Específicas</a></li>
                            <li className="d-md-none"><a href="index.html">Objetivos</a></li>

                            <hr className="d-md-none"/>

                            <li className="d-md-none liAdded">
                                <a href="index.html"><FontAwesomeIcon icon="user" className="mr-2 iconoMenu"/><span className="textoIconoMenu">Mi cuenta</span></a>
                            </li>
                            <li className="d-md-none liAdded">
                                <a href="index.html"><FontAwesomeIcon icon="heart" className="mr-2 iconoMenu"/><span className="textoIconoMenu">Favoritos</span></a>
                            </li>

                            <hr className="d-md-none"/>

                            <li className="d-md-none ">
                                <Row className="noMarNoPad">
                                    <Col xs={8}><a href="index.html" className="tlfAyudaMenu">
                                        <FontAwesomeIcon icon="phone-square" className="mr-2"/><span id="textoAyudaMenu">¿Necesitas ayuda?</span>
                                    </a></Col>
                                    <Col xs={4} className="noMarNoPad">
                                        <Row className="mt-2 mb-3 mr-0">
                                            <Col xs={9} className="noMarNoPad">
                                                <span className="tlfAyudaMenu">919 019 101</span>
                                            </Col>
                                            <Col xs={9} className="noMarNoPad">
                                                <span className="tlfAyudaMenu">932 711 184</span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </li>
                        </ul>
                    </div>  
                </Col>
            </Row>
            
        );
    }

}

export default Menu;