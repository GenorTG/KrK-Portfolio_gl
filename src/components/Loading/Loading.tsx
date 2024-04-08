import React from "react";
import loading from "./loading.gif";
import "./Loading.scss";

const loadingMSG = "Please wait, loading the page now...";

const LoadingText: React.FC<{ text: string }> = ({ text }) => {
    const characters = text.split("");
    let index = 1;

    return (
        <>
            {characters.map((char) => (
                <h1 key={index} style={{"--i": index++ } as React.CSSProperties}>
                    {char === " " ? "\u00A0" : char}
                </h1>
            ))}
        </>
    );
};

const Loading: React.FC = () => {

    return (
        <div id="loading" className="loading">
            <div className="loading__text">
                <LoadingText text={loadingMSG} />
            </div>
            <img src={loading} alt="loading" />
        </div>
    );
};

export default Loading;
