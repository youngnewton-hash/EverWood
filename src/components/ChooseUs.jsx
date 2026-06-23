import useReveal from '../hooks/useReveal';

function ChooseUs() {
    const ref = useReveal();
    return (

        <div ref={ref} className="reveal py-24 px-12 bg-gray-100 my-4">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 py-4">Why Choose Us?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="bg-[#1a1510] p-6 rounded-lg shadow-md h-64 hover:bg-[#2a2015] transition-colors duration-300">
                        <h3 className="text-xl font-bold mb-4 text-[#c9a84c]">Quality Materials</h3>
                        <p className="text-lg text-[#f5f0e8]">Responsibly sourced hardwoods, top-grain leathers, and performance fabrics 
                            designer with attention to detail.</p>
                    </div>

                    <div className="bg-[#1a1510] p-6 rounded-lg shadow-md hover:bg-[#2a2015] transition-colors duration-300">
                        <h3 className="text-xl font-bold mb-4 text-[#c9a84c]">Expert Craftsmanship</h3>
                        <p className="text-lg text-[#f5f0e8]">Our skilled artisans combine traditional techniques with modern design for exceptional results.</p>
                    </div>

                    <div className="bg-[#1a1510] p-6 rounded-lg shadow-md hover:bg-[#2a2015] transition-colors duration-300">
                        <h3 className="text-xl font-bold mb-4 text-[#c9a84c]">Designed for Longevity</h3>
                        <p className="text-lg text-[#f5f0e8]">We create timeless pieces that stand the test of time, built to last for generations.</p>
                    </div>

                      <div className="bg-[#1a1510] p-6 rounded-lg shadow-md hover:bg-[#2a2015] transition-colors duration-300">
                        <h3 className="text-xl font-bold mb-4 text-[#c9a84c]">Sustainable Practices</h3>
                        <p className="text-lg text-[#f5f0e8]">Commited to the planet. we use eco-friendly materials and processes.
                             We also make sure to plant a tree for every order placed</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseUs;