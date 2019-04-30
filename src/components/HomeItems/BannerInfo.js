import React from 'react';
import {Col, Row} from 'react-flexbox-grid';
import 'bootstrap/dist/css/bootstrap.min.css';
import './homeItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class BannerInfo extends React.Component{
    renderBannerInfo(bannerInfoData){
        return bannerInfoData.map(banner =>
            <Col md={3} className="bannerInfo" key={banner.icono}>
                <Row>
                    <Col md={4} className="d-flex flex-wrap align-items-top justify-content-center noMarNoPad">
                        <FontAwesomeIcon icon={banner.icono}/> 
                    </Col>
                    <Col md={8} className="noMarNoPad">
                        <p className="noMarNoPad tituloBanerInfo">{banner.titulo}</p>
						<p className="subtituloBannerInfo">{banner.subtitulo}</p>
                    </Col>
                </Row>
            </Col>
        );
    }

    render(){
        const {bannerInfoData}=this.props;

        return(
            this.renderBannerInfo(bannerInfoData)
        );
    }
}


export default BannerInfo;