

const BlogPostCard = ({ title, description, imageUrl }) => {
    return (
      <div  className="relative bg-white rounded-lg shadow-lg overflow-hidden h-70 w-64 transition-transform hover:scale-105">
        <img
          className="h-45 w-30 object-cover object-center"
          src={imageUrl}
          alt={title}
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
          <p className="text-sm text-gray-600 overflow-hidden h-20">{description}</p>
        </div>
        <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex justify-center items-center bg-black bg-opacity-25">
          {/* <button className="text-white font-semibold py-2 px-4 border border-white rounded hover:bg-white hover:text-black transition-colors duration-300">Read More</button> */}
        </div>
      </div>
    );
  };
  
  export default BlogPostCard;
  