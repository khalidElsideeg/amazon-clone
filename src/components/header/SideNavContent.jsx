import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const SideNavContent = ({ title, one, two, three }) => {
  return (
    <div className="border-b-[1px] border-gray-300 py-3">
      <h3 className="font-titleFont font-semibold text-lg mb-1 px-6">
        {title}
      </h3>
      <ul className="text-sm">
        <li className=" flex items-center justify-between cursor-pointer px-6 py-2">
          {one}
          <sppan>
            <MdOutlineKeyboardArrowRight />
          </sppan>
        </li>
        <li className=" flex items-center justify-between cursor-pointer px-6 py-2">
          {two}
          <sppan>
            <MdOutlineKeyboardArrowRight />
          </sppan>
        </li>
        <li className="flex items-center justify-between cursor-pointer px-6 py-2">
          {three}
          <sppan>
            <MdOutlineKeyboardArrowRight />
          </sppan>
        </li>
      </ul>
    </div>
  );
};

export default SideNavContent;
