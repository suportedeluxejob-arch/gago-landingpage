import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <p className="font-bold text-white text-lg mb-4">PatchDeTimes</p>
        <p className="text-sm mb-6 max-w-md mx-auto">
          Não somos afiliados à EA Sports. Este é um produto independente criado pela comunidade para a comunidade.
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="#" className="hover:text-white transition">Termos de Uso</a>
          <a href="#" className="hover:text-white transition">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition">Suporte</a>
        </div>
        <p className="text-xs mt-8 text-slate-600">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};