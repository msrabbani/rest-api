'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
        name:"Muhamad Rabbani",
        address:"Jl.Sukabumi no.07",
        phone_number:"021 212022",
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        name:"Dadang Konelo",
        address:"Jl.Kabandungan no.09",
        phone_number:"021 213456",
        createdAt:new Date(),
        updatedAt:new Date()
    },{
        name:"Asep Pedelpop",
        address:"Jl.Taucho no.66",
        phone_number:"0266 3212393",
        createdAt:new Date(),
        updatedAt:new Date()
    }])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
