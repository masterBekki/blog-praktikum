import type { Metadata } from "next";
import { Inter,Work_Sans, Crete_Round } from "next/font/google";
import "./globals.css";
import { ChildProps } from '@/types'
import { ThemeProvider } from '@/components/providers/theme-provider'

const inter = Inter({ subsets: ["latin"] });
const creteRound = Crete_Round({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-creteRound",
});
const workSans=Work_Sans({
  subsets: ["latin"],
  weight: ["500","600"],
  variable: "--font-workSans",
})

export const metadata: Metadata = {
  title: "Bekki Dasturlashga oid maqolalar",
  description: "Dasturlashga oid maqolalar, Dasturlash haqida maslahat va dasturlash sohasidagi eng so'nggi xabarlar.Bizning blogda dasturlashni o'rganish va rivojlantirish uchun qo'llanma topishingiz mumkin",
};

export default function RootLayout({children}:ChildProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${creteRound.variable} ${workSans.variable}`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
