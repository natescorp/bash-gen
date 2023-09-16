import React, {useCallback} from "react";
import PropTypes from 'prop-types';
import './PackageManager.css';
import Checkbox from "../../../common/checkbox/Checkbox";

import packageManagers from "./../../../../database/packageManagers.json";

const PackageManager = ({ data: { selectedManager, setSelectedManager } }) => {
  const handlePackageManagerChange = useCallback(codeName => {
    setSelectedManager(codeName);
  }, [setSelectedManager]);

  return (
    <article className="package-manager">
      <h5 className="package-manager__title">
        Which package manager to use?
      </h5>
      <div className="package-manager__form">
        <>
          {packageManagers.map(({ id, codeName, name, status }) => (
            <Checkbox
              className="package-manager__label"
              key={codeName+id}
              checked={selectedManager === codeName}
              disabled={!status}
              label={name}
              value={codeName}
              onChange={() => handlePackageManagerChange(codeName)}
            />
          ))}
        </>
      </div>
    </article>
  );
}

PackageManager.propTypes = {
  data: PropTypes.shape({
    selectedManager: PropTypes.string,
    setSelectedManager: PropTypes.func
  }),
};

export default PackageManager;
