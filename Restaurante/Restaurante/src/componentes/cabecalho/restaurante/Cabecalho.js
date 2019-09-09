import React, { Fragment } from 'react';
import Seta from '../../../recursos/icons/seta-laranja.png';
import { Link } from 'react-router-dom';
import Logo from '../../../recursos/imgs/logo.png';

export const CabecalhoPaginaRestaurante = (props) => (
    <Fragment>
        <header className="container-header">
            <div className="container ">
                <div className="col-5">
                    <img src="img/icone/logo2.png" />
                </div>
            </div>
            <div className="col-7">

            </div>

        </header>
        <div className="container">

        </div>
        <nav className="navbar navbar-expand-lg navbar-light  navbar-color">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <div className="col-9 col-md-10 ">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cadastro de Produtos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Seus Produtos</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-3 col-md-2">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle pl-0 " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="restaurante-imagem">
                                    <img src="img/icone_slider/6.jpg " className="" />
                                </div>
                            </a>
                            <div className="dropdown-menu " aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                    </div>

                </div>
            </div>
        </nav>
    </Fragment>
);