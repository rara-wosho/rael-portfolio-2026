import React from "react";

const BentoCard = ({ children }) => {
    return (
        <div className="border p-1 rounded-xl">
            <div className="border p-5 rounded-lg bg-linear-to-br from-[rgb(25,25,27)] to-[rgb(15,15,16)]">
                {children}
            </div>
        </div>
    );
};

export default BentoCard;
