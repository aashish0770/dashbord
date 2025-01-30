import React from "react";
import { motion } from "framer-motion";

import Header from "../components/Header";
import { AlertTriangle, Package, TrendingUp, BarChart } from "lucide-react";
import StatCart from "../components/StatCart";
import ProductTable from "../components/Products/ProductTable";
import CategoryDistrubutionChart from "../components/Home/CategoryDistrubutionChart";
import SalesTrendChart from "../components/Products/SalesTrendChart";

const ProductPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />
      <main className="max-w-7xl mx-auto px-4  py-6 lg:px-8 xl:px-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCart
            name="Total Products"
            icon={Package}
            value={1234}
            color="#6366f1"
          />
          <StatCart
            name="Top Selling"
            icon={TrendingUp}
            value={89}
            color="#*8B5CF6"
          />
          <StatCart
            name="Low Stock"
            icon={AlertTriangle}
            value={23}
            color="#EC4899"
          />
          <StatCart
            name="Total Revenue"
            icon={BarChart}
            value={"$560,789"}
            color="#10B981"
          />
        </motion.div>

        <ProductTable />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SalesTrendChart />
          <CategoryDistrubutionChart />
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
