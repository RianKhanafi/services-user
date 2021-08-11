"use strict";

const bcrypt = require("bcrypt");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    Example: await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Rian",
          profession: "Software Engineer",
          role: "admin",
          email: "riankhanafi851@gmail.com",
          password: await bcrypt.hash("rahasia1234", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },

        {
          name: "Yein",
          profession: "Software Developer",
          role: "student",
          email: "yein@gmail.com",
          password: await bcrypt.hash("rahasia1234", 10),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
