import React, {Component} from 'react';
import { MenuTemplate } from '../../menu/MenuTemplate';

class TemplateRestaurante extends Component{
    render(){
        return(
            <body className="w-75 mx-auto">
                <MenuTemplate>

                </MenuTemplate>
                <div className="container-fluid bg-image-container2" style={{minHeight: '250px'}}>
                    <h1 className="pt-2 pb-2 text-center text-light">
                        Burger Classic
                    </h1>
                    <div className="d-block">
                        <p className="h5 text-center text-light">
                            Lorem ipsum dolor sit amet, consectetur dipisicing elit, sed do eiusmod Incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur dipisicing elit, sed do eiusmod Incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam quis nostrud exercitation ullamco.
                            Lorem ipsum dolor sit amet, consectetur dipisicing elit, sed do eiusmod Incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum dolor sit amet, consectetur dipisicing elit, sed do eiusmod Incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam quis nostrud exercitation ullamco               
                        </p>
                    </div>
                </div>
            </body>
        )
    }
}
export default TemplateRestaurante