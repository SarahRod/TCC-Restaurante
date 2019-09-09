import React, { Fragment } from 'react';
import { Menu } from './styled'


export const MenuRestaurante = (props) => (
    <Fragment>
        <Menu className="navbar-light bg-light bg-primary pl-5 pt-3">
            <div className="row w-100">
                <div className="col-2 col-sm-2 col-md-2 col-lg-1 text-center h5">
                    Home
                </div>
                <div className="col-6 col-sm-6 col-md-4 col-lg-3 text-center h5">
                Cadastro de produtos
                </div>
                <div className="col-4 col-sm-4 col-md-3 col-lg-2 text-center h5">
                Seus produtos
                </div>
                
            </div>            
        </Menu>
    </Fragment>
);