import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import KpiCard from "../components/dashboard/KpiCard";
import SalesChart from "../components/dashboard/SalesChart";
import DecisionPanel from "../components/dashboard/DecisionPanel";
import MarketShareChart from "../components/dashboard/MarketShareChart";
import Leaderboard from "../components/dashboard/Leaderboard";
import useGameStore from "../store/gameStore";

const Dashboard = () => {
  const cash = useGameStore((state) => state.cash);
  const profit = useGameStore((state) => state.profit);
  const sales = useGameStore((state) => state.sales);
  const demand = useGameStore((state) => state.demand);
  const { market } = useGameStore();

  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-10 space-y-10">
          {/* KPI SECTION */}

          <div className="grid grid-cols-4 gap-6">
            <KpiCard title="Cash Balance" value={`$${cash.toLocaleString()}`} />
            <KpiCard title="Profit" value={`$${profit.toLocaleString()}`} />
            <KpiCard title="Sales" value={sales.toLocaleString()} />
            <KpiCard title="Market Demand" value={demand.toLocaleString()} />
          </div>

          {/* MARKET EVENT */}

          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-1">Market Event</h3>

            <p className="text-xl font-bold">{market.event}</p>
          </div>

          {/* DECISION PANEL */}

          <div className="bg-white rounded-xl shadow-md p-6">
            <DecisionPanel />
          </div>

          {/* CHARTS */}

          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2 bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Sales Trend</h2>
              <SalesChart />
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Market Share</h2>
              <MarketShareChart />
            </div>
          </div>

          {/* LEADERBOARD */}

          <div className="bg-white rounded-xl shadow-md p-6">
            <Leaderboard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
