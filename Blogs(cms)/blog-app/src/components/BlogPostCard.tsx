
import Link from 'next/link';

interface BlogCardType {
  url_image: string;
  title: string;
  description: string;
  slug: string;
}

const BlogPostCard: React.FC<BlogCardType> = ({ url_image, title, description, slug }) => {
  return (
    <div className="flex flex-col mb-8 bg-white p-4 rounded shadow-md">
      <img
        className="w-full h-48 object-cover rounded-t-md"
        src={url_image}
        alt={title}
      />
      <div className="flex flex-col p-4 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <Link href={`/blogs/${slug}`}>
          <button className="px-4 py-2 text-white rounded bg-blue-500 hover:bg-blue-700">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
