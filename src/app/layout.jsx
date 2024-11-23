import localFont from "next/font/local";
import "./globals.css";



export const metadata = {
  title: "Sevgimizin Hikayesi",
  description: "Ahmet bu Hediyeyi senin icin hazirladi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
