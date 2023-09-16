import React, {useCallback} from "react";
import PropTypes from 'prop-types';
import './InstallPackages.css';
import Checkbox from "../../../common/checkbox/Checkbox";

import packages from "./../../../../database/packages.json";

const InstallPackages = ({ data: { selectedPackages, setSelectedPackages } }) => {
  const handleInstallPackagesChange = useCallback(codeName => {
    if (selectedPackages.includes(codeName)) {
      let tempArr = selectedPackages;
      tempArr.splice(selectedPackages.indexOf(codeName), 1);
      setSelectedPackages([...tempArr]);
    } else {
      setSelectedPackages([...selectedPackages, codeName]);
    }
  }, [selectedPackages, setSelectedPackages]);

  return (
    <article className="install-packages">
      <h5 className="install-packages__title">
        Which package manager to use?
      </h5>
      <div className="install-packages__form">
        <>
          {packages.map(({ id, codeName, name, status }) => (
            <Checkbox
              className="install-packages__label"
              key={id+codeName}
              checked={selectedPackages.includes(codeName)}
              disabled={!status}
              label={name}
              value={codeName}
              onChange={() => handleInstallPackagesChange(codeName)}
            />
          ))}
        </>
      </div>
    </article>
  );
}

InstallPackages.propTypes = {
  data: PropTypes.shape({
    selectedPackages: PropTypes.array,
    setSelectedPackages: PropTypes.func
  }),
};

export default InstallPackages;
