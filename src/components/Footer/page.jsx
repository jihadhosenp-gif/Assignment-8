 import { FaFacebook, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";



const footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-base-content mt-10">

                <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

                   
                    <div>
                        <h2 className="text-2xl font-bold">Tiles Gallery</h2>
                        <p className="mt-2 text-sm text-gray-500">
                            Modern Tiles Gallery -Discover Elegant Designs for Your Home
                        </p>
                    </div>

                
                    <div>
                        <h3 className="font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a className="hover:text-primary" href="/">Home</a></li>
                            <li><a className="hover:text-primary" href="/profile">Profile</a></li>
                            <li><a className="hover:text-primary" href="/login">Login</a></li>
                            <li><a className="hover:text-primary" href="/register">Register</a></li>
                        </ul>
                    </div>

                  
                    <div>
                        <h3 className="font-semibold mb-3">Contact</h3>

                        <p className="text-sm flex items-center gap-2">
                            <FaEnvelope /> @tilesgallery.com
                        </p>

                        <p className="text-sm mt-1">Phone: </p>

                     
                        <div className="flex gap-4 mt-4 text-xl">

                            <a href="#" className="hover:text-blue-500 transition">
                                <FaFacebook />
                            </a>

                            <a href="#" className="hover:text-sky-400 transition">
                                <FaTwitter />
                            </a>

                            <a href="#" className="hover:text-black transition">
                                <FaGithub />
                            </a>

                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-500">
                    © {new Date().getFullYear()} Tiles Gallery. All rights reserved.
                </div>

            </footer>
        </div>
    );
};

export default footer;