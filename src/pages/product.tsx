import React from 'react'
import { useRouter } from 'next/router'
import ProductComponent from '@/components/productComponent';

const Product = () => {
  const router = useRouter();
  const data = router.query;
  return (
    <ProductComponent data={data} />
  )
}

export default Product