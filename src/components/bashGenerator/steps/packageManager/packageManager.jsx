import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import packageManagers from "database/packageManagers.json";

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
  packageManager: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    // gridGap: 32,
    gridAutoFlow: "dense",
    marginBottom: "3vmin",
  },
  packagesWillInstall: {
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

function PackageManager({ data: { selectedManager, setSelectedManager } }) {
  const classes = useStyles();

  const handlePackageManagerChange = (event) => {
    setSelectedManager(event.target.value);
  };

  return (
    <article className={classes.container}>
      <Typography variant="h5" gutterBottom className={classes.title}>
        Which package manager to use?
      </Typography>
      <RadioGroup
        aria-label="packageManager"
        name="packageManager"
        value={selectedManager}
        onChange={handlePackageManagerChange}
        className={classes.packageManager}
      >
        <>
          {packageManagers.map(({ id, codeName, name, status }) => (
            <FormControlLabel
              className={classes.label}
              key={id}
              value={codeName}
              control={<Radio />}
              label={name}
              disabled={!status}
            />
          ))}
        </>
      </RadioGroup>
    </article>
  );
}

export default PackageManager;
