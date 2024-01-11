import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-cover h-screen flex justify-center items-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-white">Your Company Name</h1>
        <p className="text-xl text-gray-300 mt-4 text-center">Your tagline summarizing what you do</p>
        <Link href="/contact">
          <div className="inline-block px-4 py-2 rounded bg-sky-500 text-white mt-8">Get in touch</div>
        </Link>

        <div className="mt-12 md:flex">
          <div className="md:w-1/2 px-4">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600">Write div brief paragraph about your company's origin and journey.</p>
          </div>
          <div className="md:w-1/2 px-4">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">Explain your company's core purpose and what drives you.</p>
          </div>
        </div>

        {/* Add other sections as needed */}

        <div className="text-center mt-12">
          <Link href="/more-about-us">
            <div className="inline-block px-4 py-2 rounded bg-sky-500 text-white">Learn More</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
