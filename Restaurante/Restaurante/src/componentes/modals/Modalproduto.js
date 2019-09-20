import React from 'react';
import PropTypes from 'prop-types';
import { InputGroup, FormControl, ListGroup, Container } from 'react-bootstrap';

class ModalProduto extends React.Component {
    render() {
        if(!this.props.show) {
            return null;
        }

        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            zIndex: 1000
            
        };
        
        const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 700,
            maxHeight: 700,
            padding: 30,
            display: 'block'
        };
    
        return (
            <div className="backdrop d-flex justify-content-center" style={backdropStyle}>

                <div className="modal" style={modalStyle}>
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