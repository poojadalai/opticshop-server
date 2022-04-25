const { Router } = require("express");
const { user } = require("pg/lib/defaults");
const Product = require("../models").product;
const auth = require("../auth/middleware");
const Brand = require("../models").brand;
const Images = require("../models").image;

const router = new Router();

//get request to get all artworks
router.get("/", async (req, res, next) => {
  try {
    const response = await Product.findAll({ include: { all: true } });
    if (!response) {
      res.status(404).send("product not found!");
    } else {
      res.json(response);
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const productId = req.params.id;
    const response = await Product.findByPk(productId, {
      include: { all: true },
      // order: [[Bid, "createdAt", "ASC"]],
    });
    if (response) {
      res.json(response);
    } else {
      res.status(404).send("product not found");
    }
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

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
