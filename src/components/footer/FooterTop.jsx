const FooterTop = () => {
  return (
    <div className="w-full bg-white py-6">
      <div className="w-full border-y-[1px] py-8">
        <div className="w-64 text-center mx-auto flex flex-col gap-1">
          <p className="text-sm">See personalised recommendations</p>
          <button className="w-full bg-yellow-400 py-1 rounded-md font-semibold hover:bg-yellow-500 active:bg-yellow-700 cursor-pointer">
            Sign In
          </button>
          <p className="text-xs ml-1">
            New Customer?
            <span className="text-blue-600 cursor-pointer ml-1">
              Start Here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
