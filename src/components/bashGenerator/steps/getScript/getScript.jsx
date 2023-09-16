import React, {useCallback, useMemo, useState} from "react";
import PropTypes from 'prop-types';
import './GetScript.css';
import packages from "./../../../../database/packages.json";
import * as scripts from "./../../../../database/scripts";
import Modal from "../../../common/modal/Modal";

const scriptWasCopiedText = 'This script was copied to clipboard by click'
const GetScript = ({ data: { selectedManager, selectedPackages } }) => {
  const isNeedCurl = useMemo(
    () => selectedPackages.some((item) => scripts.curl.should.includes(item)),
    [selectedPackages]
  );
  const [modalContent, setModalContent] = useState(null);

  const copyToClipboard = useCallback( event => {
    navigator.clipboard.writeText(event.target.innerText);
    setModalContent(scriptWasCopiedText);
    setInterval(() => setModalContent(null), 3000);
  }, [setModalContent]);

  return (
    <div className="get-script">
      <p>
        You are selected {selectedManager} package manager. Please, before are
        run next script, will update your system.
      </p>
      <div className="get-script__badges">
        {packages.map((item, index) => (
          <span
            key={index+100}
            className={`get-script__badge-item ${selectedPackages.includes(item.codeName) && "get-script__badge-item--selected"}`}
          >
            {packages[index].name}
          </span>
        ))}
      </div>
      {isNeedCurl && (
        <p className="get-script__warning-message">
          <strong>Warning</strong>&nbsp;
          You are selected some package, which
          &nbsp;<strong>need to install curl</strong>
        </p>
      )}
      <span
        className="get-script__code"
        onClick={copyToClipboard}
      >
        {isNeedCurl &&
          scripts.curl[selectedManager].map((str, indexStr) => (
            <React.Fragment key={indexStr+200}>
              {`${str}`}
              <br/>
            </React.Fragment>
          ))}
        {selectedPackages.map((item, indexItem) => (
          <React.Fragment key={indexItem+300}>
            {scripts[item][selectedManager].map((str, indexString) => (
              <React.Fragment key={indexString+400}>
                <br/>
                {`${str}`}
              </React.Fragment>
            ))}
            <br/>
          </React.Fragment>
        ))}
      </span>
      <Modal content={modalContent}/>
    </div>
  );
}

GetScript.propTypes = {
  data: PropTypes.shape({
    selectedManager: PropTypes.string,
    selectedPackages: PropTypes.array
  }),
};

export default GetScript;
