
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('files', {
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
    path: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
      field: 'path',
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

  down: (queryInterface) => queryInterface.dropTable('files'),
};
