
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
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
    registration: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
      field: 'registration',
    },
    password_hash: {
      type: Sequelize.STRING,
      allowNull: true,
      field: 'password_hash',
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

  down: (queryInterface) => queryInterface.dropTable('users'),
};
