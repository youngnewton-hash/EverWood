import useReveal from '../hooks/useReveal';
import React from 'react';
import { SocialIcon } from 'react-social-icons'

function SocialProof() {
    const ref = useReveal();
    return (
        <div ref={ref} className="reveal py-24 px-12 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8 py-4">Designed by Us. Styled by You</h2>
                    <p className="text-gray-600 text-lg text-center">Here's what our customers have to say about their EverWood experience.</p>
                      <h4 className='text-gray-600 text-lg text-center'> Tag us on our social media!</h4>
                    <div className="flex justify-center mb-12 align-items-center p-4">
                    <div className="flex gap-4 ">
                        <SocialIcon url="https://twitter.com"/>
                        <SocialIcon url="https://facebook.com"/>
                        <SocialIcon url="https://linkedin.com"/>
                        <SocialIcon url="https://github.com"/>
                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md h-48 hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
                        <p className="text-gray-700 mb-4">"EverWood transformed my living room! The quality and craftsmanship are unmatched. Highly recommend!"</p>
                        <p className="font-bold text-gray-900">- Sarah M.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md h-48 hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
                        <p className="text-gray-700 mb-4">"I love my new dining set from EverWood. It's both stylish and functional. The customer service was excellent too!"</p>
                        <p className="font-bold text-gray-900">- James K.</p>   
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md h-48 hover:bg-gray-200 transition-colors duration-300 cursor-pointer">
                        <p className="text-gray-700 mb-4">"The attention to detail in every piece from EverWood is impressive. My home has never looked better!"</p>
                        <p className="font-bold text-gray-900">- Emily R.</p>
                    </div>
                     <div className="bg-white p-6 rounded-lg shadow-md h-48 hover:bg-gray-200 transition-colors duration-300 lg:col-start-2">
                        <p className="text-gray-700 mb-4">"The sofa exceeded all expectations. the fabric feels luxurious but has already survived two coffee spills and a golden retriever.
                            Absolutely worth the investment!"</p>
                        <p className="font-bold text-gray-900">- David k.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialProof;