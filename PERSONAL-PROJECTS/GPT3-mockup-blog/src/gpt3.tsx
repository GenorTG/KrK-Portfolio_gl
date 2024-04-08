import React from "react";
import "./gpt3.scss";

import * as components from "./components";
import * as containers from "./containers";

const Gpt3:React.FC = () => {
    return (
        <div key="gpt3" className='gpt3__body'>
            <div className='App'>
                <div className='gradient__bg-2'>
                    <components.Navbar />
                    <containers.Header />
                    <components.Brand />
                </div>
                <containers.WhatGPT3 />
                <containers.Features />
                <containers.Possibility />
                <components.CTA />
                <containers.Blog />
                <containers.Footer />
            </div>
        </div>
    );
};

export default Gpt3;