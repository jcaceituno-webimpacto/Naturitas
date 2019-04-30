import React from 'react';
import {Col} from 'react-flexbox-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homeItems.css';


class BannerComida extends React.Component{

    renderBannerComida(imagenes){
        return imagenes.map(img =>
            <Col className="mb-2 p-0 p-md-2" xs={12} md={6} key={img}>
                <img src={img} className="img-fluid" alt={img}/>
            </Col>
        );
    }

    render(){
        const {imagenes} = this.props;
        return(
            this.renderBannerComida(imagenes)
        );
    }
}

export default BannerComida;