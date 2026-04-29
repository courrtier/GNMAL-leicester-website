import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Send, Globe, Instagram, Facebook, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/button';

const CONTACT_EMAIL = 'gnmalleicester@gmail.com';
const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;
const INSTAGRAM_URL = 'https://www.instagram.com/';
const FACEBOOK_URL = 'https://www.facebook.com/';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('Membership Application');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          reason,
          message,
          _subject: `[GNMAL Leicester] ${reason} — ${name || 'Website inquiry'}`,
          _replyto: email,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || data?.success === 'false') {
        throw new Error(data?.message || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setName('');
      setEmail('');
      setReason('Membership Application');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Could not submit your message. Please try again or email us directly.');
    }
  };

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
                          <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="text-text-muted font-medium hover:text-primary transition-colors"
                          >
                            {CONTACT_EMAIL}
                          </a>
                       </div>
                    </div>
                    <div className="flex gap-6 items-start">
                       <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary shadow-sm shrink-0 border border-primary/5">
                          <Globe size={24} />
                       </div>
                       <div>
                          <h4 className="font-bold text-brand-black mb-1">Online Presence</h4>
                          <div className="flex gap-4 mt-2">
                             <a
                               href={INSTAGRAM_URL}
                               target="_blank"
                               rel="noreferrer noopener"
                               aria-label="GNMAL Leicester on Instagram"
                               className="text-secondary hover:text-primary transition-colors"
                             >
                               <Instagram size={20} />
                             </a>
                             <a
                               href={FACEBOOK_URL}
                               target="_blank"
                               rel="noreferrer noopener"
                               aria-label="GNMAL Leicester on Facebook"
                               className="text-secondary hover:text-primary transition-colors"
                             >
                               <Facebook size={20} />
                             </a>
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

                 {status === 'success' ? (
                    <div className="flex flex-col items-start gap-6 p-10 rounded-3xl bg-primary/5 border border-primary/10">
                       <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center">
                          <CheckCircle2 size={32} />
                       </div>
                       <div className="space-y-2">
                          <h3 className="text-3xl font-black text-brand-black italic font-serif">Thank you!</h3>
                          <p className="text-text-muted font-medium leading-relaxed max-w-xl">
                             Your message has been sent. We will get back to you at the email address you provided as soon as we can.
                          </p>
                       </div>
                       <Button
                          type="button"
                          variant="outline"
                          className="rounded-full px-8 h-12 font-bold border-primary/20 text-primary hover:bg-accent"
                          onClick={() => setStatus('idle')}
                       >
                          Send another message
                       </Button>
                    </div>
                 ) : (
                    <form className="space-y-8" onSubmit={handleSubmit} noValidate>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                             <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-widest text-text-muted">Full Name</label>
                             <input
                               id="contact-name"
                               name="name"
                               type="text"
                               required
                               autoComplete="name"
                               value={name}
                               onChange={(e) => setName(e.target.value)}
                               placeholder="Your name"
                               className="w-full bg-accent/50 border-b-2 border-primary/10 px-0 py-4 focus:border-primary focus:outline-none transition-all font-medium text-lg placeholder:text-text-muted/40"
                             />
                          </div>
                          <div className="space-y-2">
                             <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-widest text-text-muted">Email Address</label>
                             <input
                               id="contact-email"
                               name="email"
                               type="email"
                               required
                               autoComplete="email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                               placeholder="example@gmail.com"
                               className="w-full bg-accent/50 border-b-2 border-primary/10 px-0 py-4 focus:border-primary focus:outline-none transition-all font-medium text-lg placeholder:text-text-muted/40"
                             />
                          </div>
                       </div>
                       <div className="space-y-2">
                          <label htmlFor="contact-reason" className="text-xs font-bold uppercase tracking-widest text-text-muted">Reason for Contact</label>
                          <select
                            id="contact-reason"
                            name="reason"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            className="w-full bg-accent/50 border-b-2 border-primary/10 px-0 py-4 focus:border-primary focus:outline-none transition-all font-medium text-lg text-brand-black"
                          >
                             <option>Membership Application</option>
                             <option>Professional Support / CPD</option>
                             <option>Partnership Inquiry</option>
                             <option>Community Outreach</option>
                             <option>Other</option>
                          </select>
                       </div>
                       <div className="space-y-2">
                          <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-widest text-text-muted">Message</label>
                          <textarea
                            id="contact-message"
                            name="message"
                            rows={4}
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="How can we help you?"
                            className="w-full bg-accent/50 border-b-2 border-primary/10 px-0 py-4 focus:border-primary focus:outline-none transition-all font-medium text-lg placeholder:text-text-muted/40 resize-none"
                          />
                       </div>

                       {status === 'error' && (
                          <div className="flex gap-3 items-start p-4 rounded-2xl bg-brand-red/5 border border-brand-red/20 text-brand-red">
                             <AlertTriangle size={20} className="shrink-0 mt-0.5" />
                             <p className="text-sm font-medium leading-relaxed">{errorMessage}</p>
                          </div>
                       )}

                       <p className="text-xs text-text-muted/70 font-medium leading-relaxed">
                          Submitting will deliver your message to {CONTACT_EMAIL}. We aim to respond within a few working days.
                       </p>
                       <div className="pt-4">
                          <Button
                             type="submit"
                             size="lg"
                             disabled={status === 'submitting'}
                             className="rounded-full px-16 h-20 text-2xl font-black bg-primary text-white hover:bg-primary-dark transition-all w-full md:w-auto shadow-xl shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
                          >
                             <span className="flex items-center gap-3">
                                {status === 'submitting' ? 'Sending...' : 'Submit Inquiry'}
                                {status !== 'submitting' && <Send size={24} />}
                             </span>
                          </Button>
                       </div>
                    </form>
                 )}
              </div>
           </div>
        </div>
      </section>

      {/* Heritage Floor */}
      <section className="py-24 text-center border-t border-primary/5">
         <div className="container mx-auto px-6">
            <h3 className="text-2xl font-black text-brand-black italic font-serif">"Wo ho na wo fie."</h3>
            <p className="text-text-muted font-bold uppercase tracking-widest text-sm mt-2 opacity-60">(Your home is where you are)</p>
         </div>
      </section>
    </div>
  );
}
