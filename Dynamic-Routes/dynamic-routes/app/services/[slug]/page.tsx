// pages/services/[slug].js

const services = [
    {
      "slug": "web-development",
      "title": "Web Development",
      "description": "Building modern and responsive websites tailored to your needs.",
    },
    {
      "slug": "graphic-design",
      "title": "Graphic Design",
      "description": "Creating visually appealing graphics and designs for your brand."
    },
    {
      "slug": "digital-marketing",
      "title": "Digital Marketing",
      "description": "Strategizing and executing digital marketing campaigns to boost your online presence.",
    }
    // Add more services as needed
  ];
  
  export default function Services({ params }: { params: { slug: string } }) {
    const service = services.filter((item) => item.slug === params.slug);
    console.log(service)
  
    return (
      <div className="p-4 border rounded shadow">
        <h1 className="text-3xl font-bold mb-4">{service[0]?.title}</h1>
        <p>{service[0]?.description}</p>
      </div>
    );
  }
  