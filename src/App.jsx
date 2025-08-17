import React from "react";
import ParticleBackground from "./ParticleBackground";

export default function App() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-gray-200 font-sans overflow-hidden">
      {/* 🌌 Particle background */}
      <ParticleBackground />

      {/* 🌟 Navbar */}
      <header className="relative z-10">
        <nav className="flex justify-between items-center max-w-6xl mx-auto px-6 py-4 bg-black/50 backdrop-blur-md rounded-b-2xl shadow-lg">
          <h1 className="text-2xl font-bold text-yellow-300">AviTheCreator</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-yellow-300 transition">About</a></li>
            <li><a href="#projects" className="hover:text-yellow-300 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-yellow-300 transition">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* 🌟 Hero Section */}
      <section className="relative z-10 text-center mt-20 px-6">
        <h2 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-400">
          Welcome to My Universe
        </h2>
        <p className="text-lg text-gray-300">
          I’m AviTheCreator, building digital worlds one project at a time.
        </p>
      </section>

      {/* 🌟 About Section */}
      <section
        id="about"
        className="relative z-10 max-w-4xl mx-auto mt-20 p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg"
      >
        <h3 className="text-3xl font-semibold text-yellow-300 mb-4">About Me</h3>
        <p>
          I’m a passionate web developer who loves turning creative visions into interactive
          experiences. My portfolio blends design and functionality to showcase
          what’s possible when imagination meets code.
        </p>
      </section>

      {/* 🌟 Projects Section */}
      <section
        id="projects"
        className="relative z-10 max-w-5xl mx-auto mt-20 p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg"
      >
        <h3 className="text-3xl font-semibold text-yellow-300 mb-6">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-black/50 rounded-xl shadow hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2">Project 1</h4>
            <p>A cool project showcasing my frontend skills.</p>
          </div>
          <div className="p-6 bg-black/50 rounded-xl shadow hover:scale-105 transition">
            <h4 className="text-xl font-bold mb-2">Project 2</h4>
            <p>A full-stack application that solves real-world problems.</p>
          </div>
        </div>
      </section>

      {/* 🌟 Contact Section */}
      <section
        id="contact"
        className="relative z-10 max-w-4xl mx-auto mt-20 mb-20 p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg text-center"
      >
        <h3 className="text-3xl font-semibold text-yellow-300 mb-4">Contact</h3>
        <p>Let’s build something amazing together.</p>
        <a
          href="mailto:your-email@example.com"
          className="inline-block mt-4 px-6 py-3 bg-yellow-300 text-black font-semibold rounded-lg shadow hover:bg-yellow-400 transition"
        >
          Say Hello
        </a>
      </section>
    </div>
  );
}
