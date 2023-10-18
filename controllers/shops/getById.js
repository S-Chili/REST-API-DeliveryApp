const shops = require('../../models/shops');

const getById = async (req, res) => {
    const { shopId } = req.params;
  const result = await shops.getShopsById(shopId);
  if (!result) {
    console.log(Error);
  }
  res.json(result);
}



module.exports = getById;
