import Card from '@/components/card'
import Dropdown from '@/components/dropdown'
import Illustrated from '@/components/illustrated'
import Button from '@/components/button'
import Okan, { toplama } from '@/components/okan'
import Buttonn from '@/components/buttonn'
import Product from '@/components/product'

export default function Home() {
  console.log(toplama(5,3),'okann') 
  return (
    <main>
      <Card />
      <hr />
      <Dropdown />
      <hr />
      <Illustrated/>
      <hr />
      {/* <Button width='w-32' height='h-10' backgroundColor='bg-red' textColor='white'/>
      <Buttonn placeholder='okan' width='32' backgroundColor='bg-black'/> */}
      <hr />
      <Product />
      
      
    </main>
  )
}
