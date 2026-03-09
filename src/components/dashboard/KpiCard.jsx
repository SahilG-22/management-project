import { DollarSign, TrendingUp, Package, BarChart3 } from "lucide-react";

const icons = {
  "Cash Balance": <DollarSign className="text-green-600" size={28} />,
  Profit: <TrendingUp className="text-blue-600" size={28} />,
  Sales: <Package className="text-purple-600" size={28} />,
  "Market Demand": <BarChart3 className="text-orange-500" size={28} />,
};

const KpiCard = ({ title, value }) => {
  return (
    <div className="bg-white rounded-xl shadow-md border p-6 flex items-center justify-between hover:shadow-lg transition">
      <div>
        <p className="text-gray-500 text-sm mb-1">{title}</p>

        <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
      </div>

      <div className="bg-gray-100 p-3 rounded-lg">{icons[title]}</div>
    </div>
  );
};

export default KpiCard;
