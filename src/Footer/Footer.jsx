import { FaFacebookF, FaGooglePlusG, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="z-20 py-10 mt-4 text-gray-800 rounded-lg bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500 bg-[length:300%_300%] animate-gradientMove">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    
                    {/* Logo and Description */}
                    <div>
                        <div className='flex items-center justify-start'>
                        </div>
                        <img
                            src="https://tse4.mm.bing.net/th?id=OIP.hJ3xdyPBF0JXNx5GY09igAHaHa&pid=Api&P=0&h=180"
                            alt="crystal image"
                            className="w-auto h-10 ml-4"
                        />
                        

                        <p className='my-4 text-gray-700'>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam cupiditate optio facere ullam nulla. Mollitia soluta esse ratione sunt tenetur libero assumenda molestias fugit iste necessitatibus. Accusantium quis neque at deleniti aliquid deserunt maxime exercitationem aperiam est? Explicabo, tenetur est, beatae et sint quas nobis aspernatur facere maxime sit fuga.                        
                              </p>
                        {/* Social Media Icons */}
                        <div className="flex mt-4 space-x-4">
                            <a href="#" className="text-[#DB4437] hover:text-red-400">
                                <FaGooglePlusG />
                            </a>

                            <a href="#" className="text-[#1DA1F2] hover:text-blue-400">
                                <FaTwitter />
                            </a>
                            
                            <a href="#" className="text-[#4267B2] hover:text-blue-500">
                                <FaFacebookF />
                            </a>
                            
                            <a href="#" className="text-[#E1306C] hover:text-pink-500">
                                <FaInstagram />
                            </a>
                            
                        </div>
                    </div>

                    {/* Service Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-green-700">Services</h3>
                        <ul className="space-y-2">
                            {/* Replace 'Service Name' with actual services */}
                            <li><a href="#" className="hover:text-gray-600">Haldwani, Uttarakhnad</a></li>
                            <li><a href="#" className="hover:text-gray-700">Haldwani, Uttarakhnad</a></li>
                            <li><a href="#" className="hover:text-gray-700">Haldwani, Uttarakhnad</a></li>
                            <li><a href="#" className="hover:text-gray-700">Haldwani, Uttarakhnad</a></li>
                        </ul>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-red-700">Links</h3>
                        <ul className="space-y-2">
                            {/* Replace links with actual routes */}
                            <li><a href="/about" className="hover:text-gray-700">About Us</a></li>
                            <li><a href="/services" className="hover:text-gray-700">Our Services</a></li>
                            <li><a href="/contact" className="hover:text-gray-700">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="mb-4 text-lg font-bold text-yellow-700">Get in Touch</h3>
                        <p className="mb-2 text-gray-700">
                            <span className="font-semibold">Address:</span> 13,jagdambika viahr, Uttarakhand, India
                        </p>
                        <p className="mb-2 text-gray-700">
                            <span className="font-semibold">Phone:</span> +91 1122334455
                        </p>
                        <p className="text-gray-700">
                            <span className="font-semibold">Email:</span>goli@gmail.com
                        </p>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 text-center text-black">
                    © 2023-24 Crystal. All things are done.
                </div>
            </div>
        </div>
    );
};

export default Footer;






