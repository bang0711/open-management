"use client";

import { ReactNode } from "react";

import ThemeProvider from "./theme-provider";

type Props = {
  children: ReactNode;
};

function Providers({ children }: Props) {
  return <ThemeProvider>{children}</ThemeProvider>;
}

export default Providers;
