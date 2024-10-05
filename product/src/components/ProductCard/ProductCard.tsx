'use client';

import React, { useState } from 'react';
import classes from './ProductCard.module.css';
import { Card, Rate } from 'antd';
import { Product } from '../../models/product.model';
import { useNavigate } from 'react-router-dom';

const ProductCard: React.FC<{
  product: Product;
}> = (props) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate();

  const navigateToProducts = () => {
    navigate(`/products/${props.product.id}/view`);
  };

  return (
    <Card
      hoverable
      className={classes.cardShadow}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={navigateToProducts}
      cover={
        <img
          alt={
            !isHover
              ? props.product.imageUrls?.[0] || ''
              : props.product.imageUrls?.[1] || ''
          }
          src={
            !isHover
              ? props.product.imageUrls?.[0] || ''
              : props.product.imageUrls?.[1] || ''
          }
          width={300}
          height={400}
        />
      }
    >
      <h5 className="text-base font-bold truncate" title={props.product.name}>
        {props.product.name}
      </h5>
      <p
        className="font-normal text-gray-400 truncate"
        title={props.product.description}
      >
        {props.product.description}
      </p>
      <div className="mt-4 flex">
        <Rate
          disabled
          defaultValue={0}
          allowHalf
          value={props.product.rate?.averageValue}
        />
        <p className="ml-2">({props.product.rate?.rateCount})</p>
      </div>
      <div className="mt-4 font-bold text-red-700">${props.product.price}</div>
    </Card>
  );
};

export default ProductCard;
