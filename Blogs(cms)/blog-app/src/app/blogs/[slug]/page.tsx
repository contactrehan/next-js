
import { client } from "@/config/contentful";
const getBlogPost = async ()=>{
  const blogPosts = await client.getEntries({ content_type: "blog" }) 
  return await blogPosts.items;

  

}

export default function BlogPostPage(params:{params:{slug:string}}) {
getBlogPost()
  return (
    <> 
      <h1>Blog Post Page</h1>
      
    
    </>
  )
}

