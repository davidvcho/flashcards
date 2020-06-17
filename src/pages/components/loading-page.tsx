import React from "react";
import { CircularProgress } from "@material-ui/core";

export const LoadingPage = (): JSX.Element => {
  return (
    <div
      style={{
        top: "40%",
        left: "50%",
        position: "fixed",
        transform: "translate(-50%, -40%)"
      }}
    >
      <CircularProgress />
    </div>
  );
};
