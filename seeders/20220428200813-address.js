"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("addresses", [
      {
        company: "DKLV",
        address: "Oude Amersfoortseweg 86-A",
        city: "Hilversum",
        zipcode: "1213 AE ",
        country: "NL",
        state: "North Holland",
        phone: "+257474123",
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
        company: "DKLV",
        address: "Oude Amersfoortseweg 86-A",
        city: "Hilversum",
        zipcode: "1213 AE ",
        country: "NL",
        state: "North Holland",
        phone: "+257474123",
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
