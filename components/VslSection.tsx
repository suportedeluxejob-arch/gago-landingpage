import React from 'react';
import { Play } from 'lucide-react';

export const VslSection: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Veja como fica o jogo <span className="text-blue-600">após a atualização</span>
          </h2>
          <p className="text-slate-500 mt-2">Assista ao vídeo abaixo (VSL)</p>
        </div>

        {/* Video Wrapper */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-900 group cursor-pointer">
          {/* Placeholder for Video Embed - Ideally user replaces this with their VSL iframe */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
             {/* This is a placeholder visual since we don't have the actual video link */}
             <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                </div>
             </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
             <p className="text-white font-medium text-center">Clique para ver a demonstração completa</p>
          </div>
          {/* 
            To Embed Video, replace the content of this div with:
            <iframe src="YOUR_VIDEO_URL" className="w-full h-full" allowFullScreen></iframe>
          */}
        </div>
      </div>
    </section>
  );
};