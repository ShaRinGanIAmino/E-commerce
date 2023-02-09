import React from 'react';
import Card from './Card';
import { products } from '../constants';
import styles from '../style';
const Products = () => {
  console.log(products);
  return (
    <section
      id="collection"
      className={`${styles.paddingY} flex flex-col gap-16 ${styles.flexCenter}`}>
      <p className="text-typo font-mont font-medium text-[20px] tracking-wider">
        OUR SHOES
      </p>

      <div
        className={`flex flex-wrap  gap-4  w-full relative ${styles.flexCenter}`}>
        {products.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Products;
