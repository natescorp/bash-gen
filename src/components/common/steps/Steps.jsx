import React from 'react'
import PropTypes from 'prop-types'
import './Steps.css'

const Steps = ({ currentStep, totalSteps }) => (
  <div className='steps-container'>
    <div className='steps-header'>
      <span className='steps-label'>SYSTEM STEP </span>
      <span className='steps-counter'>
        {currentStep} / {totalSteps}
      </span>
    </div>
    <div className='steps-progress-bar'>
      <div
        className='steps-progress-fill'
        style={{ width: `${(currentStep / totalSteps) * 100}%` }}
      />
    </div>
  </div>
)

Steps.propTypes = {
  currentStep: PropTypes.number,
  totalSteps: PropTypes.number,
}

export default Steps
