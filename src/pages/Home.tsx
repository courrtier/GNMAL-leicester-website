import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Heart,
  ArrowUpRight
} from 'lucide-react';
import { Button } from '../components/ui/button';
import { TextEffect } from '../components/ui/text-effect';
import { AnimatedGroup } from '../components/ui/animated-group';
import Logo from '../components/Logo';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Bold & Clean like ThriveAbility */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-8">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                Ghanaian Nurses & Midwives Association Leicester
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-brand-black leading-[0.95] tracking-tighter mb-8">
                <TextEffect per="word" preset="blur">
                  Serving with Excellence. Rooted in Heritage.
                </TextEffect>
              </h1>
              <p className="text-xl md:text-2xl text-text-muted font-medium mb-10 max-w-2xl leading-relaxed">
                Empowering Ghanaian healthcare professionals in Leicester to thrive professionally, celebrate their heritage, and serve with compassion.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full px-10 h-16 text-lg bg-primary hover:bg-primary-dark transition-all group">
                  <Link to="/contact" className="flex items-center gap-2">
                    Join the Family <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-10 h-16 text-lg border-primary/20 text-primary hover:bg-accent transition-all">
                  <Link to="/about">Our Story</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:flex items-center justify-center opacity-10">
           <Logo variant="white" size={600} className="text-primary/10" />
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-primary tracking-tight mb-4">Many Ways to Thrive.</h2>
            <div className="w-20 h-1.5 bg-secondary rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "ThriveAbility",
                desc: "Mentorship and CPD workshops designed to elevate your clinical practice and career trajectory.",
                link: "/programs",
                img: "https://images.pexels.com/photos/5722166/pexels-photo-5722166.jpeg?auto=compress&cs=tinysrgb&w=1600"
              },
              {
                title: "Thrive At Home",
                desc: "A dedicated welfare fund and peer support network for members and their families in Leicester.",
                link: "/about",
                img: "https://images.pexels.com/photos/6097985/pexels-photo-6097985.jpeg?auto=compress&cs=tinysrgb&w=1600"
              },
              {
                title: "Our Stories",
                desc: "Celebrating the achievements and impact of Ghanaian healthcare professionals in the NHS.",
                link: "/stories",
                img: "https://images.pexels.com/photos/6129506/pexels-photo-6129506.jpeg?auto=compress&cs=tinysrgb&w=1600"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={item.link} className="block">
                  <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 shadow-2xl shadow-primary/5">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8">
                      <h3 className="text-2xl font-black text-white mb-2">{item.title}</h3>
                      <p className="text-white/70 text-sm font-medium mb-6 leading-relaxed">{item.desc}</p>
                      <div className="inline-flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 group-hover:bg-secondary group-hover:border-secondary transition-all">
                        Learn More <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Heritage Section */}
      <section className="py-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-7xl font-black text-brand-black leading-[0.9] mb-8">
                Compassion <br />
                meets <span className="text-primary">Excellence.</span>
              </h2>
              <div className="space-y-6 text-lg text-text-muted font-medium leading-relaxed">
                <p>
                  Rooted in the Akan proverb <span className="text-brand-red font-bold">"Onipa na ohia onipa"</span> (a person needs another person), GNMAL Leicester fosters unity through mutual support and professional integrity.
                </p>
                <p>
                  We are guided by the NHS 6 C's—Care, Compassion, Competence, Communication, Courage, and Commitment—enriched by our rich Ghanaian heritage.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12 pb-12 border-b border-primary/5">
                <div>
                  <h4 className="text-5xl font-black text-primary mb-1">2024</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Founded with Vision</p>
                </div>
                <div>
                  <h4 className="text-5xl font-black text-secondary mb-1">100+</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-text-muted">Growing Community</p>
                </div>
              </div>
              
              <div className="mt-12 flex flex-wrap gap-6">
                <Button asChild size="lg" className="rounded-full px-8 h-14 bg-brand-red hover:bg-brand-red/90 transition-all">
                  <Link to="/values">Our Values</Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="rounded-full px-8 h-14 text-primary font-bold hover:bg-accent group">
                  <Link to="/about" className="flex items-center gap-2">
                    Who We Are <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[4rem] overflow-hidden shadow-3xl shadow-primary/10 border-8 border-white"
              >
                <img src="https://images.pexels.com/photos/18788957/pexels-photo-18788957.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Confident Ghanaian healthcare professional" className="w-full aspect-[4/5] object-cover" />
              </motion.div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Outreach Section */}
      <section className="py-24 bg-brand-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-primary/10" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
              Serving the <br />
              <span className="text-secondary italic font-serif">Community.</span>
            </h2>
            <p className="text-xl text-white/70 font-medium">From providing hot meals to nursing home visits, our outreach programs touch lives across Leicester.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Health Outreach",
                desc: "Culturally sensitive health education on hypertension, diabetes, and maternal health for our community.",
                icon: ShieldCheck
              },
              {
                title: "Compassionate Care",
                icon: Heart,
                desc: "Quarterly nursing and respite home visits providing companionship and cultural activities for residents."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex gap-8 items-start p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="w-16 h-16 bg-secondary text-brand-black rounded-3xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <feature.icon size={32} />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-black">{feature.title}</h4>
                  <p className="text-white/60 font-medium leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
             <Button asChild size="lg" variant="outline" className="rounded-full px-12 h-16 border-white/20 text-white hover:bg-white hover:text-brand-black transition-all font-black text-lg">
               <Link to="/programs">Explore Our Outreach</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl md:text-[9rem] font-black text-primary tracking-tighter leading-[0.8] mb-4">
              Let’s Serve <br />
              Together.
            </h2>
            <p className="text-2xl md:text-3xl text-text-muted font-bold max-w-2xl mx-auto leading-tight italic font-serif">
              "Wo ho na wo fie" — Your home is where you are.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
              <Button asChild size="lg" className="rounded-full px-16 h-20 text-2xl font-black bg-secondary text-brand-black hover:bg-secondary/90 transition-all shadow-2xl shadow-secondary/20">
                <Link to="/contact">Join the Family</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full px-16 h-20 text-2xl font-black text-primary hover:bg-accent transition-all">
                <Link to="/about">Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Subtle decorative pattern */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 opacity-[0.03] pointer-events-none overflow-hidden">
          <Logo variant="white" size={1000} className="translate-y-1/2" />
        </div>
      </section>
    </div>
  );
}
