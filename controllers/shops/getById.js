const shops = require('../../models/shops');
const {RequestError} = require('../../helpers')

const getById = async (req, res) => {
    const { shopId } = req.params;
  const result = await shops.getShopsById(shopId);
  if (!result) {
    throw RequestError(404, "Not found")
  }
  res.json(result);
}



module.exports = getById;
