/** @format */

import React from "react";
import Layout from "../src/components/Layout";
import { Provider } from "react-redux";
import store from "../src/store";
import Body from "../src/components/LayoutComponents/Body";

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default App;
