import React, { useState, useEffect, useMemo } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import PackageManager from "components/bashGenerator/steps/packageManager/packageManager";
import InstallPackages from "components/bashGenerator/steps/installPackages/installPackages";
import GetScript from "components/bashGenerator/steps/getScript/getScript";

const useStyles = makeStyles({
  bashGenerator: {
    background: "linear-gradient(45deg, #3f51b5, #cf53ff)",
    color: "white",
    padding: "3vmin",
    border: 0,
    borderRadius: "2vmin",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    minHeight: "calc(100vh - 64px)",
  },
  title: {
    fontSize: "1rem",
  },
  footer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
    gridGap: 32,
    gridAutoFlow: "dense",
    marginTop: "1rem",
  },
});
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    margin: "1vmin 0 2vmin",
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#cf53ff",
  },
}))(LinearProgress);

const bashGenParam = "bashGen";

function BashGenerator({ data }) {
  const classes = useStyles();
  const [step, setStep] = useState(0);
  const [selectedManager, setSelectedManager] = useState("apt");
  const [selectedPackages, setSelectedPackages] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem(bashGenParam)) {
      const {
        step = 0,
        selectedManager = "apt",
        selectedPackages = [],
      } = JSON.parse(sessionStorage.getItem(bashGenParam));
      setStep(step);
      setSelectedManager(selectedManager);
      setSelectedPackages(selectedPackages);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(
      bashGenParam,
      JSON.stringify({ step, selectedManager, selectedPackages, data: "pisos" })
    );
  }, [step, selectedManager, selectedPackages]);

  const progressValue = (100 / 2) * step;

  const steps = [
    <PackageManager data={{ selectedManager, setSelectedManager }} />,
    <InstallPackages
      data={{ selectedManager, selectedPackages, setSelectedPackages }}
    />,
    <GetScript data={{ selectedManager, selectedPackages }} />,
  ];

  const isFirstStep = useMemo(() => step === 0, [step]);
  const isLastStep = useMemo(() => step === steps.length - 1, [
    step,
    steps.length,
  ]);

  function prevStepHandler(event) {
    event.preventDefault();
    setStep(step === 0 ? 0 : step - 1);
  }

  function nextStepHandler(event) {
    event.preventDefault();
    setStep(step === 2 ? 2 : step + 1);
  }

  return (
    <div className={classes.bashGenerator}>
      <Typography variant="h2" gutterBottom className={classes.title}>
        Step {step + 1} of {steps.length}
      </Typography>
      <BorderLinearProgress variant="determinate" value={progressValue} />
      <>{steps[step]}</>
      <div className={classes.footer}>
        {!isFirstStep && (
          <Button
            variant="contained"
            color="primary"
            type="button"
            value="prev"
            onClick={prevStepHandler}
          >
            Prev
          </Button>
        )}
        {!isLastStep && (
          <Button
            variant="contained"
            color="primary"
            type="button"
            value="next"
            onClick={nextStepHandler}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}

export default BashGenerator;
