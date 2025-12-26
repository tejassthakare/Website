import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_6yi8k6d';
const EMAILJS_TEMPLATE_ID = 'template_chcc5os';
const EMAILJS_PUBLIC_KEY = 'vgaoKtY-r3nD9PnM1';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      formRef.current?.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'tejassthakare@gmail.com',
      href: 'mailto:tejassthakare@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'tejasthakare2003',
      href: 'https://linkedin.com/in/tejasthakare2003/',
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 mesh-bg" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="section-title mt-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Have a project in mind? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Feel free to reach out through any of these channels. I'm always open to discussing
                new projects, creative ideas, or opportunities.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-muted/50 rounded-2xl hover:bg-primary/5 hover:border-primary/20 border border-transparent transition-all group"
                  >
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3.5 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3.5 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3.5 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 bg-muted/50 border border-border rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
