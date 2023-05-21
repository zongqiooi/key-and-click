import clientPromise from ".";

let client;
let db;
let products;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db("shop");
    products = await db.collection("items");
  } catch (err) {
    return { error: "Failed to fetch products!!!" };
  }
}

(async () => {
  await init();
})();

export async function getProducts() {
  try {
    if (!products) await init();

    const result = await products
      .find({})
      .map((user) => ({ ...user, _id: user._id.toString() }))
      .toArray();

    return { products: result };
  } catch (error) {
    return { error: "Failed to fetch products!" };
  }
}
