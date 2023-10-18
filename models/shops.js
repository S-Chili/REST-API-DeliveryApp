const path = require("path");
const fs = require("fs/promises");

const shopsPath = path.join(__dirname, "./shops.json");

const listShops = async () => {
  const shops = await fs.readFile(shopsPath);
  return JSON.parse(shops);
};

const getShopsById = async (shopId) => {
  const shopsData = await listShops();
  for (const shop of shopsData.shops) {
    if (shop.id === shopId) {
      return shop;
    }
  }
  return null;
};

const getItemById = async (shopId, itemId) => {
  const shop = await getShopsById(shopId);
  const item = shop.items.find((item) => item.id === itemId);
  return item || null;
};

module.exports = {
  listShops,
  getShopsById,
  getItemById,
};