import * as Yup from 'yup';
import Withdrawals from '../models/Withdrawals';
import Item from '../models/Item';

class WithdrawalsController {
  async store(req, res) {
    console.log(req.body);
    const schema = Yup.object().shape({
      amount: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(401).json({ error: 'Values invalid' });
    }

    const itemValues = await Item.findByPk(req.params.id);

    if (itemValues.amount < req.body.amount) {
      return res.status(401).json({ error: 'Value greater than that available in stock' });
    }

    itemValues.update({ amount: itemValues.amount - req.body.amount });

    const { user, item, amount } = await Withdrawals.create({
      user: req.userId,
      item: (req.params.id),
      amount: req.body.amount,
    });


    return res.json({ user, item, amount });
  }

  async listing(req, res) {
    const withdrawals = await Withdrawals.findAll();

    return res.json(withdrawals);
  }
}


export default new WithdrawalsController();
