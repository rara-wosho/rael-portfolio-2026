import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// GSAP Scroll animations
const useGsapAnimations = () => {
    useEffect(() => {
        // Check if the screen width is greater than 768px (considered as mobile size)
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            // If on mobile, kill all ScrollTrigger instances and GSAP animations
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            gsap.globalTimeline.clear();
            return;
        }

        // Heading Typography
        gsap.to('#scroll-animation-1', {
            scrollTrigger: {
                trigger: '#scroll-animation-1',
                toggleActions: 'restart pause reverse pause',
                scrub: 1,
                markers: false,
                start: 'top 60%',
                end: 'bottom 20%',

            },
            y: -100,
            opacity: 0,
            ease: 'none',
            duration: 3,
        });
    }, []);
}

export default useGsapAnimations