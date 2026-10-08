import Image from "next/image";
import AccentGradientText from "../AccentGradientText";
import WebThreads from "../WebThreads";
import IconWrapper from "../IconWrapper";
import DotGrid from "../DotGrid";
import { Mail, Phone, Pin, Sparkle, Sparkles } from "lucide-react";
import BentoCard from "../BentoCard";

const Hero = () => {
    return (
        <section className="min-h-screen w-full border relative flex flex-col justify-between">
            {/* BACKGROUND  */}
            <div className="absolute inset-0 bg-linear-to-tr from-background from-0% to-50% to-transparent"></div>
            <div className="absolute inset-0 -z-100">
                <DotGrid
                    dotSize={3}
                    shockRadius={100}
                    shockStrength={5}
                    resistance={2000}
                    activeColor="#FF0000"
                    baseColor="rgb(15,17,18)"
                    gap={20}
                    proximity={100}
                    returnDuration={2}
                />
            </div>

            {/* MAIN IMAGE  */}
            <div className="-z-10 absolute left-[50%] -translate-x-[50%] bottom-0 w-full max-w-150 aspect-5/5">
                <div className="absolute left-[50%] -translate-x-[50%]">
                    <AccentGradientText>
                        <p className="text-[10rem]">RAEL</p>
                    </AccentGradientText>
                </div>
                <Image
                    src="/images/a/aabb.png"
                    alt="abcphoto"
                    fill
                    className="object-contain"
                />

                <div className="absolute bg-linear-to-t from-background to-red-800/10 rounded-2xl left-0 top-50 right-0 bottom-0 -z-50"></div>
            </div>

            <div className="p-10 flex items-center gap-3">
                <Sparkles />{" "}
                <p className="font-thin text-xs text-muted-foreground">
                    Rael De Vera
                </p>
            </div>

            <div className="flex items-center justify-between p-10">
                <div className="flex flex-col space-y-4">
                    <Pin />
                    <Mail />
                    <Phone />
                </div>
                <div className="flex flex-col space-y-1">
                    <p className="text-lg font-medium text-muted-foreground">
                        Explore
                    </p>
                    <p className="text-lg font-medium text-muted-foreground">
                        Curate
                    </p>
                    <p className="text-lg font-medium text-muted-foreground">
                        Discover
                    </p>
                    <p className="text-lg font-medium text-muted-foreground">
                        Discover
                    </p>
                    <p className="text-lg font-medium text-muted-foreground">
                        Discover
                    </p>
                </div>
            </div>
            <div className="z-100 p-10">
                <div className="flex gap-4 items-center">
                    <div className="ring ring-border ring-offset-2 ring-offset-background rounded-sm">
                        <Image
                            className="rounded-sm"
                            alt="profile"
                            width={115}
                            height={115}
                            src="/images/profile.jpg"
                        />
                    </div>

                    <div>
                        <p className="font-medium text-2xl">
                            Hey, I'm Hakdok Prutacio
                        </p>
                        <div className="flex  items-center gap-2 text-slate-400/90 mt-1 mb-2.5">
                            <p className="text-xs">frontend</p>
                            <Sparkle size={10} />
                            <p className="text-xs">backend</p>
                            <Sparkle size={10} />
                            <p className="text-xs">ui/ux</p>
                        </div>

                        <div className="rounded-lg inline-flex backdrop-blur-2xl items-center gap-2 p-1 text-xs text-slate-400/90 border border-slate-500/30">
                            <div className="border border-slate-500/30 size-6 rounded-md flex center">
                                🏠
                            </div>
                            <p className="font-lighter text-md me-4">
                                Working from home
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
