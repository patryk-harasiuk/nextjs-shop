import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import NumberInput from '@/components/form/number-input';
import Layout from '@/components/layout/Layout';

type ProductProps = {
  id: string;
  description: string;
  name: string;
  price: number;
  image: string;
};

const Product = ({ name }: ProductProps) => {
  const [amount, setAmount] = useState(1);

  const router = useRouter();

  console.log(router, 'ro');
  const { id } = router.query;

  const handleSubAmount = () => {
    if (amount <= 0) return;
    setAmount((prevAmount) => prevAmount - 1);
  };

  const handleAddAmount = () => setAmount((prevAmount) => prevAmount + 1);

  return (
    <Layout>
      <div className="flex flex-col">
        <nav className="font-main text-textGrey flex items-center justify-start gap-4">
          <Link href={'/'} className="text-xs">
            Home page
          </Link>
          <span aria-hidden className="text-xs">
            &gt;
          </span>
          <p className="text-xs">{name}</p>
        </nav>

        <div>
          <div></div>

          <div>
            <h1>{name}</h1>

            <NumberInput
              number={amount}
              onAddNumber={handleAddAmount}
              onSubNumber={handleSubAmount}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
