import { useEffect, useRef, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { MdAccountCircle } from "react-icons/md";
import SideNavContent from "./SideNavContent";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const BottomHeader = () => {
  const [sidebar, setSidebar] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSidebar(false);
      }
    });
  }, []);
  return (
    <div className="w-full h-10 px-4 flex items-center bg-amazon_light text-white">
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSidebar(true)}
          className="text-white flex items-center gap-1 border border-transparent px-2 hover:border-white cursor-pointer duration-300 h-8"
        >
          <LuMenu className="text-xl" /> All
        </li>
        <li className="bottomHeader">Customer Service</li>
        <li className="bottomHeader">Todays Deals</li>
        <li className="bottomHeader">Registry</li>
        <li className="bottomHeader">Gift Cards</li>
        <li className="bottomHeader">Sell</li>
        <li className="signOutHover">Sign Out</li>
      </ul>
      {sidebar && (
        <div className="w-full h-full  text-black fixed top-0 left-0  bg-amazon_blue bg-opacity-50">
          <div className="w-full h-full relative">
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              ref={ref}
              className="w-[80%] sml:w-[350px] h-full overflow-y-scroll hideScrollBar bg-white z-50 border border-black"
            >
              <div className="w-full bg-amazon_light py-2 text-white px-6  flex items-center gap-4">
                <MdAccountCircle />
                <h3 className="font-titleFont font-bold text-lg tracking-wide">
                  Hello, Sign In
                </h3>
              </div>
              <SideNavContent
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <SideNavContent
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards"
                two="Amazon Live"
                three="International Shop"
              />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Custmer Service"
                three="Contact Us"
              />
              <span
                onClick={() => setSidebar(false)}
                className="w-10 h-10 text-black flex items-center justify-center absolute top-0 left-[315px] sml:left-[355px] border bg-gray-50 rounded-sm hover:bg-red-500 hover:text-white cursor-pointer duration-200"
              >
                <IoClose />
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BottomHeader;
