


function Footer() {
    return (
        <div className=" bg-gray-900">
           <div className="py-8 px-12 text-white text-center">
            <h2>JOIN THE INNER CIRCLE</h2>
            <p className="text-gray-400">Sign up for our newsletter to receive exclusive offers, product updates, and design inspiration.</p>
            <form className="mt-4 flex justify-center">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-gray-600 text-gray-300 placeholder:text-gray-500 border rounded-lg border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="ml-2 bg-[#1a1510] hover:bg-blue-700 text-[#0a0a0a] hover:text-white py-2 px-4 rounded-md transition duration-300"
                >
                    Subscribe
                </button>
            </form>
            </div>
            
            
            <div className="py-8 px-12 text-white flex">
                  <ul className="flex flex-col gap-4">
                    <li><a href="#" className="hover:text-[#C9A84C]"> Contact Us </a></li>
                   
                    <li><a href="#" className="hover:text-[#C9A84C]"> Shipping & Delivers</a></li>
                    
                     <li><a href="#" className="hover:text-[#C9A84C]"> Returns & Exchanges</a></li>
                 
                    <li><a href="#" className="hover:text-[#C9A84C]"> FAQ</a></li>
                   
                    <li><a href="#" className="hover:text-[#C9A84C]">Care & Maintenance</a></li> 
                  </ul>
            </div>

            <footer className="text-black py-8">
                <div className="container mx-auto text-center">
                    <p>&copy; 2026 devDrey. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}


export default Footer;