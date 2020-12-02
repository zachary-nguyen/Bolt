import React, {useEffect, useState} from 'react';
import {Button, CircularProgress, Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  oldReddit: {
    color: "#FF5700",
    border: "1px solid #FF5700",
    backgroundColor: "#fff",
    borderRadius: 4,
    "&:hover": {
      color: "#fff",
      backgroundColor: "#FF5700",
    },
    padding: "3px 16px",
    fontWeight: 700,
    fontSize: 12,
    width: 120,
    height: 35,
  },
  loader:{
    color: "#FF5700"
  },
  reddit: {
    height: 35,
    width: 120,
    marginLeft: "2%",
    color: "#fff",
    border: "1px solid #FF5700",
    backgroundColor: "#FF5700",
    borderRadius: 4,
    "&:hover": {
      color: "#FF5700",
      backgroundColor: "#fff",
    },
    fontWeight: 700,
    fontSize: 12,
    padding: "3px 16px"
  },
});

export default function Home(): JSX.Element {

  const classes = useStyles();

  const [loading, setLoading] = useState(false);

  return (
    <Grid id={"loader"} container justify={"center"} alignItems={"center"}>
      {loading ?
        <CircularProgress className={classes.loader} color={"secondary"}/>
        :
        <React.Fragment>
          <Button onClick={() => {setLoading(true); window.location = "https://old.reddit.com";}} className={classes.oldReddit}>
            Old Reddit
          </Button>
          <Button onClick={() =>{setLoading(true); window.location = "https://www.reddit.com";}} className={classes.reddit}>
            Reddit
          </Button>
        </React.Fragment>
      }
    </Grid>
  );
}
