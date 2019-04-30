import React from 'react';
import {Col} from 'react-flexbox-grid';
import './headerItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class InfoHeader extends React.Component{

    renderCols(colsData){
        return colsData.map(col =>
            col.dnone?
            <Col className="textoInfoHeader d-none d-md-block" md={4} key={col.icono}><FontAwesomeIcon icon={col.icono}/><span>{col.texto}</span></Col>
            :
            <Col className="textoInfoHeader" md={4} key={col.icono}>
                <FontAwesomeIcon icon={col.icono}/><span>{col.texto}</span>
            </Col>         
        );
    }

    render(){
        const {data}=this.props;

        return(
            this.renderCols(data)
        );
    }
}

export default InfoHeader;