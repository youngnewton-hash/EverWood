


function Footer() {
    return (
        <div className="bg-gray-800">
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
                    className="ml-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300"
                >
                    Subscribe
                </button>
            </form>
            </div>
            
            
            <div className="py-8 px-12 text-white flex justify-center">
                  <ul className="flex gap-4 justify-center">
                    <li><a href="#" className="hover:text-[#C9A84C]"> Contact Us </a></li>
                    <li>||</li>
                    <li><a href="#" className="hover:text-[#C9A84C]"> Shipping & Delivers</a></li>
                     <li>||</li>
                     <li><a href="#" className="hover:text-[#C9A84C]"> Returns & Exchanges</a></li>
                    <li>||</li>
                    <li><a href="#" className="hover:text-[#C9A84C]"> FAQ</a></li>
                     <li>||</li>
                    <li><a href="#" className="hover:text-[#C9A84C]">Care & Maintenance</a></li> 
                  </ul>
            </div>

            <footer className="bg-gray-800 text-blackR py-8">
                <div className="container mx-auto text-center">
                    <p>&copy; 2026 devDrey. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}


export default Footer;