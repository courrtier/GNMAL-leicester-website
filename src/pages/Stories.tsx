import { motion } from 'motion/react';
import { Quote, ArrowUpRight, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export default function Stories() {
  const stories = [
    {
      name: "Adwoa Osei",
      role: "Advanced Nurse Practitioner",
      hospital: "Leicester Royal Infirmary",
      quote: "A person needs another person. GNMAL Leicester lives this proverb every single day. The community gave me the courage to pursue my advanced practice role.",
      img: "https://images.unsplash.com/photo-1543333991-a750c010a704?q=80&w=2670&auto=format&fit=crop"
    },
    {
      name: "Dr. Kofi Mensah",
      role: "Senior Consultant",
      hospital: "Glenfield Hospital",
      quote: "The GNMAL mentorship program is a cornerstone of professional growth in this region. Bridging heritage and excellence is what makes us distinctive.",
      img: "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Serwaa Ababio",
      role: "Midwife",
      hospital: "Leicester General",
      quote: "As a newly arrived midwife from Ghana, the association was my family away from home. They helped me navigate the NHS with confidence.",
      img: "https://images.unsplash.com/photo-1579156412503-f22426cc63cf?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 font-sans">
      {/* Header */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent border border-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-8">
               Member Spotlight
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-brand-black tracking-tighter mb-8 italic font-serif leading-[0.85]">
               Voices of <br /><span className="text-secondary">Impact.</span>
            </h1>
            <p className="text-2xl text-text-muted font-medium max-w-2xl leading-relaxed">
              Real stories from the frontlines of care in Leicester. Celebrating the journey, heritage, and excellence of our members.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Story - Large horizontal card */}
      <section className="py-24 bg-surface relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
            <div className="bg-primary rounded-[4rem] text-white overflow-hidden shadow-3xl shadow-primary/20 flex flex-col items-stretch lg:flex-row min-h-[600px] relative">
               <div className="lg:w-1/2 relative min-h-[400px]">
                  <img src="https://images.unsplash.com/photo-1576091160550-2173bdb999ef?q=80&w=2070&auto=format&fit=crop" alt="Featured story" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent hidden lg:block" />
               </div>
               <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center relative z-10">
                  <div className="flex gap-4 items-center mb-8">
                     <Award className="text-secondary" size={32} />
                     <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Recognition of Excellence</span>
                  </div>
                  <Quote className="text-secondary/30 mb-8" size={80} />
                  <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight italic font-serif text-white">
                     "GNMAL gave me the confidence to speak up for my patients and advocate for clinical changes at my Trust."
                  </h2>
                  <div className="space-y-1">
                     <h4 className="text-2xl font-black text-secondary">Ama Dankwa</h4>
                     <p className="text-sm font-bold uppercase tracking-widest opacity-60 text-white/70">Clinical Lead · NHS Trust Partner</p>
                  </div>
               </div>
            </div>
        </div>
      </section>

      {/* Story Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6 md:px-12">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {stories.map((story, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="aspect-[1/1.2] rounded-[3rem] overflow-hidden mb-10 shadow-2xl relative border-8 border-white group-hover:-translate-y-2 transition-all duration-500">
                    <img src={story.img} alt={story.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                       <h3 className="text-3xl font-black mb-1 italic font-serif leading-none">{story.name}</h3>
                       <p className="text-xs font-bold uppercase tracking-widest text-secondary">{story.role}</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <p className="text-xl text-text-muted font-medium italic leading-relaxed border-l-4 border-secondary pl-6">"{story.quote}"</p>
                    <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest group-hover:text-secondary transition-colors cursor-pointer pl-6">
                       Read Full Profile <ArrowUpRight size={16} />
                    </div>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Member Incentives / Recognition summary */}
      <section className="py-24 bg-accent/30">
        <div className="container mx-auto px-6 text-center">
           <div className="max-w-4xl mx-auto space-y-12">
              <h2 className="text-4xl md:text-6xl font-black text-brand-black tracking-tight leading-none italic font-serif uppercase">Recognition <br />Program.</h2>
              <p className="text-xl text-text-muted font-medium max-w-2xl mx-auto">Outstanding dedication is rewarded with clinical sponsorships, trophies, and career advancement opportunities at our Annual General Meetings.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
                {[
                  { title: "Clinical Prize", desc: "For nursing innovation" },
                  { title: "Compassion Award", desc: "For patient-first leadership" },
                  { title: "Community Star", desc: "For outreach excellence" }
                ].map((award, i) => (
                  <div key={i} className="p-8 bg-white rounded-3xl border border-primary/5 shadow-sm text-left">
                     <Award className="text-secondary mb-4" />
                     <h4 className="font-black text-primary mb-1 uppercase tracking-tight">{award.title}</h4>
                     <p className="text-sm font-medium text-text-muted">{award.desc}</p>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 text-center bg-brand-black text-white">
        <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto space-y-16">
              <h2 className="text-5xl md:text-[9rem] font-black tracking-tighter leading-[0.8] mb-4 uppercase text-secondary">Join <br />Our Story.</h2>
              <p className="text-2xl text-white/70 font-medium max-w-2xl mx-auto leading-relaxed">Your professional journey is unique. Share it with a community that understands and values the heritage you bring to medicine.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                 <Button asChild size="lg" className="rounded-full px-16 h-24 text-3xl font-black bg-primary text-white hover:bg-primary-dark transition-all">
                   <Link to="/contact">Become a Member</Link>
                 </Button>
                 <Button asChild variant="ghost" size="lg" className="rounded-full px-16 h-24 text-3xl font-black text-white hover:bg-white/10 transition-all border border-white/20">
                   <Link to="/membership">View Benefits</Link>
                 </Button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
