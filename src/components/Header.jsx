export default function Header() {
  return (
    <header className="bg-primaryEarthyDark text-textMain p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-xl font-heading">Visanth</div>
      <nav className="space-x-6 font-body">
        {['/', '/about', '/projects', '/skills', '/contact'].map((path, i) => (
          <a
            key={i}
            href={path}
            className="relative text-textMain hover:text-accentRust transition-colors duration-300"
          >
            <span className="after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-accentRust after:transition-[width] after:duration-300 hover:after:w-full relative">
              {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
            </span>
          </a>
        ))}
      </nav>
    </header>
  );
}
