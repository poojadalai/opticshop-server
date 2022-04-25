"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "5428 83",
          gender: "male",
          price: 343,
          form: "Oval",
          materialFrame: "Synthetic",
          materialLens: "Synthetic",
          lensColor: "gray",
          frameColor: "black",
          createdAt: new Date(),
          updatedAt: new Date(),
          brandId: 1,
        },
        {
          name: "5448 714/83",
          gender: "woman",
          price: 350,
          form: "Panto",
          materialFrame: "Acetate",
          materialLens: "Synthetic",
          lensColor: "brown havana",
          frameColor: "brown",
          createdAt: new Date(),
          updatedAt: new Date(),
          brandId: 1,
        },
        {
          name: "3409 c.888",
          gender: "woman",
          price: 350,
          form: "Panto",
          materialFrame: "Acetate",
          materialLens: "",
          lensColor: "",
          frameColor: "black",
          createdAt: new Date(),
          updatedAt: new Date(),
          brandId: 1,
        },
        {
          name: "3407-Q c.714",
          gender: "woman",
          price: 387,
          form: "Rectangular",
          materialFrame: "Acetaat",
          materialLens: "",
          lensColor: "",
          frameColor: "havana",
          createdAt: new Date(),
          updatedAt: new Date(),
          brandId: 1,
        },
        {
          name: "3407-Q c.714",
          gender: "woman",
          price: 422,
          form: "Square",
          materialFrame: "Synthetic",
          materialLens: "Synthetic",
          lensColor: "Brown",
          frameColor: "havana",
          createdAt: new Date(),
          updatedAt: new Date(),
          brandId: 1,
        },
        {
          name: "CH0013O 001",
          gender: "woman",
          price: 294,
          form: "Rectangular",
          materialFrame: "Acetate",
          materialLens: "",
          lensColor: "green",
          frameColor: "havana",
          createdAt: new Date(),
          updatedAt: new Date(),
          brandId: 2,
        },
        {
          name: "CH0013O 001",
          gender: "woman",
          price: 294,
          form: "Oval",
          materialFrame: "synthetic",
          materialLens: "",
          lensColor: "",
          frameColor: "Pink",
          createdAt: new Date(),
          updatedAt: new Date(),
          brandId: 2,
        },
        {
          name: "CH0047S 004",
          gender: "woman",
          price: 360,
          form: "Round",
          materialFrame: "Metal",
          materialLens: "Synthetic",
          lensColor: "brown",
          frameColor: "gold",
          createdAt: new Date(),
          updatedAt: new Date(),
          brandId: 2,
        },
        {
          name: "CH0077SK 002",
          gender: "woman",
          price: 360,
          form: "Square",
          materialFrame: "Metal",
          materialLens: "Synthetic",
          lensColor: "brown",
          frameColor: "Rose",
          createdAt: new Date(),
          updatedAt: new Date(),
          brandId: 2,
        },
        {
          name: "Believer DTX506-52 01",
          gender: "unisex",
          price: 850,
          form: "Round",
          materialFrame: "Titanium",
          materialLens: "",
          lensColor: "white",
          frameColor: "gold",
          createdAt: new Date(),
          updatedAt: new Date(),
          brandId: 3,
        },
        {
          name: "Flight 006 7806",
          gender: "man",
          price: 405,
          form: "Square",
          materialFrame: "Synthetic",
          materialLens: "Synthetic",
          lensColor: "Gray",
          frameColor: "gold",
          createdAt: new Date(),
          updatedAt: new Date(),
          brandId: 3,
        },
        {
          name: "GG1125OA 002",
          gender: "unisex",
          price: 355,
          form: "Square",
          materialFrame: "Metal",
          materialLens: "",
          lensColor: "black",
          frameColor: "gold",
          createdAt: new Date(),
          updatedAt: new Date(),
          brandId: 4,
        },
        {
          name: "GG1073SK 002",
          gender: "woman",
          price: 264,
          form: "Butterfly",
          materialFrame: "Acetate",
          materialLens: "Synthetic",
          lensColor: "Gray",
          frameColor: "Black",
          createdAt: new Date(),
          updatedAt: new Date(),
          brandId: 4,
        },
        {
          name: "3016 CLUBMASTER W0366",
          gender: "Unisex",
          price: 144,
          form: "Browline",
          materialFrame: "Metal",
          materialLens: "Mineral",
          lensColor: "G15 green",
          frameColor: "Havanna-gold",
          createdAt: new Date(),
          updatedAt: new Date(),
          brandId: 5,
        },
        {
          name: "1971 SQUARE 9149/3F",
          gender: "Unisex",
          price: 154,
          form: "Rectangular",
          materialFrame: "Metal",
          materialLens: "Mineral",
          lensColor: "Blue",
          frameColor: "Silver",
          createdAt: new Date(),
          updatedAt: new Date(),
          brandId: 5,
        },
        {
          name: "JASMIN TF943 01B",
          gender: "woman",
          price: 315,
          form: "Butterfly",
          materialFrame: "Synthetic",
          materialLens: "Synthetic",
          lensColor: "Gray",
          frameColor: "red",
          createdAt: new Date(),
          updatedAt: new Date(),
          brandId: 6,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};