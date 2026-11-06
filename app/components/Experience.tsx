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
          <span className="text-zinc-500">Junho de 2025 - Outubro de 2026</span>
          <div className="transition duration-300 p-6 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <h3 className="text-xl font-semibold text-black dark:text-white transition-colors">
              Curso técnico em análise e desenvolvimento de sistemas
            </h3>
            <p className="text-yellow-600 dark:text-yellow-400 font-medium">
              Senai Pernambuco 
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
              Formação técnica com base em lógica de programação, orientação a
              objetos, modelagem de banco de dados e desenvolvimento web.
              Desenvolvi APIs REST em Java com Spring Boot e em Node.js com
              Express, integradas a bancos MySQL, além de aplicações front-end
              que consomem essas APIs. Também apliquei testes automatizados,
              versionamento com Git e boas práticas de código em projetos
              práticos.
            </p>
          </div>
        </div>
      </div>


            <div className="space-y-12">
        {/* ITEM 2 */}
        <div className="grid md:grid-cols-[150px_1fr] gap-6 group">
          <span className="text-zinc-500">Novembro de 2025 - Em andamento</span>
          <div className="transition duration-300 p-6 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <h3 className="text-xl font-semibold text-black dark:text-white transition-colors">
              Curso programador full stack
            </h3>
            <p className="text-yellow-600 dark:text-yellow-400 font-medium">
              Senai São Paulo
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
              Formação voltada ao desenvolvimento de aplicações web completas,
              do front-end ao back-end. Construo interfaces com HTML, CSS,
              JavaScript e React, e APIs REST com Node.js e Express, integradas
              a bancos de dados relacionais (MySQL). Também aplico versionamento
              com Git/GitHub e metodologias ágeis em projetos práticos em
              equipe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
