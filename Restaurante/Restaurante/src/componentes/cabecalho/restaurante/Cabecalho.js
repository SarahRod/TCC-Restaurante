import React, { Fragment } from 'react';
import Seta from '../../../recursos/icons/seta-laranja.png';
import { Link } from 'react-router-dom';
import Logo from '../../../recursos/imgs/logo.png';
import { Label } from '../../globais/label/Label'
import { MdArrowDropDown } from "react-icons/md";
import Pizza from '../../../recursos/imgs/pizza.jpg'
import { ImgRestaurante } from './styled';

export const CabecalhoPaginaRestaurante = (props) => (
    <header className="navbar navbar-light bg-light border-bottom">
        <div className="row">
            <div className="col-3 col-sm-3 col-md-3 col-lg-3">
                <img className="img-fluid" src={Logo} />
            </div>
            <div className="col-9 col-sm-9 col-md-9 col-lg-9">
                <div className="row justify-content-end pr-5">
                    <Label className="align-self-center mr-4 h5" texto="Bar do teco" />
                    <ImgRestaurante className="img-fluid rounded-circle" src={Pizza} />

                    <div className="nav-item dropdown align-self-center mr-5">

                        <MdArrowDropDown size={80} className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Opção 1</a>
                            <a className="dropdown-item" href="#">Opção 2</a>
                            <a className="dropdown-item" href="#">Opção 3</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
);