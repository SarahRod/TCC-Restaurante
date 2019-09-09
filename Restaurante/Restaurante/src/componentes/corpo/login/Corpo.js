import React from 'react';
import { MainLogin } from './style';
// import ImgDireita from '../../../recursos/imgs/backgorung-login.jpg';


import './style.css';

//COMPONENTE DO CORPO DA PÁGINA DE LOGIN
export const CorpoLogin = (props) => (

    <MainLogin className="row justify-content-center">
       
       <div className="img-background col-1 col-sm-4 col-md-4 col-lg-4"></div>

       <div className="d-flex flex-column col col-sm-8 col-md-8 col-lg-8 pt-5">
       {props.children}
       </div>
      
      
      
         
        
     </MainLogin>


)