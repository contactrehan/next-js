import BlogPostCard from "@/components/BlogPostCard";
import { client } from "@/config/contentful";
const getBlogPost = async ()=>{
  const blogPosts = await client.getEntries({ content_type: "blog" }) 
  console.log(blogPosts.items[1].fields.title)
  

}

export default function Home() {
  getBlogPost()
  return (<>
   <h1 className="text-3xl font-bold text-center">Blog Page</h1>
   <br />

   
      <BlogPostCard title={""} description={""} url_image={""}/>
      
      
   
    </>
  );

}
