import BlogPostCard from "./components/blogPostCard";
import { client } from "@/config/contentful";
export const getData = async () => {
   
      const blogs = await client.getEntries({"content_type":"blog"}); 
    //   console.log(entry.fields.description)
    // console.log(blogs.items[0].fields.title)
      return blogs.items
      

    
    
  }

export default async function Blogs() {
const data =await getData()
console.log(data[0].fields.image.fields.file.url)

  return (
    <div  className="flex flex-wrap justify-center">
       
{data?.map((blog,index)=>{
    return(<BlogPostCard key={index} title={blog.fields.title} description={blog.fields.description.content[0].content[0].value} imageUrl={blog.fields.image.fields.file.url} />
        
    )
    

})}
    </div>
  )
}
