import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BarChart2,
  DollarSign,
  MenuIcon,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
const SIDEBAR_ITEMS = [
  {
    name: "OverView",
    icon: BarChart2,
    color: "#6366f1",
    path: "/"
  },
  {
    name: "Products",
    icon: ShoppingBag,
    color: "#8B5CF6",
    path: "/products"
  },
  {
    name: "Users",
    icon: Users,
    color: "#EC4899",
    path: "/users"
  },
  {
    name: "Sales",
    icon: DollarSign,
    color: "#10B981",
    path: "/sales"
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    color: "#F59E0B",
    path: "/orders"
  },
  {
    name: "Analytics",
    icon: TrendingUp,
    color: "#3B82F6",
    path: "/analytics"
  },
  {
    name: "Settings",
    icon: Settings,
    color: "#6EE7B7",
    path: "/settings"
  }
];
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-srink- ${
        isSidebarOpen ? "w-72" : "w-20"
      }`}
      animate={{ width: isSidebarOpen ? 256 : 80 }}
    >
      <div className="h-full bg-gray-800 backdrop:blur-md p-4 flex flex-col border-r border-gray-700">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-4 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          <MenuIcon size={24} />
        </motion.button>
        <nav className="mt-8 flex-grow">
          {SIDEBAR_ITEMS.map((item, index) => (
            <Link key={item.path} to={item.path}>
              <motion.div className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                <item.icon
                  size={24}
                  style={{ color: item.color, minWidth: "24px" }}
                />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-4 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.2 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.div>
  );
};

export default Sidebar;
