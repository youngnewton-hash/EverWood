import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("")

    return (
        <nav className="fixed top-0 left-0 right-0 w-full z-50 flex items-center  px-8 py-8 justify-between h-16 bg-gray-800 text-white">
            <div className="flex items-center">
                <h1 className="text-xl font-bold text-[#C9A84C] text-2xl tracking-wide">EverWood</h1>
            </div>

            <div className="flex items-center justify-between space-x-4">
                 {/* Navigation links */} 
                <ul className={`hidden md:flex md:items-center md:space-x-16 text-sm tracking-wide uppercase`}>   
                <li><a href="/" className="text-[#f5f0e8]  hover:text-[#C9A84C]">Home</a></li>
                <li><Link to="/Shop" className="text-[#f5f0e8]  hover:text-[#C9A84C]">Shop</Link></li>
                <li><Link to="/About" className="text-[#f5f0e8]  hover:text-[#C9A84C]">About</Link></li>
                <li><Link to="/Contact" className="text-[#f5f0e8] hover:text-[#C9A84C]">Contact</Link></li>
                </ul>
            </div>
           
            <div className="flex space-x-4 px-4">

                 {/* search btn icon*/}

                 <a href="/search" className="text-[#f5f0e8] hover:text-[#C9A84C]" onClick={(e) => {
                     e.preventDefault();
                     setSearchOpen(!searchOpen);
                 }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </a>

                {/* cart icon */}
                <a href="/cart" className="text-[#f5f0e8] hover:text-[#C9A84C]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </a>
                
                {/* Hamburger menu icon */}

                 <button className="md:hidden text-[#f5f0e8] hover:text-[#C9A84C]" onClick={() => setMenuOpen(!menuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

            </div>

            {searchOpen && (
                // <>
                //  <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setMenuOpen(false)}></div>    

                <div className="absolute top-16 right-8 bg-gray-800 p-4 rounded shadow-lg z-50">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-gray-700 text-[#f5f0e8] placeholder:text-[#f5f0e8]/50 border border-[#C9A84C] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onkeyDown={(e) => {
                            if (e.key === "Enter") {
                                // Handle search logic here, e.g., navigate to search results page 
                                console.log("Search for:", searchQuery);
                                setSearchOpen(false);
                                setSearchQuery("");
                            }
                        }}
                        autoFocus
                    />
                </div>
                
            )}

                {/* Mobile menu */}
                {menuOpen && (
                    <>
                       <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setMenuOpen(false)}></div>    

                        {/* Side drawer */}
                        <div className={`md:hidden fixed top-0 right-0 h-64 w-64 bg-gray-900 z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                            {/* Close button */}
                            <button
                                className="absolute top-4 right-4 text-[#f5f0e8] text-2xl"
                                onClick={() => setMenuOpen(false)}
                            >
                                ✕
                            </button>
                            <ul className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center space-y-4 py-4 md:hidden">
                                <li><a href="/" className="text-[#f5f0e8] hover:text-[#C9A84C]">Home</a></li>
                                <li><a href="/shop" className="text-[#f5f0e8] hover:text-[#C9A84C]">Shop</a></li>
                                <li><a href="/about" className="text-[#f5f0e8] hover:text-[#C9A84C]">About</a></li>
                                <li><a href="/contact" className="text-[#f5f0e8] hover:text-[#C9A84C]">Contact</a></li>
                            </ul>
                        </div>
                    </>
                )}


        </nav>
    )
}

export default Navbar