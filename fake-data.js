const crypto = require("crypto");

const products = [
    "Trash bags",
    "Meal prep containers",
    "Garage opener",
    "Catnip toy",
    "Phone case",
    "Tool kit",
    "Lint roller",
    "Sous vide",
    "Desk plant",
    "Banana",
    "Toothbrush",
    "Leggings",
    "Guitar picks",
    "Bookshelf",
    "Vitamin C",
    "Purification tablets",
    "Portable SSD",
    "Vacuum cleaner",
    "House numbers",
    "Dish soap",
    "Seat covers",
    "Floor mats",
    "Rain barrel",
    "Paper towels",
    "USB-C cable",
    "Medicine organizer",
    "Honey jar",
    "Face masks",
    "Camping stove",
    "Ice skates",
    "Door stopper",
    "Shower caddy",
    "Memory card reader",
    "Dark chocolate",
    "Neck wallet",
    "Network switch",
    "Meditation cushion",
    "External hard drive",
    "Sriracha",
    "Instant pot",
    "Power strip",
    "Bar stool",
    "Outdoor string lights",
    "Bamboo steamer",
    "Crampons",
    "Bird feeder",
    "Mustard",
    "Chew bones",
    "Surge protector",
    "Winter jacket",
    "Bath mat",
    "Samsung Galaxy S24",
    "Baby monitor",
    "Hole punch",
    "Plastic wrap",
    "Peanut butter",
    "Thermometer",
    "Gimbal stabilizer",
    "Cycling gloves",
    "Fence paint",
    "Mango",
    "Bird bath",
    "Windshield wipers",
    "Sunglasses",
    "Thermal socks",
    "Lens cloth",
    "Beach towel",
    "Hamster wheel",
    "Cooling fan",
    "Lemon",
    "Batteries AA",
    "Body lotion",
    "Nail clipper",
    "Shoe polish",
    "Standing desk converter",
    "Hoodie",
    "Apple",
    "Recycling bags",
    "Balaclava",
    "Grooming brush",
    "Garden gloves",
    "Nightstand",
    "Ranch dressing",
    "Scissors set",
    "BBQ tongs",
    "Essential oil diffuser",
    "Ring light",
    "Pull-up bar",
    "Medicine cabinet",
    "Rolling pin",
    "Dumbbell set",
    "Motor oil",
    "Kiwi",
    "Shower curtain",
    "Glass cleaner",
    "Salt grinder",
    "Vinaigrette",
    "Ethernet cable",
    "Curling iron",
    "Air freshener",
];

const TOTAL_TRANSACTIONS = 1800;

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

function randomPastIsoDate(seed) {
  const now = Date.now();
  const start = new Date("2025-01-01T00:00:00.000Z").getTime();
  const timestamp = start + seededRandom(seed) * (now - start);
  return new Date(timestamp).toISOString();
}

function makeTransactionId(productName, transactionDate, index) {
  return crypto
    .createHash("sha256")
    .update(`${productName}${transactionDate}${index}`)
    .digest("base64")
    .replace(/[^a-zA-Z0-9]/g, "")
    .slice(0, 10);
}

function buildTransactions() {
  const transactions = [];
  for (let i = 0; i < TOTAL_TRANSACTIONS; i++) {
    const productName = products[Math.floor(seededRandom(i * 3) * products.length)];
    const transactionDate = randomPastIsoDate(i * 7 + 1);
    transactions.push({
      id: makeTransactionId(productName, transactionDate, i),
      productName,
      transactionDate,
      price: Math.round((1 + seededRandom(i * 11 + 2) * 999) * 100) / 100,
    });
  }
  return transactions;
}

const transactions = buildTransactions();

module.exports = { products, transactions, TOTAL_TRANSACTIONS };
