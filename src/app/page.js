"use client";

import AccentGradientText from "@/components/AccentGradientText";
import BentoCard from "@/components/BentoCard";
import Footer from "@/components/layout/Footer";
import WebThreads from "@/components/WebThreads";
import useGsapAnimations from "@/hooks/useGsapAnimation";
import useLenisScroll from "@/hooks/useLenisScroll";
import Image from "next/image";

export default function Home() {
    useLenisScroll();
    useGsapAnimations();

    return (
        <div className="max-w-500 w-full mx-auto relative">
            <div className="fixed inset-0 -z-100">
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
            </div>
            <main>
                <section className="min-h-screen p-2">
                    <div className="flex gap-2">
                        <div className="rounded-xl border p-1 aspect-square w-20">
                            <Image
                                className="rounded-lg"
                                alt="photoA"
                                width={0}
                                height={0}
                                style={{ width: "100%", height: "auto" }}
                                src="/images/photo.jpg"
                            />
                        </div>
                        <BentoCard>
                            <h1 className="text-xl">
                                Hi, I am{" "}
                                <span className="font-ins italic">
                                    Israel De Vera
                                </span>
                            </h1>

                            <p className="text-muted-foreground">
                                Lead product designer, currently working at
                                accenture.
                            </p>
                        </BentoCard>
                    </div>
                </section>
                <section className="min-h-screen"></section>
            </main>

            <Footer />
        </div>
    );
}
