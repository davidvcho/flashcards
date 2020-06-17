import React, {PropsWithChildren} from "react";
import MaterialCard from "@material-ui/core/Card/Card";
import {makeStyles} from "@material-ui/core/styles";
import classNames from "classnames";

const useStyles = makeStyles({
  root: {
    borderRadius: "0",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 36px 42px",
    padding: "30px",
    textAlign: "center"
  }
});

type CardProps = {
  className?: string;
};

export const Card = ({
  children,
  className
}: PropsWithChildren<CardProps>): JSX.Element => {
  const classes = useStyles();

  return (
    <MaterialCard className={classNames(classes.root, className)}>
      {children}
    </MaterialCard>
  );
};
