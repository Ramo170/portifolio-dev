export default function Footer() {
  return (
    <footer className="max-w-5x1 mx-auto px-6 py-10 flex flex-col md:flex-row justify-around items-center text-sm text-black dark:text-white transition-colors border-t border-white/10 ">
      <p> 2026 - Ícaro Bihum</p>
      <p>
        Feito com{" "}
        <span className="text-black dark:text-white transition-colors font-semibold">
          Next.js + Tailwind
        </span>
      </p>
    </footer>
  );
}
