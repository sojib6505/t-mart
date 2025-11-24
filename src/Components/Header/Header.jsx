import { Link, useNavigate } from "react-router-dom";
import { LuSearch, LuShoppingCart } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { IoClose, IoMenu } from "react-icons/io5";
import { useState ,useEffect } from "react";

export default function Header() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/')
  }
  const [cartCount, setCartCount] = useState(0)
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-xl">
      <div className="container mx-auto py-2 md:py-6 px-4 flex justify-between items-center  ">
        <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? <IoClose></IoClose> : <IoMenu></IoMenu>}
        </div>
        <div>
          <img onClick={handleNavigate} className="w-18 md:w-24" src="/logo.png" alt="" />
        </div>
        <div>
          <ul className={`md:flex gap-4 text-xl absolute md:static duration-400 ${open ? 'top-12 left-10 bg-[#D9D9D9] p-2 rounded-sm shadow-4xl' : '-top-60 left-3'}`}>
            <li className="hover:font-bold"> <Link to='/'>Home</Link> </li>
            <li className="hover:font-bold"> <Link to='/shop'>Shop</Link></li>
            <li className="hover:font-bold"><Link>Blog</Link></li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-4 text-2xl ">
            <li><Link><LuSearch></LuSearch></Link></li>
            <li><Link><CgProfile></CgProfile></Link></li>
            <li className="relative">
              <Link to='/cart'>
                <LuShoppingCart />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>
  )
}
