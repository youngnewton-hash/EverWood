import React from "react";

function Hero() {
    return (
        <div 
            style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                backgroundImage: "url('/photos/hero-img.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                paddingButton: '1rem'
            }}
        >
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '0.3rem'
            }}>
                <h1 style={{
                    fontSize: 'clamp(2rem, 8vw, 3.5rem)',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '1rem'
                }}>Modern Comfort, Ageless Elegance</h1>
                <p style={{
                    fontSize: 'clamp(1rem, 4vw, 1.5rem)',
                    color: 'white',
                    marginBottom: '1.5rem'
                }}>Discover curated collections crafted to elevate your everyday living spaces.  </p>
               
                <p className="text-2xl text-white mb-6">
                    Built for comfort. Made to last. Designed for you.
                </p>
                <a href="/shop" style={{
                    display: 'inline-block',
                    backgroundColor: '#C9A84C',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.375rem',
                    marginTop: '2rem',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s'
                }} onMouseEnter={(e) => e.target.style.backgroundColor = '#b38b3c'} onMouseLeave={(e) => e.target.style.backgroundColor = '#C9A84C'}>Shop Now</a>
            </div>
        </div>
    )
}

export default Hero
