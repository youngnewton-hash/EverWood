import useReveal from '../hooks/useReveal';

function ProductCard() {
      const ref = useReveal();
    return (
        <div href="/search" className="reveal py-24 px-12 bg-gray-100" ref={ref}>
                <h2 className="text-3xl font-bold text-center">Shop by Room</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 p-4">

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img src="/photos/living-room.jpeg" alt="Living Room" className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"/>
                        <h3 className="text-xl font-bold mb-2">The Living Room</h3>
                        <p className="text-gray-600">Discover our curated collection of living room furniture, designed to create a cozy and stylish space for relaxation and entertainment.</p>
                        <button className="mt-4 bg-[#C9A84C] text-white px-4 py-2 rounded hover:bg-[#b38b3c] cursor-pointer transition-colors duration-300">Explore Sofas</button>
                    </div>

                     <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img src="/photos/dining-room.jpeg" alt="Dining Room" className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"/>
                        <h3 className="text-xl font-bold mb-2">The Dining Room</h3>
                        <p className="text-gray-600">Discover our curated collection of dining room furniture, designed to create a warm and inviting space for meals and gatherings.</p>
                        <button className="mt-4 bg-[#C9A84C] text-white px-4 py-2 rounded hover:bg-[#b38b3c] cursor-pointer transition-colors duration-300">Explore Dining Sets</button>
                    </div>

                     <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                        <img src="/photos/couch2.jpeg" alt="Couches" className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"/>
                        <h3 className="text-xl font-bold mb-2">Couches</h3>
                        <p className="text-gray-600">Discover our curated collection of our couch furniture, designed to create a peaceful and comfortable space for work and relaxation.</p>
                        <button className="mt-4 bg-[#C9A84C] text-white px-4 py-2 rounded hover:bg-[#b38b3c] cursor-pointer transition-colors duration-300">Explore Couches</button>
                    </div>
                    
                    

                </div>



        </div>
    )
}



















export default ProductCard;