import useReveal from '../hooks/useReveal';

function ProductList() {
    const ref = useReveal();
    return (    
            <div ref={ref} className="reveal py-12 lg:py-24 px-8 bg-gray-100 my-4">
                <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 py-4 px-4 lg:py-8 lg:px-12 bg-gray-100">
                <div className="flex flex-col justify-center lg:border-2 lg:border-[#ccc] lg:p-6 lg:rounded-lg lg:shadow-md">
                    <h2 className="text-3xl font-bold text-gray-800 text-center py-4">Form Meets Function</h2>
                    <p className="text-gray-600 text-xl md:py-4 leading-relaxed">
                        We believe that your home should be an anchor-a place of comfort, beauty,
                        and inspiration. Our design philosophy pairs minimalist aesthetics with maximum utility. We stripe away the excess to
                        focus on what matters most: the quality of materials, exceptional comfort, the integrity of construction, and the functionality of each piece.
                    </p>
                </div>
                <img src="/photos/storytelling.jpeg" alt="Sofa" className="w-full h-96 object-cover rounded-md shadow-md md:h-full"/>
            </div>
            </div>
    )
}



export default ProductList;