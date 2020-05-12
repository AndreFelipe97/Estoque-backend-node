
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('items', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true,
      field: 'name',
    },
    price: {
      type: Sequelize.DECIMAL,
      allowNull: true,
      field: 'price',
    },
    amount: {
      type: Sequelize.INTEGER,
      allowNull: true,
      field: 'amount',
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('items'),
};
