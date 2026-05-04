
"use client";

import { ShieldCheck, Paintbrush, Droplets, Leaf } from "lucide-react";



const SubscribeSection = () => {
    return (
        <div >
            <div className="w-full">

              
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-6 border-b">

                    <div className="flex flex-col items-center gap-2 text-blue-900">
                        <ShieldCheck className="w-6 h-6" />
                        <h4 className="font-semibold">Premium Quality</h4>
                        <p className="text-sm text-gray-500">Top grade materials</p>
                    </div>

                    <div className="flex flex-col items-center gap-2 text-blue-900">
                        <Paintbrush className="w-6 h-6" />
                        <h4 className="font-semibold">Unique Designs</h4>
                        <p className="text-sm text-gray-500">Modern & timeless</p>
                    </div>

                    <div className="flex flex-col items-center gap-2 text-blue-900">
                        <Droplets className="w-6 h-6" />
                        <h4 className="font-semibold">Easy to Clean</h4>
                        <p className="text-sm text-gray-500">Low maintenance</p>
                    </div>

                    <div className="flex flex-col items-center gap-2 text-blue-900">
                        <Leaf className="w-6 h-6" />
                        <h4 className="font-semibold">Sustainable</h4>
                        <p className="text-sm text-gray-500">Eco friendly tiles</p>
                    </div>

                </div>

                
                <div className="grid md:grid-cols-1">

                    <div className="bg-[#0b2545] text-white p-10 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-4">Stay Inspired</h2>
                        <p className="mb-6 text-gray-300">
                            Subscribe to get updates on new collections and exclusive offers.
                        </p>

                        <div className="flex w-full max-w-md">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 text-black outline-none rounded-l-md"
                            />
                            <button className="bg-[#c8a97e] px-6 py-3 rounded-r-md font-semibold">
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SubscribeSection;