const shops = require('../../models/shops');
const {RequestError} = require('../../helpers')

const getItemById = async (req, res) => {
  const { shopId, itemId } = req.params;
  const item = await shops.getItemById(shopId, itemId);

  if (!item) {
    throw RequestError(404);
  }

  res.json(item);
};

module.exports = getItemById;