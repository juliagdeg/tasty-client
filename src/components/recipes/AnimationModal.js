import React from 'react';
import Lottie from 'react-lottie';
import animationData from './staranimation.json';

function LottieAnimation() {
    const options = {
      loop: true,
      autoplay: true,
      animationData: animationData,
    };
  
    return <Lottie options={options} />;
  }

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <div>
      {/* Other components */}
      <LottieAnimation />
      {/* Other components */}
    </div> 
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
