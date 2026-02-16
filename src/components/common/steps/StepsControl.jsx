import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import './StepsControl.css'

const StepsControl = ({ currentStep, nextStepHandler, totalSteps, prevStepHandler }) => {
  const isFirstStep = useMemo(() => currentStep === 1, [currentStep]) // Изменено: currentStep === 1 вместо 0
  const isLastStep = useMemo(() => currentStep === totalSteps, [currentStep, totalSteps])

  return (
    <div className='steps-control'>
      {!isFirstStep && (
        <button className='steps-control__button prev' type='button' onClick={prevStepHandler}>
          ← PREV STEP
        </button>
      )}
      {!isLastStep && (
        <button className='steps-control__button next' type='button' onClick={nextStepHandler}>
          NEXT STEP →
        </button>
      )}
    </div>
  )
}

StepsControl.propTypes = {
  currentStep: PropTypes.number,
  nextStepHandler: PropTypes.func,
  totalSteps: PropTypes.number,
  prevStepHandler: PropTypes.func,
}

export default StepsControl
