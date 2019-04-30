import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footerItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Collapse } from 'reactstrap';


class ColInfoFooter extends React.Component{

    constructor(props){
        super(props);

        this.state={
            desplegableInfo: false,
            desplegableCat: false,
            desplegableSobre: false,
            desplegableSigue: false,
            desplegablePago: false
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle(elemento) {
        this.setState(state => ({ [elemento]: !state[elemento] }));
    }

    renderColInfoFooter(){
        const rotar=(this.state.desplegableInfo) ? "rotateUp" : "rotateDown";

        return(
            <Col xs={12} md={3} className="p-0 m-0">
                <Row className="pl-3 pr-3 p-md-none m-0">
                    <Col className="noMarNoPad tituloFooter mb-2" xs={12}>
                        <Row onClick={()=>this.toggle("desplegableInfo")}>
                            <Col xs={10} md={12}><li className="liFooter">INFORMACIÓN</li></Col>   
                            <Col xs={2} className="d-md-none d-flex flex-wrap align-items-center justify-content-center noMarNoPad">
                                <FontAwesomeIcon icon="chevron-down" className={rotar}/>
                            </Col>
                        </Row>
                    </Col>  

                    <Collapse isOpen={this.state.desplegableInfo}>
                        <Row className="mx-auto" id="desplegableInfo">
                            <Col xs={5} className="noMarNoPad"><FontAwesomeIcon icon="phone-square" className="mr-2"/><span className="textoFooter">Teléfonos:</span></Col>
                            <Col xs={5}>
                                <Row>
                                    <Col xs={12} className="noMarNoPad"><span className="tlfFooter float-right">919 019 101</span></Col>
                                    <Col xs={12} className="noMarNoPad"><span className="tlfFooter float-right">932 711 184</span></Col>
                                </Row>
                            </Col>
                            <Col xs={10} className="noMarNoPad">
                                <FontAwesomeIcon icon="envelope" className="mr-2"/><span className="textoFooter">Email:</span><span className="textoFooter float-right">info@naturitas.es</span>
                            </Col>
                        </Row>
                    </Collapse>
                </Row>
            </Col>
        );
    }


    renderLiColsFooter(lis){
        return lis.map(li=>
            <li key={li}><a href="index.html">{li}</a></li>    
        );
    }


    renderColsFooter(colsFooterData){
        return colsFooterData.map(col=>
            <Col xs={12} md={3} key={col.titulo} className="p-0 m-0">
                <Row className="pl-3 pr-3 p-md-none m-0">
                    <Col className="noMarNoPad tituloFooter mb-2" xs={12}>
                        <Row onClick={()=>this.toggle(col.idTarget)}>
                            <Col xs={10} md={12}><li className="liFooter">{col.titulo}</li></Col>
                            <Col xs={2} className="d-md-none d-flex flex-wrap align-items-center justify-content-center noMarNoPad">
                               <FontAwesomeIcon icon="chevron-down" className={this.state[col.idTarget] ? "rotateUp" : "rotateDown"}/>
                            </Col>
                        </Row> 
                    </Col>
                    <Collapse isOpen={this.state[col.idTarget]}>
                        <Row className={"mx-auto"} id={col.idTarget}>
                            <ul className="ulFooterSecundario ml-3">
                                {this.renderLiColsFooter(col.lis)}
                            </ul>
                        </Row>
                    </Collapse>
                </Row>
            </Col>
        );
    }


    renderAsColDobleFooter(as){
        return as.map(a=>
            <a href={a.href} key={a.img}><img src={a.img} alt={a.img}/></a>
        );
    }


    renderColDobleFooter(colsFooterImg){
        return colsFooterImg.map(col=>
            <Row key={col.tituloM}>
                <Col xs={12} className="p-0 m-0">
                    <Row className="pl-3 pr-3 p-md-none m-0 mb-md-3">
                        <Col xs={12} className="noMarNoPad tituloFooter mb-2">
                            <Row onClick={()=>this.toggle(col.idTarget)}>
                                <Col xs={10} md={12}><li className="liFooter d-md-none">{col.tituloM}</li><li className="d-none d-md-block liFooter">{col.tituloD}</li></Col>
                                <Col xs={2} className="d-md-none d-flex flex-wrap align-items-center justify-content-center noMarNoPad">
                                <FontAwesomeIcon icon="chevron-down" className={this.state[col.idTarget] ? "rotateUp" : "rotateDown"}/>
                                </Col>
                            </Row>
                        </Col>
                        <Collapse isOpen={this.state[col.idTarget]}>
                            <Row id={col.idTarget} className="ml-3 text-center">
                                    {this.renderAsColDobleFooter(col.as)}
                            </Row>
                        </Collapse>
                    </Row>
                </Col>    
            </Row> 
        );
    }
    

    render(){
        const {colsFooter}=this.props;
        const {colsFooterImg}=this.props;

        return(
            <Row>
                {this.renderColInfoFooter()}
                {this.renderColsFooter(colsFooter)}

                <Col xs={12} md={3}>
                    {this.renderColDobleFooter(colsFooterImg)}
                </Col>
            </Row>
        );
    }
}

export default ColInfoFooter;