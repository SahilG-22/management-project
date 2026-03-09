import useGameStore from "../../store/gameStore";

const DecisionPanel = () => {
  const price = useGameStore((state) => state.price);
  const marketing = useGameStore((state) => state.marketing);

  const setPrice = useGameStore((state) => state.setPrice);
  const setMarketing = useGameStore((state) => state.setMarketing);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Business Controls</h2>

      <div className="grid grid-cols-2 gap-8">
        {/* PRICE */}

        <div className="bg-gray-50 p-5 rounded-lg border">
          <div className="flex justify-between mb-3">
            <p className="text-gray-600 font-medium">Product Price</p>

            <p className="font-bold">${price}</p>
          </div>

          <input
            type="range"
            min="50"
            max="200"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full accent-indigo-600"
          />
        </div>

        {/* MARKETING */}

        <div className="bg-gray-50 p-5 rounded-lg border">
          <div className="flex justify-between mb-3">
            <p className="text-gray-600 font-medium">Marketing Budget</p>

            <p className="font-bold">${marketing.toLocaleString()}</p>
          </div>

          <input
            type="range"
            min="0"
            max="100000"
            step="5000"
            value={marketing}
            onChange={(e) => setMarketing(Number(e.target.value))}
            className="w-full accent-purple-600"
          />
        </div>
      </div>
    </div>
  );
};

export default DecisionPanel;
