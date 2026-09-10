import React from "react";

export const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 z-1000 p-5 bg-background/20 w-full backdrop-blur-lg">
            <div className="flex items-center gap-3">
                <p className="text-foreground font-ins">Rael De Vera</p>{" "}
                <p className="text-muted-foreground text-sm">
                    SENIOR FRONT-END ENGINEER
                </p>
            </div>
        </div>
    );
};
