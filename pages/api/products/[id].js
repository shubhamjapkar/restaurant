import Product from '@/models/Product';
import dbConnect from '@/util/mongo';

export default async function handler(req, res) {
  //connect to db
  dbConnect();
  const {
    method,
    query: { id }, //use query as id
  } = req;

  //Fetch all pizza
  if (method === 'GET') {
    try {
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Update a new pizza
  if (method === 'PUT') {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  //Delete a new pizza
  if (method === 'DELETE') {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}
