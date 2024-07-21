import { footerBottomItem } from "../../constants";

const FooterBottom = () => {
  return (
    <div className="w-full bg-footerBottom py-8">
      <div className="max-w-5xl mx-auto">
        <div className="w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 place-content-center px-8 xl:px-0 text-gray-400">
          {footerBottomItem.map((item) => (
            <div className="group cursor-pointer" key={item._id}>
              <h3 className="w-24 font-semibold text-[12px] group-hover:underline text-[#DDD] leading-3 mb-[2px]">
                {item.title}
              </h3>
              <p className="w-24 tracking-tight text-[12px] text-[#999] group-hover:underline leading-3">
                {item.des}
              </p>
            </div>
          ))}
        </div>
        <div className="mx-auto pt-10 flex flex-col items-center justify-center gap-2 text-xs text-zinc-200">
          <div className="flex items-center gap-6">
            <p className=" hover:underline  underline-offset-1 duration-100">
              Conditions of Use
            </p>
            <p className=" hover:underline  underline-offset-1 duration-100">
              Privacy Notice
            </p>
            <p className=" hover:underline  underline-offset-1 duration-100">
              Consumer Health Data Privacy Disclosure
            </p>
            <p className=" hover:underline  underline-offset-1 duration-100">
              Your Ads Privacy Choices
            </p>
          </div>
          <p className="">© 1996-2024, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
