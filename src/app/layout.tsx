"use client";
import "@mantine/core/styles.css";
import localFont from "next/font/local";
import "../app/globals.css";
import { createTheme, MantineProvider } from "@mantine/core";
import AppShell from "@/components/appShell/AppShell";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@mantine/notifications/styles.css";
import { Notifications } from "@mantine/notifications";
import AppLayout from "@/layouts/AppLayout";

const mainFont = localFont({
  display: "block",
  preload: true,
  adjustFontFallback: "Arial",
  src: [
    {
      path: "../../public/fonts/Barlow/Barlow-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Barlow/Barlow-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Barlow/Barlow-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Barlow/Barlow-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/Barlow/Barlow-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Barlow/Barlow-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
  ],
});

// export const metadata: Metadata = {
//     title: "Ketaab Khooneh",
//     description: "Generated by create next app",
// };

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = createTheme({
    fontFamily: `${mainFont.style.fontFamily}, Tahoma, sans-serif`,
    components: {
      Text: {
        styles: {
          marginTop: "-1px",
        },
      },
    },
    headings: {
      sizes: {
        h1: {
          fontWeight: "700",
        },
        h2: {
          fontWeight: "700",
          lineHeight: "38px",
        },
        h3: {
          fontWeight: "700",
        },
        h4: {
          fontWeight: "500",
        },
        h5: {
          fontWeight: "500",
        },
        h6: {
          fontWeight: "500",
        },
      },
    },
    fontFamilyMonospace: "Monaco, Courier, monospace",
    /** Put your mantine theme override here */
  });

  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <MantineProvider theme={theme} defaultColorScheme="auto">
            <Notifications />
            <AppLayout>
              {children}
            </AppLayout>
          </MantineProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
