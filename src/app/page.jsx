"use client";

import AccentGradientText from "@/components/AccentGradientText";
import BentoCard from "@/components/BentoCard";
import BorderGlow from "@/components/BorderGlow";
import GithubStreak from "@/components/GithubStreak";
import IconWrapper from "@/components/IconWrapper";
import Footer from "@/components/layout/Footer";
import Intro from "@/components/section/Intro";
import IntroSection from "@/components/section/IntroDetails";
import Socials from "@/components/section/Socials";
import WebThreads from "@/components/WebThreads";
import useGsapAnimations from "@/hooks/useGsapAnimation";
import useLenisScroll from "@/hooks/useLenisScroll";
import Image from "next/image";

export default function Home() {
    useLenisScroll();
    useGsapAnimations();

    return (
        <div className="max-w-500 w-full mx-auto relative">
            {/* BACKGROUND  */}
            {/* <div className="fixed inset-0 -z-100">
                <WebThreads
                    color1="#06B6D4"
                    color2="#0a4752"
                    color3="#ffffff"
                    speed={0.1}
                    threadCount={5}
                    frequency={5}
                    spread={0.06}
                    taper={1}
                    position={0.5}
                    fanMode="center"
                    glow={0.02}
                    falloff={0.6}
                    thickness={1}
                    brightness={0.5}
                    opacity={1}
                    mirror
                    shimmer={false}
                    grain={false}
                    grainIntensity={0}
                    mouseInteraction
                    mouseStrength={0.3}
                />
            </div> */}
            <main className="max-w-300 w-full mx-auto">
                <section className="min-h-screen p-2">
                    <div className="grid grid-cols-5 gap-3">
                        <div className="col-span-3">
                            {/* <div className="border p-5 h-full"></div> */}
                            <Intro />
                        </div>
                        <Image
                            className="rounded-lg w-full h-auto object-cover"
                            alt="photoA"
                            width={0}
                            height={0}
                            sizes="100vw"
                            src="/images/profile.jpg"
                        />
                    </div>
                </section>
                <section className="min-h-screen"></section>
            </main>

            <Footer />
        </div>
    );
}
