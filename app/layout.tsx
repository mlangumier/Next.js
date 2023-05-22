import { Inter } from "next/font/google";

import "@/style/globals.css";
import Providers from "./providers";
import { Layout } from "@/components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next13 Test Project",
  description: "Working with Next13, Tailwind, Axios, React-Query",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
