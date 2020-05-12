import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,
      registration: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
    },
    {
      sequelize,
    });
    this.addHook('beforeSave', async (user) => {
      const d = new Date();
      const admission = String(d.getDate()) + String(d.getMonth() + 1) + String(d.getFullYear());
      const hourAdmission = String(d.getHours()) + String(d.getMinutes());

      user.registration = String(admission) + String(hourAdmission);
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });
    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
