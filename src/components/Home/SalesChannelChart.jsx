import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  ResponsiveContainer,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell
} from "recharts";

const COLORS = ["#6366f1", "#8CB5F6", "#8B5CF6", "#EC4899", "#10B981"];

const SalesChannelData = [
  { name: "Web", value: 45600 },
  { name: "Mobile", value: 34500 },
  { name: "Tablet", value: 29800 },
  { name: "Desktop", value: 98700 },
  { name: "Other", value: 54000 }
];
const SalesChannelChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 p-6 backdrop-blur-md shadow-lg border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-lg font-medium text-gray-100">Sales by Channel</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={SalesChannelData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                borderColor: "#4B5563"
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Legend />
            <Bar dataKey="value" fill="#8884d8">
              {SalesChannelData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
export default SalesChannelChart;
