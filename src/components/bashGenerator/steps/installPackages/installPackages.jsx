import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import './InstallPackages.css'
import Checkbox from '../../../common/checkbox/Checkbox'

import packages from './../../../../database/packages.json'

const InstallPackages = ({ data: { selectedPackages, setSelectedPackages } }) => {
  const handleInstallPackagesChange = useCallback(
    (codeName) => {
      if (selectedPackages.includes(codeName)) {
        let tempArr = selectedPackages
        tempArr.splice(selectedPackages.indexOf(codeName), 1)
        setSelectedPackages([...tempArr])
      } else {
        setSelectedPackages([...selectedPackages, codeName])
      }
    },
    [selectedPackages, setSelectedPackages],
  )

  return (
    <article className='install-packages'>
      <div className='install-packages__header'>
        <span className='install-packages__prompt'>INSTALL&gt;</span>
        <h5 className='install-packages__title'>Select packages to install</h5>
      </div>

      <div className='install-packages__info'>
        <span className='install-packages__counter'>
          SELECTED: {selectedPackages.length} / {packages.length}
        </span>
        <span className='install-packages__hint'>SPACE to select</span>
      </div>

      <div className='install-packages__form'>
        {packages.map(({ id, codeName, name, status }) => (
          <Checkbox
            className='install-packages__label'
            key={id + codeName}
            checked={selectedPackages.includes(codeName)}
            disabled={!status}
            label={name}
            value={codeName}
            onChange={() => handleInstallPackagesChange(codeName)}
          />
        ))}
      </div>

      <div className='install-packages__footer'>
        <span className='install-packages__footer-text'>
          {selectedPackages.length === 0
            ? '→ No packages selected'
            : `→ ${selectedPackages.length} package(s) ready for installation`}
        </span>
      </div>
    </article>
  )
}

InstallPackages.propTypes = {
  data: PropTypes.shape({
    selectedPackages: PropTypes.array,
    setSelectedPackages: PropTypes.func,
  }),
}

export default InstallPackages
