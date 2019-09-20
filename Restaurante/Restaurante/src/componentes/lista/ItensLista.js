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
            <div className="item-list-p list-group-item-action mb-3 w-100" onClick={this.toggleModal}>
                <ModalProduto show={this.state.isOpen} onClose={this.toggleModal}>
                    <div className="container d-flex overflow-auto bg-dark">
                    
                        <div className="bd-highlight font-weight-normal bg-danger">                            
                            <img className="img-fluid h-100 rounded mx-auto" src="https://d2ofpir5gh0cbr.cloudfront.net/files/lp_banner/530x420px-papel-lanche-banner2.jpg"/>
                        </div>
                        <div className="bd-highlight flex-colunm bg-primary rounded">                            
                            <div className="bd-highlight bg-success">
                                {this.state.item.nome}
                            </div>
                            <div className="bd-highlight bg-secondary">
                                {this.state.item.nome}
                            </div>
                            <div className="bd-highlight bg-secondary">
                                {this.state.item.nome}
                            </div>
                        </div>    


                        

                    </div>
                </ModalProduto>

                <div className="row m-1 bg-success">
                    <div className="col-3 p-2 bg-info">
                    <div className=" rounded-circle imagem-produto overflow-hidden mx-auto my-auto bg-dark" style={{ maxWidth: 50 + 'px' + '!important', height: 50 + 'px' }}>
                        <figure className="figure bg-danger">
                                <img
                                    src="https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f00001071YMEAY/5beeb0b7e4b0778a74609716.jpg&w=710&h=462"
                                    className=" mx-auto my-auto w-100"/>
                                {/* <Image src={this.state.item.foto} /> */}
                        </figure>
                        </div>
                    </div>
                     <div className="col-9">
                        
                        <div className="row">
                            <div className="col-11 bg-danger">
                                <h5 className="h4">{this.state.item.nome}</h5>
                            </div>
                            <div className="col-1 bg-secondary">
                                <i className="my mx pointer" ><FaPencilAlt/></i>
                            </div>
                        </div>

                        <div className="row h-50">
                            <div className="col  text-truncate p-1 bg-primary">
                                <p className="text-muted text-break" >
                                    rubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubens
                                    rubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubensrubens
                                    {this.state.item.descricao}
                                </p>
                            </div>
                        </div>
                        <div className="row bg-warning" >
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