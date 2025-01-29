import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { motion } from "framer-motion";

const salesData = [
  { name: "jul", sales: 3500 },
  { name: "aug", sales: 2000 },
  { name: "sep", sales: 3000 },
  { name: "oct", sales: 4000 },
  { name: "nov", sales: 7500 },
  { name: "dec", sales: 6000 },
  { name: "jan", sales: 7000 },
  { name: "feb", sales: 8000 },
  { name: "mar", sales: 9000 },
  { name: "apr", sales: 4500 },
  { name: "may", sales: 9000 },
  { name: "jun", sales: 1000 }
];

const SalesOverviewChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="bg-gray-800 bg-opacity-50 p-6 backdrop-blur-md overflow-hidden shadow-lg border border-gray-700"
      //   whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
    >
      <h2 className="text-lg font-medium text-gray-100"> Sales Overview</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                borderColor: "#4B5563"
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ fill: "#6366f1", strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, strokeWidth: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;
