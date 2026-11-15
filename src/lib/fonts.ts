import localFont from "next/font/local";

export const apercu = localFont({
  src: [
    {
      path: "../../public/fonts/apercu-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/apercu-regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/apercu-medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/apercu-bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-apercu",
  display: "swap",
});

/** Display titles */
export const bodoniBook = localFont({
  src: "../../public/fonts/bodoni-webfont.ttf",
  variable: "--font-bodoni-book",
  display: "swap",
});

export const bodoniBold = localFont({
  src: "../../public/fonts/Bodoni-Bold.ttf",
  variable: "--font-bodoni-bold",
  display: "swap",
});
