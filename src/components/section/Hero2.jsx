import Image from "next/image";
import React from "react";

export const Hero2 = () => {
    return (
        <section className="min-h-screen">
            <div className="">
                <div className="relative border">
                    <div className="max-w-90 absolute inset-0 rotate-12 aspect-4/5">
                        <Image
                            className="object-contain grayscale-90"
                            src="/images/p3.png"
                            sizes="100%"
                            fill
                            alt="sdasda"
                        />
                    </div>
                    <div className="max-w-90 aspect-4/5 relative">
                        <Image
                            className="object-contain grayscale-90"
                            src="/images/p3.png"
                            sizes="100%"
                            fill
                            alt="sdasda"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
