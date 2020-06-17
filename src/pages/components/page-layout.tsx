import React, { PropsWithChildren } from "react";
import styles from "pages/components/page-layout.module.scss";

export const PageLayout = ({
  children
}: PropsWithChildren<{}>): JSX.Element => {
  return <div className={styles.body}>{children}</div>;
};
