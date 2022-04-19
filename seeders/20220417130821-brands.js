"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "brands",
      [
        {
          name: "Chanel",
          desc: "The Chanel frames are timeless, easy to combine and have a fit that suits many faces. All lenses are anti-reflective on the inside and several models are polarized.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Chloe",
          desc: "Chloé is chic, iconic and exudes femininity. A rich collection with oversized models, nude colours, sometimes a touch of western or a boho look. Chloé simply gives the feeling of freedom!",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dita",
          desc: "DITA has become an integral part of the worldwide fashion and optical world. Handmade in Japan using only the best materials; acetate, titanium and 18 carat gold. Precision, details, care and craftsmanship with love is what DITA radiates.  Have you become curious about more from Dita? In the store we present a larger range, both sunglasses and prescription glasses.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Gucci",
          desc: "The Italian brand; gucci! Whether you like striking or subtle glasses, you will find it all in the wide collection of Gucci. Gucci frames are often marked with the well-known GG logo. Are you curious about more from Gucci? In the store we present a larger range, both sunglasses and prescription glasses.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ray Ban",
          desc: "Ray-Ban sunglasses remain timeless, popular and iconic.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tom ford",
          desc: "Tom Ford sunglasses complete your outfit! The stylish Tom Ford sunglasses are available for men and women. Tom Ford is classic, elegant and fashionable at the same time",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("brands", null, {});
  },
};
