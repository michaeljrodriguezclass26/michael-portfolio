import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-blue-600 text-white p-6">
        <h1 className="text-4xl font-bold">Michael Rodriguez</h1>
        <p className="mt-2 text-lg">Electrical Engineering & Entrepreneurship Portfolio</p>
      </header>

    {/* About Section */}
    <section className="max-w-4xl mx-auto my-12 px-4 flex flex-col md:flex-row items-center md:items-start gap-6">
      {/* Image */}
      <img 
        src="/me.jpg" 
        alt="Michael Rodriguez" 
        className="w-48 h-48 rounded-full object-cover"
      />

      {/* About text */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I am a high school student passionate about Electrical Engineering, 
          patent law, and entrepreneurship. I co-founded a 3D printing startup, 
          have completed multiple internships, and love creating projects that combine 
          technology and innovation.
        </p>
      </div>
    </section>

    {/* Projects Section */}
    <section className="max-w-5xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

      {/* Project 1: The Stack */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6">The Stack</h3>

        {/* Image 1 + Text */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src="images/stack-wallet-what.jpg"
            alt="The Stack - concept"
            className="w-[500px] h-[500px] object-cover rounded-2xl shadow-md mb-4 md:mb-0 md:mr-6"
          />
          <p className="text-lg">
            <strong>What:</strong> The Stack is the world's first modular slim wallet with customizable
            back plates designed and 3D printed by me.
          </p>
        </div>

        {/* Image 2 + Text */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src="images/stack-wallet-how.jpg"
            alt="The Stack - design process"
            className="w-[500px] h-[500px] object-cover rounded-2xl shadow-md mb-4 md:mb-0 md:mr-6"
          />
          <p className="text-lg">
            <strong>How:</strong> Using Fusion 360 I implemented an innovative Lego-like
            design to the backplates allowing interchangeability. On top of that I calculated
            the proper torque and size the lever needed to be in order to eject the cards optimally.
            Finally, by imbedding an NFC chip into the base we coded a program that allows for
            geolocation tracking. 
          </p>
        </div>

        {/* Image 3 + Text */}
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="images/stack-wallet-results.jpg"
            alt="The Stack - results"
            className="w-[500px] h-[500px] object-cover rounded-2xl shadow-md mb-4 md:mb-0 md:mr-6"
          />
          <p className="text-lg">
            <strong>Results:</strong> We're now patenting the design with the help of our school
            and gained funding from our schools pitch competition. Now were focused on growing
            the products presence online through our online store.
          </p>
        </div>
      </div>
    </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <p>
          Fluent in Spanish, 3D modeling with Fusion 360, 3D printing, CAD design, 
          soldering, electronics, Canva, and video editing.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-12">
        <p><span className="font-bold">LinkedIn:</span> <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" className="underline hover:text-blue-400">linkedin.com/in/michael-pmprints</a></p>
        <p><span className="font-bold">Email:</span> <a href="mailto:youremail@example.com" className="underline hover:text-blue-400">mjrodriguez26@belenwolverines.org</a></p>
        <p><span className="font-bold">Phone:</span> <a href="tel:+15551234567" className="underline hover:text-blue-400">+1 (305) 988-1987</a></p>
      </footer>
    </div>
  );
}

