"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("addresses", [
      {
        company: "ABCD",
        address: "Naritaveg 86-A",
        city: "Amstelveen",
        zipcode: "1213 BE ",
        country: "NL",
        state: "North Holland",
        phone: "+259298933",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company: "SHKHSVKJD",
        address: "Cyclamenstraat 31",
        city: "Aalsmeer",
        zipcode: "1431 RZ ",
        country: "NL",
        state: "North Holland",
        phone: "+424264267",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company: "ABCD",
        address: "ABCDSCyclamenstraat 1",
        city: "Schipol",
        zipcode: "1111 RZ ",
        country: "NL",
        state: "North Holland",
        phone: "+424264267",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company: "XYZD",
        address: "ABCDSCyclamenstraat 1",
        city: "Schipol",
        zipcode: "1111 RZ ",
        country: "NL",
        state: "North Holland",
        phone: "+424264267",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company: "TTTS",
        address: "ValkanKamp 212",
        city: "Utrecht",
        zipcode: "1212 GD ",
        country: "NL",
        state: "North Holland",
        phone: "+2523323",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        company: "SHKHSVKJD",
        address: "Cyclamenstraat 31",
        city: "Aalsmeer",
        zipcode: "1431 RZ ",
        country: "NL",
        state: "North Holland",
        phone: "+424264267",
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("addresses", null, {});
  },
};
