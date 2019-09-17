import React from 'react';
import PropTypes from 'prop-types';
import { MdBlock } from 'react-icons/md';

class Modal extends React.Component {
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
            maxWidth: 300,
            maxHeight: 300,
            margin: '0 auto',
            padding: 30,
            display: 'block'
        };
    
        return (
            <div className="backdrop" style={backdropStyle}>
                <div className="modal" style={modalStyle}>
                    {this.props.children}
        
                    <div className="footer">
                    <button onClick={this.props.onClose}>
                        Close
                    </button>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};
  
export default Modal;