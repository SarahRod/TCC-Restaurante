import React, { Fragment, Component } from 'react';
import Logo from '../../recursos/icons/logo.png';

/**Caixa da nav Bar */

class MenuGoDinner extends Component{
    render(){
        return(
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-light navbar-color">
                    <div className="container menu-container">
                        <div className="row">
                            <div className="col-md-9 col-9">
                                <a className="navbar-brand " href="index.html">
                                <img src={Logo}/>
                            </a>
                            </div>
                            <div className="col-m-3 col-3">
                                <button className="navbar-toggler" type="buttom" data-toggle="collapse" data-target="#navbarSite">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            </div>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSite" col-mf>
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a className="nav-link cadastre" href="#">Cadastre seu restaurante</a></li>
                            <li className="nav-item "><a className="nav-link" href="#">Entrar</a></li> 
                            </ul>
                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
} 
export default MenuGoDinner;
