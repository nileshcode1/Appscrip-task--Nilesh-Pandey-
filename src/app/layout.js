import Head from "next/head";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/navbar/Navbar";
import Footer from "./components/Footer/Footer";

const myFont = localFont({
  src: "../../public/fonts/SimplonNorm.woff2",
  display: "swap",
});

export default function RootLayout({
  children,
  title = "Default Title",
  description = "Default Description",
}) {
  return (
    <html lang="en">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={myFont.className}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
