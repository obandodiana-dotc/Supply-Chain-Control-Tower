/* =======================================================
   SUPPLYCHAIN INTELLIGENCE – GLOBAL DATASET
   Shared across all pages
   ======================================================= */

/* ============================
   INVENTORY SKUs (12 products)
   ============================ */

const SKUs = [
  {
    id: "SKU-001",
    name: "Temperature Sensor Pro",
    demandAnnual: 12000,
    unitCost: 4.50,
    orderCost: 150,
    holdingRate: 0.25,
    leadTime: 12,
    demandStd: 5,
    category: "Electronics"
  },
  {
    id: "SKU-002",
    name: "Battery Pack XT",
    demandAnnual: 8000,
    unitCost: 6.00,
    orderCost: 180,
    holdingRate: 0.23,
    leadTime: 8,
    demandStd: 4,
    category: "Electronics"
  },
  {
    id: "SKU-003",
    name: "Smart Display Panel",
    demandAnnual: 4500,
    unitCost: 15.00,
    orderCost: 220,
    holdingRate: 0.27,
    leadTime: 10,
    demandStd: 7,
    category: "Electronics"
  },
  {
    id: "SKU-004",
    name: "Industrial Motor Gear",
    demandAnnual: 2900,
    unitCost: 40.00,
    orderCost: 300,
    holdingRate: 0.20,
    leadTime: 18,
    demandStd: 3,
    category: "Mechanical"
  },
  {
    id: "SKU-005",
    name: "Precision Bolt Set",
    demandAnnual: 18000,
    unitCost: 0.90,
    orderCost: 90,
    holdingRate: 0.30,
    leadTime: 4,
    demandStd: 10,
    category: "Mechanical"
  },
  {
    id: "SKU-006",
    name: "Thermal Paste Ultra",
    demandAnnual: 6000,
    unitCost: 3.50,
    orderCost: 110,
    holdingRate: 0.18,
    leadTime: 6,
    demandStd: 6,
    category: "Electronics"
  },
  {
    id: "SKU-007",
    name: "High-Speed Bearing",
    demandAnnual: 3200,
    unitCost: 12.00,
    orderCost: 200,
    holdingRate: 0.25,
    leadTime: 14,
    demandStd: 3,
    category: "Mechanical"
  },
  {
    id: "SKU-008",
    name: "Cooling Fan Module",
    demandAnnual: 9500,
    unitCost: 8.00,
    orderCost: 140,
    holdingRate: 0.22,
    leadTime: 9,
    demandStd: 5,
    category: "Electronics"
  },
  {
    id: "SKU-009",
    name: "Plastic Housing Frame",
    demandAnnual: 5000,
    unitCost: 2.20,
    orderCost: 100,
    holdingRate: 0.26,
    leadTime: 5,
    demandStd: 8,
    category: "Plastic"
  },
  {
    id: "SKU-010",
    name: "Metal Chassis Support",
    demandAnnual: 4200,
    unitCost: 18.00,
    orderCost: 250,
    holdingRate: 0.21,
    leadTime: 15,
    demandStd: 4,
    category: "Metal"
  },
  {
    id: "SKU-011",
    name: "Optical Sensor Core",
    demandAnnual: 1500,
    unitCost: 60.00,
    orderCost: 350,
    holdingRate: 0.19,
    leadTime: 20,
    demandStd: 2,
    category: "Optical"
  },
  {
    id: "SKU-012",
    name: "Cable Harness Kit",
    demandAnnual: 11000,
    unitCost: 1.20,
    orderCost: 80,
    holdingRate: 0.33,
    leadTime: 7,
    demandStd: 9,
    category: "Electrical"
  }
];


/* ==============================================
   LOGISTICS NETWORK – Nodes & Operational Risk
   ============================================== */

const NetworkNodes = {
  supplier: {
    name: "Global Supplier Hub",
    risk: 0.30,
    leadTimeRisk: 0.25,
    qualityRisk: 0.18,
    status: "medium"
  },

  factory: {
    name: "Manufacturing Plant Europe",
    risk: 0.55,
    capacityRisk: 0.60,
    downtimeRisk: 0.35,
    status: "high"
  },

  dc: {
    name: "Central Distribution Center",
    risk: 0.42,
    storageRisk: 0.30,
    handlingRisk: 0.22,
    status: "medium"
  },

  store: {
    name: "Retail Store Cluster",
    risk: 0.25,
    stockoutRisk: 0.40,
    variabilityRisk: 0.20,
    status: "low"
  }
};


/* =====================================
   DEMAND SIMULATION – Default Params
   ===================================== */

const SimulationDefaults = {
  initialInventory: 500,
  dailyMean: 40,
  dailyStd: 10,
  leadTime: 7,
  reorderPoint: 180,
  orderQty: 300
};


/* ============================
   ABC CLUSTERING THRESHOLDS
   ============================ */

const ABC_thresholds = {
  A: 0.80,
  B: 0.95
};
