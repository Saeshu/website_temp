export default function Navbar() {
  return (
    <nav className="py-6 mb-12">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">Saeshwaran Arul Murugan</h1>

        <div className="flex space-x-8 text-sm text-gray-400 pr-2">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="/resume.pdf">CV</a>
        </div>
      </div>
    </nav>
  );
}
