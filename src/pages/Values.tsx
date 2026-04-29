import { motion } from 'motion/react';
import { Heart, ShieldCheck, MessageCircle, Compass, Award, Anchor } from 'lucide-react';

export default function Values() {
  const sixCs = [
    {
      title: "Care",
      icon: Heart,
      color: "bg-brand-red",
      desc: "Highest standard of care for every patient; Ghanaian nursing and midwifery expertise contributing to health and wellbeing in Leicester and beyond."
    },
    {
      title: "Compassion",
      icon: Compass,
      color: "bg-secondary",
      desc: "Rooted in the Akan proverb 'Onipa na ohia onipa' (a person needs another person). Kindness, dignity, and respect in every interaction."
    },
    {
      title: "Competence",
      icon: Award,
      color: "bg-primary",
      desc: "Continuous professional development; safe, effective, evidence-based care; mentorship and shared learning across our network."
    },
    {
      title: "Communication",
      icon: MessageCircle,
      color: "bg-brand-red",
      desc: "Active listening and clear speech; bridging cultural and linguistic gaps in healthcare; advocacy for our members and communities."
    },
    {
      title: "Courage",
      icon: ShieldCheck,
      color: "bg-secondary",
      desc: "Speaking up for patients, challenging inequality, raising concerns, and celebrating Ghanaian identity proudly in the workplace."
    },
    {
      title: "Commitment",
      icon: Anchor,
      color: "bg-primary",
      desc: "Unwavering dedication to patients, the profession, our members, and the Ghanaian communities in both Leicester and Ghana."
    }
  ];

  const heritageValues = [
    { title: "Cultural Pride & Identity", desc: "Honouring our roots while serving the local community with pride and distinction." },
    { title: "Unity & Sisterhood", desc: "Building a strong, inseparable family of professionals supporting one another." },
    { title: "Advocacy & Empowerment", desc: "Championing rights and providing the tools for our members to lead." },
    { title: "Integrity & Collaboration", desc: "Working transparently with NHS Trusts and community partners." }
  ];

  return (
    <div className="bg-white min-h-screen pt-32">
      {/* Header */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-black text-brand-black tracking-tighter mb-8 italic font-serif">
              Our Values.
            </h1>
            <p className="text-2xl text-text-muted font-medium max-w-2xl leading-relaxed">
              Our identity is anchored in the NHS 6 C's, enriched by the deep-rooted values of our Ghanaian heritage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Six Cs Grid */}
      <section className="py-24 bg-accent/20">
        <div className="container mx-auto px-6">
          <div className="mb-20">
             <h2 className="text-4xl font-black text-brand-black tracking-tight mb-4">The NHS 6 C's</h2>
             <p className="text-text-muted font-bold uppercase tracking-widest text-sm">Enhanced by Ghanaian Excellence</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sixCs.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-primary/5 border border-primary/5 group hover:-translate-y-2 transition-all"
              >
                <div className={`${c.color} w-16 h-16 rounded-3xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform`}>
                  <c.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-brand-black mb-4">{c.title}</h3>
                <p className="text-text-muted font-medium leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Proverbs */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto bg-primary rounded-[3.5rem] p-16 md:p-24 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-4 italic font-serif text-secondary">
                "Onipa na ohia onipa"
              </h2>
              <p className="text-xl font-bold uppercase tracking-[0.3em] mb-12 opacity-70">
                (A person needs another person)
              </p>
              <p className="text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
                This Akan proverb is the heartbeat of our association. We believe that professional success is inseparable from community support.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heritage Values List */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-brand-black mb-8 leading-tight">
                Our Heritage <br />Values.
              </h2>
              <p className="text-xl text-text-muted font-medium">Alongside the clinical standards, we bring a rich cultural perspective to leadership in healthcare.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {heritageValues.map((value, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-10 h-1 bg-secondary rounded-full" />
                  <h4 className="text-xl font-black text-primary">{value.title}</h4>
                  <p className="text-sm font-medium text-text-muted leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
