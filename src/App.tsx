import { motion, useScroll, useTransform } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Scale, 
  FileText, 
  ShieldCheck, 
  ArrowUpRight,
  Menu,
  X,
  ParkingCircle,
  Bus,
  ArrowRight
} from "lucide-react";
import { useState, useRef } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 mix-blend-difference text-white py-8 px-6 md:px-12">
      <div className="max-w-[1800px] mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-serif text-2xl tracking-tighter italic">Lazaridou & Partners</span>
          <span className="text-[8px] uppercase tracking-[0.4em] opacity-60">Athens Law Firm</span>
        </div>
        
        <div className="hidden lg:flex items-center space-x-12 text-[10px] uppercase tracking-[0.3em] font-bold">
          <a href="#home" className="hover:opacity-50 transition-opacity">Αρχική</a>
          <a href="#services" className="hover:opacity-50 transition-opacity">Υπηρεσίες</a>
          <a href="#location" className="hover:opacity-50 transition-opacity">Τοποθεσία</a>
          <a href="tel:6980474338" className="flex items-center gap-2">
            <Phone size={12} /> 6980474338
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden fixed inset-0 bg-rich-black text-white p-12 flex flex-col justify-center space-y-8"
        >
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8"><X size={32} /></button>
          <a href="#home" onClick={() => setIsOpen(false)} className="text-5xl font-serif italic">Αρχική</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="text-5xl font-serif italic">Υπηρεσίες</a>
          <a href="#location" onClick={() => setIsOpen(false)} className="text-5xl font-serif italic">Τοποθεσία</a>
          <a href="tel:6980474338" className="text-2xl text-gold font-bold">6980474338</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={container} id="home" className="relative h-screen flex items-center overflow-hidden bg-ivory">
      <motion.div style={{ y }} className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-20 lg:opacity-100">
        <img 
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1200" 
          alt="Legal background" 
          className="w-full h-full object-cover grayscale"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="max-w-[1800px] mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-gold mb-8 block font-bold">Δικηγορικό Γραφείο</span>
            <h1 className="text-7xl md:text-[10rem] font-serif leading-[0.85] mb-12">
              Δέσποινα <br />
              <span className="italic text-gold">Λαζαρίδου</span>
            </h1>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-12">
              <p className="text-lg text-rich-black/60 max-w-md leading-relaxed font-light">
                Συνέπεια, Εμπιστοσύνη και Εξειδικευμένη Νομική Υποστήριξη στην Αθήνα. Στεκόμαστε δίπλα σας για να δώσουμε αποτελεσματικές λύσεις.
              </p>
              <a href="tel:6980474338" className="btn-editorial flex items-center gap-4">
                Επικοινωνία <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-40 bg-white border-y border-rich-black/5">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="editorial-grid">
          <div className="col-span-12 lg:col-span-5 mb-12 lg:mb-0">
            <h2 className="text-5xl md:text-7xl leading-tight mb-8">
              Ποιοι <span className="italic text-gold">Είμαστε</span>
            </h2>
            <div className="w-20 h-[1px] bg-gold mb-8"></div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <p className="text-2xl md:text-3xl text-rich-black/80 leading-snug font-light mb-12 italic">
              "Στο Δικηγορικό Γραφείο της Δέσποινας Π. Λαζαρίδου και των συνεργατών της, προσφέρουμε ολοκληρωμένες νομικές υπηρεσίες με απόλυτο επαγγελματισμό, εχεμύθεια και προσήλωση στις ανάγκες του κάθε εντολέα μας."
            </p>
            <p className="text-lg text-rich-black/50 leading-relaxed max-w-2xl">
              Με βαθιά γνώση του νόμου και πολυετή εμπειρία, στεκόμαστε δίπλα σας για να δώσουμε αποτελεσματικές λύσεις στις υποθέσεις σας. Η προσωπική επαφή με τον πελάτη είναι για εμάς το παν.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Δικαιολογική Υποστήριξη",
      desc: "Πλήρης καθοδήγηση, έλεγχος και σύνταξη όλων των απαραίτητων εγγράφων και δικαιολογητικών για τις νομικές ή διοικητικές σας υποθέσεις.",
      icon: <FileText size={24} />
    },
    {
      title: "Δικαιώματα",
      desc: "Προάσπιση και διεκδίκηση των νόμιμων δικαιωμάτων σας σε κάθε βαθμό, εξασφαλίζοντας ότι η φωνή σας θα ακουστεί.",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "Φορολογικό Δίκαιο",
      desc: "Εξειδικευμένες συμβουλές και υποστήριξη για φορολογικά ζητήματα, φορολογικούς ελέγχους και τη σωστή τακτοποίηση των υποχρεώσεών σας.",
      icon: <Scale size={24} />
    }
  ];

  return (
    <section id="services" className="bg-ivory">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid lg:grid-cols-3 border-b border-rich-black/5">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: "#ffffff" }}
              className="service-card group"
            >
              <div className="text-gold mb-12 group-hover:scale-110 transition-transform duration-700">{s.icon}</div>
              <h3 className="text-3xl mb-6">{s.title}</h3>
              <p className="text-rich-black/50 leading-relaxed font-light mb-12">{s.desc}</p>
              <a href="tel:6980474338" className="text-[10px] uppercase tracking-[0.3em] font-bold flex items-center gap-2 hover:text-gold transition-colors">
                Περισσότερα <ArrowRight size={12} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="location" className="py-40 bg-white">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="editorial-grid items-center">
          <div className="col-span-12 lg:col-span-4 space-y-12 mb-20 lg:mb-0">
            <h2 className="text-6xl italic">Τοποθεσία</h2>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <MapPin className="text-gold shrink-0" size={20} />
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Διεύθυνση</h4>
                  <p className="text-rich-black/50">Διγενή Ακρίτα 19, Αθήνα, Τ.Κ. 114 72</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <Bus className="text-gold shrink-0" size={20} />
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Πρόσβαση</h4>
                  <p className="text-rich-black/50">Εύκολη προσέγγιση με μέσα μαζικής μεταφοράς.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <ParkingCircle className="text-gold shrink-0" size={20} />
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold mb-2">Parking</h4>
                  <p className="text-rich-black/50">Διαθέσιμοι χώροι στάθμευσης σε κοντινή απόσταση.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 h-[600px] bg-ivory relative grayscale hover:grayscale-0 transition-all duration-1000">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.646548744317!2d23.7483!3d37.9885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3664741341%3A0x6e2f1e8e8e8e8e8e!2sDigeni%20Akrita%2019%2C%20Athina%20114%2072!5e0!3m2!1sen!2sgr!4v1620000000000!5m2!1sen!2sgr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section className="py-60 bg-rich-black text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full editorial-grid">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full border-r border-white/10"></div>
          ))}
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] text-gold mb-12 block font-bold">Get in Touch</span>
        <h2 className="text-6xl md:text-[8rem] font-serif italic mb-12">Επικοινωνία</h2>
        <p className="text-xl text-white/40 mb-20 max-w-2xl mx-auto font-light leading-relaxed">
          Για εμάς, η προσωπική επαφή με τον πελάτη είναι το παν. Καλέστε μας απευθείας για να προγραμματίσουμε μια συνάντηση.
        </p>
        <a href="tel:6980474338" className="text-4xl md:text-7xl font-bold tracking-tighter hover:text-gold transition-colors duration-500">
          6980474338
        </a>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-ivory border-t border-rich-black/5">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-serif text-xl italic">Lazaridou & Partners</span>
          <span className="text-[8px] uppercase tracking-[0.4em] opacity-40">Athens Law Firm</span>
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-rich-black/40">
          &copy; {new Date().getFullYear()} Despoina P. Lazaridou. All Rights Reserved.
        </div>
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
          <a href="#" className="hover:text-gold transition-colors">Terms</a>
          <a href="#" className="hover:text-gold transition-colors">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
