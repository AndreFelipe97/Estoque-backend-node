
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('withdrawals', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user: {
      type: Sequelize.INTEGER,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
      field: 'user',
    },
    item: {
      type: Sequelize.INTEGER,
      references: { model: 'items', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      field: 'item',
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

  down: (queryInterface) => queryInterface.dropTable('withdrawals'),
};
