import React from 'react';
import { Button } from './Button';
import { CheckCircle2, ShieldCheck, Trophy } from 'lucide-react';
import { HERO_IMAGE_URL, GAME_COVERS_URL, PRODUCT_PRICE_NEW, PRODUCT_PRICE_OLD } from '../constants';

export const Hero: React.FC = () => {
  const scrollToCheckout = () => {
    const element = document.getElementById('pricing');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-12 pb-16 lg:pt-24 lg:pb-24 bg-gradient-to-br from-slate-50 to-blue-50/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <ShieldCheck className="w-4 h-4 mr-2" />
              100% Seguro e Atualizado
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6">
              Licencie seu <span className="text-blue-600">EA FC 26 ou 25</span> de PS4, PS5 e Xbox
            </h1>
            
            <div className="mb-6 space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
                OBTENHA AS EQUIPES BRASILEIRAS
              </h2>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
                <span className="text-green-600">100% ATUALIZADAS</span> E LICENCIADAS COM ESSA ATUALIZAÇÃO
              </h2>
            </div>

            {/* Imagem das Capas (Referência) Logo Abaixo do Texto */}
            <div className="mb-8 w-full max-w-lg">
              <img 
                src={GAME_COVERS_URL} 
                alt="Capas EA FC 26 Flamengo PS4 PS5 Xbox" 
                className="w-full h-auto drop-shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button onClick={scrollToCheckout} className="text-lg">
                QUERO ATUALIZAR MEU EA FC HOJE
              </Button>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 w-fit">
              <div className="flex flex-col">
                <span className="text-sm text-slate-500 line-through font-medium">DE: R$ {PRODUCT_PRICE_OLD}</span>
                <span className="text-3xl font-black text-blue-600">POR: R$ {PRODUCT_PRICE_NEW}</span>
              </div>
              <div className="h-10 w-px bg-slate-200 mx-2"></div>
              <div className="flex items-center text-sm font-semibold text-green-600">
                <CheckCircle2 className="w-5 h-5 mr-1" />
                Entrega Imediata
              </div>
            </div>
          </div>

          {/* Image Content - Reference Image 1 (Neymar Style) */}
          <div className="relative group hidden lg:block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              {/* NOTE: In production, use the actual uploaded Neymar image here */}
              <img 
                src={HERO_IMAGE_URL} 
                alt="Banner EA FC Neymar Santos" 
                className="w-full h-auto object-cover transform transition hover:scale-105 duration-700"
              />
              
              {/* Float Badge Example */}
              <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur shadow-lg p-3 rounded-xl flex items-center gap-3">
                <div className="bg-yellow-100 p-2 rounded-full text-yellow-600">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase">Ligas</p>
                  <p className="text-sm font-bold text-slate-800">Licenciadas</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};