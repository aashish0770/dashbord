import { motion } from "framer-motion";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const categoryData = [
  { name: "Electronics", value: 4000 },
  { name: "Clothing", value: 3400 },
  { name: "Books", value: 3000 },
  { name: "Home and Garden", value: 2500 },
  { name: "Sports and Fitness", value: 2000 },
  { name: "Toys and Games", value: 1500 }
];

const COLORS = [
  "#6366f1",
  "#8CB5F6",
  "#8B5CF6",
  "#EC4899",
  "#10B981",
  "#F5F5F5",
  "#F3F4F6",
  "#E5E7EB"
];
const CategoryDistrubutionChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 p-6 backdrop-blur-md shadow-lg border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-lg font-medium text-gray-100">
        Category Distrubution
      </h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              labelLine={false}
              cx="50%"
              cy="50%"
              //   innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              label={({ name, percent }) =>
                `${name} ${(percent * 100).toFixed(2)}%`
              }
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563"
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default CategoryDistrubutionChart;
