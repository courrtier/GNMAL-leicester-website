import { motion } from 'motion/react';
import { BookOpen, Heart, Users, GraduationCap, Star, ArrowUpRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function Programs() {
  const events = [
    {
      category: "Professional Development",
      title: "CPD & Study Days",
      desc: "Minimum 2 certified workshops per year covering clinical excellence and leadership in the NHS.",
      icon: GraduationCap,
      color: "bg-primary"
    },
    {
      category: "Career Planning",
      title: "Interview Mastery",
      desc: "Mock NHS interviews and personal statement workshops to help you secure the roles you deserve.",
      icon: BookOpen,
      color: "bg-secondary"
    },
    {
      category: "Mentorship",
      title: "Senior Mentees",
      desc: "Connect with senior Ghanaian consultants and nurse leaders for 1:1 career signposting.",
      icon: Star,
      color: "bg-brand-red"
    }
  ];

  const outreach = [
    {
      title: "Nursing Home Visits",
      desc: "Providing companionship, cultural music, and storytelling for residents from the African diaspora in Leicester.",
      img: "https://images.unsplash.com/photo-1543333991-a750c010a704?q=80&w=2670&auto=format&fit=crop"
    },
    {
      title: "Health Education",
      desc: "Culturally sensitive health talks on sickle cell, maternal health, and mental wellbeing at local events.",
      img: "https://images.unsplash.com/photo-1581578731522-a0bcd4348b7b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Homeless Outreach",
      desc: "Partnering with local food banks to provide hot meals and informal health support to the vulnerable.",
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 font-sans">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 overflow-hidden">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent border border-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-8">
                Impact in Action
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-brand-black tracking-tighter mb-8 italic font-serif leading-[0.85]">
               Programs of <br /><span className="text-brand-red">Impact.</span>
            </h1>
            <p className="text-2xl text-text-muted font-medium max-w-2xl leading-relaxed">
              From continuous professional development to community outreach, we transform our values into tangible change for the people of Leicester.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Professional Growth Section */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
           <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-24">
              <div className="max-w-2xl">
                 <h2 className="text-4xl md:text-7xl font-black text-brand-black tracking-tighter mb-6 leading-none">Elevate your practice.</h2>
                 <p className="text-xl text-text-muted font-medium leading-relaxed">Our clinical and professional programs ensure that Ghanaian nurses and midwives are leading the charge in healthcare excellence.</p>
              </div>
              <Button asChild size="lg" className="rounded-full px-12 h-20 text-xl font-black bg-primary text-white hover:bg-primary-dark transition-all shadow-xl shadow-primary/20">
                <Link to="/contact">Request Mentorship</Link>
              </Button>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {events.map((event, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 viewport={{ once: true }}
                 className="bg-white p-12 rounded-[4rem] shadow-2xl shadow-primary/5 border border-primary/5 group hover:-translate-y-2 transition-all cursor-pointer"
               >
                 <div className={`${event.color} w-20 h-20 rounded-[2rem] flex items-center justify-center text-white mb-10 group-hover:rotate-6 transition-transform`}>
                   <event.icon size={40} />
                 </div>
                 <div className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted mb-3">{event.category}</div>
                 <h3 className="text-3xl font-black text-brand-black mb-4 italic font-serif leading-none tracking-tight">{event.title}</h3>
                 <p className="text-text-muted font-medium leading-relaxed mb-8">{event.desc}</p>
                 <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest group-hover:text-secondary transition-colors">
                    Learn More <ArrowUpRight size={18} />
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* Community Outreach Section */}
      <section className="py-40">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-24 flex flex-col items-center text-center">
            <h2 className="text-4xl md:text-[8rem] font-black text-brand-black tracking-tighter mb-8 italic font-serif leading-[0.8] uppercase">Community <br />Outreach.</h2>
            <p className="text-2xl text-text-muted font-medium max-w-2xl mx-auto">Rooted in our commitment to the people of Leicester—especially those who are most vulnerable.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {outreach.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] rounded-[4rem] overflow-hidden mb-10 shadow-3xl shadow-primary/10 relative border-8 border-white">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-8 right-8">
                     <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all">
                        <ArrowUpRight />
                     </div>
                  </div>
                </div>
                <h3 className="text-4xl font-black text-brand-black mb-4 italic font-serif tracking-tight">{item.title}</h3>
                <p className="text-lg text-text-muted font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards section - Full width immersive */}
      <section className="py-32 bg-secondary text-brand-black relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
             <div className="lg:w-2/3">
                <div className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.4em] mb-6">
                   <Star size={16} fill="currentColor" /> Q4 Annual General Meeting
                </div>
                <h2 className="text-5xl md:text-9xl font-black leading-[0.8] mb-10 tracking-tighter uppercase">Member <br />Awards.</h2>
                <p className="text-2xl font-medium opacity-80 max-w-3xl leading-relaxed mb-10">Celebrating outstanding dedication, compassion, and innovation in the workforce. Winners receive clinical scholarships and equipment sets.</p>
                <Button asChild size="lg" className="rounded-full px-12 h-16 bg-brand-black text-white hover:bg-brand-black/90 transition-all">
                   <Link to="/contact">Nominate a Peer</Link>
                </Button>
             </div>
             <div className="lg:w-1/3 relative">
                <div className="w-full aspect-square bg-white/20 backdrop-blur-2xl rounded-[4rem] border border-white/40 flex items-center justify-center p-12">
                   <div className="relative">
                      <Star size={120} className="fill-brand-black animate-float" />
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <ShieldCheck className="text-primary" />
                      </div>
                   </div>
                </div>
                {/* Decorative dots */}
                <div className="absolute -top-10 -right-10 grid grid-cols-5 gap-2">
                   {[...Array(25)].map((_, i) => (
                     <div key={i} className="w-1.5 h-1.5 bg-brand-black/10 rounded-full" />
                   ))}
                </div>
             </div>
          </div>
      </section>

      {/* Footer CTA */}
      <section className="py-40 bg-white relative">
        <div className="container mx-auto px-6 text-center">
           <div className="max-w-5xl mx-auto space-y-16">
              <h2 className="text-5xl md:text-[10rem] font-black text-primary tracking-tighter leading-[0.75] mb-4 uppercase">Let's <br />Collaborate.</h2>
              <p className="text-2xl text-text-muted font-medium max-w-3xl mx-auto leading-relaxed italic font-serif">
                 Whether you are an NHS Trust seeking partnership or a professional seeking growth, GNMAL Leicester is your gateway to excellence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                 <Button asChild size="lg" className="rounded-full px-16 h-24 text-3xl font-black bg-primary text-white hover:bg-primary-dark transition-all shadow-3xl shadow-primary/20">
                   <Link to="/contact">Partner with Us</Link>
                 </Button>
                 <Button asChild variant="ghost" size="lg" className="rounded-full px-16 h-24 text-3xl font-black text-primary hover:bg-accent transition-all">
                   <Link to="/about" className="flex items-center gap-4">
                     Learn More <ChevronRight size={32} />
                   </Link>
                 </Button>
              </div>
           </div>
        </div>
        
        {/* Subtle decorative pattern floor */}
        <div className="absolute bottom-0 left-0 w-full h-1/4 opacity-[0.03] pointer-events-none">
           <Logo variant="white" size={1200} className="mx-auto" />
        </div>
      </section>
    </div>
  );
}
