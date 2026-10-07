import React, { useState, useEffect } from 'react';
import {
  Star,
  Stethoscope,
  Lightbulb,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Dumbbell,
  HeartHandshake,
  Check,
  Gift,
  MessageCircle,
  X,
  Lock,
  Flame,
  ChevronDown,
  Maximize2,
  Clock,
  Zap,
  CheckCircle2
} from 'lucide-react';

// Data for page samples carousel
const PAGE_SAMPLES = [
  {
    id: 'flexao-anterior',
    title: 'Flexão Anterior Sentada',
    subtitle: 'Alongamentos e mobilidade da coluna',
    src: '/assets/kit-page-flexao-anterior-DUGuJCDT.webp',
  },
  {
    id: 'alongamento-coxa',
    title: 'Alongamento Posterior da Coxa',
    subtitle: 'Com apoio e foco em prevenção de dores',
    src: '/assets/kit-page-alongamento-coxa-CZYJU6OK.webp',
  },
  {
    id: 'halteres',
    title: 'Exercícios com Halteres',
    subtitle: 'Fortalecimento de membros superiores',
    src: '/assets/kit-page-halteres-CE9AphvI.webp',
  },
  {
    id: 'elevacao-pes',
    title: 'Elevação das Pontas dos Pés',
    subtitle: 'Fortalecimento da frente das pernas e tornozelos',
    src: '/assets/kit-page-elevacao-pes-B0MWn5n4.webp',
  },
  {
    id: 'marcha-parada',
    title: 'Marcha Parada com Apoio',
    subtitle: 'Resistência, coordenação e equilíbrio',
    src: '/assets/kit-page-marcha-parada-SgHkFm_Y.webp',
  },
  {
    id: 'rotina-final',
    title: 'Exercícios Extras e Rotina Final',
    subtitle: 'Sequências de desaquecimento e relaxamento',
    src: '/assets/kit-page-rotina-final-UMcZiwpq.webp',
  },
];

// Social proof WhatsApp screenshots
const PROOF_IMAGES = [
  {
    src: '/assets/prova-social-01-DWGWqX3d.webp',
    alt: 'Conversa no WhatsApp: Material aprovado e de qualidade',
    author: 'Dra. Vanessa M. - Fisioterapeuta',
    avatar: '/assets/avatar-1.jpg',
  },
  {
    src: '/assets/prova-social-02-D7uIcsCi.webp',
    alt: 'Conversa no WhatsApp: Material top demais e ótimo atendimento',
    author: 'Marcos A. - Ed. Físico',
    avatar: '/assets/avatar-2.jpg',
  },
  {
    src: '/assets/prova-social-03-MPZ1nE4Q.webp',
    alt: 'Conversa no WhatsApp: Muito melhor do que eu esperava',
    author: 'Juliana S. - Cuidadora',
    avatar: '/assets/avatar-3.jpg',
  },
  {
    src: '/assets/prova-social-04-CVdZaag-cbkzi6.webp',
    alt: 'Conversa no WhatsApp: Chegou tudo certo no WhatsApp',
    author: 'Carlos E. - Fisioterapeuta',
    avatar: '/assets/avatar-4.jpg',
  },
  {
    src: '/assets/prova-social-05-B5HY2NqC.webp',
    alt: 'Conversa no WhatsApp: Gostei muito, já estou usando',
    author: 'Cláudia R. - Terapeuta Ocupacional',
    avatar: '/assets/avatar-5.jpg',
  },
];

// FAQ items
const FAQ_ITEMS = [
  {
    q: 'Como recebo o material?',
    a: 'O acesso é 100% digital e enviado imediatamente para o seu e-mail e WhatsApp logo após a confirmação do pagamento. Você pode baixar em PDF e acessar quantas vezes quiser no celular, tablet ou computador, além de poder imprimir.',
  },
  {
    q: 'Funciona no celular?',
    a: 'Sim! Todos os materiais estão no formato PDF otimizado em alta definição, perfeitamente legíveis na tela do celular, tablet, notebook ou para impressão física.',
  },
  {
    q: 'Preciso de experiência prévia para aplicar?',
    a: 'Não. Cada exercício vem ilustrado passo a passo com orientações simples e claras de posição inicial, execução, variações para iniciantes/avançados e cuidados de segurança.',
  },
  {
    q: 'As atividades são fáceis de aplicar em grupo ou individual?',
    a: 'Sim! Os exercícios estão organizados estrategicamente por níveis de capacidade e objetivos (força, equilíbrio, flexibilidade, cognitivo), sendo ideais para atendimentos individuais (home care, clínica) ou aulas em grupo.',
  },
  {
    q: 'O acesso é imediato mesmo no PIX?',
    a: 'Sim! Pagamentos via PIX ou Cartão de Crédito têm liberação instantânea automática. Você recebe o link de acesso no seu WhatsApp e e-mail em menos de 1 minuto.',
  },
];

