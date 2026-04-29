import { Github, Twitter, Linkedin, ArrowUpRight, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-std pt-24 pb-12 px-6 md:px-12 font-sans overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <Logo size={56} className="group-hover:scale-110 transition-transform" />
              <span className="font-brand text-2xl font-bold tracking-tight text-primary uppercase">GNMAL <span className="text-secondary">Leicester</span></span>
            </Link>
            <p className="text-text-muted text-lg leading-relaxed max-w-sm font-medium italic font-serif">
               "Together, we serve with excellence."
            </p>
            <div className="flex gap-6">
              {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-text-main leading-none">Navigation</h4>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-sm font-bold text-text-muted hover:text-primary transition-colors flex items-center justify-between group">Our Story <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/values" className="text-sm font-bold text-text-muted hover:text-primary transition-colors flex items-center justify-between group">Our Values <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
                <li><Link to="/membership" className="text-sm font-bold text-text-muted hover:text-primary transition-colors flex items-center justify-between group">Join GNMAL <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" /></Link></li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-text-main leading-none">Connect</h4>
              <ul className="space-y-4">
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-text-muted">Headquarters</span>
                  <span className="text-sm font-bold text-text-main">Leicester, East Midlands <br/>United Kingdom</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-text-muted">Inquiries</span>
                  <a href="mailto:gnmalleicester@gmail.com" className="text-sm font-bold text-text-main hover:text-primary transition-colors">gnmalleicester@gmail.com</a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-text-main leading-none">Community</h4>
              <div className="space-y-4">
                <a href="#" className="block px-6 py-3 bg-secondary text-white rounded-xl text-xs font-bold text-center shadow-lg shadow-secondary/10 hover:shadow-secondary/20 transition-all">WhatsApp Group</a>
                <a href="#" className="block px-6 py-3 bg-primary text-white rounded-xl text-xs font-bold text-center shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all">Support Circles</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border-std flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
            © {new Date().getFullYear()} Ghanaian Nurses and Midwives Association Leicester CIC.
          </div>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
            <a href="#" className="hover:text-text-main transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text-main transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-text-main transition-colors">Ethics Board</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
