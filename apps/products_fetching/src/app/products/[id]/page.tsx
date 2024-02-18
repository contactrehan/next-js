import { GetProducts } from "@/api/products"
import { productsParamType } from "@/types/types"

export default async function ProductPage({params}:productsParamType) {
  const data = await GetProducts()
  const singleProduct = data.find((element:any)=>element.id === parseInt(params.id)) 
console.log(data.id)
  return (
    <div className="px-2">

      <h1>Product Title - {singleProduct.title}</h1>
      <h1>Product Description - {singleProduct.description}</h1>
      <h1>Product Price - {singleProduct.price}$</h1>
      <h1>Product Rating - {singleProduct.rating}</h1>
      <h1>Product Stock - {singleProduct.stock}</h1>
      
      
    </div>
  )
}
