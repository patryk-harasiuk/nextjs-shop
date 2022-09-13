import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const prisma = new PrismaClient();

    const newProduct = await prisma.user.findMany();

    res.status(200).send(newProduct);
    res.end();
  } catch (error: any) {
    res.status(500).send({ message: error.message });
  }
};