// Recent purchase toasts simulation with 30 unique Brazilian professionals
const RECENT_PURCHASES = [
  { name: 'Dra. Patrícia Mendes', city: 'São Paulo - SP', plan: 'Kit Completo (+3 Bônus)', time: 'Acabou de adquirir', avatar: '/assets/avatar-1.jpg' },
  { name: 'Dr. Roberto Klein', city: 'Curitiba - PR', plan: 'Kit Completo (+3 Bônus)', time: 'Há 1 min', avatar: '/assets/avatar-2.jpg' },
  { name: 'Ana Paula Guimarães', city: 'Belo Horizonte - MG', plan: 'Kit Completo (+3 Bônus)', time: 'Há 2 min', avatar: '/assets/avatar-3.jpg' },
  { name: 'Prof. Lucas Tavares', city: 'Porto Alegre - RS', plan: 'Kit Completo (+3 Bônus)', time: 'Há 3 min', avatar: '/assets/avatar-4.jpg' },
  { name: 'Mariana S. Albuquerque', city: 'Campinas - SP', plan: 'Kit Completo (+3 Bônus)', time: 'Há 4 min', avatar: '/assets/avatar-5.jpg' },
  { name: 'Cláudio Henrique Ramos', city: 'Rio de Janeiro - RJ', plan: 'Kit Completo (+3 Bônus)', time: 'Há 5 min', avatar: '/assets/avatar-6.jpg' },
  { name: 'Dra. Fernanda B. Costa', city: 'Brasília - DF', plan: 'Kit Completo (+3 Bônus)', time: 'Há 6 min', avatar: '/assets/avatar-7.jpg' },
  { name: 'Rodrigo P. Nogueira', city: 'Florianópolis - SC', plan: 'Kit Completo (+3 Bônus)', time: 'Há 7 min', avatar: '/assets/avatar-8.jpg' },
  { name: 'Camila Duarte Vieira', city: 'Goiânia - GO', plan: 'Kit Completo (+3 Bônus)', time: 'Há 8 min', avatar: '/assets/avatar-9.jpg' },
  { name: 'Dra. Beatriz Fontana', city: 'Santos - SP', plan: 'Kit Completo (+3 Bônus)', time: 'Há 9 min', avatar: '/assets/avatar-10.jpg' },
  { name: 'Marcos Vinícius Silva', city: 'Salvador - BA', plan: 'Kit Completo (+3 Bônus)', time: 'Há 10 min', avatar: '/assets/avatar-11.jpg' },
  { name: 'Juliana Castilho', city: 'Recife - PE', plan: 'Kit Completo (+3 Bônus)', time: 'Há 11 min', avatar: '/assets/avatar-12.jpg' },
  { name: 'Eduardo Meirelles', city: 'Ribeirão Preto - SP', plan: 'Kit Completo (+3 Bônus)', time: 'Há 12 min', avatar: '/assets/avatar-2.jpg' },
  { name: 'Renata M. Silveira', city: 'Londrina - PR', plan: 'Kit Completo (+3 Bônus)', time: 'Há 13 min', avatar: '/assets/avatar-1.jpg' },
  { name: 'Tiago B. Fonseca', city: 'Fortaleza - CE', plan: 'Kit Completo (+3 Bônus)', time: 'Há 14 min', avatar: '/assets/avatar-4.jpg' },
  { name: 'Letícia M. Ramos', city: 'Niterói - RJ', plan: 'Kit Completo (+3 Bônus)', time: 'Há 15 min', avatar: '/assets/avatar-3.jpg' },
  { name: 'Dra. Carolina Xavier', city: 'Vitória - ES', plan: 'Kit Completo (+3 Bônus)', time: 'Há 16 min', avatar: '/assets/avatar-5.jpg' },
  { name: 'André Luiz Fagundes', city: 'Joinville - SC', plan: 'Kit Completo (+3 Bônus)', time: 'Há 17 min', avatar: '/assets/avatar-6.jpg' },
  { name: 'Vanessa Prado Lima', city: 'Sorocaba - SP', plan: 'Kit Completo (+3 Bônus)', time: 'Há 18 min', avatar: '/assets/avatar-7.jpg' },
  { name: 'Dr. Gustavo Brandão', city: 'Uberlândia - MG', plan: 'Kit Completo (+3 Bônus)', time: 'Há 19 min', avatar: '/assets/avatar-8.jpg' },
  { name: 'Simone Toledo', city: 'Caxias do Sul - RS', plan: 'Kit Completo (+3 Bônus)', time: 'Há 20 min', avatar: '/assets/avatar-9.jpg' },
  { name: 'Marcelo D. Aguiar', city: 'Natal - RN', plan: 'Kit Completo (+3 Bônus)', time: 'Há 21 min', avatar: '/assets/avatar-10.jpg' },
  { name: 'Fabiana L. Menezes', city: 'Maceió - AL', plan: 'Kit Completo (+3 Bônus)', time: 'Há 22 min', avatar: '/assets/avatar-11.jpg' },
  { name: 'Paulo César Miranda', city: 'São José dos Campos - SP', plan: 'Kit Completo (+3 Bônus)', time: 'Há 23 min', avatar: '/assets/avatar-12.jpg' },
  { name: 'Aline Vasconcelos', city: 'Manaus - AM', plan: 'Kit Completo (+3 Bônus)', time: 'Há 24 min', avatar: '/assets/avatar-1.jpg' },
  { name: 'Tatiane Barreto', city: 'Blumenau - SC', plan: 'Kit Completo (+3 Bônus)', time: 'Há 25 min', avatar: '/assets/avatar-3.jpg' },
  { name: 'Dr. Felipe Caldeira', city: 'Cuiabá - MT', plan: 'Kit Completo (+3 Bônus)', time: 'Há 26 min', avatar: '/assets/avatar-2.jpg' },
  { name: 'Elaine C. Medeiros', city: 'Santo André - SP', plan: 'Kit Completo (+3 Bônus)', time: 'Há 27 min', avatar: '/assets/avatar-5.jpg' },
  { name: 'Bruno H. Zanetti', city: 'Bauru - SP', plan: 'Kit Completo (+3 Bônus)', time: 'Há 28 min', avatar: '/assets/avatar-4.jpg' },
  { name: 'Priscila F. Antunes', city: 'Maringá - PR', plan: 'Kit Completo (+3 Bônus)', time: 'Há 29 min', avatar: '/assets/avatar-7.jpg' },
];

