import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoMdHeart, IoMdStar } from "react-icons/io";
import { MdOutlineApi } from "react-icons/md";
import { TbShoppingCartFilled } from "react-icons/tb";
import { addToCart } from "../../redux/amazonSlice";

const Products = () => {
  const despatch = useDispatch();
  const data = useLoaderData();
  const productData = data.data;
  return (
    <div className="max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-4 mx-auto">
      {productData.map((item) => (
        <div key={item.id} className="productCard group">
          <span className="absolute bg-transparent px-2 py-1 rounded-full g group-hover:bg-amazon_yellow group-hover:text-amazon_blue group-hover:animate-bounce top-2 right-2 text-xs capitalize italic text-gray-500">
            {item.category}
          </span>
          <div className="w-full h-auto flex items-center justify-center relative group">
            <img
              src={item.image}
              alt="product-img"
              className="w-52 h-64 object-contain"
            />
            <ul className="absolute w-full h-36 bg-gray-100 -bottom-[157px] font-titleFont px-2 flex flex-col items-end justify-center gap-2 group-hover:bottom-0  duration-700 border-r border-l ">
              <li className="productLi">
                Compare
                <span className="text-lg">
                  <MdOutlineApi />
                </span>
              </li>
              <li className="productLi">
                Add to Cart
                <span className="text-lg">
                  <TbShoppingCartFilled />
                </span>
              </li>
              <li className="productLi">
                View Detailes
                <span className="text-lg">
                  <FaArrowCircleRight />
                </span>
              </li>
              <li className="productLi">
                Add to Wishlist
                <span className="text-lg">
                  <IoMdHeart />
                </span>
              </li>
            </ul>
          </div>
          <div className="px-4 z-20 bg-white">
            <div className="flex items-center justify-between">
              <h2 className="font-titleFont font-medium tracking-wide text-lg text-amazon_blue">
                {item.title.substring(0, 20)}
              </h2>
              <p className="text-sm text-gray-600 font-semibold">
                $ {item.price}
              </p>
            </div>
            <div className="">
              <p className="text-sm text-amazon_light">
                {item.description.substring(0, 90)}...
              </p>
              <div className="text-yellow-500 flex items-center text-lg mt-1">
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
                <IoMdStar />
              </div>
            </div>
            <button
              className="button"
              onClick={() =>
                despatch(
                  addToCart({
                    id: item.id,
                    image: item.image,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    category: item.category,
                    quantity: 1,
                  })
                )
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
