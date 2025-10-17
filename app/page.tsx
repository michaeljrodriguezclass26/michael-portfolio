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
        <h3 className="text-2xl font-bold mb-6">P&M Prints - The Stack</h3>

        {/* Image 1 + Text */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src="images/stack-wallet-what.jpg"
            alt="The Stack - concept"
            className="w-full max-w-[300px] aspect-square object-cover rounded-lg shadow-lg mb-4 md:mb-0 md:mr-6"
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

        {/* Project 2: Rig Hut – Smart Gate Module */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 mt-16">Rig Hut - Smart Gate Module</h3>

          {/* Image 1 + Text */}
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img
              src="images/rig-hut-what.jpg"
              alt="Rig Hut module concept"
              className="w-[500px] h-[500px] object-cover rounded-2xl shadow-md mb-4 md:mb-0 md:mr-6"
            />
            <p className="text-lg">
            <strong>What:</strong> During my internship at Rig Hut, an AI truck-parking
            software startup, I helped design and assemble hardware for a new
            smart-gate module that automates truck-lot entry by connecting to 
            the companies software.
          </p>
        </div>

        {/* Image 2 + Text */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <img
            src="images/rig-hut-how.jpg"
            alt="Rig Hut module development"
            className="w-[500px] h-[500px] object-cover rounded-2xl shadow-md mb-4 md:mb-0 md:mr-6"
          />
          <p className="text-lg">
            <strong>How:</strong> I used Fusion 360 for creating the 3D-modeling enclosures, learned
            soldering and circuit assembly, and collaborated with engineers to integrate
            electronics with Rig Hut's software.
          </p>
        </div>

        {/* Image 3 + Text */}
        <div className="flex flex-col md:flex-row items-center">
          <img
            src="images/rig-hut-results.jpg"
            alt="Rig Hut gate module results"
            className="w-[500px] h-[500px] object-cover rounded-2xl shadow-md mb-4 md:mb-0 md:mr-6"
          />
          <p className="text-lg">
            <strong>Results:</strong> The prototype was delivered to clients and tested
            successfully. This experience deepened my interest in electronics and
            influenced my decision to pursue Electrical Engineering.
          </p>
        </div>
        {/* BIOTECH STARTUP */}
        <div className="mb-20 mt-24">
          <h3 className="text-2xl font-bold mb-6">BioTech Startup - Eustachian Tube Project</h3>
          <div className="space-y-8">
            {/* Image 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <img src="/biotech1.jpg" alt="Biotech - Design" className="w-[500px] h-[500px] rounded-2xl shadow-lg mb-4 md:mb-0 md:mr-8" />
              <p className="text-lg leading-relaxed">
                <strong>What:</strong> Designed a medical device concept to improve airflow through the Eustachian tube — potentially alleviating chronic ear pressure.
              </p>
            </div>
            {/* Image 2 */}
            <div className="flex flex-col md:flex-row items-center">
              <img src="/biotech2.jpg" alt="Biotech - Development" className="w-[500px] h-[500px] rounded-2xl shadow-lg mb-4 md:mb-0 md:mr-8" />
              <p className="text-lg leading-relaxed">
                <strong>How:</strong> Created CAD models in Fusion 360 integrating fluid dynamics principles, collaborated with mentors, and researched biomedical airflow systems.
              </p>
            </div>
            {/* Image 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <img src="/biotech3.jpg" alt="Biotech - Results" className="w-[500px] h-[500px] rounded-2xl shadow-lg mb-4 md:mb-0 md:mr-8" />
              <p className="text-lg leading-relaxed">
                <strong>Results:</strong> Developed a functional prototype concept and investor-ready pitch, combining biomedical and engineering design thinking.
              </p>
            </div>
          </div>
        </div>

        {/* SKEEBALL MINI GAME */}
        <div className="mb-20 mt-24">
          <h3 className="text-2xl font-bold mb-6">Skeeball Mini Game</h3>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center">
              <img src="/skeeball1.jpg" alt="Skeeball - What and How" className="w-[500px] h-[500px] rounded-2xl shadow-lg mb-4 md:mb-0 md:mr-8" />
              <p className="text-lg leading-relaxed">
                <strong>What & How:</strong> Built a tabletop skeeball arcade game using 3D printed ramps and scoring rings. Learned about motion control and precision printing through repeated testing.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <img src="/skeeball2.jpg" alt="Skeeball - Results" className="w-[500px] h-[500px] rounded-2xl shadow-lg mb-4 md:mb-0 md:mr-8" />
              <p className="text-lg leading-relaxed">
                <strong>Results:</strong> Demonstrated motion accuracy and aesthetics in design, blending fun gameplay with mechanical design principles.
              </p>
            </div>
          </div>
        </div>

        {/* 3D PRINTED BUSINESS CARDS */}
        <div className="mb-20 mt-24">
          <h3 className="text-2xl font-bold mb-6">3D Printed Business Cards</h3>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center">
              <img src="/businesscard1.jpg" alt="3D Printed Business Cards - What and How" className="w-[500px] h-[500px] rounded-2xl shadow-lg mb-4 md:mb-0 md:mr-8" />
              <p className="text-lg leading-relaxed">
                <strong>What & How:</strong> Designed and 3D printed custom business cards for <strong>P&M Prints</strong>, experimenting with dual-color PLA and embossed text. 
                Modeled designs in <strong>Fusion 360</strong> and refined print settings for detail and durability.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <img src="/businesscard2.jpg" alt="3D Printed Business Cards - Results" className="w-[500px] h-[500px] rounded-2xl shadow-lg mb-4 md:mb-0 md:mr-8" />
              <p className="text-lg leading-relaxed">
                <strong>Results:</strong> Produced fully functional and visually striking cards that serve as both a professional introduction and a physical showcase of 3D printing craftsmanship.
              </p>
            </div>
          </div>
        </div>

        {/* LIGHT SWITCH COVER */}
        <div className="mb-20 mt-24">
          <h3 className="text-2xl font-bold mb-6">Light Switch Cover with Attachments</h3>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center">
              <img src="/lightswitch1.jpg" alt="Light Switch - What and How" className="w-[500px] h-[500px] rounded-2xl shadow-lg mb-4 md:mb-0 md:mr-8" />
              <p className="text-lg leading-relaxed">
                <strong>What & How:</strong> Designed a 3D printed switch plate with modular magnetic attachments for key holders, pens, and accessories — improving everyday utility.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <img src="/lightswitch2.jpg" alt="Light Switch - Results" className="w-[500px] h-[500px] rounded-2xl shadow-lg mb-4 md:mb-0 md:mr-8" />
              <p className="text-lg leading-relaxed">
                <strong>Results:</strong> Learned about ergonomic design, part tolerances, and how to align function with aesthetic appeal.
              </p>
            </div>
          </div>
        </div>

        {/* AIRPLANE SLINGSHOT */}
        <div className="mb-20 mt-24">
          <h3 className="text-2xl font-bold mb-6">Airplane Slingshot</h3>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center">
              <img src="/airplane1.jpg" alt="Airplane - What and How" className="w-[500px] h-[500px] rounded-2xl shadow-lg mb-4 md:mb-0 md:mr-8" />
              <p className="text-lg leading-relaxed">
                <strong>What & How:</strong> Created a handheld slingshot device that launches foam airplanes. Experimented with tension mechanics, range optimization, and safe design.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <img src="/airplane2.jpg" alt="Airplane - Results" className="w-[500px] h-[500px] rounded-2xl shadow-lg mb-4 md:mb-0 md:mr-8" />
              <p className="text-lg leading-relaxed">
                <strong>Results:</strong> Improved knowledge of projectile motion, tension systems, and mechanical prototyping.
              </p>
            </div>
          </div>
        </div>

        {/* GEAR PHONE HOLDER */}
        <div className="mb-20 mt-24">
          <h3 className="text-2xl font-bold mb-6">Gear-Shaped Phone Holder</h3>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center">
              <img src="/gear1.jpg" alt="Gear Holder - What and How" className="w-[500px] h-[500px] rounded-2xl shadow-lg mb-4 md:mb-0 md:mr-8" />
              <p className="text-lg leading-relaxed">
                <strong>What & How:</strong> Designed a functional and decorative phone holder in the shape of interlocking gears to explore aesthetic 3D design and mechanical alignment.
              </p>
            </div>
            <div className="flex flex-col md:flex-row items-center">
              <img src="/gear2.jpg" alt="Gear Holder - Results" className="w-[500px] h-[500px] rounded-2xl shadow-lg mb-4 md:mb-0 md:mr-8" />
              <p className="text-lg leading-relaxed">
                <strong>Results:</strong> Learned how to combine engineering with visual appeal, balancing structure, symmetry, and usability.
              </p>
            </div>
          </div>
        </div>

        {/* PROJECTS IN PROGRESS */}
        <div className="mt-32">
          <h3 className="text-3xl font-extrabold mb-8 text-center">Projects In Progress</h3>
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              <strong>First-Person VR Powered RC Car:</strong> A live FPV-controlled RC car with a VR headset integration for immersive driving and camera-based depth mapping.
            </p>
            <p>
              <strong>AI Golf Caddy:</strong> A golf assistant that uses live GPS data and AI predictions to recommend clubs and strategies during play.
            </p>
            <p>
              <strong>Trackable Golf Ball:</strong> Developing an ultra-low-cost, trackable golf ball using small embedded sensors and a smartphone app for location tracking.
            </p>
          </div>
        </div>

      </div>

      </div>
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

