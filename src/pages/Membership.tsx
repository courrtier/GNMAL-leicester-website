import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle, CreditCard, Calendar, AlertCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export default function Membership() {
  const benefits = [
    { title: "Professional Development", desc: "Minimum 2 CPD events/study days per year with NMC revalidation-ready logs." },
    { title: "Interview & Career Support", desc: "1:1 mock interviews, application guidance, and mentorship from senior members." },
    { title: "Peer Support Network", desc: "A strong community of Ghanaian healthcare professionals across Leicester." },
    { title: "Workplace Advocacy", desc: "Championing rights, fair treatment, and equal opportunities in the NHS." },
    { title: "Welfare Support", desc: "Compassionate support fund for members during times of bereavement." },
    { title: "Annual Awards", desc: "Recognition and prizes for outstanding contribution and compassion." }
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
               Join the <br /><span className="text-primary italic">Family.</span>
            </h1>
            <p className="text-2xl text-text-muted font-medium max-w-2xl leading-relaxed">
              Become part of a professional body that understands your journey, celebrates your heritage, and supports your growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing / Details Card */}
      <section className="py-24 bg-surface/50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 items-stretch">
            <div className="lg:w-1/2 p-12 bg-primary rounded-[3rem] text-white flex flex-col justify-between shadow-2xl">
              <div>
                <h2 className="text-4xl font-black mb-6">Standard <br />Membership.</h2>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-6xl font-black text-secondary">£10</span>
                  <span className="text-xl font-bold opacity-70">/ month</span>
                </div>
                <div className="space-y-6">
                  <div className="flex gap-4 items-center">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <CheckCircle className="text-primary" size={14} />
                    </div>
                    <span className="font-bold">Full access to peer network</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <CheckCircle className="text-primary" size={14} />
                    </div>
                    <span className="font-bold">CPD certification & career support</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0">
                      <CheckCircle className="text-primary" size={14} />
                    </div>
                    <span className="font-bold">Eligibility for welfare fund</span>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                 <Button asChild size="lg" className="w-full rounded-2xl h-16 text-xl font-black bg-white text-primary hover:bg-white/90">
                    <Link to="/contact">Apply Now</Link>
                 </Button>
              </div>
            </div>

            <div className="lg:w-1/2 p-12 bg-white rounded-[3rem] border border-primary/5 shadow-xl flex flex-col justify-center">
               <h3 className="text-2xl font-black text-brand-black mb-8">Eligibility & Commitment</h3>
               <div className="space-y-8">
                 <div className="flex gap-6">
                    <ShieldCheck className="text-secondary shrink-0" size={32} />
                    <div>
                      <h4 className="font-bold text-primary mb-1">Eligibility</h4>
                      <p className="text-text-muted text-sm font-medium">Registered nurses, midwives, or allied healthcare professionals of Ghanaian heritage in the East Midlands.</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <Calendar className="text-secondary shrink-0" size={32} />
                    <div>
                      <h4 className="font-bold text-primary mb-1">Attendance</h4>
                      <p className="text-text-muted text-sm font-medium">Mandatory commitment to attend 4 quarterly face-to-face meetings each year.</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <AlertCircle className="text-secondary shrink-0" size={32} />
                    <div>
                      <h4 className="font-bold text-primary mb-1">Fee Payments</h4>
                      <p className="text-text-muted text-sm font-medium">Payments are due on or before the 1st of each month via standing order.</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-black text-brand-black mb-6">Why join GNMAL?</h2>
            <div className="w-20 h-1.5 bg-secondary rounded-full mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2rem] border border-primary/5 hover:border-secondary transition-all group"
              >
                <h4 className="text-xl font-black text-primary mb-3 group-hover:text-secondary transition-colors italic font-serif">{benefit.title}</h4>
                <p className="text-text-muted font-medium leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready CTA */}
      <section className="py-32 bg-brand-black text-white">
        <div className="container mx-auto px-6 text-center">
           <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-8xl font-black mb-8 leading-none italic font-serif text-secondary">Serve with us.</h2>
              <p className="text-xl md:text-2xl text-white/70 font-medium mb-12">Submit your application to the Secretary. Your professional journey in Leicester deserves a home.</p>
              <Button asChild size="lg" className="rounded-full px-12 h-20 text-2xl font-black bg-primary hover:bg-primary-dark transition-all shadow-2xl">
                 <Link to="/contact" className="flex items-center gap-3">
                    Start Application <ArrowRight />
                 </Link>
              </Button>
           </div>
        </div>
      </section>
    </div>
  );
}
