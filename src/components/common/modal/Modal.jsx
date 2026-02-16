import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

const Modal = ({ content, type = 'info', duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (content) {
      setIsVisible(true)
    }
  }, [content])

  const handleClose = useCallback(() => {
    setIsVisible(false)
    if (onClose) {
      onClose()
    }
  }, [onClose])

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        handleClose()
      }
    },
    [handleClose],
  )

  useEffect(() => {
    if (isVisible) {
      window.addEventListener('keydown', handleKeyDown)
      // Автоматическое закрытие через duration, если указано
      if (duration > 0) {
        const timer = setTimeout(handleClose, duration)
        return () => {
          clearTimeout(timer)
          window.removeEventListener('keydown', handleKeyDown)
        }
      }
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isVisible, duration, handleKeyDown])

  if (!isVisible || !content) return null

  return (
    <div className='modal' onClick={handleClose}>
      <div className='modal__border' onClick={(e) => e.stopPropagation()}>
        <div className='modal__header'>
          <span className='modal__icon'>
            {type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}
          </span>
          <span className='modal__title'>
            {type === 'success' ? 'SUCCESS' : type === 'error' ? 'ERROR' : 'INFO'}
          </span>
        </div>

        <div className='modal__content'>{content}</div>

        <div className='modal__footer'>
          <button className='modal__button' onClick={handleClose} autoFocus>
            [ OK ]
          </button>
          <span className='modal__hint'>(Press Enter, Space or Esc)</span>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  content: PropTypes.string,
  type: PropTypes.oneOf(['info', 'success', 'error']),
  duration: PropTypes.number, // 0 = no auto-close
  onClose: PropTypes.func,
}

export default Modal
