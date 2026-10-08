"use client";

import Hero from "@/components/section/Hero";
import { Hero2 } from "@/components/section/Hero2";
import useGsapAnimations from "@/hooks/useGsapAnimation";
import useLenisScroll from "@/hooks/useLenisScroll";

export default function Page() {
    useLenisScroll();
    useGsapAnimations();

    return (
        <div>
            <Hero />
            <Hero2 />
        </div>
    );
}
