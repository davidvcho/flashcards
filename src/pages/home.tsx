import React from "react";
import { PageLayout } from "pages/components/page-layout";
import { Card } from "common/components/card";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useGoogleSheetsContext } from "common/google-sheets";
import { buildPath } from "App";

const useStyles = makeStyles({
  card: {
    marginBottom: "16px"
  },
  title: {
    color: "white",
    textDecoration: "none"
  }
});

export const Home = (): JSX.Element => {
  const classes = useStyles();
  const { data } = useGoogleSheetsContext();

  return (
    <PageLayout>
      {Object.keys(data).map(name => (
        <Link key={name} to={buildPath(`/${name}`)}>
          <Card className={classes.card}>
            <h1 className={classes.title}>{name}</h1>
          </Card>
        </Link>
      ))}
    </PageLayout>
  );
};
