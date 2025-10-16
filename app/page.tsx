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
      <section className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I am a high school student passionate about Electrical Engineering, 
          Biomedical Engineering, and entrepreneurship. I co-founded a 3D printing startup, 
          have completed multiple internships, and love creating projects that combine 
          technology and innovation.
        </p>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto my-12 px-4">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>P&M Prints:</strong> Co-founded a 3D printing company developing modular wallets.
          </li>
          <li>
            <strong>Rig Hut Internship:</strong> Built AI and electronics solutions for truck parking software.
          </li>
          <li>
            <strong>Other Internships:</strong> Completed biotech startup and social media company internships.
          </li>
        </ul>
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
        <p>LinkedIn: <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" className="underline hover:text-blue-400">linkedin.com/in/michael-pmprints</a></p>
        <p>Email: <a href="mailto:youremail@example.com" className="underline hover:text-blue-400">mjrodriguez26@belenwolverines.org</a></p>
        <p>Phone: <a href="tel:+15551234567" className="underline hover:text-blue-400">+1 (305) 988-1987</a></p>
        <p>© 2025 Michael Rodriguez</p>
      </footer>
    </div>
  );
}

