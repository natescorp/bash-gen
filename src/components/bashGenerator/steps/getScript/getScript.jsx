import React, { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Alert, AlertTitle } from "@material-ui/lab";
import packages from "database/packages.json";
import * as scripts from "database/scripts";

const useStyles = makeStyles({
  conteiner: {
    background: "#c0c0c050",
    borderRadius: "2vmin",
    padding: "3vmin",
  },
  chip: {
    margin: "1vmin",
  },
  code: {
    margin: "3vmin 0",
    overflowX: "auto",
  },
});

function GetScript({ data: { selectedManager, selectedPackages } }) {
  const classes = useStyles();

  const isNeedCurl = useMemo(
    () => selectedPackages.some((item) => scripts.curl.should.includes(item)),
    [selectedPackages]
  );

  return (
    <div className={classes.conteiner}>
      <p>
        You are selected {selectedManager} package manager. Please, before are
        run next script, will update your system.
      </p>
      {packages.map((item, index) => (
        <Chip
          key={index}
          label={packages[index].name}
          color={
            selectedPackages.includes(item.codeName) ? "primary" : "secondary"
          }
          deleteIcon={<DoneIcon />}
          className={classes.chip}
        />
      ))}
      <Card className={classes.code} variant="outlined">
        {isNeedCurl && (
          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            You are selected some package, which
            <strong> need to install curl</strong>
          </Alert>
        )}
        <CardContent>
          <Typography variant="body2" component="pre">
            {isNeedCurl &&
              scripts.curl[selectedManager].map((str) => (
                <>
                  {str}
                  <br />
                  <br />
                </>
              ))}
            {selectedPackages.map((item) => (
              <>
                {scripts[item][selectedManager].map((str) => (
                  <>
                    {str}
                    <br />
                  </>
                ))}
                <br />
              </>
            ))}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default GetScript;
