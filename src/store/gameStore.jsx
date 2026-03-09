import { create } from "zustand";

const useGameStore = create((set, get) => ({
  // PLAYER STATE

  currentRound: 1,
  cash: 1000000,

  price: 100,
  marketing: 50000,

  demand: 0,
  sales: 0,
  profit: 0,

  market: {
    growth: 1,
    consumerWealth: 1,
    trend: 1,
    event: "Normal market conditions",
  },

  marketShare: 0,
  leaderboard: [],

  // HISTORY FOR CHARTS

  salesHistory: [],

  // COMPETITORS

  competitors: [
    { name: "Alpha Corp", price: 105, marketing: 40000 },
    { name: "Beta Inc", price: 110, marketing: 35000 },
    { name: "NovaTech", price: 95, marketing: 45000 },
  ],

  // PLAYER DECISIONS

  setPrice: (value) => set({ price: value }),

  setMarketing: (value) => set({ marketing: value }),

  // MAIN SIMULATION ENGINE

  nextTurn: () => {
    const { price, marketing, competitors, salesHistory, currentRound, cash } =
      get();

    // -----------------------------------
    // COMPETITOR AI DECISIONS
    // -----------------------------------

    const updatedCompetitors = competitors.map((c) => {
      const priceChange = Math.floor(Math.random() * 10 - 5);
      const marketingChange = Math.floor(Math.random() * 10000 - 5000);

      return {
        ...c,
        price: Math.max(70, c.price + priceChange),
        marketing: Math.max(10000, c.marketing + marketingChange),
      };
    });

    // MARKET EVENTS

    const events = [
      { text: "Economic Boom 📈", growth: 1.3, wealth: 1.2 },
      { text: "Consumer Spending Surge 💰", growth: 1.1, wealth: 1.3 },
      { text: "Tech Product Trend 🔥", growth: 1.2, wealth: 1 },
      { text: "Stable Market", growth: 1, wealth: 1 },
      { text: "Economic Slowdown 📉", growth: 0.85, wealth: 0.9 },
      { text: "Recession Warning ⚠️", growth: 0.7, wealth: 0.8 },
    ];

    const randomEvent = events[Math.floor(Math.random() * events.length)];

    // -----------------------------------
    // DEMAND CALCULATION
    // -----------------------------------

    const baseDemand = 50000 * randomEvent.growth * randomEvent.wealth;

    const playerDemand = baseDemand + (120 - price) * 120 + marketing * 0.15;

    const competitorDemand = updatedCompetitors.map((c) => {
      return baseDemand + (120 - c.price) * 120 + c.marketing * 0.15;
    });

    // -----------------------------------
    // MARKET SHARE
    // -----------------------------------

    const totalDemand =
      playerDemand + competitorDemand.reduce((a, b) => a + b, 0);

    const playerShare = playerDemand / totalDemand;

    // -----------------------------------
    // SALES
    // -----------------------------------

    const marketSize = 40000;

    const sales = playerShare * marketSize;

    const playerMarketShare = playerShare * 100;
    const competitorSales = competitorDemand.map((d) => {
      return (d / totalDemand) * marketSize;
    });

    // -----------------------------------
    // FINANCIALS
    // -----------------------------------

    const revenue = sales * price;

    const productionCost = sales * 50;

    const cost = productionCost + marketing;

    const profit = revenue - cost;

    // -----------------------------------
    // SALES HISTORY FOR CHART
    // -----------------------------------

    const newHistory = [
      ...salesHistory,
      {
        round: currentRound,
        sales: Math.round(sales),
      },
    ];

    const leaderboard = [
      {
        company: "Your Company",
        price: price,
        marketing: marketing,
        sales: Math.round(sales),
        share: playerMarketShare.toFixed(1),
      },
    ];

    updatedCompetitors.forEach((c, index) => {
      leaderboard.push({
        company: c.name,
        price: c.price,
        marketing: c.marketing,
        sales: Math.round(competitorSales[index]),
        share: ((competitorDemand[index] / totalDemand) * 100).toFixed(1),
      });
    });

    // -----------------------------------
    // UPDATE STATE
    // -----------------------------------

    set({
      demand: Math.round(playerDemand),

      sales: Math.round(sales),

      profit: Math.round(profit),

      cash: Math.round(cash + profit),

      salesHistory: newHistory,

      competitors: updatedCompetitors,

      currentRound: currentRound + 1,

      marketShare: playerMarketShare,

      leaderboard: leaderboard,

      market: {
        growth: randomEvent.growth,
        consumerWealth: randomEvent.wealth,
        trend: 1,
        event: randomEvent.text,
      },
    });
  },
}));

export default useGameStore;
