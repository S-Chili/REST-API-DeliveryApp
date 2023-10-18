const shops = require('../../models/shops');

const getItemById = async (req, res) => {
  const { shopId, itemId } = req.params;
  const item = await shops.getItemById(shopId, itemId);

  if (!item) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.json(item);
};

module.exports = getItemById;