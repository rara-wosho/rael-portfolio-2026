import React from "react";

const IconWrapper = ({ children, className }) => {
    return (
        <div className={`border rounded-[10px] p-[1.5px] ${className}`}>
            <div className="bg-muted rounded-[8px] border border-neutral-700 p-1 flex items-center justify-center">
                {children}
            </div>
        </div>
    );
};

export default IconWrapper;
