"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "images",
      [
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/24B_650x.jpg?v=1613829702",
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/24A_650x.jpg?v=1613829702",
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/24C_650x.jpg?v=1613829702",
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/Chanel32B_650x.jpg?v=1617287273",
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/Chanel32C_650x.jpg?v=1617287273",
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/24C_650x.jpg?v=1613829702",
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/Chanel13A_650x.jpg?v=1637768336",
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/13B_fbf6f774-e5dd-408e-8324-f2fdbfb4bb0a_650x.jpg?v=1637768336",
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/13C_a552cd9e-3b2f-4b17-b609-e7073c4d7d31_650x.jpg?v=1637768336",
          productId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/Chanel13A_650x.jpg?v=1637768336",
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/13B_fbf6f774-e5dd-408e-8324-f2fdbfb4bb0a_650x.jpg?v=1637768336",
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/13C_a552cd9e-3b2f-4b17-b609-e7073c4d7d31_650x.jpg?v=1637768336",
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/17B_1770472c-52d0-4a66-8f8e-8bf24776d100_650x.jpg?v=1613828895",
          productId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/17A_40aa559b-2fa1-4d9e-bf2c-f556a077d6c5_650x.jpg?v=1613828895",
          productId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/17C_2ea5c3ac-788a-4cce-878a-152077b8d597_650x.jpg?v=1613828895",
          productId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/26A_74f25481-8397-4cb9-be5f-4eb82117ec13_650x.jpg?v=1636192131",
          productId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/26B_b3ef127d-ef57-4406-9acc-0ef6589ce46d_650x.jpg?v=1636192130",
          productId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/26C_5d0f4802-a39d-42ce-8113-c9bec1c8df59_650x.jpg?v=1636192131",
          productId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/20A_abc40582-9b6d-4e6e-8e35-44c498934c71_650x.jpg?v=1636190171",
          productId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/20B_af84d662-11b5-4a79-85af-55eedc2af5c8_650x.jpg?v=1636190171",
          productId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/20C_dadd669e-dfd6-464a-a35c-27e145c85f31_650x.jpg?v=1636190171",
          productId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/19B_3fd9786a-9912-4ade-914a-1f988d893543_650x.jpg?v=1614853472",
          productId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/19A_1ba25ebd-73ec-4383-a2f2-39c8502c0f5a_650x.jpg?v=1614853472",
          productId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/19C_89474a56-9412-4160-9e25-4774e5c22d45_650x.jpg?v=1614853258",
          productId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/Chloe002B_650x.jpg?v=1643282158",
          productId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/Cloe002A_650x.jpg?v=1643282157",
          productId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/Cloe002C_650x.jpg?v=1643282158",
          productId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/Dita14A_650x.jpg?v=1634206227",
          productId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/Dita14B_650x.jpg?v=1634206228",
          productId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/Dita14C_650x.jpg?v=1634206228",
          productId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/B_08826b91-f008-411b-9559-99e57ab9c90d_650x.jpg?v=1649949167",
          productId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/DitaFlight0067806-N-BLK-BLKA_650x.jpg?v=1649949167",
          productId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/C_c2ad9eeb-2a99-4947-b066-a76a0c667915_650x.jpg?v=1649949167",
          productId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/Gucci661125OA-002A_650x.jpg?v=1647017165",
          productId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/Gucci661125OA-002C_jpg_650x.jpg?v=1647017165",
          productId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/Gucci661125OA-002B_650x.jpg?v=1647017165",
          productId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/Gucci661073SK-002B_650x.jpg?v=1646738885",
          productId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/Gucci661073SK-002A_650x.jpg?v=1646738885",
          productId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/Gucci661073SK-002C_650x.jpg?v=1646738884",
          productId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/Club0366B_650x.jpg?v=1649513804",
          productId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/Club0366A_650x.jpg?v=1649513803",
          productId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/Club0366C_650x.jpg?v=1649513804",
          productId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/19B_7c1237e7-6775-45f5-bf79-db374df91432_650x.jpg?v=1634315888",
          productId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/19A_68fb485f-6ff4-4f03-bd1e-28d39d21c250_650x.jpg?v=1634315888",
          productId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/19C_1825e260-af4c-4590-9b14-0f9e26362afc_650x.jpg?v=1634315888",
          productId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/19B_7c1237e7-6775-45f5-bf79-db374df91432_650x.jpg?v=1634315888",
          productId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/19A_68fb485f-6ff4-4f03-bd1e-28d39d21c250_650x.jpg?v=1634315888",
          productId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          image_url:
            "https://cdn.shopify.com/s/files/1/0266/9379/6048/products/19C_1825e260-af4c-4590-9b14-0f9e26362afc_650x.jpg?v=1634315888",
          productId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("images", null, {});
  },
};
