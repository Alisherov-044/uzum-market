import "@/styles/main.css";
import { TRootLayout } from "@/types/app";
import type { Metadata } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Uzum Market",
  description: "Uzum Market",
};

export default function RootLayout({ children }: Readonly<TRootLayout>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
