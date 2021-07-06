const passport = require("passport");
// const multer = require("multer");
const {
  treasureCreat,
  treasureList,
  fetchTreasure,
} = require("../controllers/treasureController");
const express = require("express");

const router = express.Router();

// const storage = multer.diskStorage({
//   destination: "./media",
//   filename: (req, file, cb) => {
//     cb(null, `${+new Date()}${file.originalname}`);
//   },
// });

// const upload = multer({
//   storage,
// });

router.param("treasureId", async (req, res, next, treasureId) => {
  const treasure = await fetchTreasure(treasureId, next);
  if (treasure) {
    req.treasure = treasure;

    next();
  } else {
    const err = new Error("treasure not found");
    err.status = 404;
    next(err);
  }
});

router.get("/", treasureList);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  //   upload.single("image"),
  treasureCreat
);

// router.delete("/:shopId", shopDelete);
// router.put("/:shopId", upload.single("image"), shopUpdate);
module.exports = router;
