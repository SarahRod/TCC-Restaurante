import React, { Component } from 'react';
import Imagem from '../../recursos/imgs/pizza.jpg'
import $ from 'jquery';

export class ItensLista extends Component{

    // test(){
    //     $(function(){
    //         $('.visualizar').click(function(){
    //             jQuery('#container').fadeIn(400);
    //         }); 
    //     });

    //     $(idItem)
    //     {
    //         $.ajax({
            
    //         type:"GET",
            
    //         url:"modal.php",
                
    //             data:{codigo:idItem},
                
    //             success: function(dados){
    //                 $('#modal').html(dados);
                
    //             }
    //         });
    //     }
    // }

    render() {
        return (
            <div className="item-list-p list-group-item-action mb-3 p-3 w-100" >
                 <div className="row m-1">
                    <div className="col-3 p-3">
                        <figure className="figure">
                            <img src={Imagem} className="image-parent card-img rounded-circle"/>
                        </figure>
                    </div>
                     <div className="col-9">
                        
                      <div className="row">
                            <div className="col-11">
                                 <h5 className="h4">Pizza Calabresa</h5>
                             </div>
                             <div className="col-1">
                                 <i className="my-3 mx-1 glyphicon glyphicon-pencil"></i>
                             </div>
                         </div>

                         <div className="row p-3 mb-2" >
                             <p className="text-muted" >
                                 Saborosa cobertura de mussarela especial, manjericão fresco, pepperoni sadia, fatias de tomates e parmesão artesanalmente gratinados.
                             </p>
                         </div>
                         <div className="row p-3 mb-2" >
                             <small className="text-muted">R$30,00</small>
                         </div>
                     </div>
                 </div>
             </div>
        );
    }
}export default ItensLista;