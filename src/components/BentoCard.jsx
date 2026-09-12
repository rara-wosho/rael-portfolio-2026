import React from "react";

const BentoCard = ({ children, className }) => {
    return (
        <div
            className={`${className} ring ring-border ring-offset-2 ring-offset-background border border-neutral-700/50 p-5 rounded-lg bg-linear-to-br from-[rgb(29,29,32)] to-[rgb(15,15,16)]`}
        >
            {children}
        </div>
    );
};

export default BentoCard;
