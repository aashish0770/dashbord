import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import StatCart from "../components/StatCart";
import { BarChart, ShoppingBag, Users, Zap } from "lucide-react";
import SalesOverviewChart from "../components/Home/SalesOverviewChart";
import CategoryDistrubutionChart from "../components/Home/CategoryDistrubutionChart";
import SalesChannelChart from "../components/Home/SalesChannelChart";

function HomePage() {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />
      <main className="max-w-7xl mx-auto px-4  py-6 lg:px-8 xl:px-12">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCart
            name="Total Sales"
            icon={Zap}
            value="$1234"
            color="#6366f1"
          />
          <StatCart
            name="New Users"
            icon={Users}
            value="1234"
            color="#*8B5CF6"
          />
          <StatCart
            name="Total Products"
            icon={ShoppingBag}
            value="1234"
            color="#EC4899"
          />
          <StatCart
            name="Conversion Rate"
            icon={BarChart}
            value="12.34%"
            color="#10B981"
          />
        </motion.div>

        {/* Charts */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <SalesOverviewChart />
          <CategoryDistrubutionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
}

export default HomePage;
