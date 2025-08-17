import ParticleBackground from "./ParticleBackground";

// Example projects array
const projects = [
  {
    name: "Portfolio Website",
    description: "A responsive, modern portfolio showcasing my work.",
    link: "#",
  },
  {
    name: "Task Manager App",
    description: "A productivity app built with React and Tailwind CSS.",
    link: "#",
  },
  {
    name: "E-commerce Store",
    description: "An online store demo with shopping cart functionality.",
    link: "#",
  },
];

export default function App() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Avielle Lewis</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 mb-6">
          Turning creative visions into interactive experiences with code and design.
        </h2>
        <p className="max-w-xl mx-auto text-lg md:text-xl mb-6">
          I’m a passionate web developer and New Orleans artist. I focus on building intuitive user experiences and leveraging technology to make systems smarter, safer, and more efficient.
        </p>
        <a
          href="#Projects"
          className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
        >
          See My Work
        </a>
      </section>

      {/* About Section */}
      <section id="About" className="max-w-4xl mx-auto mt-16 p-6 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p>
          I’m a passionate web developer and New Orleans artist with five years of experience creating modern, responsive websites. I enjoy turning creative visions into interactive experiences. My portfolio blends design and functionality to showcase what’s possible when imagination meets code. I strive to develop smarter, more efficient systems that contribute to a better world.
        </p>
      </section>

      {/* Projects Section */}
      <section id="Projects" className="max-w-5xl mx-auto mt-16 p-6">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 bg-opacity-70 p-5 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-200">{project.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="Contact" className="max-w-4xl mx-auto mt-16 p-6 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg mb-10">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <ul className="space-y-2">
          <li>Email: <a href="mailto:avielle@example.com" className="text-indigo-400 hover:underline">avielle@example.com</a></li>
          <li>GitHub: <a href="https://github.com/aviselanj" className="text-indigo-400 hover:underline">github.com/aviselanj</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/avielle-lewis" className="text-indigo-400 hover:underline">linkedin.com/in/avielle-lewis</a></li>
        </ul>
      </section>
    </div>
  );
}
