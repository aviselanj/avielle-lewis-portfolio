import ParticleBackground from "./ParticleBackground";

// Example projects array
const projects = [
  {
    name: "Portfolio Website",
    description: "A responsive, modern portfolio showcasing my work.",
    link: "#",
  },
  {
    name: "New Orleans Event Manager App",
    description: "A productivity app built with React and Tailwind CSS.",
    link: "https://aviselanj.github.io/task-manager/",
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

      {/* Sticky Navbar */}
      <nav className="fixed w-full bg-gray-800/75 bg-opacity-80 shadow-md z-50">
        <ul className="flex justify-center space-x-4 sm:space-x-6 md:space-x-8 p-3 sm:p-4">
          <li>
            <a
              href="#About"
              className="font-semibold text-gray-200 hover:text-indigo-400 transition text-sm sm:text-base md:text-lg"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="font-semibold text-gray-200 hover:text-indigo-400 transition text-sm sm:text-base md:text-lg"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="font-semibold text-gray-200 hover:text-indigo-400 transition text-sm sm:text-base md:text-lg"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Spacer */}
      <div className="h-16 sm:h-20"></div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen px-4 sm:px-6 md:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4">
          Avielle Lewis
        </h1>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 mb-4 sm:mb-6">
          Turning creative visions into interactive experiences with code and design.
        </h2>
        <p className="max-w-lg sm:max-w-xl md:max-w-2xl mx-auto text-base sm:text-lg md:text-xl mb-6">
          I’m a passionate web developer and New Orleans artist. I focus on building intuitive user experiences and leveraging technology to make systems smarter, safer, and more efficient.
        </p>
        <a
          href="#Projects"
          className="bg-white text-indigo-600 px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-md font-semibold hover:bg-gray-100 transition text-sm sm:text-base md:text-lg"
        >
          See My Work
        </a>
      </section>

      {/* About Section */}
      <section
        id="About"
        className="max-w-4xl mx-auto mt-16 p-4 sm:p-6 md:p-8 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">About Me</h2>
        <p className="text-sm sm:text-base md:text-lg">
          I’m a passionate web developer and New Orleans artist with five years of experience creating modern, responsive websites. I enjoy turning creative visions into interactive experiences. My portfolio blends design and functionality to showcase what’s possible when imagination meets code. I’m passionate about building intuitive user experiences and leveraging technology to automate routine tasks and enhance safety. I strive to develop solutions that make systems smarter, more efficient, and contribute to a better world.
        </p>
      </section>

      {/* Projects Section */}
      <section id="Projects" className="max-w-5xl mx-auto mt-16 p-4 sm:p-6 md:p-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid gap-4 sm:gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 bg-opacity-70 p-4 sm:p-5 md:p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition text-sm sm:text-base md:text-lg"
            >
              <h3 className="font-bold mb-2">{project.name}</h3>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="Contact"
        className="max-w-4xl mx-auto mt-16 p-4 sm:p-6 md:p-8 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg mb-10"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">Contact</h2>
        <ul className="space-y-2 text-sm sm:text-base md:text-lg">
          <li>
            Email:{" "}
            <a
              href="mailto:avielleslewis@yahoo.com"
              className="text-indigo-400 hover:underline"
            >
              avielleslewis@yahoo.com
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/aviselanj"
              className="text-indigo-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/aviselanj
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/avielle-lewis-9a5086199/"
              className="text-indigo-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/avielle-lewis
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
