import React, { Component } from 'react';
import Imagem from '../../recursos/imgs/pizza.jpg';
import { FaPencilAlt } from 'react-icons/fa';
import $ from 'jquery';

class ItensLista extends Component{

    constructor(props){
        super();
        this.state = {item: props.item}
        console.log(this.state.item)
    }
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
            <div className="item-list-p list-group-item-action mb-3 p-2 w-100" >
                 <div className="row m-1">
                    <div className="col-3 p-2">
                        <figure className="figure">
                            <img src={this.state.item.foto} className="image-parent card-img rounded-circle"/>
                        </figure>
                    </div>
                     <div className="col-9">
                        
                      <div className="row">
                            <div className="col-11">
                                 <h5 className="h4">{this.state.item.nome}</h5>
                             </div>
                             <div className="col-1">
                                 <i className="my-3 mx-1 pointer" ><FaPencilAlt/></i>
                             </div>
                         </div>

                         <div className="row p-0 mb-2" >
                             <p className="text-muted" >
                                 {this.state.item.descricao}
                             </p>
                         </div>
                         <div className="row p-0 mb-1" >
                             <small className="text-muted">{this.state.item.preco}</small>
                         </div>
                     </div>
                 </div>
             </div>
        );
    }
};
export default ItensLista