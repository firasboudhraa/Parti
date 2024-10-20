"use client";

import React, { useState } from 'react';
import Navbar from "@/components/molecules/nav";
import Footer from "@/components/molecules/Footer";


const App = () => {
    const [loading, setLoading] = useState(true);

    return (
        <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
            <Navbar />
            <div className="mt-10 mb-10 max-w-7xl w-full p-4">

                {loading && (
                    <div className="flex justify-center items-center h-96">
                        <div className="loader"></div> {/* Loader Placeholder */}
                    </div>
                )}
                
                <iframe
                    src="https://prezi.com/p/embed/ohlTpCGN65i0H0PAUpQ0/?autoplay=true&loop=true"
                    id="iframe_container"
                    frameBorder="0"
                    allowFullScreen
                    className={`w-full h-96 md:h-[80vh] lg:h-[90vh] rounded-lg shadow-2xl transition-all duration-500 ease-in-out transform ${loading ? 'hidden' : 'block'}`}
                    onLoad={() => setLoading(false)}
                ></iframe>
            </div>

            {/* CSS Styles */}
            <style jsx>{`
                .loader {
                    border: 4px solid rgba(255, 255, 255, 0.3);
                    border-left-color: #ffffff; /* White color for the left part */
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </div>
        <Footer/>
        </>
    );
};

export default App;
