import Navbar from "@/components/Navbar";
import store from "@/redux/store";
import "@/styles/globals.css";
import { StyleProvider } from "@ant-design/cssinjs";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <StyleProvider hashPriority="high">
      <Provider store={store}>
        <SessionProvider session={pageProps.session}>
          <Navbar />
          <Component {...pageProps} />
        </SessionProvider>
      </Provider>
    </StyleProvider>
  );
}
