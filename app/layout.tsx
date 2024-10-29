import { inter } from "@/components/ui/fonts";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.variable} antialiased`}>
        <Theme accentColor="teal" radius="large">
          {children}
        </Theme>
      </body>
    </html>
  );
}
