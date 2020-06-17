import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useState
} from "react";
import { useAsync } from "react-async";
// @ts-ignore
import Tabletop from "tabletop";
import { LoadingPage } from "pages/components/loading-page";

const GoogleSheetsContext = React.createContext(null as any);

export const useGoogleSheetsContext = () => {
  return useContext(GoogleSheetsContext);
};

export const GoogleSheetsContextProvider = ({
  children
}: PropsWithChildren<{}>) => {
  const [data, setData] = useState();

  const getSpreadsheet = useAsync({
    promiseFn: useCallback(
      () =>
        Tabletop.init({
          key: "1QYdRbzLNYf8gCN-45L-r-vhR3mRMDAkhc5xN8N0gmDo"
        }),
      []
    ),
    onResolve: setData
  });

  if (!data) {
    return <LoadingPage />;
  }

  return (
    <GoogleSheetsContext.Provider value={{ data }}>
      {children}
    </GoogleSheetsContext.Provider>
  );
};
