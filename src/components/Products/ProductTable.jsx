import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const ProductData = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 59.99,
    stock: 143,
    sales: 1200
  },
  {
    id: 2,
    name: "Gaming Keyboard",
    category: "Electronics",
    price: 79.99,
    stock: 85,
    sales: 950
  },
  {
    id: 3,
    name: "Smartwatch",
    category: "Wearable Tech",
    price: 129.99,
    stock: 60,
    sales: 750
  },
  {
    id: 4,
    name: "Running Shoes",
    category: "Sportswear",
    price: 99.99,
    stock: 200,
    sales: 1340
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 45.99,
    stock: 120,
    sales: 890
  },
  {
    id: 6,
    name: "LED Desk Lamp",
    category: "Home & Living",
    price: 39.99,
    stock: 150,
    sales: 620
  },
  {
    id: 7,
    name: "Fitness Tracker",
    category: "Wearable Tech",
    price: 55.99,
    stock: 95,
    sales: 1020
  }
];
const ProductTable = () => {
  const [searchTerms, setSearchTerms] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(ProductData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerms(term);
    const filtred = ProductData.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term)
    );
    setFilteredProducts(filtred);
  };
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            onChange={handleSearch}
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wide">
                NAME
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wide">
                CATEGORY
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wide">
                PRICE
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wide">
                STOCKS
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wide">
                SALES
              </th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-400 uppercase tracking-wide">
                ACTIONS
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/033/662/051/small/cartoon-lofi-young-manga-style-girl-while-listening-to-music-in-the-rain-ai-generative-photo.jpg"
                    alt="Product"
                    className="size-10 rounded-full"
                  />
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 gap-2 items-center">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 gap-2 items-center">
                  {product.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 gap-2 items-center">
                  {product.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 gap-2 items-center">
                  {product.sales}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 gap-2 items-center">
                  <button className="text-indigo-400 hover:text-indigo-300 mr-2">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-500 hover:text-red-400 mr-2">
                    <Trash2 size={18} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};
export default ProductTable;
