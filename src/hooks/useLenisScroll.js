import { useEffect } from "react";
import Lenis from "lenis";

const useLenisScroll = () => {
    useEffect(() => {
        const lenis = new Lenis();
        let animationFrameId;

        lenis.on("scroll", (event) => {
            console.log("Animated scroll: ", event.animatedScroll);
        });

        function raf(time) {
            lenis.raf(time);
            animationFrameId = requestAnimationFrame(raf);
        }

        animationFrameId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(animationFrameId);
            lenis.destroy();
        };
    }, []);
};

export default useLenisScroll;
