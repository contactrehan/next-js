
const GetProducts = async()=>{
    const response = await fetch("https://dummyjson.com/products")
    const productsResponse = await  response.json();
    if(!response) throw new Error("Data Fetching Failed")
    return productsResponse.products
}
export {GetProducts}