import Image from "next/image"
import P1 from "/public/p1.webp"
import ProductCard from "@/components/ProductCard"

const ProductList = () => {
    return (
        <div className="flex justify-evenly mt-16">
            <ProductCard title="abc" price={100} img={P1} />
            <ProductCard title="xyz" price={100} img={P1} />
            <ProductCard title="jacket" price={1000} img={P1} />
        </div>
    )
}

export default ProductList