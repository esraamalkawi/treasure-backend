const { Treasure } = require("../db/models");
const { User } = require("../db/models");

exports.fetchTreasure = async (treasureId, next) => {
  try {
    const treasure = await Treasure.findByPk(treasureId);
    return treasure;
  } catch (error) {
    next(error);
  }
};

exports.treasureCreat = async (req, res, next) => {
  try {
    // if (req.file) {
    //   req.body.image = `http://${req.get("host")}/${req.file.path}`;
    // }
    // console.log("here");
    // console.log(req.user);

    // req.body.userId = req.user.id;
    // console.log(req.user);
    const newTreasure = await Treasure.create(req.body);
    res.status(201).json(newTreasure);
  } catch (error) {
    next(error);
  }
};

exports.treasureList = async (req, res) => {
  try {
    const treasures = await Treasure.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.json(treasures);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
