import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      password: Yup.string().required().min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation fails' });
    }

    const { id, name, registration } = await User.create(req.body);
    return res.json({ id, name, registration });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      oldPassword: Yup.string().required().min(6),
      password: Yup.string().required().min(6),
      confirmPassword: Yup.string().required().oneOf([Yup.ref('password')]),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Validation fails' });
    }

    const { oldPassword } = req.body;

    const user = await User.findByPk(req.userId);

    if (!(await user.checkPassword(oldPassword))) {
      return res.status(401).json({ error: 'Password does not match' });
    }

    const {
      id, name, registration, password_hash,
    } = await user.update(req.body);

    return res.json({
      id, name, registration, password_hash,
    });
  }
}

export default new UserController();
