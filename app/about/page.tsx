'use client';
import React from "react";
import { useState } from 'react';

const About:React.FC<{textToSend: string}> = (props) => {

    return (
        <div className="flex flex-col content-center items-center justify-center flex-nowrap ">
           <h1>about</h1>
              <style jsx>{`
                    a {
                        background-color: #000000;
                        color: #ffffff;
                        padding: 10px 20px;
                        text-decoration: none;
                        border-radius: 5px;
                        border: 1px solid #000000;
                        margin: 10px;
                    }
                    a:hover {
                        background-color: #ffffff;
                        color: #000000;
                    }
                `}</style>
            
           <a href="/" >Home</a>
     </div>
    );
};
export default About;