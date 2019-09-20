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
                    <div className="row">
                        <IoMdClose/>
                    </div>
                    <div className="container p-0">
                        <div className="modal-header font-weight-normal">                            
                            {/* <img className=" rounded my-auto mx-auto" src="https://d2ofpir5gh0cbr.cloudfront.net/files/lp_banner/530x420px-papel-lanche-banner2.jpg"/> */}
                            
                        </div>

                        <div className="modal-title ">
                            <h3>{this.state.item.nome}</h3>

                        </div>

                        <div className="modal-body ">                            
                            <div className=" ">
                                {this.state.item.descricao}

                            </div>

                            <div className=" ">
                                {this.state.item.preco}
                                
                            </div>

                        </div>

                    </div>
                </ModalProduto>

                <div className="row m-1 ">
                    <div className="col-3 p-2">
                        <div className=" rounded-circle imagem-produto overflow-hidden mx-auto my-auto " style={{ maxWidth: 50 + 'px' + '!important', height: 50 + 'px' }}>
                            <figure className="figure ">
                                    {/* <img
                                        src="https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00001071YMEAY/5beeb0b7e4b0778a74609716.jpg&w=710&h=462"
                                        className=" mx-auto my-auto w-100"/> */}
                                    <Image className=" mx-auto my-auto w-100" src={this.state.item.foto}/>
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
                        <div className="row " >
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