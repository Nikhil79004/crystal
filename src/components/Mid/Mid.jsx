import React from 'react';

const Mid = () => {
  return (
    <div className="w-full p-4 bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500 bg-[length:300%_300%] animate-gradientMove">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left Section */}
        <div className="flex flex-col items-start w-full px-4 lg:px-10">
          <h3 className="text-2xl text-white">Welcome to</h3>
          <h1 className="text-4xl text-white">Pop Rock Crystal Shop!</h1>
          <p className="mt-4 text-sm text-left md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
            Libero rerum, porro deserunt dicta nostrum eos sit ducimus mollitia ipsam <br />
            illo, error, ipsa maxime asperiores vel animi. Suscipit alias iusto magni?
          </p>
          <div className="flex flex-wrap items-center p-4 mt-4 space-x-4 md:space-y-2">
            <button
              className="px-6 py-3 text-blue-500 bg-white border border-blue-800 rounded-full shadow-lg hover:bg-blue-400 hover:text-white"
              onClick={() => alert('Shop Now!')}
            >
              Shop Now
            </button>
            <button
              className="px-6 py-3 text-blue-500 bg-white border border-blue-800 rounded-full shadow-lg hover:bg-blue-400 hover:text-white"
              onClick={() => alert('About Us!')}
            >
              About Us
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center mt-10">
          <img
            className="w-full max-w-sm border border-white rounded-xl"
            src="https://tse4.mm.bing.net/th?id=OIP.ZTITedEnP2qvlUs8Om0CxwHaEo&pid=Api&P=0&h=180"
            alt="A peaceful scenery with a soothing aesthetic"
          />
          <button
            className="px-6 py-3 mt-4 text-blue-500 bg-white border border-blue-800 rounded-full shadow-lg hover:bg-blue-400 hover:text-white"
            onClick={() => alert('Click to view..!')}
          >
            Click here..!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mid;



