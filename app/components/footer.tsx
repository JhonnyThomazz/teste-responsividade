'use client';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-6 mt-auto">
      {/* Container principal com Flexbox responsivo e data-cy exigido */}
      <div
        data-cy="footer-container"
        className="flex flex-col md:flex-row justify-between gap-6 max-w-6xl mx-auto"
      >
        {/* Bloco 1 */}
        <div data-cy="footer-bloco-1" className="flex-1">
          <h3 className="text-lg font-bold mb-2">MeuApp</h3>
          <p className="text-sm text-gray-300">
            Soluções modernas e responsivas para a sua aplicação web.
          </p>
        </div>

        {/* Bloco 2 */}
        <div data-cy="footer-bloco-2" className="flex-1">
          <h3 className="text-lg font-bold mb-2">Links Rápidos</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Sobre</a></li>
            <li><a href="#" className="hover:underline">Contato</a></li>
          </ul>
        </div>

        {/* Bloco 3 */}
        <div data-cy="footer-bloco-3" className="flex-1">
          <h3 className="text-lg font-bold mb-2">Contato</h3>
          <p className="text-sm text-gray-300">contato@meuapp.com.br</p>
          <p className="text-sm text-gray-300">São Paulo - SP</p>
        </div>
      </div>
    </footer>
  );
}