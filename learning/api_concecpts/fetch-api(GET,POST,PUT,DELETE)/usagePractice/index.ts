// const baseUrl = "https://simple-books-api.glitch.me"

// To Get Status
// async function GetStatus() {
//     const res = await fetch(baseUrl+"/status")
//     if(!res.ok){
//         throw new Error(`Could not Fetch Data ,Status Code: ${res.status}`)
//     }
//     const Data = await res.json()
//     console.log(Data)
// }
// GetStatus()


// => To Get Books only

// async function GetBooks() {
//     const res = await fetch(baseUrl+"/books")
//     if(!res.ok){
//         throw new Error(`Could not Fetch Data ,Status Code: ${res.status}`)
//     }
//     const Data = await res.json()
//     console.log(Data)
// }
// GetBooks()

// With Optional Parameters i.e: Search Queries
// interface QueryParams {
//     [key: string]: string;
// }
// const queryParams: QueryParams = {
// type: "non-fiction",
//     limit:"1"
// };
// const baseUrl = "https://simple-books-api.glitch.me"
// const urlWithParams = new URL(`${baseUrl}/books`);
// Object.keys(queryParams).forEach(key => urlWithParams.searchParams.append(key, queryParams[key]));

// async function GetBooksByQueryParams() {
//     const res = await fetch(urlWithParams)
//     if(!res.ok){
//         throw new Error(`Could not Fetch Data ,Status Code: ${res.status}`)
//     }
//     const Data = await res.json()
//     console.log(Data)
// }
// GetBooksByQueryParams()

// Get a Single Book , Method : GET , Endpoint : /books/:id
// const baseUrl = "https://simple-books-api.glitch.me"
// const bookID = 1
// async function GetSingleBookData() {
//         const res = await fetch(`${baseUrl}/books/${bookID}`)
//         if(!res.ok){
//             throw new Error(`Could not Fetch Data ,Status Code: ${res.status}`)
//         }
//         const Data = await res.json()
//         console.log(Data)
//     }
//     GetSingleBookData()

// Api Authentication for Token Endpoint : /api-clients/   , Method :POST

// const user = {
//     clientName: "sadie",
//     clientEmail: "nooneissadd@sadie.com",
// }
// const baseUrl = "https://simple-books-api.glitch.me"
// async function GetToken() {
//     const res = await fetch(`${baseUrl}/api-clients/`,{
//         method: "POST",
//         headers:{
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(user)
//     })
//     if(!res.ok){
//         throw new Error(`Could not Fetch Data ,Status Code: ${res.status}`)
//     }
// const token = await res.json()
//    console.log(token)

    
// }
// GetToken()

 
// Submit an Order : POST /orders  
const token = "80d36e60af83887e8d206941ef9ec89f5d1e10e56123ac7d6b9ac20b93aebd61"
// const reqBody = {
//     bookId: 1,
//     customerName : "Alex",
// }
// async function SubmitOrder() {
//     const res = await fetch(`https://simple-books-api.glitch.me/orders`,{
//         method: "POST",
//         headers:{
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`
//         },
//         body: JSON.stringify(reqBody)
//     })
//     if(!res.ok){
//         throw new Error(`Could not Fetch Data ,Status Code: ${res.status}`)
//     }
//     const Data = await res.json()
//     console.log(Data)
// }
// SubmitOrder()

// GET single order : GET /orders/:id requires Auth
// let orderID = "tSXDSiRl5Vg0UF58RpJG9"
// async function GetSingleOrder() {
//     const res = await fetch(`https://simple-books-api.glitch.me/orders/${orderID}`,
//     {
//         headers:{
//             "Authorization": `Bearer ${token}`
//         }
//     })
//     if(!res.ok){
//         throw new Error(`Could not Fetch Data ,Status Code: ${res.status}`)
//     }
//     const Data = await res.json()
//     console.log(Data)
// }
// GetSingleOrder()

// GET Orders : GET /orders req auth
async function GetOrders() {
    const res = await fetch(`https://simple-books-api.glitch.me/orders`,
    {
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    })
    if(!res.ok){
        throw new Error(`Could not Fetch Data ,Status Code: ${res.status}`)
    }
    const Data = await res.json()
    console.log(Data)
}


// Update an Order : PATCh /orders/:id req auth
// let orderId_1 = "g3SItM4Gk2BornCUGQMRN"
// let reqBody ={
//     customerName : "Rehan",
// }
// async function UpdateOrder() {
//     const res = await fetch(`https://simple-books-api.glitch.me/orders/${orderId_1}`,
//     {
//         method: "PATCH",

//         headers:{
            
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`
//         },
//         body: JSON.stringify(reqBody)
//         })
    
//     if(!res.ok){
//         throw new Error(`Could not Fetch Data ,Status Code: ${res.status}`)
//     }
    
//     const Data = await res.json()
//     console.log(Data)


// }
// UpdateOrder()



// PUT an Order : PUT /orders/:id req auth
// let orderId_2 = "5Qf_LBYd3He1amBUECyXH"
// let reqBody ={
//     customerName : "Tom's Jerry",
//     bookId:2
// }
// async function UpdateOrder() {
//     try{
//     const res = await fetch(`https://simple-books-api.glitch.me/orders/${orderId_2}`,
//     {
        
//         method: "PUT",
//         headers:{
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`
//         }
//         ,
//         body: JSON.stringify(reqBody)
//     })
//     if(!res.ok){
//         throw new Error(`Could not Fetch Data ,Status Code: ${res.status}`)

//     }
//     const Data = await res.json()
//     console.log(Data)
// }
//     catch (error:any) {
//         console.error("Error updating order:", error.message);
//         throw error;
//     }
        

//     }
// UpdateOrder()


// 

// let orderId = "g3SItM4Gk2BornCUGQMRN"


// async function UpdateOrder() {
//     const res = await fetch(`https://simple-books-api.glitch.me/orders/${orderId}`,{
//         method: "PATCH",
//         headers:{
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`
//         },
//         body : JSON.stringify({
//          customerName:"Ali"   
//         })
//     })

//     if(!res.ok){
//         throw new Error(`Could not Fetch Data ,Status Code: ${res.status}`)

//     }
//     const Data = await res.json()
//     console.log(Data)

// }
// UpdateOrder()



// Delete an Order : DELETE /orders/:id req auth
// let orderId_3 = "5Qf_LBYd3He1amBUECyXH"
// async function DeleteOrder() {
//     const res = await fetch(`https://simple-books-api.glitch.me/orders/${orderId_3}`,
//     {
//         method: "DELETE",
//         headers:{
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${token}`
//         }
//     })
//    const data = res.json()
// }
// DeleteOrder()



GetOrders()