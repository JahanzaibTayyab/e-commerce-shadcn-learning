import Image from 'next/image'
import Hero from "@/views/Hero"
import ProductList from '@/views/ProductList'

export default function Home() {
  return (
    <div>
      <Hero />
      {/* Products */}
      <ProductList />
    </div>
  )
}
