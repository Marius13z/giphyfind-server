import GifModel from "../models/gifs.js";
import SearchModel from "../models/search.js";

export const getFavoriteGifs = async (req, res) => {
  const { id } = req.params;

  try {
    const gif = await GifModel.find({ userId: id });

    res.status(200).json(gif);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const saveFavoriteGifs = async (req, res) => {
  const gif = req.body;

  const existingGif = await GifModel.find({
    $and: [{ userId: gif.userId }, { title: gif.title }],
  });

  try {
    if (existingGif.length <= 0) {
      const newGif = new GifModel(gif);

      await newGif.save();

      res.status(200).json(newGif);
    } else if (existingGif.length >= 1) {
      await GifModel.deleteOne({
        $and: [{ userId: gif.userId }, { title: gif.title }],
      });
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const saveSearch = async (req, res) => {
  const search = req.body;

  const newSearch = new SearchModel(search);

  try {
    await newSearch.save();

    res.status(200).json(newSearch);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
