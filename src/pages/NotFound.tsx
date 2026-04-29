import { Link } from 'react-router-dom';
import { ArrowLeft, Home as HomeIcon } from 'lucide-react';
import { Button } from '../components/ui/button';
import Logo from '../components/Logo';

export default function NotFound() {
  return (
    <div className="bg-white min-h-screen pt-32 flex items-center">
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-10">
          <Logo variant="icon" size={120} className="mx-auto opacity-80" />
          <div>
            <p className="text-secondary font-black uppercase tracking-[0.3em] text-sm mb-4">
              Error 404
            </p>
            <h1 className="text-6xl md:text-8xl font-black text-brand-black tracking-tighter italic font-serif leading-[0.9] mb-6">
              Page not found.
            </h1>
            <p className="text-xl text-text-muted font-medium max-w-xl mx-auto leading-relaxed">
              The page you are looking for has moved or no longer exists. Let’s get you back on track.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 h-14 text-lg font-black bg-primary text-white hover:bg-primary-dark transition-all"
            >
              <Link to="/" className="flex items-center gap-2">
                <HomeIcon size={20} /> Back to Home
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="rounded-full px-10 h-14 text-lg font-bold text-primary hover:bg-accent transition-all"
            >
              <Link to="/contact" className="flex items-center gap-2">
                <ArrowLeft size={20} /> Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
