const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const OrderProduct = require("../models").orderProduct;
const User = require("../models").user;
const Order = require("../models").order;
const Product = require("../models").product;
const router = new Router();

//create new order
router.post("/", authMiddleware, async (req, res, next) => {
  try {
    const {
      cart,
      name,
      company,
      address,
      city,
      zipcode,
      country,
      state,
      phone,
    } = req.body;
    const userId = req.user.id;
    const userModel = await User.findByPk(userId);

    if (!userModel.userId === req.user.id) {
      return res
        .status(403)
        .send({ message: "You are not authorized to update this space" });
    }
    const newOrder = await Order.create({
      userId,
      status: "completed",
    });

    const addData = await userModel.update({
      name: name,
      company: company,
      address: address,
      city: city,
      zipcode: zipcode,
      country: country,
      state: state,
      phone: phone,
     
    });

    const arrayOfPromises = cart.map(async (item) => {
      const orderProduct = await OrderProduct.create({
        quantity: item.amount,
        orderId: newOrder.id,
        productId: item.id,
      });
      return orderProduct;
    });
    await Promise.all(arrayOfPromises);

    return res
      .status(200)
      .send({ message: "Thank you. Your order has been placed", newOrder });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
