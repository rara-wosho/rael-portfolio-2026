"use client";

import AccentGradientText from "@/components/AccentGradientText";
import Footer from "@/components/layout/Footer";
import useGsapAnimations from "@/hooks/useGsapAnimation";
import useLenisScroll from "@/hooks/useLenisScroll";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        useLenisScroll();
    }, []);

    useGsapAnimations();

    return (
        <div className="max-w-500 w-full mx-auto">
            <main className="p-2 space-y-1 bg-neutral-900">
                <section className=" bg-background rounded-3xl min-h-screen flex flex-col justify-end relative">
                    {/* <div className="mb-12 font-bold text-[12rem] leading-40 text-transparent bg-clip-text bg-linear-to-b via-80% via-[rgba(255,255,255,0.1)] to-90% to-transparent from-white font-urbanist">
                        RAEL
                    </div> */}
                    <div className="absolute bottom-5 left-3">
                        <AccentGradientText>
                            <p>De Vera</p>
                        </AccentGradientText>
                    </div>

                    {/* <p className="text-2xl">
                        Rael is a creative designer and{" "}
                        <span className="italic text-accent font-ins">
                            developer
                        </span>
                    </p> */}
                </section>
                <section className="bg-background rounded-3xl min-h-screen flex flex-col justify-end">
                    <h1 className="text-4xl font-bold text-amber-50">
                        SECTION 2
                    </h1>
                </section>
            </main>

            <Footer />
        </div>
    );
}
