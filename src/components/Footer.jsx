export default function Footer() {
  return (
    <footer className="bg-primaryEarthyWarm text-textSecondary p-4 text-center font-body">
      <p>© 2025 Visanth. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a
          href="https://github.com/Vis-halV"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-textSecondary hover:text-accentRust transition-colors duration-300"
        >
          GitHub
        </a>
        <a
          href="mailto:contact@visanth.com"
          className="inline-block text-textSecondary hover:text-accentRust transition-colors duration-300"
        >
          Contact
        </a>
      </div>
    </footer>
  );
}
