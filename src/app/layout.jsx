import {
    Geist,
    Instrument_Serif,
    Montserrat,
    Urbanist,
    Orbitron,
    Zalando_Sans_Expanded,
    Poppins,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

// Initialize the font
const orb = Orbitron({
    subsets: ["latin"],
    // weight: ["900"],
    // style: ["normal"],
    variable: "--font-orb",
});
const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal", "italic"],
    variable: "--font-instrument-serif",
});
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal", "italic"],
    variable: "--font-mont",
});
const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["400"],
    style: ["normal", "italic"],
    variable: "--font-urbanist",
});

const zalando = Zalando_Sans_Expanded({
    subsets: ["latin"],
    weight: ["400", "800", "900"],
    style: ["normal", "italic"],
    variable: "--font-zalando",
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "800", "900"],
    style: ["normal", "italic"],
    variable: "--font-poppins",
});
export const metadata = {
    title: "Israel De Vera | Full Stack Developer",
    description: "Portfolio 2026",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${instrumentSerif.variable} ${urbanist.variable} ${montserrat.variable} ${orb.variable} ${zalando.variable} ${poppins.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <>
                    {/* <Navbar />  */}
                    {children}
                </>
            </body>
        </html>
    );
}
