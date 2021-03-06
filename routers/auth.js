const bcrypt = require("bcrypt");
const { Router } = require("express");
const { toJWT } = require("../auth/jwt");
const authMiddleware = require("../auth/middleware");
const User = require("../models/").user;
const Order = require("../models/").order;
const { SALT_ROUNDS } = require("../config/constants");
const Product = require("../models/").product;
const Image = require("../models/").image;
const Address = require("../models/").address;
const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({
      where: { email },
      include: [
        { model: Order, include: { model: Product, include: Image } },
        { model: Address },
      ],
    });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, ...user.dataValues });
  } catch (error) {
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    return res.status(400).send("Please provide an email, password and a name");
  }

  try {
    const newUser = await User.create({
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS),
      name,
    });

    delete newUser.dataValues["password"]; // don't send back the password hash

    const token = toJWT({ userId: newUser.id });

    res.status(201).json({ token, ...newUser.dataValues });
  } catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
      return res
        .status(400)
        .send({ message: "There is an existing account with this email" });
    }

    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

router.post("/profile", authMiddleware, async (req, res, next) => {
  try {
    const { company, address, city, zipcode, country, state, phone } = req.body;
    const userId = req.user.id;

    if (!userId) {
      return res
        .status(403)
        .send({ message: "You are not authorized to update this space" });
    }

    const newAddress = await Address.create({
      company: company,
      address: address,
      city: city,
      zipcode: zipcode,
      country: country,
      state: state,
      phone: phone,
      userId,
    });

    return res.status(200).send({
      message: "Address added",
      newAddress,
    });
  } catch (e) {
    console.error(e.message);
    next(e);
  }
});

router.delete("/profile/:addressId", authMiddleware, async (req, res, next) => {
  try {
    const { addressId } = req.params;
    const address = await Address.findByPk(addressId);
    if (!address) {
      return res.status(404).send("address not found");
    }
    await address.destroy();
    res.send({ message: "Address deleted!", addressId });
  } catch (e) {
    next(e);
  }
});

// The /me endpoint can be used to:
// - get the users email & name using only their token
// - checking if a token is (still) valid
router.get("/me", authMiddleware, async (req, res) => {
  const user = await User.findOne({
    where: { id: req.user.id },
    include: [
      { model: Order, include: { model: Product, include: Image } },
      { model: Address },
    ],
    // include: { model: Order, include: { model: Product, include: Image } },
    // include: { model: Order, include: [Product] },
  });
  // don't send back the password hash
  delete req.user.dataValues["password"];
  res.status(200).send({ ...req.user.dataValues, user });
});

module.exports = router;
