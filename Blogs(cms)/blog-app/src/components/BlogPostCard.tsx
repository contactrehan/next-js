"use client"
import Image from 'next/image';
// import { documentToHtmlString } from "@contentful/rich-text-react-renderer";
import { BlogCardType } from '@/types/componentType';
import image from 'next/image';

export default function BlogPostCard(props:BlogCardType) {
  // Destructure image field for flexibility (assetUrl, width, height, fileName)
  const { fields: { file: { url, details: { image: { width, height }, fileName } } } } = Image;

  // Optimized image rendering with fallback and alt text
  const imageProps = {
    layout: 'responsive',
    width: width,
    height: height,
    src: url,
    alt: props.title || fileName, // Use title as alt text if available
    fallback: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=',
    blurDataURL: url,
  };

  // Handle Contentful Rich Text descriptions (assuming `description` is rich text)
  const processedDescription = documentToHtmlString(props.description);

  return (
    <div className="card">
      <Image {...imageProps} />
      <div className="card-content">
        <h2>{props.description}</h2>
        <div dangerouslySetInnerHTML={{ __html: processedDescription }} />
      </div>
    </div>
  );
}
