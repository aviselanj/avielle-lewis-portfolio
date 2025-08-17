import ParticleBackground from "./ParticleBackground";

function App() {
  // Temporary placeholder projects (replace with your real ones later)
  const projects = [
    {
      name: "Portfolio Website",
      description: "A modern responsive portfolio built with React and Tailwind CSS.",
      link: "https://github.com/aviselanj/portfolio",
    },
    {
      name: "Weather App",
      description: "Real-time weather forecasts using a public API.",
      link: "https://github.com/aviselanj/weather-app",
    },
    {
      name: "E-commerce Store",
      description: "A sample e-commerce frontend with product pages and a shopping cart.",
      link: "https://github.com/aviselanj/ecommerce",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-600 font-sans relative">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Sticky Navbar */}
      <nav className="fixed w-full bg-white shadow-md z-50">
        <ul className="flex justify-center space-x-8 p-4">
          <li>
            <a
              href="#About"
              className="font-semibold text-gray-700 hover:text-indigo-900"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#Projects"
              className="font-semibold text-gray-700 hover:text-indigo-600"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Contact"
              className="font-semibold text-gray-700 hover:text-indigo-600"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Spacer to prevent content from hiding under navbar */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <section className="relative bg-indigo-600 text-white h-[400px] flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I’m Avielle</h1>
        <p className="text-xl mb-6">Frontend Developer & Designer</p>
        <div>
          <a
            href="#Projects"
            className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
          >
            See My Work
          </a>
        </div>
      </section>

      {/* About Section */}
      <section
        id="About"
        className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow relative z-10"
      >
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p>
          Hi! I’m Avielle, a passionate web developer who loves building modern,
          responsive web applications. I have experience with React, Tailwind
          CSS, and JavaScript, and I enjoy creating clean, user-friendly
          interfaces.
        </p>
      </section>

      {/* Projects Section */}
      <section
        id="Projects"
        className="max-w-4xl mx-auto mt-10 p-6 relative z-10"
      >
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-5 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="Contact"
        className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow mb-10 relative z-10"
      >
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <ul className="space-y-2">
          <li>
            Email:{" "}
            <a
              href="mailto:avielle@example.com"
              className="text-indigo-600 hover:underline"
            >
              avielle@example.com
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/aviselanj"
              className="text-indigo-600 hover:underline"
            >
              github.com/aviselanj
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/avielle-lewis"
              className="text-indigo-600 hover:underline"
            >
              linkedin.com/in/avielle-lewis
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
