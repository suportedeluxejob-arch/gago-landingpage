import React from 'react';
import { CLIENT_FEEDBACKS } from '../constants';

export const ClientFeedback: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            O que nossos <span className="text-cyan-500">clientes</span> dizem
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Veja os feedbacks reais de quem já atualizou seu EA FC com sucesso
          </p>
        </div>

        {/* Grid de Feedbacks */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
          {CLIENT_FEEDBACKS.map((feedback) => (
            <div
              key={feedback.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100"
            >
              <div className="relative aspect-video bg-slate-50">
                <img
                  src={feedback.image}
                  alt={`Feedback do cliente ${feedback.id}`}
                  className="w-full h-full object-contain p-2"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Info texto abaixo */}
        <div className="text-center mt-12">
          <p className="text-sm text-slate-500 max-w-2xl mx-auto px-2">
            Estes são apenas alguns dos muitos feedbacks que recebemos diariamente de nossos clientes satisfeitos.
          </p>
        </div>
      </div>
    </section>
  );
};
