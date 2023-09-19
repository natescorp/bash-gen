import React from 'react';
import PropTypes from 'prop-types';
import './Steps.css'

const Steps = ({ currentStep, totalSteps }) => (
  <h2 className="steps">
    Step {currentStep} of {totalSteps}
  </h2>
);

Steps.propTypes = {
  currentStep: PropTypes.number,
  totalSteps: PropTypes.number
};

export default Steps;
