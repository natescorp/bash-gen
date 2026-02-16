import React, { useState, useEffect, useMemo, useCallback } from 'react'
import './BashGenerator.css'

import PackageManager from './steps/packageManager/packageManager'
import InstallPackages from './steps/installPackages/installPackages'
import GetScript from './steps/getScript/getScript'
import Steps from '../common/steps/Steps'
import StepsControl from '../common/steps/StepsControl'

const bashGenParam = 'bashGen'

const BashGenerator = () => {
  const [isVisiblePalette, setIsVisiblePalette] = useState(false)
  const [step, setStep] = useState(0)
  const [selectedManager, setSelectedManager] = useState('apt')
  const [selectedPackages, setSelectedPackages] = useState([])

  const steps = useMemo(
    () => [
      <PackageManager key='package-manager' data={{ selectedManager, setSelectedManager }} />,
      <InstallPackages key='install-packages' data={{ selectedPackages, setSelectedPackages }} />,
      <GetScript key='get-script' data={{ selectedManager, selectedPackages }} />,
    ],
    [selectedManager, selectedPackages, setSelectedManager, setSelectedPackages],
  )

  const currentStep = useMemo(() => step + 1, [step])
  const totalSteps = useMemo(() => steps.length, [steps])

  const prevStepHandler = useCallback(
    (event) => {
      event.preventDefault()
      setStep(step === 0 ? 0 : step - 1)
    },
    [step, setStep],
  )

  const nextStepHandler = useCallback(
    (event) => {
      event.preventDefault()
      setStep(step === 2 ? 2 : step + 1)
    },
    [step, setStep],
  )

  useEffect(() => {
    if (document.location.hostname === 'localhost') {
      setIsVisiblePalette(true) // Показываем палитру только в dev режиме
    }
  }, [])

  useEffect(() => {
    if (sessionStorage.getItem(bashGenParam)) {
      const {
        step = 0,
        selectedManager = 'apt',
        selectedPackages = [],
      } = JSON.parse(sessionStorage.getItem(bashGenParam))
      setStep(step)
      setSelectedManager(selectedManager)
      setSelectedPackages(selectedPackages)
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem(
      bashGenParam,
      JSON.stringify({ step, selectedManager, selectedPackages }),
    )
  }, [step, selectedManager, selectedPackages])

  return (
    <section className='bash-generator'>
      {/* BIOS Header */}
      <div className='bash-generator__header'>
        <span className='bash-generator__bios-version'>BIOS v1.0.4</span>
        <span className='bash-generator__module'>BASH GENERATOR MODULE</span>
        <span className='bash-generator__status'>SYSTEM READY</span>
      </div>

      {/* Progress Steps */}
      <Steps currentStep={currentStep} totalSteps={totalSteps} />

      {/* Main Content */}
      <div className='bash-generator__content'>
        <div className='bash-generator__content-header'>
          <span className='bash-generator__content-prompt'>▶</span>
          <span className='bash-generator__content-title'>
            STEP {currentStep}:{' '}
            {currentStep === 1
              ? 'SELECT MANAGER'
              : currentStep === 2
              ? 'CHOOSE PACKAGES'
              : 'GENERATE SCRIPT'}
          </span>
        </div>
        <div className='bash-generator__step-container'>{steps[step]}</div>
      </div>

      {/* Navigation Controls */}
      <StepsControl
        currentStep={currentStep}
        nextStepHandler={nextStepHandler}
        totalSteps={totalSteps}
        prevStepHandler={prevStepHandler}
      />

      {/* Color Palette (Dev Mode) */}
      {isVisiblePalette && (
        <div className='bash-generator__palette'>
          <div className='bash-generator__palette-title'>VGA PALETTE</div>
          <div className='bash-generator__palette-grid'>
            <div className='bash-generator__palette--black'>black</div>
            <div className='bash-generator__palette--blue'>blue</div>
            <div className='bash-generator__palette--green'>green</div>
            <div className='bash-generator__palette--cyan'>cyan</div>
            <div className='bash-generator__palette--red'>red</div>
            <div className='bash-generator__palette--magenta'>magenta</div>
            <div className='bash-generator__palette--brown'>brown</div>
            <div className='bash-generator__palette--light-gray'>light-gray</div>
            <div className='bash-generator__palette--dark-gray'>dark-gray</div>
            <div className='bash-generator__palette--light-blue'>light-blue</div>
            <div className='bash-generator__palette--light-green'>light-green</div>
            <div className='bash-generator__palette--light-cyan'>light-cyan</div>
            <div className='bash-generator__palette--light-red'>light-red</div>
            <div className='bash-generator__palette--light-magenta'>light-magenta</div>
            <div className='bash-generator__palette--yellow'>yellow</div>
            <div className='bash-generator__palette--white'>white</div>
          </div>
        </div>
      )}
    </section>
  )
}

export default BashGenerator
