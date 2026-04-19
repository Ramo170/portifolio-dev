export default function Experience() {
  return (
    <section className="max-w-6xl mx-auto px-1 py-20">
      {/* Título dinâmico */}
      <h2 className="text-3xl font-semibold text-black dark:text-white mb-12 transition-colors">
        Experiência
      </h2>

      <div className="space-y-12">
        {/* ITEM 1 */}
        <div className="grid md:grid-cols-[150px_1fr] gap-6 group">
          <span className="text-zinc-500">2026</span>
          <div className="transition duration-300 p-6 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <h3 className="text-xl font-semibold text-black dark:text-white transition-colors">
              Desenvolvimento de Software - Estoque Api
            </h3>
            <p className="text-yellow-600 dark:text-yellow-400 font-medium">
              Conta simples
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
              Desenvolvimento do Backend e frontend de uma API RESTful para
              gerenciamento de estoque, utilizando Node.js, Express e MySQL. A
              API permite operações CRUD para produtos, categorias e
              fornecedores, além de autenticação JWT para segurança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
