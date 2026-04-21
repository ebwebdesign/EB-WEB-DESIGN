/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Menu, 
  Phone,
  Sparkles, 
  X,
  Mail,
  MessageSquare,
  Settings,
  Rocket
} from "lucide-react";
import { useRef, useState } from "react";

const navLinks = [
  { name: "Hem", href: "#hem" },
  { name: "Om oss", href: "#om-oss" },
  { name: "Process", href: "#process" },
  { name: "Kontakt", href: "#kontakt" },
];
const processSteps = [
  {
    step: "01",
    title: "Kontakt & Vision",
    description: "Vi hörs via telefon eller mejl för att gå igenom dina önskemål och vad hemsidan ska innehålla.",
    icon: <MessageSquare className="w-6 h-6" />
  },
  {
    step: "02",
    title: "Design & Utveckling",
    description: "Jag sätter igång direkt och bygger din unika hemsida med fokus på din stil och dina kunders behov.",
    icon: <Settings className="w-6 h-6" />
  },
  {
    step: "03",
    title: "Lansering",
    description: "Inom 48 timmar är din nya hemsida redo att möta världen. Klart för start!",
    icon: <Rocket className="w-6 h-6" />
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen selection:bg-gold/30 selection:text-white">
      {/* Background Gradients */}
      <div className="fixed inset-0 -z-10 bg-dark overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gold/5 blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-navy/20 blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-50 glass rounded-2xl border border-white/[0.08] shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 border border-gold flex items-center justify-center">
              <Sparkles className="text-gold w-6 h-6" />
            </div>
            <span className="font-display font-semibold text-sm tracking-[0.2em] uppercase">
              EB <span className="text-gold">Web Design</span>
            </span>
          </motion.div>

          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-[10px] uppercase tracking-[0.25em] font-medium text-muted hover:text-gold transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#kontakt"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="px-8 py-3 bg-white text-dark font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-gold transition-all duration-300 inline-block"
            >
              Starta projekt
            </motion.a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white z-50 p-2 hover:bg-white/5 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Backdrop */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 mt-2 p-2 md:hidden"
            >
              <div className="bg-dark rounded-2xl border border-white/[0.12] shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-6 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-xs uppercase tracking-[0.25em] font-medium text-muted hover:text-gold transition-colors py-2 border-b border-white/[0.04]"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#kontakt"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full px-8 py-4 bg-white text-dark font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-gold transition-all duration-300 text-center"
                >
                  Starta projekt
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="hem" className="relative h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
          <motion.div 
            style={{ scale: heroScale, opacity: heroOpacity }}
            className="text-center z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-1 border border-gold/30 bg-gold/5 text-[10px] uppercase tracking-[0.3em] font-bold text-gold"
            >
              <Sparkles className="w-3 h-3" />
              Snabb leverans (1-2 dagar)
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-7xl md:text-8xl lg:text-9xl mb-10 leading-[1.1] font-light font-sans tracking-tight"
            >
              Vi skapar <br />
              <span className="gold-gradient italic font-serif">digitala avtryck.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-xl mx-auto text-lg text-muted mb-12 leading-relaxed"
            >
              Webblösningar för visionära företag. Minimalism möter funktion i varje pixel – tillgängligt för kunder i hela landet, helt på distans.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center"
            >
              <a href="#kontakt" className="px-10 py-5 bg-gold text-dark text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-gold/90 text-center">
                Kontakta oss
              </a>
            </motion.div>
          </motion.div>
        </section>



        {/* Om oss Section */}
        <section id="om-oss" className="py-32 px-6 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="minimal-label mb-6 block">Om oss</span>
              <h2 className="text-5xl md:text-7xl font-sans tracking-tight mb-8 leading-tight">
                Passion för <br />
                <span className="gold-gradient italic font-serif">digital perfektion.</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                EB Web Design föddes ur idén att professionella hemsidor inte behöver ta veckor att färdigställa. Baserade i Norrbotten, kombinerar vi lokal personlig service med teknisk spetskompetens. Vi arbetar smidigt på distans med kunder över hela Sverige.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-white/[0.06] pt-8">
                <div>
                  <p className="text-2xl font-light text-gold mb-1">100%</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted font-bold">Engagemang</p>
                </div>
                <div>
                  <p className="text-2xl font-light text-gold mb-1">48h</p>
                  <p className="text-[10px] uppercase tracking-widest text-muted font-bold">Max Leveranstid</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/5] bg-neutral-900 border border-white/10 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Minimalistisk arbetsplats" 
                className="w-full h-full object-cover opacity-100"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </section>

        {/* Så går det till Section */}
        <section id="process" className="py-32 px-6 border-t border-white/[0.06] bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24">
              <span className="minimal-label mb-6 block">Så går det till</span>
              <h2 className="text-5xl md:text-7xl font-sans tracking-tight">Från idé till lansering <br /> på nolltid.</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08]">
              {processSteps.map((step) => (
                <div key={step.step} className="bg-dark p-12 hover:bg-white/[0.02] transition-colors group">
                  <div className="flex justify-between items-start mb-12">
                    <div className="text-gold group-hover:scale-110 transition-transform duration-500">
                      {step.icon}
                    </div>
                    <span className="text-4xl font-serif italic text-white/10 group-hover:text-gold/20 transition-colors">{step.step}</span>
                  </div>
                  <h3 className="text-xl mb-6 font-sans tracking-tight font-medium uppercase tracking-[0.1em]">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA / Contact Section */}
        <section id="kontakt" className="py-40 px-6 border-t border-white/[0.06] bg-black/20">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <span className="minimal-label mb-8">Kontakt</span>
            <h2 className="text-5xl md:text-8xl mb-16 text-center leading-tight font-light font-sans tracking-tighter">
              Bygg din <br />
              <span className="gold-gradient italic font-serif">digitala närvaro.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06] w-full">
              <a href="tel:0702929024" className="bg-dark p-12 flex items-center justify-between group hover:bg-white/[0.02] transition-colors border-b md:border-b-0 md:border-r border-white/[0.06]">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 border border-gold/20 flex items-center justify-center text-gold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted tracking-widest mb-1">Ring oss</p>
                    <p className="font-medium text-lg tracking-tight">070-292 90 24</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-gold/40 group-hover:text-gold transition-colors" />
              </a>

              <a href="mailto:eb.webdesign@outlook.com" className="bg-dark p-12 flex items-center justify-between group hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 border border-gold/20 flex items-center justify-center text-gold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-muted tracking-widest mb-1">E-posta oss</p>
                    <p className="font-medium text-lg tracking-tight">eb.webdesign@outlook.com</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-gold/40 group-hover:text-gold transition-colors" />
              </a>
            </div>

          </div>
        </section>
      </main>

      {/* Modern Stats Footer */}
      <footer className="grid grid-cols-1 md:grid-cols-3 border-t border-white/[0.06] bg-black/40">
        <div className="px-12 py-12 border-r border-white/[0.06]">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted mb-3 font-bold">Plats</p>
          <p className="text-sm font-medium tracking-wide">Norrbotten & Hela Sverige (Distans)</p>
        </div>
        <div className="px-12 py-12 border-r border-white/[0.06]">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted mb-3 font-bold">Leveranstid</p>
          <p className="text-sm font-medium tracking-wide italic">Färdig hemsida på 1-2 dagar</p>
        </div>
        <div className="px-12 py-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted mb-3 font-bold">Tillgänglighet</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
            <p className="text-sm font-medium tracking-wide">Öppen för nya projekt</p>
          </div>
        </div>
      </footer>

      <div className="py-10 px-12 border-t border-white/[0.06] bg-dark flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border border-gold/30 flex items-center justify-center">
            <Sparkles className="text-gold w-4 h-4" />
          </div>
          <span className="font-display font-semibold text-xs tracking-[0.2em] uppercase">
            EB <span className="text-gold">Web Design</span>
          </span>
        </div>
        
        <p className="text-[9px] uppercase tracking-[0.2em] text-muted font-bold">
          &copy; {new Date().getFullYear()} EB Web Design. Excellence simplified.
        </p>

        <div className="flex gap-10 text-[9px] uppercase tracking-[0.25em] text-muted font-bold">
          <a href="#" className="hover:text-white transition-colors">Sekretess</a>
          <a href="#" className="hover:text-white transition-colors">Villkor</a>
        </div>
      </div>
    </div>
  );
}
