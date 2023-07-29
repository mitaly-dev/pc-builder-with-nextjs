import "@/styles/globals.css";
import { StyleProvider } from "@ant-design/cssinjs";

// export default function App({ Component, pageProps }) {
//   return (
//     <StyleProvider>
//       <Component {...pageProps} />
//     </StyleProvider>
//   );
// }

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <StyleProvider hashPriority="high">
      <Component {...pageProps} />
    </StyleProvider>
  );
}
