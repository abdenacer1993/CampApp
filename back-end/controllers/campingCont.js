const { populate } = require("../models/Camping");

module.exports.addCamping= async function (req, res) {
  console.log(req.file)
  const url = `${req.protocol}://${req.get('host')}`;
  console.log(req.file);
  const { file } = req;

    try {
      const existCamping = await Camping.findOne({ place: req.body.place });
      if (existCamping) {
        res.status(400).send({ msg: "Camping exist" });
      } else {
        const newCamping = new Camping({
          ...req.body,user:req.user._id
        });
    newCamping.pic = `${url}/${file.path}`;

        await newCamping.save();
        res.send({ msg: "Camping added" });
      }
    } catch (error) {
      console.log(error); 
    }
  }

  exports.getALL=async function (req, res) {
    // console.log(req.query.price)
    try {
      // const price = req.query.price || 0
      const allCamping = await Camping.find({
        //$and: [
          //{ price: { $gte: req.query.price || 0 } },
          //{ name: { $regex: req.query.name || "" } },
        //],
      }).populate("user","fullName");
      res.send({ allCamping });
    } catch (error) {
      console.log(error);
    }
  }