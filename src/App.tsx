/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  Heart, 
  Star, 
  CheckCircle2, 
  Instagram, 
  ChevronRight, 
  ChevronLeft,
  Menu, 
  X,
  Sparkles,
  Award,
  Users,
  CheckCheck,
  MoreVertical,
  Phone,
  Video,
  ArrowLeft
} from 'lucide-react';

// --- Components ---

const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-luxury-cream py-2 shadow-sm text-luxury-dark' : 'bg-transparent py-3 text-white'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            className={`h-10 md:h-12 w-auto transition-all duration-500 ${isScrolled ? 'brightness-0' : ''}`} 
            alt="WMN Logo" 
          />
        </div>
        
        {/* Desktop Menu */}
        <div className={`hidden md:flex gap-8 items-center text-xs uppercase tracking-[0.2em] font-medium ${isScrolled ? 'text-luxury-dark' : 'text-white'}`}>
          <a href="#collections" className="hover:text-luxury-gold transition-colors">Coleções</a>
          <a href="#details" className="hover:text-luxury-gold transition-colors">Diferenciais</a>
          <a href="#famous" className="hover:text-luxury-gold transition-colors">Celebridades</a>
          <a href="#feedback" className="hover:text-luxury-gold transition-colors">Depoimentos</a>
          <a 
            href="https://wa.me/555132736608" 
            className="bg-[#25D366] text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <WhatsAppIcon size={16} />
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className={`md:hidden ${isScrolled ? 'text-luxury-dark' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-luxury-cream border-t border-black/5 p-8 flex flex-col gap-6 text-center md:hidden text-luxury-dark"
          >
            <a href="#collections" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-widest">Coleções</a>
            <a href="#details" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-widest">Diferenciais</a>
            <a href="#famous" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-widest">Celebridades</a>
            <a href="#feedback" onClick={() => setIsMenuOpen(false)} className="text-sm uppercase tracking-widest">Depoimentos</a>
            <a href="https://wa.me/555132736608" className="bg-[#25D366] text-white py-3 rounded-full uppercase text-xs tracking-widest flex items-center justify-center gap-2"><WhatsAppIcon size={16} /> Falar no WhatsApp</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-12 md:pb-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/destaque-converte-bem.jpeg" 
          alt="Luxury Wedding Prep" 
          className="w-full h-full object-cover object-top"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mt-16 md:mt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/90 uppercase tracking-[0.4em] text-[10px] md:text-xs mb-6 block drop-shadow-md"
        >
          Elegância em cada detalhe
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-8xl text-white mb-8 leading-[1.1] md:leading-[0.9] drop-shadow-xl font-serif"
        >
          Seu momento de <br />
          <span className="italic text-luxury-gold drop-shadow-lg">luxo inesquecível</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-white text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light drop-shadow-md"
        >
          Robes de toque de seda e personalização fina para noivas, debutantes e momentos que merecem ser eternizados.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a 
            href="https://wa.me/555132736608" 
            className="bg-[#25D366] text-white px-6 sm:px-10 py-4 rounded-full text-sm sm:text-base font-medium flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-[#25D366]/30 hover:scale-105 transition-all duration-500 group whitespace-nowrap"
          >
            <WhatsAppIcon size={20} />
            Orçamento pelo WhatsApp
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#collections" 
            className="border border-white/30 text-white px-10 py-4 rounded-full font-medium backdrop-blur-sm hover:bg-white/10 transition-all duration-500"
          >
            Ver Coleções
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-[1px] h-12 bg-white/30 mx-auto" />
      </motion.div>
    </section>
  );
};

const Collections = () => {
  const items = [
    {
      title: "Casamento: Noivas & Madrinhas",
      desc: "O making of perfeito com robes de seda personalizados para o seu grande dia.",
      img: "/Galeria/casamento/casamento-02.jpeg",
      tag: "Casamento"
    },
    {
      title: "Debutantes 15 Anos",
      desc: "O brilho e a sofisticação para o seu dia de princesa.",
      img: "/Galeria/casamento/debut/whatsapp-image-2026-03-12-at-17-21-47.jpeg",
      tag: "Debut"
    }
  ];

  return (
    <section id="collections" className="py-16 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Nossas Linhas</span>
          <h2 className="text-3xl md:text-5xl mb-6 font-serif">Coleções Exclusivas</h2>
          <div className="w-20 h-[1px] bg-luxury-gold mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
                  {item.tag}
                </div>
              </div>
              <h3 className="text-2xl mb-2 group-hover:text-luxury-gold transition-colors">{item.title}</h3>
              <p className="text-luxury-dark/60 font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Sparkles className="text-luxury-gold" />,
      title: "Toque de Seda",
      desc: "Tecidos premium que proporcionam conforto e caimento impecável para fotos."
    },
    {
      icon: <Award className="text-luxury-gold" />,
      title: "Bordado de Alta Precisão",
      desc: "Personalização com fios de seda e acabamento de alta costura."
    },
    {
      icon: <Users className="text-luxury-gold" />,
      title: "Atendimento VIP",
      desc: "Consultoria exclusiva para escolher as cores e fontes que combinam com seu evento."
    }
  ];

  return (
    <section id="details" className="py-16 md:py-32 px-6 bg-luxury-cream">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Por que nos escolher?</span>
          <h2 className="text-3xl md:text-5xl mb-8 leading-tight font-serif">A qualidade que o seu <br /><span className="italic">grande dia</span> exige</h2>
          <p className="text-luxury-dark/70 mb-12 font-light leading-relaxed">
            Não entregamos apenas robes, entregamos a moldura para as suas memórias mais preciosas. Cada peça é confeccionada com o carinho e a precisão que um momento único pede.
          </p>
          
          <div className="space-y-8">
            {features.map((f, i) => (
              <div key={i} className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-xl mb-1 font-serif">{f.title}</h4>
                  <p className="text-sm text-luxury-dark/60 font-light">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/destaque-muito-afeto.jpeg" 
              alt="Detailing" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Badge */}
          <div className="absolute -bottom-8 -left-4 md:-left-12 bg-white p-6 md:p-8 rounded-3xl shadow-2xl max-w-[260px] border border-black/5">
            <div className="flex text-luxury-gold mb-3 gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
            </div>
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-luxury-dark/50 mb-2">Qualidade Premium</p>
            <p className="text-xl md:text-2xl font-serif italic text-luxury-dark leading-tight">
              <span className="text-luxury-gold font-bold not-italic text-2xl md:text-3xl">+5.000</span><br/>
              Noivas Felizes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FamousSection = () => {
  const famous = [
    { name: "Paula Feijó", img: "/Galeria/casamento/insta-01.jpg", link: "https://www.instagram.com/paulafeijo?igsh=eGhxM3BydmRxaHox" },
    { name: "Michelle Heiden", img: "/Galeria/casamento/foto-02.jpg", link: "https://www.instagram.com/michelleheidenn?igsh=amEwbzFubGV0a3Fq" },
    { name: "Bruna Manzon", img: "/Galeria/casamento/foto-03.jpg", link: "https://www.instagram.com/brunamanzon?igsh=ZmZpZjNlZzVienVx" },
    { name: "Emilly Araújo", img: "/Galeria/casamento/foto-04.jpg", link: "https://www.instagram.com/emillyaraujoc?igsh=MWl6NHUyNnY2MWFteg%3D%3D" },
    { name: "Stéfani Bays", img: "/Galeria/casamento/foto-05.jpg", link: "https://www.instagram.com/stefanibays?igsh=MXJnc28zMXVxYXc0Yw%3D%3D" },
    { name: "Natana de Leon", img: "/Galeria/casamento/foto-06.jpg", link: "https://www.instagram.com/natanadeleon?igsh=MTQxd3oxOXc1MTI2eA%3D%3D" },
  ];

  return (
    <section id="famous" className="py-16 md:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Presença VIP</span>
        <h2 className="text-3xl md:text-5xl mb-12 font-serif">Quem já usou WMN</h2>
        
        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-y-10 gap-x-6 md:gap-12">
          {famous.map((f, i) => (
            <motion.a 
              key={i}
              href={f.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="text-center group flex flex-col items-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-luxury-gold transition-all duration-500 p-1 mx-auto">
                <img 
                  src={f.img} 
                  alt={f.name} 
                  className="w-full h-full object-cover rounded-full transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs uppercase tracking-widest font-medium text-luxury-dark/60 group-hover:text-luxury-dark transition-colors">{f.name}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const feedbacks = [
    {
      date: "ter., 3 de mar.",
      messages: [
        { sender: 'client', text: "Amei meu conjunto", emoji: "😍", time: "12:15" }
      ]
    },
    {
      date: "qua., 4 de mar.",
      messages: [
        { sender: 'client', text: "Oiiiii, abri hoje a embalagem", time: "17:22" },
        { sender: 'client', text: "Acredita?", time: "17:22" },
        { sender: 'client', text: "LINDÍSSIMOOOOOO", time: "17:22" },
        { sender: 'client', text: "AMEI AMEI", time: "17:22" }
      ]
    },
    {
      date: "sáb., 20 de dez.",
      messages: [
        { sender: 'client', text: "Oie boa tarde", time: "12:08" },
        { sender: 'client', text: "Vocês ainda estão trabalhando??", time: "12:08" },
        { sender: 'client', text: "Menina recebi os pijamas amei", time: "12:09" }
      ]
    },
    {
      date: "seg., 15 de jan.",
      messages: [
        { sender: 'client', text: "Oiiii! Chegou aqui e ficou lindoooooo! Eu amei", emoji: "💛💛", time: "16:48" }
      ]
    },
    {
      date: "qui., 12 de fev.",
      messages: [
        { sender: 'client', text: "Boa tarde!\nRecebi a encomenda! Amei!", time: "15:25" },
        { sender: 'client', text: "A propósito, tem uma amiga que tem interesse!", time: "15:25" }
      ]
    },
    {
      date: "sex., 22 de ago.",
      messages: [
        { sender: 'client', text: "Olá! Passando pra agradecer", time: "10:05" },
        { sender: 'client', text: "Chegaram já!! Lindos", time: "10:05" }
      ]
    },
    {
      date: "dom., 5 de out.",
      messages: [
        { sender: 'client', text: "Obrigada minha encomenda chegou, fiquei muito feliz, amei Obrigada", time: "15:40" }
      ]
    },
    {
      date: "qua., 18 de nov.",
      messages: [
        { sender: 'client', text: "Oii, só pra avisar que chegou aqui!!!\nMuito obrigada, amei muito!", emoji: "💗💗", time: "13:57" }
      ]
    }
  ];

  return (
    <section id="feedback" className="py-16 md:py-32 bg-luxury-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="px-6 flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center md:text-left">
          <div>
            <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Relatos Reais</span>
            <h2 className="text-3xl md:text-5xl italic font-serif">O que dizem <br/>nossas clientes</h2>
          </div>
          <div className="flex gap-4 justify-center md:justify-start">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-luxury-dark/10 flex items-center justify-center hover:bg-luxury-gold hover:text-white hover:border-luxury-gold transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-luxury-dark/10 flex items-center justify-center hover:bg-luxury-gold hover:text-white hover:border-luxury-gold transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8 px-6 md:px-0"
        >
          {feedbacks.map((chat, i) => (
            <div 
              key={i} 
              className="w-[85vw] md:w-[360px] shrink-0 snap-center md:snap-start flex flex-col relative border border-black/5 shadow-sm rounded-[2rem] overflow-hidden bg-[#E5DDD5] h-auto min-h-[300px]"
            >
              {/* Body WhatsApp */}
              <div className="flex-1 p-6 flex flex-col gap-2 relative bg-[#E5DDD5] z-0">
                <div 
                  className="absolute inset-0 z-[-1] opacity-[0.06]"
                  style={{
                    backgroundImage: `url("https://storage.googleapis.com/aistudio-user-uploads-us-central1/20260313/025745/14a82208-4122-4217-9150-1376d295982e.jpg")`,
                    backgroundSize: '300px',
                    backgroundRepeat: 'repeat',
                  }}
                />
                <div className="flex justify-center mb-4 mt-2">
                  <span className="bg-white/60 text-luxury-dark/60 text-[11px] px-3 py-1 rounded-lg shadow-sm font-medium">
                    {chat.date}
                  </span>
                </div>
                
                {chat.messages.map((msg, idx) => {
                  const showTail = idx === 0;

                  // Highlight the word "amei" to mimic the search highlight in the screenshots
                  const highlightedText = msg.text.split(/(amei)/i).map((part, index) => 
                    part.toLowerCase() === 'amei' 
                      ? <span key={index} className="bg-[#ffeb3b] text-black px-0.5 rounded-sm">{part}</span> 
                      : part
                  );

                  return (
                    <div 
                      key={idx} 
                      className={`relative max-w-[90%] px-3 py-1.5 shadow-sm flex flex-col bg-white self-start rounded-xl ${showTail ? 'rounded-tl-none' : ''} ${!showTail ? 'ml-[10px]' : ''}`}
                    >
                      {/* Tail */}
                      {showTail && (
                        <div className="absolute top-0 -left-[10px] w-0 h-0 border-t-[0px] border-t-transparent border-b-[14px] border-b-transparent border-r-[10px] border-r-white" />
                      )}

                      <div className="flex flex-wrap items-end gap-2">
                        <p className="text-[#111111] text-[14px] leading-relaxed whitespace-pre-wrap font-sans pt-1">
                          {highlightedText}
                          {msg.emoji && (
                            <span className="inline-block ml-1 text-lg">
                              {msg.emoji}
                            </span>
                          )}
                        </p>
                        <div className="flex items-center gap-1 ml-auto mt-1 float-right">
                          <span className="text-[10px] text-[#667781] leading-none">{msg.time}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-luxury-dark text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2">
          <img src="/logo.png" className="h-16 w-auto mb-6" alt="WMN Logo" />
          <p className="text-white/50 font-light max-w-sm mb-8">
            Especialistas em criar momentos inesquecíveis através de robes personalizados de alto luxo. Qualidade, sofisticação e carinho em cada ponto.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/withmyname_?igsh=MXZsZDNpNTV1bmk3MA%3D%3D" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-luxury-dark transition-all">
              <Instagram size={18} />
            </a>
            <a href="https://wa.me/555132736608" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-luxury-dark transition-all">
              <WhatsAppIcon size={18} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-luxury-gold">Links Úteis</h4>
          <ul className="space-y-4 text-sm text-white/60 font-light">
            <li><a href="#collections" className="hover:text-white transition-colors">Coleções</a></li>
            <li><a href="#details" className="hover:text-white transition-colors">Diferenciais</a></li>
            <li><a href="#famous" className="hover:text-white transition-colors">Celebridades</a></li>
            <li><a href="#feedback" className="hover:text-white transition-colors">Depoimentos</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-luxury-gold">Contato</h4>
          <ul className="space-y-4 text-sm text-white/60 font-light">
            <li className="flex items-center gap-2">(051) 3273-6608</li>
            <li className="flex items-center gap-2">São Paulo, Brasil</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-white/30">
        <p>© 2026 WMN Personalizados. Todos os direitos reservados.</p>
        <p>Desenvolvido com sofisticação</p>
      </div>
    </footer>
  );
};

const CTASection = () => {
  return (
    <section className="py-16 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto bg-luxury-dark rounded-3xl md:rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-luxury-gold/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-6xl text-white mb-8 font-serif">Pronta para viver o <br /><span className="italic text-luxury-gold">seu momento?</span></h2>
          <p className="text-white/60 text-lg mb-12 max-w-xl mx-auto font-light">
            Clique no botão abaixo e fale agora com uma de nossas consultoras para receber um orçamento personalizado.
          </p>
          <a 
            href="https://wa.me/555132736608" 
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 md:px-12 md:py-5 rounded-full text-base md:text-lg font-medium hover:scale-105 transition-transform duration-300 shadow-xl shadow-[#25D366]/30 whitespace-nowrap"
          >
            <WhatsAppIcon size={24} />
            Chamar no WhatsApp
          </a>
          <p className="mt-6 text-white/30 text-[10px] uppercase tracking-[0.2em]">Resposta em poucos minutos</p>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const images = [
    "/Galeria/casamento/debut/whatsapp-image-2026-03-12-at-17-21-47.jpeg",
    "/Galeria/casamento/debut/whatsapp-image-2026-03-12-at-17-21-48-1.jpeg",
    "/Galeria/casamento/debut/whatsapp-image-2026-03-12-at-17-21-48-2.jpeg",
    "/Galeria/casamento/debut/whatsapp-image-2026-03-12-at-17-21-48-3.jpeg",
    "/Galeria/casamento/debut/whatsapp-image-2026-03-12-at-17-21-48.jpeg",
    "/Galeria/casamento/casamento-01.jpeg",
    "/Galeria/casamento/casamento-02.jpeg",
    "/Galeria/casamento/casamento-03.jpeg",
    "/Galeria/casamento/casamento-04.jpeg",
    "/Galeria/casamento/casamento-05.jpeg",
    "/Galeria/casamento/casamento-06.jpeg",
    "/Galeria/casamento/casamento-07.jpeg",
    "/Galeria/casamento/casamento-08.jpeg",
    "/Galeria/casamento/casamento-09.jpeg",
    "/Galeria/casamento/casamento-10.jpeg",
    "/Galeria/casamento/casamento-11.jpeg",
    "/Galeria/casamento/casamento-12.jpeg",
    "/Galeria/casamento/casamento-13.jpeg",
    "/Galeria/casamento/casamento-14.jpeg",
    "/Galeria/casamento/casamento-15.jpeg",
    "/Galeria/casamento/casamento-16.jpeg",
    "/Galeria/casamento/casamento-17.jpeg",
    "/Galeria/casamento/casamento-18.jpeg",
    "/Galeria/casamento/casamento-19.jpeg",
    "/Galeria/casamento/casamento-20.jpeg",
    "/Galeria/casamento/casamento-21.jpeg",
    "/Galeria/casamento/casamento-22.jpeg",
    "/Galeria/casamento/casamento-23.jpeg",
    "/Galeria/casamento/casamento-24.jpeg",
    "/Galeria/casamento/casamento-25.jpeg",
    "/Galeria/casamento/casamento-26.jpeg",
    "/Galeria/casamento/casamento-27.jpeg",
    "/Galeria/casamento/casamento-28.jpeg",
    "/Galeria/casamento/casamento-29.jpeg",
    "/Galeria/casamento/casamento-30.jpeg",
    "/Galeria/casamento/casamento-31.jpeg",
    "/Galeria/casamento/casamento-32.jpeg",
    "/Galeria/casamento/casamento-33.jpeg",
    "/Galeria/casamento/casamento-34.jpeg",
    "/Galeria/casamento/casamento-35.jpeg",
    "/Galeria/casamento/casamento-36.jpeg",
    "/Galeria/casamento/casamento-37.jpeg",
    "/Galeria/casamento/casamento-38.jpeg",
    "/Galeria/casamento/casamento-39.jpeg",
    "/Galeria/casamento/casamento-40.jpeg",
    "/Galeria/casamento/casamento-41.jpeg",
    "/Galeria/casamento/casamento-42.jpeg"
  ];

  return (
    <section id="gallery" className="py-16 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Inspirações</span>
          <h2 className="text-3xl md:text-5xl mb-6 font-serif">Nossa Galeria</h2>
          <div className="w-20 h-[1px] bg-luxury-gold mx-auto" />
        </div>
        
        <div 
          className={`relative transition-[max-height] duration-1000 ease-in-out ${!isExpanded ? 'max-h-[800px] overflow-hidden' : 'max-h-[10000px]'}`}
        >
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
            {images.map((img, i) => (
              <div 
                key={i}
                className="break-inside-avoid overflow-hidden rounded-xl group relative mb-4"
              >
                <img 
                  src={encodeURI(img)} 
                  alt={`Galeria ${i + 1}`} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          <div 
            className={`absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white via-white/90 to-transparent flex items-end justify-center pb-8 z-10 pointer-events-none transition-opacity duration-700 ease-in-out ${isExpanded ? 'opacity-0' : 'opacity-100'}`}
          >
            <button 
              onClick={() => setIsExpanded(true)}
              className={`pointer-events-auto bg-gradient-to-r from-[#c5a059] to-[#d4af37] text-white px-8 md:px-10 py-4 rounded-full font-medium tracking-wide shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 ${isExpanded ? 'hidden' : ''}`}
            >
              <Sparkles size={18} />
              Ver galeria completa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-luxury-gold selection:text-white">
      <Navbar />
      <Hero />
      <Collections />
      <Features />
      <FamousSection />
      <Testimonials />
      <Gallery />
      <CTASection />
      <Footer />
      
      {/* Floating WhatsApp for Desktop Only */}
      <a 
        href="https://wa.me/555132736608" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 items-center gap-2 group"
      >
        <WhatsAppIcon size={28} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium">
          Falar com consultora
        </span>
      </a>
    </div>
  );
}
