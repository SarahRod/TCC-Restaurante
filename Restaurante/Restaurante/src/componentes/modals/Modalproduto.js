import React from 'react';
import PropTypes from 'prop-types';
import './../../recursos/css/style.css';
import { InputGroup, FormControl, ListGroup, Container } from 'react-bootstrap';

class ModalProduto extends React.Component {
    render() {
        if(!this.props.show) {
            return null;
        }
        
        return (
            <div className="backdropStyle">

                <div className="modalStyle pt-3" >
                    {this.props.children}

                </div>
            </div>
        );
    }
}

ModalProduto.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};
  
export default ModalProduto;