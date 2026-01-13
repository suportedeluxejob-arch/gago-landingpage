import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Logo e Nome Centralizados */}
        <div className="flex flex-col items-center mb-12">
          {/* Logo em Círculo */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-xl">
            <div className="text-center">
              <div className="text-white font-black text-3xl leading-none">W</div>
              <div className="text-white font-black text-3xl leading-none">G</div>
            </div>
          </div>

          {/* Nome WG PATCH */}
          <h2 className="text-2xl font-black text-white tracking-tighter text-center">
            WG<span className="text-blue-500 ml-1">PATCH</span>
          </h2>
          <p className="text-blue-500 text-sm font-semibold mt-2">Futebol</p>
        </div>

        {/* Descrição */}
        <p className="text-sm mb-8 max-w-md mx-auto text-center">
          Não somos afiliados à EA Sports. Este é um produto independente criado pela comunidade para a comunidade.
        </p>

        {/* Links */}
        <div className="flex justify-center gap-6 text-sm mb-8 flex-wrap">
          <a href="#" className="hover:text-white transition">Termos de Uso</a>
          <a href="#" className="hover:text-white transition">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition">Suporte</a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-600 text-center">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};