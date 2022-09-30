import { useContext, useEffect } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { withEmotionCache } from "@emotion/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { ClientStyleContext, ServerStyleContext } from "./context";
import { theme } from "./components-features/app-theme";
import { NhostAuthProvider } from "./components-features/nhost";
import { RootPage } from "./components-features/root-page";
import { sitemap } from "./sitemap";

export let links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "http://fonts.googleapis.com/css?family=Roboto:400,100,300,100italic,300italic,400italic,500italic,500,700,700italic,900,900italic&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://unpkg.com/boxicons@2.1.3/css/boxicons.min.css",
  },
  {
    rel: "stylesheet",
    href: "https://unpkg.com/nprogress@0.2.0/nprogress.css",
  },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "admin - paygroup",
  viewport: "width=device-width,initial-scale=1",
});

interface DocumentProps {
  children: React.ReactNode;
}

const Document = withEmotionCache(
  ({ children }: DocumentProps, emotionCache) => {
    const serverStyleData = useContext(ServerStyleContext);
    const clientStyleData = useContext(ClientStyleContext);

    // Only executed on client
    useEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;
      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        (emotionCache.sheet as any)._insertTag(tag);
      });
      // reset cache to reapply global styles
      clientStyleData?.reset();
    }, []);

    return (
      <html lang="en">
        <head>
          <Meta />
          <Links />
          {serverStyleData?.map(({ key, ids, css }) => (
            <style
              key={key}
              data-emotion={`${key} ${ids.join(" ")}`}
              dangerouslySetInnerHTML={{ __html: css }}
            />
          ))}
        </head>
        <body>
          {children}
          <ScrollRestoration />
          {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
          <Scripts />
          <LiveReload />
        </body>
      </html>
    );
  }
);

export default function App() {
  return (
    <Document>
      <NhostAuthProvider>
        <ChakraProvider theme={theme}>
          <RootPage sitemap={sitemap}>
            <Outlet />
          </RootPage>
        </ChakraProvider>
      </NhostAuthProvider>
    </Document>
  );
}
