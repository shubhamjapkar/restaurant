import dbConnect from '@/util/mongo';
import Order from '@/models/Order';

const handler = async (req, res) => {
  //id=req.query.id
  const {
    method,
    query: { id },
  } = req;

  await dbConnect();

  if (method === 'GET') {
    try {
      const order = await Order.findById(id);
      res.status(200).json(order);
      //   console.log('order:', order);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  if (method === 'PUT') {
  }
  if (method === 'DELETE') {
  }
};

export default handler;
