import Sequelize, { Model } from 'sequelize';

class Withdrawals extends Model {
  static init(sequelize) {
    super.init({
      amount: Sequelize.INTEGER,
    },
    {
      sequelize,
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user', as: 'user_id' });
    this.belongsTo(models.Item, { foreignKey: 'item', as: 'item_id' });
  }
}

export default Withdrawals;
