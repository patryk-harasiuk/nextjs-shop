import { NextApiRequest, NextApiResponse } from 'next';

import prisma from '@/utils/client';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const products = await prisma.product.findMany();

    if (products.length) {
      res.status(200).json(products);
      res.end();
    }

    res.status(404);
    res.end();
  } catch {
    res.status(500);
  }
}
