import React from "react";
import BentoCard from "../BentoCard";
import IconWrapper from "../IconWrapper";

const IntroSection = () => {
    return (
        <BentoCard>
            <div className="flex items-center gap-2">
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <IconWrapper>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-muted-foreground lucide lucide-code-xml"
                            >
                                <path d="m18 16 4-4-4-4" />
                                <path d="m6 8-4 4 4 4" />
                                <path d="m14.5 4-5 16" />
                            </svg>
                        </IconWrapper>

                        <p>Full-Stack Developer, Freelancer</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconWrapper>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-muted-foreground lucide lucide-code-xml"
                            >
                                <path d="m18 16 4-4-4-4" />
                                <path d="m6 8-4 4 4 4" />
                                <path d="m14.5 4-5 16" />
                            </svg>
                        </IconWrapper>

                        <p>Iligan City, Philippines</p>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <IconWrapper>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-muted-foreground lucide lucide-mail"
                            >
                                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                                <rect
                                    x="2"
                                    y="4"
                                    width="20"
                                    height="16"
                                    rx="2"
                                />
                            </svg>
                        </IconWrapper>

                        <p>work.raeldevera@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <IconWrapper>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-muted-foreground lucide lucide-globe"
                            >
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </IconWrapper>

                        <p>www.raeldevera.dev</p>
                    </div>
                </div>
            </div>
        </BentoCard>
    );
};

export default IntroSection;
