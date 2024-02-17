
import { client } from "@/config/contentful";


const GetBlogPost = async ()=>{
  const blogPosts = await client.getEntries({ content_type: "blog" }) 
  return await blogPosts.items;
}

export default async function BlogPostPage({params}:{params:{slug:string}}) {
  const data =  await GetBlogPost()
  
  const blog = data.filter((blog)=>blog.fields.postno === parseFloat(params.slug))

  return (
    <> 
      <h1>
        {blog[0].fields.title}
      </h1>
      
    
    </>
  )
}

