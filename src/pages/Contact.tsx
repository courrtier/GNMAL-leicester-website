import { motion } from 'motion/react';
import { Mail, MapPin, Send, Globe, Instagram, Facebook } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen pt-32 font-sans selection:bg-secondary/20">
      {/* Header */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent border border-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-8">
                Get in Touch
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-brand-black tracking-tighter mb-8 italic font-serif leading-[0.85]">
               Let's serve <br /><span className="text-primary">together.</span>
            </h1>
            <p className="text-2xl text-text-muted font-medium max-w-2xl leading-relaxed">
               Whether you want to join GNMAL, partner on a community project, or seek professional support, our team is here for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-24 bg-surface/50 border-y border-primary/5">
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20">
           {/* Info Side */}
           <div className="lg:w-1/3 space-y-16">
              <div className="space-y-8">
                 <h3 className="text-3xl font-black text-brand-black italic font-serif">Contact Information.</h3>
                 <div className="space-y-6">
                    <div className="flex gap-6 items-start">
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm shrink-0 border border-primary/5">
                          <MapPin size={24} />
                       </div>
                       <div>
                          <h4 className="font-bold text-brand-black mb-1">Our Base</h4>
                          <p className="text-text-muted font-medium">Leicester, East Midlands, United Kingdom</p>
                       </div>
                    </div>
                    <div className="flex gap-6 items-start">
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm shrink-0 border border-primary/5">
                          <Mail size={24} />
                       </div>
                       <div>
                          <h4 className="font-bold text-brand-black mb-1">Email Us</h4>
                          <p className="text-text-muted font-medium">gnmalleicester@gmail.com</p>
                       </div>
                    </div>
                    <div className="flex gap-6 items-start">
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm shrink-0 border border-primary/5">
                          <Globe size={24} />
                       </div>
                       <div>
                          <h4 className="font-bold text-brand-black mb-1">Online Presence</h4>
                          <div className="flex gap-4 mt-2">
                             <Instagram size={20} className="text-secondary hover:text-primary transition-colors cursor-pointer" />
                             <Facebook size={20} className="text-secondary hover:text-primary transition-colors cursor-pointer" />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="p-10 bg-primary rounded-[3rem] text-white space-y-6 shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
                 <h4 className="text-2xl font-black italic font-serif leading-none">Registered CIC</h4>
                 <p className="text-white/70 font-medium leading-relaxed">Ghanaian Nurses and Midwives Association Leicester CIC. Registered in England and Wales.</p>
              </div>
           </div>

           {/* Form Side */}
           <div className="lg:w-2/3">
              <div className="bg-white p-12 md:p-20 rounded-[4rem] shadow-3xl shadow-primary/5 border border-primary/5 relative">
                 <h2 className="text-4xl font-black mb-12 tracking-tight text-brand-black italic font-serif transition-colors">Send a Message</h2>
                 <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Full Name</label>
                          <input type="text" placeholder="Your name" className="w-full bg-accent/50 border-b-2 border-primary/10 px-0 py-4 focus:border-primary focus:outline-none transition-all font-medium text-lg placeholder:text-text-muted/40" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Email Address</label>
                          <input type="email" placeholder="example@gmail.com" className="w-full bg-accent/50 border-b-2 border-primary/10 px-0 py-4 focus:border-primary focus:outline-none transition-all font-medium text-lg placeholder:text-text-muted/40" />
                       </div>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Reason for Contact</label>
                       <select className="w-full bg-accent/50 border-b-2 border-primary/10 px-0 py-4 focus:border-primary focus:outline-none transition-all font-medium text-lg text-brand-black/60">
                          <option>Membership Application</option>
                          <option>Professional Support / CPD</option>
                          <option>Partnership Inquiry</option>
                          <option>Community Outreach</option>
                          <option>Other</option>
                       </select>
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Message</label>
                       <textarea rows={4} placeholder="How can we help you?" className="w-full bg-accent/50 border-b-2 border-primary/10 px-0 py-4 focus:border-primary focus:outline-none transition-all font-medium text-lg placeholder:text-text-muted/40 resize-none"></textarea>
                    </div>
                    <div className="pt-8">
                       <Button size="lg" className="rounded-full px-16 h-20 text-2xl font-black bg-primary text-white hover:bg-primary-dark transition-all w-full md:w-auto shadow-xl shadow-primary/20">
                          <span className="flex items-center gap-3">
                             Submit Inquiry <Send size={24} />
                          </span>
                       </Button>
                    </div>
                 </form>
              </div>
           </div>
        </div>
      </section>

      {/* Heritage Floor */}
      <section className="py-24 text-center border-t border-primary/5">
         <div className="container mx-auto px-6">
            <h3 className="text-2xl font-black text-brand-black italic font-serif">"Wo ho na wo fie."</h3>
            <p className="text-text-muted font-bold uppercase tracking-widest text-sm mt-2 opacity-60">(Your health is your home)</p>
         </div>
      </section>
    </div>
  );
}
