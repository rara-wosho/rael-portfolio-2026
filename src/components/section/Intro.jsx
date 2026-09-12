import Image from "next/image";
import BentoCard from "../BentoCard";

const Intro = () => {
    return (
        <BentoCard className="h-full w-full flex flex-col justify-between">
            <div className="flex items-center gap-2 mb-3">
                <div className="border rounded-full p-1">
                    <Image
                        width={60}
                        height={60}
                        src="/images/profile.jpg"
                        alt="mini-photo"
                        className="rounded-full border"
                    />
                </div>

                <div>
                    <h1 className="text-xl">Israel De Vera</h1>
                    <div
                        className="flex items-center gap-2
                    "
                    >
                        <div className="size-3 rounded-full bg-emerald-500"></div>
                        <p className="text-muted-foreground">Available</p>
                    </div>
                </div>
            </div>

            <p className="text-secondary-foreground">
                A former BSBA-MM student with an interest in entrepreneurship,
                but ended up diving into coding.
            </p>

            <p className="text-muted-foreground text-sm">July 23</p>
        </BentoCard>
    );
};

export default Intro;
