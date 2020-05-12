import * as Yup from 'yup';

import Item from '../models/Item';
import File from '../models/File';

class ItemController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      price: Yup.number().required(),
      amount: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Values invalid' });
    }

    const {
      id, name, price, amount,
    } = await Item.create(req.body);
    return res.json({
      id, name, price, amount,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      price: Yup.number(),
      amount: Yup.number(),
    });
    console.log(req.body);
    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Values invalid' });
    }

    const item = await Item.findByPk(req.params.id);

    const {
      id, name, price, amount, avatar_id,
    } = await item.update(req.body);

    return res.json({
      id, name, price, amount, avatar_id,
    });
  }

  async listing(req, res) {
    const { page = 1 } = req.query;

    const items = await Item.findAll({
      limit: 10,
      offset: (page - 1) * 10,
      include: [
        {
          model: File,
          as: 'Avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(items);
  }
}

export default new ItemController();
