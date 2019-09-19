import React, { Component } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import ModalProduto from '../modals/Modalproduto';
import { Image } from 'react-bootstrap';

class ItensLista extends Component{

    constructor(props){
        super();

        this.state = {item: props.item}
        // this.state = { isOpen: false }
    }
    
    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="item-list-p list-group-item-action mb-3 p-2 w-100" onClick={this.toggleModal}>
                <ModalProduto show={this.state.isOpen} onClose={this.toggleModal}>
                    <div className="container overflow-auto">
                        
                    
                        <div className=" font-weight-normal row h-50   ">                            
                            <img className="img-fluid h-100 rounded mx-auto" src="https://d2ofpir5gh0cbr.cloudfront.net/files/lp_banner/530x420px-papel-lanche-banner2.jpg"/>
                        </div>
                        <div className="row h-50 mt-5   rounded">                            
                            <div className="col-12 h-25 mt-1">
                                {this.state.item.nome}
                            </div>
                            <div className="col-12 h-50 mt-1 bg-secondary">

                            </div>
                            <div className="col-12 h-25 mt-1 bg-secondary">

                            </div>
                        </div>    


                        

                    </div>
                </ModalProduto>

                <div className="row m-1">
                    <div className="col-3 p-2">
                        <figure className="figure">
                        {/* className="image-parent card-img rounded-circle" */}
                            <Image src={this.state.item.foto} />
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
                             <small className="text-muted ">{this.state.item.preco}</small>
                         </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ItensLista