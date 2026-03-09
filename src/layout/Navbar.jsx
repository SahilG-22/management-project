import useGameStore from "../store/gameStore"

const Navbar = () => {

  const nextTurn = useGameStore((state) => state.nextTurn)
  const round = useGameStore((state) => state.currentRound)

  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-10">

      <h1 className="text-lg font-semibold">
        Simulation Round {round}
      </h1>

      <button
        onClick={nextTurn}
        className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
      >
        Run Simulation
      </button>

    </div>
  )
}

export default Navbar