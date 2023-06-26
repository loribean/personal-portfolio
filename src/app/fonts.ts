import { Outfit, Fira_Code } from "next/font/google";

export const raleway = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"], });
export const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--fira-code"
});