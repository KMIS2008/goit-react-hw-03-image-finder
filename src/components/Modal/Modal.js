

import Modal from 'react-modal';


const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 1300,
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      zIndex: '1200',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '65vw',
      height: '650px',
      boxShadow: '2px 2px 2px #0f0f0f',
      border: 'none',
    },
  };

Modal.setAppElement('#root');
  
  export const ImgModal = ({ img, alt, onClose, onOpen}) => {
    return (
        <Modal
        isOpen={onOpen}
        onRequestClose={onClose}
        contentLabel="Inline Styles Modal"
        style={customStyles}
      >
 
        <img src={img} alt={alt}  />
      </Modal>
    );
  };


     