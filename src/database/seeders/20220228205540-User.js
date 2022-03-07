'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('Users', [{
       googleId: "769407000889-7l0iqc5c028eblvsef0kdvoo3t3d7i2e.apps.googleusercontent.com",
      name: 'Steve Ndicunguye',
       email: "ndicunguyesteve4@gmail.com",
       createdAt: new Date(),
       updatedAt: new Date()
       }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Users', null, {});
    
  }
};
