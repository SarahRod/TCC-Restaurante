import React from 'react';
import PropTypes from 'prop-types';

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
            // maxWidth: 700,
            // maxHeight: 700,
            // marginTop: '5%',
            // marginLeft: '32%',
            padding: 30,
            display: 'block'
        };
    
        return (
            <div className="backdrop" style={backdropStyle}>
                <div className="modal w-75 mx-auto my-auto" style={modalStyle}>
                    <div className=" container">
                        {this.props.children}

                        <img src="" className="img-fluid rounded mx-auto" alt="Responsive image"/>
                        <div >

                        </div>
                    
                        <div className="footer">
                            <button className="btn btn-primary" onClick={this.props.onClose}>
                                Close
                            </button>
                        </div>
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