const { Router } = require("express");
const Product = require("../models").product;
const auth = require("../auth/middleware");
const Brand = require("../models").brand;
const Images = require("../models").image;

const router = new Router();

//get rproducts by brand
router.get("/:id", async (req, res, next) => {
  try {
    const brandId = req.params.id;
    const response = await Brand.findByPk(brandId, {
      include: { all: true },
      // order: [[Bid, "createdAt", "ASC"]],
    });
    if (response) {
      res.json(response);
    } else {
      res.status(404).send("Brand not found");
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
