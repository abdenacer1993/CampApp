const express = require("express");
const Camping = require("../models/Camping");
const { addCamping, getALL } = require("../controllers/campingCont");
const isAuth = require("../middleweares/passport");
const router = express.Router();
const upload=require("../utils/multer")
router.post("/addCamping",upload("campings").single("file"),isAuth() , addCamping);

router.get("/camping", getALL);

//DELETE ONE PRODUCT

router.delete("/:id", async (req, res) => {
  try {
    const result = await Camping.deleteOne({ _id: req.params.id });
    if (!result.deletedCount) {
      return res.status(400).send({ msg: "Camp already deleted" });
    }
    res.send({ msg: "Camp successfully deleted" });
  } catch (error) {
    console.log(error);
  }
});

//UPDATE ONE PRODUCT
router.put("/:id", async (req, res) => {
  try {
    const result = await Camping.updateOne(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    if (!result.modifiedCount) 
    {return res.status(400).send({msg:"no things to update"});}
      res.send({msg:"camping update"})
  } catch (error) {
    console.log(error);
  }
});


router.get("/:id", async (req, res) => {
  try {
    const oneCamping = await Camping.findOne({ _id: req.params.id });
    res.send(oneCamping);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
