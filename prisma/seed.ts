import type Prisma from '@prisma/client';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const products: Prisma.Product[] = [
  {
    id: '1',
    description: '',
    name: 'Plant on vase',
    price: 2,
    image: '/plant-1.jpg',
  },

  {
    id: '2',
    description: '',
    name: 'White plant',
    price: 2,
    image: '/plant-2.jpg',
  },

  {
    id: '3',
    description: '',
    name: 'Wavy plant',
    price: 2,
    image: '/plant-3.jpg',
  },

  {
    id: '4',
    description: '',
    name: 'Red plant',
    price: 2,
    image: '/plant-4.jpg',
  },
];

async function main() {
  await prisma.product.createMany({
    data: products,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
