import { GetProducts } from "@/api/products"
import Link from "next/link"


export default async function ProductsPage() {
const products = await GetProducts()


// console.log(products)
  return (
    <>
    <div className="text-2xl font-bold text-center">
        <h1>All Products</h1>
        </div>
        <ul>
            {products.map((elem:any)=>{
                return(<li className="px-2" key={elem.id}>
                    <Link href={`/products/${elem.id}`}>
                    {elem.title}</Link>
                </li>)
            })}
        
        </ul>

    {/* <Link href={`/products/${products[0].id}`}>Product 1</Link> */}
    </>
  )
}
