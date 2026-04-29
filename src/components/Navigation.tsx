import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { cn } from '@/src/lib/utils';
import { motion } from 'motion/react';
import Logo from './Logo';

const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Our Values', href: '/values' },
    { name: 'Membership', href: '/membership' },
    { name: 'Programs', href: '/programs' },
    { name: 'Spotlight', href: '/stories' },
    { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
    const [menuState, setMenuState] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
            <nav className={cn(
                "container mx-auto px-6 py-4 flex items-center justify-between transition-all duration-500",
                isScrolled ? "py-3" : "py-6"
            )}>
                {/* Logo and Mobile Toggle Cluster */}
                <div className="flex items-center gap-4">
                    <Link
                        to="/"
                        aria-label="home"
                        className="flex items-center gap-3 group"
                        onClick={() => setMenuState(false)}
                    >
                        <Logo variant="icon" size={40} className="transition-transform group-hover:scale-110" />
                        <div className="flex flex-col -space-y-1">
                          <span className={cn(
                            "text-lg font-black tracking-tighter transition-colors",
                            isScrolled ? "text-primary" : "text-primary"
                          )}>GNMAL</span>
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">Leicester</span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-12 bg-surface/50 backdrop-blur-xl border border-primary/5 px-8 py-3 rounded-full shadow-sm shadow-primary/5">
                    {navLinks.map((item, index) => (
                        <Link
                            key={index}
                            to={item.href}
                            className={cn(
                                "text-sm font-bold tracking-tight transition-all relative group",
                                location.pathname === item.href ? "text-primary" : "text-text-muted hover:text-primary"
                            )}>
                            <span>{item.name}</span>
                            <span className={cn(
                              "absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full",
                              location.pathname === item.href ? "w-full" : "w-0"
                            )} />
                        </Link>
                    ))}
                </div>

                {/* Action Buttons */}
                <div className="hidden lg:flex items-center gap-4">
                    <Button
                        asChild
                        variant="ghost"
                        className="rounded-full px-6 font-bold text-primary hover:bg-accent transition-all h-11">
                        <Link to="/contact">Member Login</Link>
                    </Button>
                    <Button
                        asChild
                        className="rounded-full px-8 font-bold h-11 bg-primary text-white hover:bg-primary-dark transition-all shadow-lg shadow-primary/10">
                        <Link to="/contact">Get Started</Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMenuState(!menuState)}
                    className="lg:hidden p-2 text-primary hover:bg-accent rounded-full transition-all"
                >
                    {menuState ? <X className="size-6" /> : <Menu className="size-6" />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {menuState && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:hidden absolute top-20 left-4 right-4 bg-white border border-primary/5 rounded-[2rem] shadow-2xl p-8 space-y-8 z-50 overflow-hidden"
                >
                    <ul className="space-y-6">
                        {navLinks.map((item, index) => (
                            <li key={index}>
                                <Link
                                    to={item.href}
                                    onClick={() => setMenuState(false)}
                                    className="text-3xl font-black text-primary tracking-tighter block hover:text-secondary transition-colors"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-4 pt-4 border-t border-primary/5">
                        <Button asChild size="lg" className="w-full h-14 rounded-2xl text-lg font-black bg-primary text-white">
                            <Link to="/contact" onClick={() => setMenuState(false)}>Join the Family</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="w-full h-14 rounded-2xl text-lg font-bold border-primary/10 text-primary">
                            <Link to="/contact" onClick={() => setMenuState(false)}>Member Login</Link>
                        </Button>
                    </div>
                </motion.div>
            )}
        </header>
    );
}
