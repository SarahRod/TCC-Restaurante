import React, { Component } from 'react';
import Seta from '../../../recursos/icons/seta-laranja.png';
import { Link } from 'react-router-dom';
import Logo from '../../../recursos/imgs/img-login.png';
import { Label } from '../../globais/label/Label'
import { MdArrowDropDown } from "react-icons/md";
import Pizza from '../../../recursos/imgs/pizza.jpg'
import { ImgRestaurante } from './styled';
import { DOMINIO } from '../../../link_config';
import $ from 'jquery';

export class CabecalhoPaginaRestaurante extends Component {

    componentWillMount() {

        let token = localStorage.getItem('TOKEN');
        token = token.replace('"', "");
        localStorage.setItem('TOKEN', token);

        const url = `${DOMINIO}/restaurante/todos`;


        $.ajax({
            url: url,
            type: 'get',
            headers: { 'token': token },
            dataType: 'json',
            contentType: "application/json",
            success: function (resposta) {

                localStorage.setItem('dadosRestaurante', JSON.stringify(resposta));

                alert(resposta[0].foto)

                $(".foto-restaurante").attr("src", resposta[0].foto);


            }.bind(this),
            error: function (data) {
                console.log(data);

            }
        });
    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
                <a className="navbar-brand" href="#">
                    <img  src={Logo} style={{ maxWidth: 180 + 'px' }} />
                </a>

                <div className="row align-items-center ml-auto p-2 bg-light ">
                    <div className="nav-item col col-sm col-md col-lg-2">
                        <a className="nav-link text-secondary" href="#">Pedidos</a>
                    </div>
                    <div className="nav-item col col-sm col-md col-lg-6">
                        <a className="nav-link text-secondary" href="#">Cadastrar Produto</a>
                    </div>

                    <a className="navbar-brand col col-sm col-md col-lg-3" href="#">
                        <img className="border rounded-circle foto-restaurante" src='' style={{ width: 65 + 'px', height: 60 + 'px' }} />
                    </a>
                </div>


            </nav>
        )
    }
}