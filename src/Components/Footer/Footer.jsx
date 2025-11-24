import { CiLocationOn, CiMail, CiTwitter, CiInstagram, CiFacebook } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { LiaGooglePlusG } from "react-icons/lia";
import { IoIosReturnRight } from "react-icons/io";

export default function Footer() {
    return (
        <div className="bg-[#D9D9D9] py-10 px-5 rounded-t-xl mt-5 grid gap-5  grid-cols-1 lg:grid-cols-4">
            <div className="px-10">
                <div className="grid gap-5 ">
                    <div><img src="/logo.png" alt="" /></div>
                    <p className="text-base font-medium flex items-center text-[#666666] gap-2"><span className="text-2xl"><CiLocationOn /></span>194 Main Rd T, FS Rayed <br />VIC 3057, USA</p>
                    <p className="text-base font-medium flex items-center text-[#666666] gap-2"><span className="text-2xl"><CiMail /></span>info@example.com </p>
                    <p className="text-base font-medium flex items-center text-[#666666] gap-2"><span className="text-2xl"><IoCallOutline /></span>+012 345 678 102</p>
                    <div className="flex gap-2">
                        <CiTwitter className="w-10 h-10 p-1 border rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer" />
                        <CiInstagram className="w-10 h-10 p-1 border rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer" />
                        <CiFacebook className="w-10 h-10 p-1 border rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer" />
                        <LiaGooglePlusG className="w-10 h-10 p-1 border rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer" />
                    </div>
                </div>
            </div>
            <div>
                <div className="text-2xl ">
                    <h4>Categories</h4>
                </div>
                <div>
                    <ul className="text-base font-medium text-[#666666] grid gap-4 mt-2 ">
                        <li>Furniture</li>
                        <li>Bags</li>
                        <li>Decoration</li>
                        <li>Accessories</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="text-2xl ">
                    <h4>Infomation</h4>
                </div>
                <div>
                    <ul className="text-base font-medium text-[#666666] grid gap-4 mt-2">
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Terms & Conditions</li>
                        <li>Returns & Exchanges</li>
                        <li>Shipping & Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className="text-2xl">
                    <h4>Newsletter</h4>
                </div>
                <div>
                       <div className="text-base font-medium text-[#666666] grid gap-4 mt-2">
                         <p className="text-base font-medium text-[#666666]">Subscribe to our newsletter and get 10% off your first
                            purchase .</p>
                       </div>
                </div>
                <div className="flex items-center mt-2">
                   <input type="text" placeholder="Email Address" className="p-2 w-5/7 bg-white" />
                   <button className="p-3 bg-white border border-gray-300"><IoIosReturnRight/></button>
                </div>

            </div>
        </div>
    )
}
