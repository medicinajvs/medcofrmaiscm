import React from 'react';
import { Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0b1121] border-t border-slate-800 pt-10 pb-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                
                {/* Links de Navegação */}
                <div className="flex items-center gap-6 text-sm text-slate-400">
                    <a href="#" className="hover:text-white transition-colors">Suporte</a>
                    <a href="#" className="hover:text-white transition-colors">Termos</a>
                    <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                </div>
                
                {/* Logo Central */}
                <div className="text-center">
                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        Medicina JVS
                    </span>
                    <p className="text-xs text-slate-500 mt-1">Excelência em Preparação Médica</p>
                </div>
                
                {/* Redes Sociais */}
                <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all border border-transparent hover:border-blue-500">
                        <Instagram size={20} fill="currentColor" strokeWidth={0} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-all border border-transparent hover:border-red-500">
                        <Youtube size={20} fill="currentColor" strokeWidth={0} />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white transition-all border border-transparent hover:border-blue-600">
                        <Linkedin size={20} fill="currentColor" strokeWidth={0} />
                    </a>
                </div>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-slate-800/50 mt-8 pt-4 text-center text-xs text-slate-600">
                &copy; 2025 MedCof USA. Todos os direitos reservados.
            </div>
        </div>
    </footer>
  );
};

export default Footer;