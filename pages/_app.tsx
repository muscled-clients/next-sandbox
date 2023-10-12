import type { AppProps /*, AppContext */ } from "next/app";
import { Devtools } from "@ui-devtools/tailwind";

import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Devtools>
      <Component {...pageProps} />
    </Devtools>
  );
}

export default MyApp;