export default function App() {
  // State for gallery active tab
  const [activePageIndex, setActivePageIndex] = useState(0);

  // State for social proof slider index
  const [activeProofIndex, setActiveProofIndex] = useState(0);

  // State for open FAQ item
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // State for lightbox zoom modal
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  // State for sticky bottom bar visibility
  const [showStickyBar, setShowStickyBar] = useState(false);

  // State for live countdown timer (14 mins 59s)
  const [timeLeft, setTimeLeft] = useState(899);

  // State for buyer notification toast
  const [currentToastIndex, setCurrentToastIndex] = useState<number | null>(null);
  const [isToastVisible, setIsToastVisible] = useState(false);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 899));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format timer MM:SS
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Scroll listener for sticky CTA bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulation of buyer popup toasts with non-repeating sequential queue
  useEffect(() => {
    let hideTimeout: ReturnType<typeof setTimeout>;
    let showTimeout: ReturnType<typeof setTimeout>;

    const showNextToast = () => {
      setCurrentToastIndex((prev) => (prev === null ? 0 : (prev + 1) % RECENT_PURCHASES.length));
      setIsToastVisible(true);

      hideTimeout = setTimeout(() => {
        setIsToastVisible(false);
        // Show next unique buyer after 15 seconds
        showTimeout = setTimeout(showNextToast, 15000);
      }, 5000);
    };

    // First toast appears after 4 seconds
    showTimeout = setTimeout(showNextToast, 4000);

    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(showTimeout);
    };
  }, []);

  const CHECKOUT_BASIC_URL = 'https://pay.wiapy.com/2i6YHLwiWp';
  const CHECKOUT_COMPLETE_URL = 'https://pay.wiapy.com/HzbC5bX1970';

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-200 selection:text-purple-900">
      
      {/* 1. URGENCY BANNER */}
      <header className="sticky top-0 z-40 bg-purple-600 text-white shadow-md">
        <div className="max-w-4xl mx-auto py-2.5 px-4 flex flex-wrap items-center justify-between gap-2 text-center text-xs sm:text-sm font-bold">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-400 animate-ping" />
            <span className="tracking-wide uppercase">
              DESCONTO VÁLIDO ATÉ HOJE {new Date().toLocaleDateString('pt-BR')}
            </span>
          </div>

          <div className="flex items-center gap-2 mx-auto sm:mx-0 bg-purple-700/80 px-3 py-1 rounded-full text-yellow-300">
            <Clock className="w-3.5 h-3.5" />
            <span>OFERTA ENCERRA EM: <strong className="font-mono text-white text-sm">{formatTime(timeLeft)}</strong></span>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-white pt-8 pb-14 lg:pt-12 lg:pb-20">
        <div className="relative max-w-3xl mx-auto px-5 text-center">
          
          {/* Social Proof Badge */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2.5 mb-6 bg-white/90 backdrop-blur border border-purple-200 px-4 py-2 rounded-full shadow-sm">
            <div className="flex -space-x-2.5">
              <img
                src="/assets/avatar-1.jpg"
                alt="Profissional 1"
                className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-purple-100"
              />
              <img
                src="/assets/avatar-2.jpg"
                alt="Profissional 2"
                className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-purple-100"
              />
              <img
                src="/assets/avatar-3.jpg"
                alt="Profissional 3"
                className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-purple-100"
              />
              <img
                src="/assets/avatar-4.jpg"
                alt="Profissional 4"
                className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm ring-1 ring-purple-100"
              />
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800">
                +1.700 profissionais usando
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="font-serif font-black text-slate-900 leading-[0.95] tracking-tight text-5xl sm:text-6xl lg:text-7xl mb-4">
            <span className="block">+1200</span>
            <span className="inline-block bg-purple-200/80 px-3 py-1 my-1 rounded-md">
              EXERCÍCIOS
            </span>
            <span className="block mt-1">
              ADAPTADOS PARA{' '}
              <span className="inline-block bg-purple-200/80 px-3 py-1 rounded-md">
                IDOSOS
              </span>
            </span>
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-slate-600 mb-2">
            exercícios adaptados, organizados por nível e objetivo
          </p>
          <p className="font-serif font-bold text-xl sm:text-2xl text-purple-700 mb-3">
            para transformar seus atendimentos
          </p>
          
          <div className="text-2xl mb-6">🧓✨</div>

          <div className="space-y-1 text-slate-600 font-medium mb-7 text-base">
            <p>✓ Sem montar sessão do zero</p>
            <p>✓ Sem improvisar no atendimento</p>
          </div>

          {/* 3 Step Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-purple-100">
                <Stethoscope className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-bold text-slate-800">Abre</span>
              </div>
              <span className="text-purple-500 text-lg font-bold">›</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-purple-100">
                <Lightbulb className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-bold text-slate-800">Escolhe</span>
              </div>
              <span className="text-purple-500 text-lg font-bold">›</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-purple-100">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-bold text-slate-800">Aplica</span>
              </div>
            </div>
          </div>

          {/* Main Hero Mockup Image */}
          <div
            className="relative max-w-2xl mx-auto mb-10 cursor-pointer group"
            onClick={() =>
              setLightboxImage({
                src: '/assets/hero-mockup-Bz2nqA_j.webp',
                title: 'Kit Completo de Cartilhas de Exercícios para Idosos',
              })
            }
          >
            <div className="absolute -inset-4 bg-purple-300/30 rounded-3xl blur-2xl -z-10 group-hover:bg-purple-400/40 transition-all" />
            <img
              src="/assets/hero-mockup-Bz2nqA_j.webp"
              alt="Mockup do kit de cartilhas de exercícios para idosos"
              className="w-full h-auto block drop-shadow-xl transition-transform duration-300 group-hover:scale-[1.01]"
              width="900"
              height="900"
            />
            <div className="absolute bottom-4 right-4 bg-black/60 text-white p-2 rounded-full backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          {/* Video Section with Real Wistia Embed */}
          <div className="mt-10 max-w-2xl mx-auto bg-gradient-to-b from-purple-100/70 to-purple-50/40 p-6 sm:p-8 rounded-3xl border border-purple-200 shadow-sm">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-5 text-center">
              Assista esse vídeo para ver o que vai receber:
            </h2>

            <div className="relative max-w-xs sm:max-w-sm mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/30 bg-slate-950 aspect-[9/16] border-2 border-purple-300">
              <iframe
                src="https://fast.wistia.net/embed/iframe/zc96g6h88e?seo=false&videoFoam=true"
                title="Apresentação do Kit +1200 Atividades para Idosos"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="w-full h-full border-0 rounded-2xl"
              />
            </div>
          </div>

          {/* Main Hero CTA */}
          <a
            href="#pricing"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 mt-8 px-9 py-5 gradient-cta text-white font-black text-base sm:text-lg tracking-wide rounded-full uppercase shadow-xl transition-all"
          >
            Quero meu kit agora
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>

          <div className="flex items-center justify-center gap-2 mt-4 text-xs sm:text-sm text-slate-600">
            <ShieldCheck className="w-4 h-4 text-green-600 shrink-0" />
            <span className="font-medium">
              Compra 100% segura · Acesso imediato · Garantia de 7 dias
            </span>
          </div>

        </div>
      </section>

      {/* 3. SECTION: WHY PROFESSIONALS CHOOSE THIS KIT */}
      <section className="px-4 pt-16 pb-12 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl sm:text-5xl font-black tracking-tight leading-[1.05]">
              Por que profissionais escolhem{' '}
              <span className="gradient-heading-blue italic">esse kit?</span>
            </h2>
            <div className="w-20 h-1 gradient-bar mx-auto rounded-full mt-3" />
          </div>

          {/* Overlapping Mockup Card */}
          <div className="relative max-w-2xl mx-auto mt-28 sm:mt-36 mb-12">
            <img
              src="/assets/kit-mockup-novo-ri5FhTjc.webp"
              alt="Kit +1200 atividades e exercícios adaptados para idosos"
              className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[82%] max-w-xl z-10 drop-shadow-2xl pointer-events-none"
            />
            <div className="bg-gradient-to-b from-sky-600 to-blue-700 rounded-3xl px-6 sm:px-10 pb-10 text-white space-y-5 text-base sm:text-lg leading-relaxed pt-[38%] sm:pt-[32%] shadow-2xl shadow-sky-700/30">
              <p>
                O <strong>Kit +1200 Atividades</strong> é um material completo de exercícios adaptados para idosos, organizado <strong>por nível, objetivo e tipo de exercício</strong>, preparando você para atender, planejar e aplicar a sessão com confiança, simplificando a rotina de quem trabalha com a terceira idade todos os dias.
              </p>
              <p>
                Com o <strong>Kit +1200 Atividades</strong>, você vai parar de improvisar e começar a aplicar com <strong>clareza</strong>, equipado com <strong>cartilhas, exercícios ilustrados, progressões seguras e bônus exclusivos</strong> prontos pra usar no atendimento individual ou em turma.
              </p>
              <p>
                Essa é <strong>a melhor forma de elevar a qualidade dos seus atendimentos</strong>, trabalhando com confiança e oferecendo aos seus pacientes mais autonomia, mobilidade e qualidade de vida no dia a dia.
              </p>
            </div>
          </div>

          {/* 4 Preview Cards Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5 max-w-2xl mx-auto">
            {[
              {
                title: 'Exercícios c/ Equipamentos',
                img: '/assets/preview-equipamentos-C_O1rGk3.webp',
              },
              {
                title: 'Exercícios s/ Equipamentos',
                img: '/assets/preview-alongamentos-BdgvIuEW.webp',
              },
              {
                title: 'Exercícios Cognitivos',
                img: '/assets/preview-cognitivo-BY6nc-K1.webp',
              },
              {
                title: 'Guia de Avaliação Física',
                img: '/assets/guia-avaliacao-mobilidade-CpE4j_7-.webp',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-sky-50 rounded-2xl overflow-hidden border-2 border-sky-200 shadow-md hover:shadow-xl transition flex flex-col cursor-pointer group"
                onClick={() => setLightboxImage({ src: item.img, title: item.title })}
              >
                <div className="bg-white/70 p-2 relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-contain group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-2 right-2 bg-sky-600/80 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="px-3 py-3 text-center bg-sky-100/50">
                  <p className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. SECTION: PAGE SAMPLES GALLERY */}
      <section className="px-4 py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-4xl sm:text-5xl font-black tracking-tight leading-[1.05]">
              Veja um pouco <span className="gradient-heading-yellow italic">das páginas</span>
            </h2>
            <div className="w-20 h-1 gradient-bar mx-auto rounded-full mt-3" />
          </div>

          <div className="bg-white rounded-3xl p-5 lg:p-10 border-2 border-purple-100 shadow-xl shadow-purple-200/30">
            
            {/* Gallery Image Display */}
            <div
              className="relative aspect-[3/4] sm:aspect-[4/3] max-w-2xl mx-auto mb-6 rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 cursor-pointer group flex items-center justify-center p-2"
              onClick={() =>
                setLightboxImage({
                  src: PAGE_SAMPLES[activePageIndex].src,
                  title: PAGE_SAMPLES[activePageIndex].title,
                })
              }
            >
              <img
                src={PAGE_SAMPLES[activePageIndex].src}
                alt={PAGE_SAMPLES[activePageIndex].title}
                loading="lazy"
                className="w-full h-full object-contain drop-shadow-md transition-all duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-bold text-sm rounded-2xl">
                <Maximize2 className="w-5 h-5" /> Clique para expandir em tela cheia
              </div>
            </div>

            {/* Active Image Title */}
            <div className="text-center mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-purple-900">
                {PAGE_SAMPLES[activePageIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                {PAGE_SAMPLES[activePageIndex].subtitle}
              </p>
            </div>

            {/* Tab indicators */}
            <div className="flex justify-center gap-2 mb-8 flex-wrap">
              {PAGE_SAMPLES.map((sample, idx) => (
                <button
                  key={sample.id}
                  type="button"
                  onClick={() => setActivePageIndex(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    activePageIndex === idx
                      ? 'bg-purple-600 w-10'
                      : 'bg-purple-200 w-3 hover:bg-purple-300'
                  }`}
                  aria-label={`Ver página ${idx + 1}`}
                />
              ))}
            </div>

            {/* Features Checklist */}
            <ul className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {[
                'Atividades organizadas por nível e objetivo',
                'Exercícios ilustrados com passo a passo',
                'Progressões seguras para qualquer condição',
                'Cartilhas prontas para imprimir e aplicar',
                'Bônus exclusivos para casos especiais',
                'Acesso digital pelo celular ou computador',
              ].map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 bg-slate-50 rounded-xl p-3 border border-slate-100 shadow-2xs"
                >
                  <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">{feature}</span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </section>

      {/* 5. SECTION: WHO IS THIS FOR? */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl font-black tracking-tight leading-[1.05]">
              Para Quem É <span className="gradient-heading-green italic">Este Material</span>
            </h2>
            <div className="w-20 h-1 gradient-bar mx-auto rounded-full mt-3" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-7 shadow-md border border-slate-100 text-center hover:shadow-xl transition-all">
              <div className="gradient-icon-green w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg shadow-green-500/40 text-white">
                <Stethoscope className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">Fisioterapeutas</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ideal pra quem precisa de mais variedade nos atendimentos. Com esse kit você chega na sessão sabendo exatamente o que vai aplicar, sem improvisar.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-7 shadow-md border border-slate-100 text-center hover:shadow-xl transition-all">
              <div className="gradient-icon-green w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg shadow-green-500/40 text-white">
                <Dumbbell className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">Educadores Físicos</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Perfeito pra quem trabalha com turma de idosos e precisa de atividades organizadas, seguras e prontas pra usar no dia a dia.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-7 shadow-md border border-slate-100 text-center hover:shadow-xl transition-all">
              <div className="gradient-icon-green w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg shadow-green-500/40 text-white">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-xl mb-2 text-slate-900">Cuidadores de Idosos</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Mesmo sem formação técnica, dá pra oferecer muito mais qualidade de vida e estímulo físico com esse material. É simples e direto.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. SECTION: COMMON OBJECTIONS & HIGH-RES PAGE SAMPLES */}
      <section className="px-4 py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: 'Vou ter que ser especialista pra aplicar',
              a: 'As atividades são organizadas por nível e objetivo, com instruções simples. Se sabe ler, sabe aplicar.',
            },
            {
              q: 'Meus idosos têm mobilidade reduzida',
              a: 'Tem um bônus exclusivo com +40 atividades adaptadas pra quem tem mobilidade reduzida ou está em recuperação.',
            },
            {
              q: 'Já tenho material parecido',
              a: 'Aqui são +1200 atividades organizadas por categoria, prontas pra usar. Você nunca mais vai improvisar uma sessão.',
            },
            {
              q: 'É muito caro pelo conteúdo',
              a: 'Por R$20 você leva o kit completo + 3 bônus exclusivos. É menos que o valor de meia consulta ou atendimento avulso.',
            },
          ].map((obj, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white px-6 py-5 md:px-7 md:py-6 shadow-sm border border-slate-200 hover:shadow-md transition-all"
            >
              <p className="font-bold text-base md:text-lg text-slate-900">
                "{obj.q}"
              </p>
              <p className="mt-2 text-green-700 font-medium text-sm md:text-base leading-relaxed flex items-start gap-2">
                <span className="shrink-0 text-lg">👉</span>
                <span>{obj.a}</span>
              </p>
            </div>
          ))}

          {/* Grid of sample page images */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto pt-8">
            {[
              { src: '/assets/kit-page-flexao-anterior-DUGuJCDT.webp', title: 'Flexão anterior do quadril' },
              { src: '/assets/kit-page-halteres-CE9AphvI.webp', title: 'Exercícios com halteres' },
              { src: '/assets/kit-page-rotina-final-UMcZiwpq.webp', title: 'Exercícios extras e rotina final' },
              { src: '/assets/kit-page-marcha-parada-SgHkFm_Y.webp', title: 'Guia de marcha e coordenação' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden bg-white border-2 border-purple-200 shadow-md hover:shadow-xl transition cursor-pointer group relative"
                onClick={() => setLightboxImage({ src: item.src, title: item.title })}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto block group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Maximize2 className="w-6 h-6" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. SECTION: EXCLUSIVE FREE BONUSES */}
      <section className="px-4 py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-purple-50/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full bg-purple-100 border border-purple-200">
              <Gift className="w-4 h-4 text-purple-700" />
              <span className="text-xs font-bold uppercase tracking-widest text-purple-700">
                BÔNUS EXCLUSIVOS
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-black tracking-tight leading-[1.05] mb-3">
              Você também leva isso <span className="gradient-heading italic">de graça</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              3 bônus exclusivos pra você aplicar com mais segurança em qualquer condição de idoso.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            
            {/* Bonus 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-purple-100 hover:shadow-xl hover:-translate-y-1 transition text-center flex flex-col">
              <div className="bg-purple-50/60 rounded-xl mb-5 p-4 flex items-center justify-center">
                <img
                  src="/assets/bonus-mobilidade-mockup-BJNkMJi1.webp"
                  alt="+40 Atividades para Idosos com Mobilidade Reduzida"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-contain cursor-pointer"
                  onClick={() =>
                    setLightboxImage({
                      src: '/assets/bonus-mobilidade-mockup-BJNkMJi1.webp',
                      title: 'Bônus 1: +40 Atividades para Mobilidade Reduzida',
                    })
                  }
                />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 leading-tight">
                +40 Atividades para Idosos com Mobilidade Reduzida
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                Exercícios adaptados pra idosos cadeirantes ou com dificuldade de ficar em pé. Seguros e prontos pra aplicar.
              </p>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <p className="text-[11px] text-slate-500 uppercase tracking-wide font-bold mb-1">
                  Valor: <span className="line-through">R$ 47,00</span>
                </p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-extrabold uppercase">
                  HOJE: GRÁTIS
                </span>
              </div>
            </div>

            {/* Bonus 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-purple-100 hover:shadow-xl hover:-translate-y-1 transition text-center flex flex-col">
              <div className="bg-purple-50/60 rounded-xl mb-5 p-4 flex items-center justify-center">
                <img
                  src="/assets/bonus-recuperacao-mockup-BGlPTQvz.webp"
                  alt="+35 Atividades para Idosos em Recuperação Física"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-contain cursor-pointer"
                  onClick={() =>
                    setLightboxImage({
                      src: '/assets/bonus-recuperacao-mockup-BGlPTQvz.webp',
                      title: 'Bônus 2: +35 Atividades em Recuperação Física',
                    })
                  }
                />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 leading-tight">
                +35 Atividades para Idosos em Recuperação Física
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                Exercícios leves pra quem tá em recuperação ou com limitações físicas. Progressão segura do repouso à atividade.
              </p>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <p className="text-[11px] text-slate-500 uppercase tracking-wide font-bold mb-1">
                  Valor: <span className="line-through">R$ 47,00</span>
                </p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-extrabold uppercase">
                  HOJE: GRÁTIS
                </span>
              </div>
            </div>

            {/* Bonus 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-purple-100 hover:shadow-xl hover:-translate-y-1 transition text-center flex flex-col">
              <div className="bg-purple-50/60 rounded-xl mb-5 p-4 flex items-center justify-center">
                <img
                  src="/assets/bonus-avaliacao-mockup-BCifaTQs.webp"
                  alt="Guia de Avaliação Física para Idosos"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-contain cursor-pointer"
                  onClick={() =>
                    setLightboxImage({
                      src: '/assets/bonus-avaliacao-mockup-BCifaTQs.webp',
                      title: 'Bônus 3: Guia de Avaliação Física para Idosos',
                    })
                  }
                />
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2 leading-tight">
                Guia de Avaliação Física para Idosos
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                Aprenda a avaliar mobilidade e limitações antes de começar. Mais segurança pra você, mais resultado pro paciente.
              </p>
              <div className="pt-4 mt-4 border-t border-slate-100">
                <p className="text-[11px] text-slate-500 uppercase tracking-wide font-bold mb-1">
                  Valor: <span className="line-through">R$ 53,00</span>
                </p>
                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-extrabold uppercase">
                  HOJE: GRÁTIS
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. PRICING SECTION */}
      <section id="pricing" className="py-16 lg:py-24 bg-slate-100 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl font-black tracking-tight leading-[1.05] mb-3">
              Escolha a melhor <span className="gradient-heading italic">opção para você</span>
            </h2>
            <p className="text-slate-600 max-w-xl mx-auto font-medium">
              Investimento único de valor simbólico com entrega imediata via WhatsApp e E-mail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            
            {/* PLAN 1: BASIC KIT (R$ 10) */}
            <div className="bg-white rounded-3xl shadow-lg border border-slate-200 overflow-hidden flex flex-col justify-between">
              <div className="p-8">
                <div className="flex justify-center mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200">
                    <MessageCircle className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-[10px] font-bold uppercase tracking-wide text-green-700">
                      Entrega via WhatsApp
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-bold text-center text-slate-900 mb-1">
                  Kit Básico
                </h3>
                <p className="text-purple-600 font-medium text-sm text-center mb-4">
                  O essencial para começar
                </p>

                <div className="bg-slate-50 rounded-2xl p-4 text-center mb-6 border border-slate-200">
                  <p className="text-slate-400 text-sm line-through font-medium">R$ 67</p>
                  <p className="text-5xl font-black text-green-600">R$ 10</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                    Investimento único
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="bg-green-100 rounded-full p-0.5 shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="font-medium">Metade do material</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="bg-green-100 rounded-full p-0.5 shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="font-medium">Atividades organizadas por nível</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="bg-green-100 rounded-full p-0.5 shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="font-medium">Aplicações práticas no atendimento</span>
                  </li>
                  <li className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="bg-green-100 rounded-full p-0.5 shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="font-medium">Acesso digital</span>
                  </li>
                </ul>

                <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest mb-2">
                  Não inclui
                </p>
                <ul className="space-y-1.5 opacity-60">
                  <li className="flex items-center gap-2 text-xs text-slate-500">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>+40 Atividades para Mobilidade Reduzida</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-500">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>+35 Atividades para Recuperação Física</span>
                  </li>
                  <li className="flex items-center gap-2 text-xs text-slate-500">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Guia de Avaliação Física para Idosos</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 pt-0">
                <a
                  href={CHECKOUT_BASIC_URL}
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all text-sm tracking-wide uppercase"
                >
                  <Lock className="w-4 h-4" />
                  ACESSAR AGORA (R$ 10)
                </a>
              </div>
            </div>

            {/* PLAN 2: FULL KIT - MOST POPULAR (R$ 20) */}
            <div className="premium-card rounded-3xl shadow-2xl shadow-purple-500/30 relative flex flex-col justify-between md:-translate-y-3 bg-white">
              
              {/* Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 gradient-premium-badge text-white text-[11px] font-extrabold px-5 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-purple-500/40 flex items-center gap-1.5 z-10 whitespace-nowrap">
                <Star className="w-3.5 h-3.5 fill-current" /> MAIS ESCOLHIDO PELO PÚBLICO
              </div>

              <div className="p-8 pt-10">
                <div className="flex justify-center mb-5">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-green-100 border border-green-300">
                    <MessageCircle className="w-3.5 h-3.5 text-green-700" />
                    <span className="text-[10px] font-extrabold uppercase tracking-wide text-green-800">
                      Entrega imediata via WhatsApp
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-3xl font-black text-center text-slate-900 mb-1">
                  Kit Completo
                </h3>
                <p className="text-purple-600 font-bold text-sm text-center mb-4">
                  Acesso total + 3 bônus exclusivos inclusos
                </p>

                <div className="bg-purple-50/80 rounded-2xl p-4 text-center mb-5 shadow-sm border border-purple-200">
                  <p className="text-slate-400 text-sm line-through font-medium">R$ 97</p>
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-2xl font-black text-slate-800">R$</span>
                    <span className="text-6xl font-black text-green-600">20</span>
                  </div>
                  <p className="text-[11px] font-extrabold text-purple-800 uppercase tracking-wider mt-1">
                    Pagamento Único · Sem mensalidades
                  </p>
                </div>

                {/* 3 Thumbnails */}
                <div className="grid grid-cols-3 gap-2 mb-5">
                  <div className="bg-white rounded-xl p-1 border border-purple-200 shadow-xs">
                    <img
                      src="/assets/premium-mobilidade-CgxeSouj.webp"
                      alt="Mobilidade"
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                  </div>
                  <div className="bg-white rounded-xl p-1 border border-purple-200 shadow-xs">
                    <img
                      src="/assets/premium-equipamentos-hVfMFLr4.webp"
                      alt="Equipamentos"
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                  </div>
                  <div className="bg-white rounded-xl p-1 border border-purple-200 shadow-xs">
                    <img
                      src="/assets/premium-cognitivo-Bq3nv2V0.webp"
                      alt="Cognitivo"
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                  </div>
                </div>

                <ul className="space-y-1.5 mb-4">
                  {[
                    '+1200 Atividades e Exercícios para Idosos',
                    'Organizadas por nível e objetivo',
                    'Acesso digital vitalício',
                    'Atualizações e materiais novos',
                    'Suporte prioritário',
                    'Garantia incondicional de 7 dias',
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 bg-purple-50/60 rounded-lg p-2">
                      <div className="bg-green-600 rounded-full p-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-slate-900 text-xs sm:text-sm font-semibold">{feat}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-[10px] font-extrabold text-purple-700 uppercase tracking-widest mb-2 mt-4">
                  🎁 Bônus Exclusivos Inclusos Hoje
                </p>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2 bg-green-50 rounded-lg p-2 text-slate-800 text-xs font-bold border border-green-200">
                    <span>🎁</span>
                    <span>+40 Atividades para Mobilidade Reduzida</span>
                  </li>
                  <li className="flex items-center gap-2 bg-green-50 rounded-lg p-2 text-slate-800 text-xs font-bold border border-green-200">
                    <span>🎁</span>
                    <span>+35 Atividades para Recuperação Física</span>
                  </li>
                  <li className="flex items-center gap-2 bg-green-50 rounded-lg p-2 text-slate-800 text-xs font-bold border border-green-200">
                    <span>🎁</span>
                    <span>Guia de Avaliação Física para Idosos</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 pt-0">
                <a
                  href={CHECKOUT_COMPLETE_URL}
                  className="gradient-cta w-full text-white font-black text-base py-4 rounded-full flex items-center justify-center gap-2 shadow-xl shadow-green-500/50 hover:scale-[1.03] active:scale-[0.98] transition-all tracking-wide uppercase"
                >
                  <Lock className="w-5 h-5" />
                  QUERO O COMPLETO POR R$ 20!
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 9. TESTIMONIALS / SOCIAL PROOF CAROUSEL */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl font-black tracking-tight leading-[1.05]">
              O Que Nossos <span className="gradient-heading italic">Clientes Dizem</span>
            </h2>
            <div className="w-20 h-1 gradient-bar mx-auto rounded-full mt-3" />
            <p className="text-slate-600 mt-4 max-w-xl mx-auto font-medium text-sm sm:text-base">
              Mensagens reais de profissionais que já estão aplicando o material no atendimento diário.
            </p>
          </div>

          <div className="relative max-w-lg mx-auto">
            {/* Screenshot Display */}
            <div className="bg-white rounded-3xl p-3 border border-slate-200 shadow-2xl shadow-purple-500/10 overflow-hidden">
              <img
                src={PROOF_IMAGES[activeProofIndex].src}
                alt={PROOF_IMAGES[activeProofIndex].alt}
                loading="lazy"
                className="w-full h-auto rounded-2xl object-cover cursor-pointer"
                onClick={() =>
                  setLightboxImage({
                    src: PROOF_IMAGES[activeProofIndex].src,
                    title: PROOF_IMAGES[activeProofIndex].author,
                  })
                }
              />
              <div className="p-3.5 flex items-center justify-center gap-3 bg-slate-50 rounded-2xl mt-2 border border-slate-100">
                <img
                  src={PROOF_IMAGES[activeProofIndex].avatar}
                  alt={PROOF_IMAGES[activeProofIndex].author}
                  className="w-10 h-10 rounded-full object-cover border-2 border-purple-200 shadow-sm shrink-0"
                />
                <div className="text-left">
                  <p className="text-xs sm:text-sm font-bold text-slate-800">
                    {PROOF_IMAGES[activeProofIndex].author}
                  </p>
                  <div className="flex items-center gap-1 text-yellow-400 mt-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400" />
                    ))}
                    <span className="text-[11px] font-bold text-emerald-600 ml-1">Cliente Verificado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Prev / Next Carousel Controls */}
            <button
              onClick={() =>
                setActiveProofIndex((prev) =>
                  prev === 0 ? PROOF_IMAGES.length - 1 : prev - 1
                )
              }
              className="absolute left-[-18px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center hover:bg-purple-50 text-slate-800 transition-all z-20"
              aria-label="Depoimento anterior"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() =>
                setActiveProofIndex((prev) =>
                  prev === PROOF_IMAGES.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-[-18px] top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center hover:bg-purple-50 text-slate-800 transition-all z-20"
              aria-label="Próximo depoimento"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {PROOF_IMAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveProofIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeProofIndex === i
                      ? 'bg-purple-600 w-8'
                      : 'bg-purple-200 w-2.5 hover:bg-purple-300'
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. GUARANTEE SECTION */}
      <section className="px-4 py-16 bg-slate-50">
        <div className="max-w-2xl mx-auto rounded-3xl p-8 sm:p-10 text-center bg-gradient-to-br from-purple-50 via-white to-pink-50 border border-purple-100 shadow-2xl shadow-purple-500/20">
          <div className="gradient-icon w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-purple-500/40 text-white">
            <ShieldCheck className="w-10 h-10" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-black tracking-tight mb-2 leading-[1.05]">
            Garantia Incondicional de <span className="gradient-heading italic">7 Dias</span>
          </h2>
          
          <div className="w-20 h-1 gradient-bar mx-auto rounded-full mb-5" />
          
          <p className="text-slate-600 font-medium mb-8 leading-relaxed max-w-md mx-auto text-sm sm:text-base">
            Teste todo o material sem qualquer risco. Se em até 7 dias você achar que o kit não ajudou seus atendimentos, devolvemos 100% do seu dinheiro sem letras miúdas.
          </p>

          <a
            href={CHECKOUT_COMPLETE_URL}
            className="gradient-cta inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-extrabold uppercase text-sm shadow-xl tracking-wider transition-all"
          >
            <ShieldCheck className="w-5 h-5 mr-2" />
            Comprar com Segurança Total
          </a>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl sm:text-5xl font-black tracking-tight leading-[1.05]">
              Perguntas <span className="gradient-heading italic">Frequentes</span>
            </h2>
            <div className="w-20 h-1 gradient-bar mx-auto rounded-full mt-3" />
            <p className="text-slate-600 mt-3 max-w-xl mx-auto font-medium text-sm">
              Tirando as principais dúvidas antes de garantir seu acesso.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 text-base sm:text-lg hover:bg-slate-50 transition-colors"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-purple-600 transition-transform duration-300 shrink-0 ml-3 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-purple-50/30">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct CTA under FAQ */}
          <div className="text-center mt-10">
            <a
              href="#pricing"
              className="gradient-cta inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-black text-sm uppercase shadow-lg"
            >
              Garantir meu kit com desconto
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 px-4 py-12 text-center text-xs sm:text-sm space-y-3 border-t border-slate-800">
        <div className="flex items-center justify-center gap-2 text-slate-100 font-black text-base tracking-wider mb-2">
          <Flame className="w-5 h-5 text-orange-400 fill-orange-400" />
          MANUAL DOS IDOSOS
        </div>

        <p>© {new Date().getFullYear()} MANUAL DOS IDOSOS. Todos os direitos reservados.</p>
        <p className="max-w-xl mx-auto text-slate-500 text-[11px]">
          Material licenciado para uso pessoal e profissional no acompanhamento e atendimento de idosos.
        </p>
      </footer>

      {/* FLOATING STICKY CTA BAR (MOBILE & DESKTOP) */}
      {showStickyBar && (
        <div className="fixed bottom-0 inset-x-0 bg-slate-900/95 backdrop-blur-md border-t border-purple-500/30 p-3 z-50 animate-in slide-in-from-bottom duration-300">
          <div className="max-w-3xl mx-auto flex items-center justify-between gap-3">
            <div className="hidden sm:flex flex-col text-white">
              <span className="font-extrabold text-xs text-purple-300 uppercase tracking-wide">
                Garantia de 7 Dias · Acesso Imediato
              </span>
              <span className="text-sm font-black text-green-400">
                Kit Completo por apenas R$ 20,00
              </span>
            </div>

            <a
              href={CHECKOUT_COMPLETE_URL}
              className="gradient-cta w-full sm:w-auto text-white font-black text-xs sm:text-sm py-3 px-6 rounded-full flex items-center justify-center gap-2 uppercase tracking-wide shadow-lg ml-auto"
            >
              <Zap className="w-4 h-4 fill-white" />
              QUERO MEU KIT COMPLETO (R$ 20)
            </a>
          </div>
        </div>
      )}

      {/* RECENT PURCHASER TOAST NOTIFICATION */}
      {isToastVisible && currentToastIndex !== null && (
        <div className="fixed bottom-20 sm:bottom-6 left-4 z-50 bg-slate-900/95 backdrop-blur-md text-white p-3.5 rounded-2xl shadow-2xl border border-purple-500/40 max-w-xs sm:max-w-sm animate-in slide-in-from-left duration-300 flex items-center gap-3">
          <img
            src={RECENT_PURCHASES[currentToastIndex].avatar}
            alt={RECENT_PURCHASES[currentToastIndex].name}
            className="w-11 h-11 rounded-full border-2 border-purple-400/80 object-cover shrink-0 shadow-md"
          />
          <div className="text-xs flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <p className="font-bold text-purple-200 truncate">
                {RECENT_PURCHASES[currentToastIndex].name}
              </p>
              <span className="text-[10px] text-slate-400 font-medium shrink-0">
                {RECENT_PURCHASES[currentToastIndex].time}
              </span>
            </div>
            <p className="text-slate-300 text-[11px] truncate">
              {RECENT_PURCHASES[currentToastIndex].city}
            </p>
            <p className="text-green-400 font-extrabold text-[10px] mt-0.5 truncate">
              ✓ Adquiriu {RECENT_PURCHASES[currentToastIndex].plan}
            </p>
          </div>
          <button
            onClick={() => setIsToastVisible(false)}
            className="text-slate-400 hover:text-white p-1 rounded-lg shrink-0 transition-colors"
            aria-label="Fechar notificação"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* LIGHTBOX MODAL */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden p-2 flex flex-col items-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-full z-10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={lightboxImage.src}
              alt={lightboxImage.title}
              className="max-h-[80vh] w-auto object-contain rounded-2xl"
            />
            <p className="text-white text-sm font-bold mt-3 text-center px-4 py-1 bg-slate-800/80 rounded-full">
              {lightboxImage.title}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
