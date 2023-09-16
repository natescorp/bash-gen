import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './Modal.css'

const Modal = ({ content }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (content) {
      setIsVisible(true);
      setInterval(() => setIsVisible(false), 3000);
    }
  }, [content]);

  return (
  <>
    {isVisible && <div className="Modal">
      {content}
    </div>}
  </>
)};

Modal.propTypes = {
  content: PropTypes.string,
};

export default Modal;
