import {
    Geist,
    Geist_Mono,
    Instrument_Serif,
    Montserrat,
    Urbanist,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

// Initialize the font
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

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Israel De Vera",
    description: "Portfolio 2026",
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${instrumentSerif.variable} ${urbanist.variable} ${montserrat.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <>
                    <Navbar />
                    {children}
                </>
            </body>
        </html>
    );
}
