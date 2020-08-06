import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import packages from "./../../../../database/packages.json";

const useStyles = makeStyles({
  container: {
    background: "#c0c0c050",
    borderRadius: "2vmin",
    padding: "3vmin",
  },
  title: {
    fontSize: "1.3rem",
    marginTop: "3vmin",
    marginBottom: "3vmin",
  },
  form: {
    width: "100%",
  },
  legend: {
    color: "white",
    "&:focus": {
      color: "white",
    },
  },
  label: {
    margin: 0,
  },
  installPackages: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
    gridGap: 32,
    gridAutoFlow: "dense",
    marginBottom: "3vmin",
  },
  packagesWillInstallOption: {
    marginLeft: "3vmin",
    marginRight: "3vmin",
  },
});

function InstallPackages({
  data: { selectedManager, selectedPackages, setSelectedPackages },
}) {
  const classes = useStyles();

  const handleInstallPackagesChange = (event) => {
    if (selectedPackages.includes(event.target.value)) {
      let tempArr = selectedPackages;
      tempArr.splice(selectedPackages.indexOf(event.target.value), 1);
      setSelectedPackages(tempArr);
    } else {
      setSelectedPackages([...selectedPackages, event.target.value]);
    }
  };

  return (
    <article className={classes.container}>
      <Typography variant="h5" gutterBottom className={classes.title}>
        Which package manager to use?
      </Typography>
      <FormGroup
        aria-label="installPackages"
        name="installPackages"
        value={selectedManager}
        onChange={handleInstallPackagesChange}
        className={classes.installPackages}
      >
        <>
          {packages.map(({ id, codeName, name, status }) => (
            <FormControlLabel
              className={classes.label}
              key={id}
              value={codeName}
              label={name}
              disabled={!status}
              control={
                <Switch
                  color="primary"
                  checked={selectedPackages.includes(codeName)}
                />
              }
            />
          ))}
        </>
      </FormGroup>
    </article>
  );
}

export default InstallPackages;
