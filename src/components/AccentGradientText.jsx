import React from "react";

const AccentGradientText = ({ children }) => {
    return (
        <div className="font-extrabold leading-35 tracking-[-10px] text-transparent bg-clip-text bg-linear-to-b to-slate-900/0  from-slate-300 via-slate-200/40 via-50% font-zalando opacity-90">
            {children}
        </div>
    );
};

export default AccentGradientText;
