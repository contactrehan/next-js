import BlogPostCard from "@/components/BlogPostCard";
import BlogPost from "@/components/BlogPostCard";


import { client } from "@/config/contentful";
const getBlogPost = async ()=>{
  const blogPosts = await client.getEntries({ content_type: "blog" }) 
  return  blogPosts.items;

  

}
export default async function  BlogPage() {
    const data = await getBlogPost()
    console.log(data[0].fields.image.fields.file.url)
    
  return (
    <>  
    <h1 className="text-2xl font-bold text-center">BlogPage</h1>
    <div className="flex flex-wrap justify-around gap-4 mt-8 sm
    :grid grid-cols-3 md:gap-6 lg:gap-1
    xl:place-items-start place-content-center">

        {data?.map((blog:any)=>{
            return <BlogPostCard key={blog.fields.postno} title={blog.fields.title} description={blog.fields.description.content[0].content[0].value} url_image={blog.fields.image.fields.file.url} slug={blog.fields.postno}/>
        })}
        

    </div>




    </>
  )
}
