import { createEmotionCache } from "@/Utility/create-emotion-cache";
import "@/styles/globals.css";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "simplebar-react/dist/simplebar.min.css";
import type { AppProps } from "next/app";
import { createTheme } from "@/Theme";
import { CacheProvider } from "@emotion/react";
import Head from "next/head";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AuthProvider } from "@/guard/auth-context";
const clientSideEmotionCache = createEmotionCache();
const SplashScreen = () => null;
export default function App({ Component, pageProps }: AppProps | any) {
  const theme = createTheme();
  const getLayout = Component.getLayout ?? ((page: any) => page);
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <Head>
        <title>Boiler World Expo Admin</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </LocalizationProvider>
    </CacheProvider>
  );
}
