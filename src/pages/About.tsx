import { motion } from 'motion/react';
import { Target, Users, Globe } from 'lucide-react';
import Logo from '../components/Logo';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export default function About() {
  const pillars = [
    {
      title: "Who We Are",
      icon: Users,
      desc: "A professional and cultural association for Ghanaian nurses, midwives, and allied healthcare professionals in Leicester and the East Midlands."
    },
    {
      title: "Mission",
      icon: Target,
      desc: "To empower Ghanaian nurses and midwives to thrive professionally, celebrate heritage, advocate for equality, and serve with compassion."
    },
    {
      title: "Cultural Pride",
      icon: Globe,
      desc: "Rooted in identity, we believe our Ghanaian heritage is a strength that enhances our clinical expertise and the unique care we provide."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-secondary font-black uppercase tracking-[0.3em] mb-4 text-sm">Founded in 2024</div>
              <h1 className="text-6xl md:text-8xl font-black text-brand-black leading-[0.9] tracking-tighter mb-8 italic font-serif">Our Story.</h1>
              <p className="text-2xl text-text-muted font-medium leading-relaxed max-w-xl">
                 GNMAL Leicester was built on the belief that Ghanaian healthcare professionals deserve a strong support network that celebrates identity while championing professional excellence.
              </p>
            </motion.div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
                <img src="https://images.pexels.com/photos/5430213/pexels-photo-5430213.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Ghanaian nurse smiling in blue scrubs" className="w-full h-full object-cover object-[center_30%]" />
             </div>
             <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 bg-primary text-white relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-7xl font-black mb-12 italic font-serif text-secondary leading-none">A Community-Driven Vision.</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg font-medium leading-relaxed opacity-90">
              <p>
                We are more than just a professional association. We are a sanctuary for Ghanaian healthcare professionals in Leicester to connect, grow, and thrive within the NHS landscape.
              </p>
              <p>
                From newly registered nurses to senior consultants, our network provides mentorship, career support, and a safety net for those navigating life and work in the UK.
              </p>
            </div>
            
            <div className="mt-20 flex flex-wrap gap-8">
              <div className="flex flex-col">
                <span className="text-5xl font-black text-secondary">CIC</span>
                <span className="text-xs font-bold uppercase tracking-widest mt-2">Not-for-Profit Entity</span>
              </div>
              <div className="w-px h-16 bg-white/20 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-5xl font-black text-secondary">Affiliated</span>
                <span className="text-xs font-bold uppercase tracking-widest mt-2">with the NMC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Pillars */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {pillars.map((pillar, i) => (
              <div key={i} className="space-y-6">
                <div className="w-16 h-16 bg-accent rounded-3xl flex items-center justify-center text-primary group hover:bg-primary hover:text-white transition-all">
                  <pillar.icon size={32} />
                </div>
                <h3 className="text-3xl font-black text-brand-black tracking-tight italic font-serif">{pillar.title}</h3>
                <p className="text-text-muted font-medium leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Feature Teaser */}
      <section className="py-24 bg-accent/20">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-brand-black mb-12 tracking-tight italic font-serif">Guided by the NHS 6 C's.</h2>
            <div className="flex justify-center mb-12">
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {['Care', 'Compassion', 'Competence', 'Communication', 'Courage', 'Commitment'].map((c, i) => (
                    <div key={i} className="bg-white px-8 py-4 rounded-2xl shadow-sm font-bold text-primary border border-primary/5">
                      {c}
                    </div>
                  ))}
               </div>
            </div>
            <Button asChild variant="outline" className="rounded-full px-10 h-14 border-primary/10 text-primary hover:bg-accent transition-all font-bold">
               <Link to="/values">Explore Our Full Values</Link>
            </Button>
         </div>
      </section>

      {/* Final Heritage Quote */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="max-w-3xl mx-auto space-y-8 relative z-10">
              <Logo variant="icon" size={120} className="mx-auto" />
              <h3 className="text-4xl md:text-6xl font-black text-brand-black leading-none tracking-tighter">"Serving with excellence. Rooted in heritage."</h3>
              <p className="text-xl text-text-muted font-medium italic font-serif">Guided by global standards and local wisdom.</p>
           </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 opacity-[0.02] pointer-events-none">
           <Logo variant="white" size={800} />
        </div>
      </section>
    </div>
  );
}
