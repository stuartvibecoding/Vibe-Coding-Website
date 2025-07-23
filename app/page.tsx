// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-500 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Stuart Vibe Coding Community
          </h1>
          <p className="text-xl text-white font-medium mb-2">
            Where creativity meets AI-powered code.
          </p>
          <p className="text-white/90 mb-8">
            A welcoming space for makers, dreamers, and the simply curious to explore AI-assisted coding—together.
          </p>
          <Link
            href="https://www.meetup.com/stuart-vibe-coding/"
            aria-label="Join the Meetup"
            className="inline-block bg-white text-emerald-700 font-semibold px-8 py-3 rounded-lg shadow hover:bg-emerald-50 transition"
          >
            Join the Meetup
          </Link>
        </div>
      </section>

      {/* Project Goal Section */}
      <section className="bg-white py-8 border-b border-emerald-100">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-lg font-semibold text-emerald-700 mb-2">About This Project</h2>
          <p className="text-gray-700">
            Our goal is to share prompts for each webpage and component we build and add to this website. Check the <a href="https://github.com/stuartvibecoding/Vibe-Coding-Website" className="text-emerald-700 underline hover:text-emerald-900 transition" target="_blank" rel="noopener noreferrer">GitHub repository</a> for the base prompt, steps, and instructions!
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            We bring people from diverse disciplines—not just coders—together to learn, share, and have fun with the latest AI tools for software creation. Whether you write poems, design hardware, crunch data, or have never opened a code editor, you’ll find friendly faces and hands-on guidance here in Stuart.
          </p>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">What We Do</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h3 className="font-semibold mb-2">Monthly Meetups</h3>
              <p className="text-gray-700">
                Live demos, lightning talks, and show-and-tell of member projects.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Workshop Nights</h3>
              <p className="text-gray-700">
                Guided practice with tools like Cursor, Copilot, and ChatGPT.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Mini-Hacks & Challenges</h3>
              <p className="text-gray-700">
                Low-stakes sprints that pair newcomers with mentors.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Community Projects</h3>
              <p className="text-gray-700">
                Build something useful—or delightfully useless—together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Why Join?</h2>
          <ul className="border-l-4 border-emerald-400 pl-6 space-y-4 text-gray-700">
            <li>Learn faster through collaborative experimentation.</li>
            <li>Cross-pollinate ideas across art, business, science, and tech.</li>
            <li>Make new friends who geek out over the future of work and play.</li>
            <li>Have a blast turning “what-ifs” into working code.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <Link
            href="#subscribe"
            aria-label="Subscribe for event updates"
            className="inline-block bg-emerald-50 text-emerald-700 font-semibold px-8 py-3 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition"
          >
            Subscribe for event updates
          </Link>
        </div>
      </section>
    </main>
  );
}