import React from "react";

const AccentGradientText = ({ children }) => {
    return (
        <div className="font-extrabold text-[12rem] leading-40 tracking-tighter text-transparent bg-clip-text bg-linear-to-b to-accent/0 from-accent font-orbitron opacity-50">
            {children}
        </div>
    );
};

export default AccentGradientText;
