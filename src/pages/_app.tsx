import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";
import Navbar from "@/components/login/navbar/navbar";

import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className={GeistSans.className}>
        <style jsx global>{`
        :root {
          --font-geist-sans: ${GeistSans.variable};
        }
      `}
  </style>
      <div className="pattern bg-black">
        <QueryClientProvider client={queryClient}>
          <SessionProvider>
            <Navbar />
            <Component {...pageProps} />
            <Toaster />
          </SessionProvider>
        </QueryClientProvider>
      </div>
    </div>
  );
};

export default MyApp;
