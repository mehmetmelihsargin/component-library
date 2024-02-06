import Card from '@/components/card'
import Dropdown from '@/components/dropdown'
import Illustrated from '@/components/illustrated'
import Button from '@/components/button'
import Okan, { toplama } from '@/components/okan'
import Buttonn from '@/components/buttonn'
import Product from '@/components/productComponent'
import { Data } from '@/components/data'

export default function Home() {
  return (
    <main>
      {Data?.map((item: any, index: number) => <Card key={index} item={item} />)}
      <hr />
      {/* <Dropdown />
      <hr />
      <Illustrated /> */}
      <hr />
      {/* <Button width='w-32' height='h-10' backgroundColor='bg-red' textColor='white'/>
      <Buttonn placeholder='okan' width='32' backgroundColor='bg-black'/> */}
      <hr />


    </main>
  )
}
