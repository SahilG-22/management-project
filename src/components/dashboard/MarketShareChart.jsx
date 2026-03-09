import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts"

import useGameStore from "../../store/gameStore"

const COLORS = ["#000000", "#6b7280", "#9ca3af", "#d1d5db"]

const MarketShareChart = () => {

  const price = useGameStore((state) => state.price)
  const marketing = useGameStore((state) => state.marketing)
  const competitors = useGameStore((state) => state.competitors)

  const baseDemand = 50000

  const playerDemand =
    baseDemand +
    (120 - price) * 120 +
    marketing * 0.15

  const competitorDemand = competitors.map((c) => {
    return (
      baseDemand +
      (120 - c.price) * 120 +
      c.marketing * 0.15
    )
  })

  const totalDemand =
    playerDemand +
    competitorDemand.reduce((a, b) => a + b, 0)

  const data = [
    { name: "Your Company", value: playerDemand }
  ]

  competitors.forEach((c, index) => {
    data.push({
      name: c.name,
      value: competitorDemand[index]
    })
  })

  return (
    <div className="bg-white border rounded-xl p-6">

      <h3 className="text-lg font-semibold mb-4">
        Market Share
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>

          <Tooltip />

        </PieChart>
      </ResponsiveContainer>

    </div>
  )
}

export default MarketShareChart