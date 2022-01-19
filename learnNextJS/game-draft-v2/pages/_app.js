const dotenv = require("dotenv").config();
import { useState } from "react";
import "../styles/globals.css";
import AppContext from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  const [pageIndex, setPageIndex] = useState(0);

  return (
    <AppContext.Provider
      value={{
        pageIndex,
        setPageIndex,
      }}
    >
      <Component {...pageProps} />;
    </AppContext.Provider>
  );
}

export default MyApp;
