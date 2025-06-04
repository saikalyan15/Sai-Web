import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className='max-w-6xl mx-auto px-6 py-16 bg-gray-50'>
      <div className='grid md:grid-cols-2 gap-8 items-center'>
        {/* Left Column: Image */}
        <div className='flex justify-center md:justify-end'>
          <Image
            src='/Sai.jpg'
            alt='Saikalyan Akunuri headshot'
            width={250} // Slightly increased size for two-column layout
            height={250}
            className='rounded-xl shadow-md object-cover mb-6 md:mb-0'
          />
        </div>

        {/* Right Column: Text Content */}
        <div className='text-center md:text-left'>
          <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>About Me</h1>
          <p className='text-gray-700 text-base md:text-lg mb-6'>
            I'm Saikalyan Akunuri, an automation consultant focused on building practical, open-source workflows using n8n. I help founders and teams save time, reduce repetitive work, and create scalable systems with clarity. With decades of experience in technology, I'm now focused on clean, intentional tech that empowers people — not overwhelms them.
          </p>

          {/* Personal Quote */}
          <p className='text-gray-600 text-lg italic mb-6'>
            &ldquo;Automation done right empowers people to focus on what truly matters.&rdquo;
          </p>

          {/* What I Value Section */}
          <div className='mb-6'>
            <h3 className='text-xl font-bold text-gray-900 mb-3'>What I value</h3>
            <div className='flex flex-wrap justify-center md:justify-start gap-3'>
              <span className='bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full'>Clarity</span>
              <span className='bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full'>Intentional Tech</span>
              <span className='bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full'>Open Source</span>
              <span className='bg-yellow-100 text-yellow-800 text-sm font-medium px-3 py-1 rounded-full'>Simplicity</span>
            </div>
          </div>

          {/* CTA Button */}
          <Link href='/contact' className='inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition'>
            Let's Work Together
          </Link>
        </div>
      </div>
    </section>
  );
}
