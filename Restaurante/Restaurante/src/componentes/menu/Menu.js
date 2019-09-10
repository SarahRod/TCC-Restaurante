import React, { Fragment } from 'react';
import { Menu } from './styled'


export const MenuRestaurante = (props) => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse ml-5" id="conteudoNavbarSuportado">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item h5 text-dark">
                    <a class="nav-link" href="#">Home <span class="sr-only">(página atual)</span></a>
                </li>
                <li class="nav-item h5 text-dark">
                    <a class="nav-link" href="#">Cadastro de produtos</a>
                </li>

                <li class="nav-item h5 text-dark">
                    <a class="nav-link" href="#">Seus produtos</a>
                </li>
            </ul>
        </div>
    </nav>
);