import React, { Component } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import ModalProduto from '../modals/Modalproduto';
import { Image } from 'react-bootstrap';

class ItensLista extends Component{

    constructor(props){
        super();

        this.state = {item: props.item}
    }
    
    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div className="item-list-p list-group-item-action mb-3 w-100" onClick={this.toggleModal}>
                <ModalProduto show={this.state.isOpen} onClose={this.toggleModal}>
                        <div className="d-flex flex-row-reverse bd-highlight mt-2 mb-2">
                            <IoMdClose className="close"/>
                        </div>   
                        <div className="modal-header h-50 pt-0 ">                         
                            <figure className="figure w-100 h-100">    
                                <img className="mx-auto rounded w-100 h-100" src="" alt="Imagem Produto"/>
                            </figure>

                        </div>
                        <div className="modal-body ">
                            <div className="modal-title">
                                <h3>{this.state.item.nome}</h3>
                            </div>                            
                            <div className="w-100 hm-25" style={{overflow: 'auto', height: 150}}>
                                <p className="text-break">
                                    {this.state.item.descricao}
                                </p>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <p className="text-success">
                                R$ {this.state.item.preco}
                            </p>
                        </div>
                </ModalProduto>

                <div className="row m-1 ">
                    <div className="col-3 p-2">
                        <div className=" mx-auto my-auto" >
                            <figure className="figure p-0 m-0">
                                <Image className="rounded-circle w-100" src={this.state.item.foto} alt="Imagem Produto" style={{ maxWidth: 150 + 'px' + '!important', height: 150 + 'px' }}/>
                            </figure>
                        </div>
                    </div>
                     <div className="col-9">
                        
                        <div className="row">
                            <div className="col-11">
                                <h5 className="h4 p-2">{this.state.item.nome}</h5>
                            </div>
                            <div className="col-1 ">
                                <FaPencilAlt className="my-auto mx-auto pointer" />
                            </div>
                        </div>

                        <div className="row h-50">
                            <div className="col  text-truncate p-1 ">
                                <p className="text-muted text-break" >
                                    {this.state.item.descricao}
                                </p>
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col text-right">
                                <small className="text-success">R$ {this.state.item.preco}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ItensLista