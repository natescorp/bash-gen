import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import './StepsControl.css'

const StepsControl = ({ currentStep, nextStepHandler, totalSteps, prevStepHandler }) => {
  const isFirstStep = useMemo(() => currentStep === 0, [currentStep]);
  const isLastStep = useMemo(() => currentStep === totalSteps, [currentStep, totalSteps]);

  return (
    <div className="steps-control">
      {!isFirstStep && (
        <button
          className="steps-control__button"
          type="button"
          value="prev"
          onClick={prevStepHandler}
        >
          Prev
        </button>
      )}
      {!isLastStep && (
        <button
          className="steps-control__button"
          type="button"
          value="next"
          onClick={nextStepHandler}
        >
          Next
        </button>
      )}
    </div>
  )
};

StepsControl.propTypes = {
  currentStep: PropTypes.number,
  nextStepHandler: PropTypes.func,
  totalSteps: PropTypes.number,
  prevStepHandler: PropTypes.func
};

export default StepsControl;
