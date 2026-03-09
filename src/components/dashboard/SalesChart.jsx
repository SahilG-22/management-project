import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts"

import useGameStore from "../../store/gameStore"

const SalesChart = () => {

  const salesHistory = useGameStore((state) => state.salesHistory)

  return (
    <div className="bg-white shadow rounded-lg p-6">

      <h3 className="text-lg font-semibold mb-4">
        Sales Trend
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={salesHistory}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="round" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="sales"
            stroke="#000"
            strokeWidth={3}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}

export default SalesChart