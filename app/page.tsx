import Link from "next/link";
import products from "../products.js";
import Header from "../components/header.jsx";
import stockPriceData from "../stock-price.js";

export default function Home() {
  const productsWithPrice = products.map((product) => {
    const skuCode = product.skus[0].code;
    const price = stockPriceData[skuCode].price;
    return { ...product, priceInCents: price };
  });

  return (
    <div>
      <div className="2xl:container 2xl:mx-auto">
        <div className="bg-gray-50 text-center lg:py-10 md:py-8 py-6">
          <p className="w-10/12 mx-auto md:w-full font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-gray-800">
            <Header />
          </p>
        </div>
        <div className="py-6 lg:px-20 md:px-6 px-4">
          <hr className="w-full bg-gray-200 my-6" />

          <div className="flex justify-between items-center">
            <div className="flex space-x-3 justify-center items-center">
              <svg
                className="cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 7.5H20.25"
                  stroke="#1F2937"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M3.75 12H20.25"
                  stroke="#1F2937"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M3.75 16.5H20.25"
                  stroke="#1F2937"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
              </svg>
              <p className="font-normal text-base leading-4 text-gray-800">
                Filter
              </p>
            </div>
            <p className="cursor-pointer hover:underline duration-100 font-normal text-base leading-4 text-gray-600">
              Showing {products.length} products
            </p>
          </div>

          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
            {productsWithPrice.map((product) => (
              <Link
                key={product.id}
                href={`/${product.id}-${product.brand
                  .replace(/\s/g, "-")
                  .toLowerCase()}`}
              >
                <div className="relative">
                  <div className="relative group max-h-96">
                    <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                    <img
                      className="w-full max-h-96 object-contain"
                      src={product.image}
                      alt={product.brand}
                    />
                    <div className="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
                      <button className="font-medium text-base leading-4 text-gray-800 bg-white py-3 w-full">
                        Add to bag
                      </button>
                      <button className="bg-transparent font-medium text-base leading-4 border-2 border-white py-3 w-full mt-2 text-white">
                        Quick View
                      </button>
                    </div>
                  </div>
                  <p className="font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">
                    {product.brand}
                  </p>
                  <p className="font-semibold text-xl leading-5 text-gray-800 mt-4">
                    ${(product.priceInCents / 100).toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <button className="hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 py-5 md:px-16 md:w-auto w-full lg:mt-28 md:mt-12 mt-10 text-white font-medium text-base leading-4">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
