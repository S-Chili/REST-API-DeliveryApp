const shops = require('../../models/shops');

const getAll = async (req, res) => {
    const result = await shops.listShops();
    res.json(result)
}



module.exports = getAll;