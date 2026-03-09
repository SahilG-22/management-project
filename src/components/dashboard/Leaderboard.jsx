import useGameStore from "../../store/gameStore";

const Leaderboard = () => {
  const leaderboard = useGameStore((state) => state.leaderboard);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Market Competition</h2>

      <table className="w-full text-sm border-collapse">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="text-left py-3 px-3">Company</th>
            <th className="py-3 px-3">Price</th>
            <th className="py-3 px-3">Marketing</th>
            <th className="py-3 px-3">Sales</th>
            <th className="py-3 px-3">Market Share</th>
          </tr>
        </thead>

        <tbody>
          {leaderboard.map((c, i) => (
            <tr key={i} className="hover:bg-gray-50 transition">
              <td className="py-3 px-3 border-b">{c.company}</td>

              <td className="py-3 px-3 border-b text-center">${c.price}</td>

              <td className="py-3 px-3 border-b text-center">${c.marketing}</td>

              <td className="py-3 px-3 border-b text-center">{c.sales}</td>

              <td className="py-3 px-3 border-b text-center">{c.share}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
