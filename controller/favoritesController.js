const Favorites = require("../model/favoritesModel");

const favorites = async (req, res) => {
  try {
    const userId = req.user._id;
    const turfId = req.params.id;
    console.log(turfId);
    const favorite = await Favorites.create({
      userId,
      turfId,
    });
    res.status(200).json({ favorite });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getFavorites = async (req, res) => {
  try {
    const userId = req.user._id;

    const favorite = await Favorites.find({
      userId,
    });
    res.status(200).json({ favorite });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { favorites, getFavorites };
