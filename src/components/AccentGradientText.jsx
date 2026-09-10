import React from "react";

const AccentGradientText = ({ children }) => {
    return (
        <div className="font-medium text-[12rem] leading-40 text-transparent bg-clip-text bg-linear-to-b to-accent/0 from-accent font-ins italic opacity-50">
            {children}
        </div>
    );
};

export default AccentGradientText;
