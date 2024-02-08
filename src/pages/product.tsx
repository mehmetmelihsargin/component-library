import React from 'react'
import { useRouter } from 'next/router'
import ProductComponent from '@/components/productComponent';
import { useEffect } from 'react';

const Product = () => {
  const router = useRouter();
  const data = router.query;

  useEffect(() => {
    if (data) {
        //data işlemleri yapılabilir
      console.log(data , 'sdasdasd');
    }
  }, [data]);
  return (
    <ProductComponent data={data} />
  )
}

export default Product