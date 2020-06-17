import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import { useGoogleSheetsContext } from "common/google-sheets";
import { shuffle } from "lodash";
import { Card } from "common/components/card";
import { PageLayout } from "pages/components/page-layout";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FlipCameraAndroidIcon from "@material-ui/icons/FlipCameraAndroid";

const FlashCardsInternal = ({ elements }: { elements: any }): JSX.Element => {
  const [index, setIndex] = useState(0);
  const [showValue, setShowValue] = useState(false);

  const element = elements[index];
  return (
    <>
      <PageLayout>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => setShowValue(!showValue)}
        >
          <Card>
            <h1
              style={{
                fontWeight: "normal"
              }}
            >
              {showValue ? element.value : element.key}
            </h1>
          </Card>
        </div>
      </PageLayout>
      <div
        style={{
          position: "fixed",
          bottom: "0",
          width: "100%",
          left: "0"
        }}
      >
        <BottomNavigation
          onChange={(event, value) => {
            switch (value) {
              case "previous":
                setShowValue(false);
                setIndex(Math.max(0, index - 1));
                break;
              case "flip":
                setShowValue(!showValue);
                break;
              case "next":
                setShowValue(false);
                setIndex(Math.min(elements.length - 1, index + 1));
                break;
            }
          }}
          showLabels
          value={"flip"}
        >
          <BottomNavigationAction
            label="Previous"
            value="previous"
            icon={<ChevronLeft />}
          />
          <BottomNavigationAction
            label="Flip"
            value="flip"
            icon={<FlipCameraAndroidIcon />}
          />
          <BottomNavigationAction
            label="Next"
            value="next"
            icon={<ChevronRight />}
          />
        </BottomNavigation>
      </div>
    </>
  );
};

export const Flashcards = (): JSX.Element => {
  const { id } = useParams();
  const { data } = useGoogleSheetsContext();

  if (!data[id]) {
    return <Redirect to="/" />;
  }

  return <FlashCardsInternal elements={shuffle(data[id].elements)} />;
};
