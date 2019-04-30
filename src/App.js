import React from 'react';
import {Grid} from 'react-flexbox-grid';
import Header from'./components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhoneSquare, faBox, faSyncAlt, faBars, faSearch, faHeart, faUser, faShoppingBag, faCommentDots, faSeedling, faPercent, faTruck, faBoxOpen, faChevronDown, faEnvelope,
faPercentage, faTimes } from '@fortawesome/free-solid-svg-icons'
library.add(faPhoneSquare, faBox, faSyncAlt, faBars, faSearch, faHeart, faUser, faShoppingBag, faCommentDots, faSeedling, faPercent, faTruck, faBoxOpen, faChevronDown, faEnvelope,
  faPercentage, faTimes)



class App extends React.Component{

  render(){
    return (
        <Grid className="miContainer">
          <Header/>
          <Home/>
          <Footer/>
        </Grid>
    );
  }
  
}

export default App;
