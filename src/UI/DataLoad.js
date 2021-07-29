import React from "react";
import Loader from "react-loader-spinner";
import classes from "./DataLoad.module.css";

const DataLoad = (props) => {
  return (
    <div>
      <div className={classes.spinner}>
        <Loader type="Rings" color="#00BFFF" height={80} width={80} />
        <p>Data is loading</p>
      </div>
    </div>
  );
};

export default DataLoad;
