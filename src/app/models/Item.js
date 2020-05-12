import Sequelize, { Model } from 'sequelize';

class Item extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      price: Sequelize.DECIMAL,
      amount: Sequelize.INTEGER,
    },
    {
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'Avatar' });
  }
}

export default Item;
