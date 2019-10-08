import React, {Component} from 'react';

export class MenuTemplate extends Component{
    render(){
        return(
            <div className="container-fluid bg-image-container1 p-0" style={{minHeight: '700px'}}>
                <nav className="navbar navbarColor justify-content-around" style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
                    <a className="navbar-brand" href="#">
                        <img className=" rounded float-left" style={{maxWidth: '55px'}} src="https://purepng.com/public/uploads/large/burger-king-logo-xua.png" alt=""/>
                    </a>
                    <ul className="nav justify-content-end w-50">
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Galeria</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Sobre o Restaurante</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}