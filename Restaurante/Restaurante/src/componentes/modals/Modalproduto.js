import React from 'react';
import PropTypes from 'prop-types';

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
            padding: 50,
            zIndex: 1000
        };
        
        const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,

            maxWidth: 700,
            maxHeight: 700,
            marginLeft: '32%',
            marginTop: '4%',
            padding: 30,
            display: 'block'
        };
    
        return (
            <div className="backdrop" style={backdropStyle}>

                <div className="modal" style={modalStyle}>
                    {this.props.children}

                    <button onClick={this.props.onClose} type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
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