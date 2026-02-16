import React, { useCallback, useMemo, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import './GetScript.css'
import packages from './../../../../database/packages.json'
import * as scripts from './../../../../database/scripts'
import Modal from '../../../common/modal/Modal'

const scriptWasCopiedText = '✓ Script copied to clipboard'

const GetScript = ({ data: { selectedManager, selectedPackages } }) => {
  const isNeedCurl = useMemo(
    () => selectedPackages.some((item) => scripts.curl?.should?.includes(item)),
    [selectedPackages],
  )
  const [modalContent, setModalContent] = useState(null)
  const [copySuccess, setCopySuccess] = useState(false)
  const codeRef = useRef(null)

  const copyToClipboard = useCallback(() => {
    if (codeRef.current) {
      const text = codeRef.current.innerText
      navigator.clipboard.writeText(text)
      setModalContent(scriptWasCopiedText)
      setCopySuccess(true)
      setTimeout(() => {
        setModalContent(null)
        setCopySuccess(false)
      }, 2000)
    }
  }, [])

  // Генерация скрипта
  const generatedScript = useMemo(() => {
    let script = ''

    // Добавляем curl если нужно
    if (isNeedCurl && scripts.curl?.[selectedManager]) {
      script += scripts.curl[selectedManager].join('\n') + '\n'
    }

    // Добавляем выбранные пакеты
    selectedPackages.forEach((item) => {
      if (scripts[item]?.[selectedManager]) {
        script += '\n' + scripts[item][selectedManager].join('\n')
      }
    })

    return script.trim()
  }, [selectedManager, selectedPackages, isNeedCurl])

  return (
    <div className='get-script'>
      <div className='get-script__header'>
        <span className='get-script__prompt'>SCRIPT&gt;</span>
        <h5 className='get-script__title'>Generated Installation Script</h5>
      </div>

      <div className='get-script__info-panel'>
        <div className='get-script__info-item'>
          <span className='get-script__info-label'>MANAGER:</span>
          <span className='get-script__info-value'>{selectedManager.toUpperCase()}</span>
        </div>
        <div className='get-script__info-item'>
          <span className='get-script__info-label'>PACKAGES:</span>
          <span className='get-script__info-value'>{selectedPackages.length}</span>
        </div>
        <div className='get-script__info-item'>
          <span className='get-script__info-label'>STATUS:</span>
          <span className='get-script__info-value get-script__status'>
            {selectedPackages.length > 0 ? 'READY' : 'EMPTY'}
          </span>
        </div>
      </div>

      <div className='get-script__badges'>
        {packages.map((item, index) => (
          <span
            key={index + 100}
            className={`get-script__badge-item ${
              selectedPackages.includes(item.codeName) && 'get-script__badge-item--selected'
            }`}
          >
            {item.name}
          </span>
        ))}
      </div>

      {isNeedCurl && (
        <div className='get-script__warning-message'>
          <span className='get-script__warning-icon'>⚠</span>
          <div className='get-script__warning-text'>
            <strong>CURL REQUIRED</strong>
            <span>Some packages need curl for installation</span>
          </div>
        </div>
      )}

      <div className='get-script__code-container'>
        <div className='get-script__code-header'>
          <span className='get-script__code-title'>INSTALL.SH</span>
          <button
            className={`get-script__copy-button ${copySuccess ? 'success' : ''}`}
            onClick={copyToClipboard}
            disabled={!generatedScript}
          >
            {copySuccess ? '✓ COPIED' : '📋 COPY'}
          </button>
        </div>
        <pre className='get-script__code' ref={codeRef} onClick={copyToClipboard}>
          {generatedScript || (
            <span className='get-script__code-placeholder'>
              ; No packages selected ; Select packages to generate script
            </span>
          )}
        </pre>
      </div>

      <div className='get-script__footer'>
        <span className='get-script__footer-hint'>Click on script to copy to clipboard</span>
      </div>

      <Modal content={modalContent} />
    </div>
  )
}

GetScript.propTypes = {
  data: PropTypes.shape({
    selectedManager: PropTypes.string,
    selectedPackages: PropTypes.array,
  }),
}

export default GetScript
