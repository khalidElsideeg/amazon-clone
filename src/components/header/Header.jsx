import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import { BiCaretDown } from "react-icons/bi";
import BottomHeader from "./BottomHeader";
import { catrIcon, logo } from "../../assets";
import { MdArrowDropDown } from "react-icons/md";
import { allItems } from "../../constants";

const Header = () => {
  const [showAll, setShowAll] = useState(false);
  const products = useSelector((state) => state.amazon.products);

  return (
    <header className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="w-full h-full inline-flex items-center justify-between mx-auto px-4 gap-1 md:gap-3">
        <Link to={"/"} className="headerHover">
          <div>
            <img src={logo} alt="logo" className="w-24 mt-2" />
          </div>
        </Link>
        <div className="headerHover lg:inline-flex items-center gap-1 hidden ">
          <SlLocationPin />
          <div className="text-sm">
            <p className="text-lightText">Deliver to</p>
            <p className="text-white font-bold uppercase">uae</p>
          </div>
        </div>
        {/* Search bar */}
        <div className="flex-1 hidden lg:inline-flex h-10 items-center justify-between relative">
          <span
            onClick={() => setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md"
          >
            All <span></span>
            <MdArrowDropDown />
          </span>
          {showAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll hideScrollBar overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50">
                {allItems.map((item) => (
                  <li
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                    key={item._id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            type="text"
            placeholder="search react_amazon products"
            className="w-full h-full px-2 placeholder:text-xs text-base text-black rounded-tr-md rounded-br-md border-[2px] border-transparent outline-none focus-visible:border-amazon_yellow"
          />
          <span className="w-12 h-full text-black text-2xl flex items-center justify-center rounded-tr-md rounded-br-md bg-amazon_yellow absolute right-0">
            <HiOutlineSearch />
          </span>
        </div>

        {/* Sign in */}
        <Link
          to={"/signin"}
          className="border border-transparent hover:border-white h-[70%] duration-300 cursor-pointer px-2 text-xs text-gray-100 flex flex-col justify-center"
        >
          <div>
            <p>Hello, sing in</p>
            <p className="flex items-center text-white font-bold">
              account & lists
            </p>
            <span>
              <BiCaretDown />
            </span>
          </div>
        </Link>
        {/* Favoraite */}
        <div className="headerHover hidden text-xs text-gray-100 md:flex flex-col justify-center">
          <p>Returns</p>
          <p className="flex items-center text-white font-bold">& Orders</p>
        </div>
        {/* Cart */}
        <Link
          to={"/cart"}
          className="border border-transparent hover:border-white px-2 flex items-center justify-center cursor-pointer duration-300 h-[70%] relative"
        >
          <img
            src={catrIcon}
            alt="catrIcon"
            className="w-auto h-8 object-cover"
          />
          <p className="text-xs text-white font-bold mt-3">Cart</p>
          <span className="text-sm font-semibold top-2 left-[29px] absolute text-amazon_yellow">
            {products.length > 0 ? products.length : 0}
          </span>
        </Link>
      </div>
      <BottomHeader />
    </header>
  );
};

export default Header;
