import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ArrowRight, Square, Layers, Wrench, Settings, PenTool, Truck, ClipboardList, Shield, Star, CheckCircle2 } from "lucide-react";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "867 ALUFUSION — Premium Aluminium & Glass Works in Tanzania" },
      { name: "description", content: "Transforming architectural visions across Tanzania with precision aluminium, modern glass works, and steel fabrication." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Square, title: "Aluminium Works", desc: "Sliding windows, casement windows, curtain walls, shop fronts, cladding, louvers, skylights." },
  { icon: Layers, title: "Glass Works", desc: "Frameless partitions, tempered glass, balustrades, structural glazing, glass facades." },
  { icon: Wrench, title: "Steel Fabrication", desc: "Gates, grills, roofing structures, tanks, frames and custom metal products." },
  { icon: Settings, title: "Maintenance", desc: "Repairs, replacement, preventive maintenance contracts and hardware replacement." },
  { icon: PenTool, title: "Custom Design", desc: "Site assessment, technical advice, drawings and feasibility studies." },
  { icon: Truck, title: "Supply Chain", desc: "High-quality profiles, glass panels, accessories and fittings." },
  { icon: ClipboardList, title: "Project Management", desc: "On-site installation, coordination, timeline adherence and safety." },
  { icon: Shield, title: "Safety Compliance", desc: "Safety measures, local building codes and professional installation." },
];

const stats = [
  { value: 500, suffix: "+", label: "Projects" },
  { value: 200, suffix: "+", label: "Happy Clients" },
  { value: 15, suffix: "+", label: "Team Members" },
  { value: 100, suffix: "%", label: "Timely Delivery" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let started = false;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started) {
        started = true;
        const dur = 1500; const start = performance.now();
        const step = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setN(Math.floor(p * to));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <div ref={ref} className="text-4xl md:text-5xl font-extrabold text-primary">{n}{suffix}</div>;
}

function Index() {
  const { t } = useLang();
  return (
    <>
      {/* HERO - USING YOUR hd.jpeg IMAGE */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hd.jpeg" alt="Glass facade" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary text-sm font-semibold mb-6">
            {t("hero_badge")}
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl lg:text-[5rem] font-extrabold leading-[1.05] max-w-4xl mb-6">
            {t("hero_title").split(" ").slice(0, -1).join(" ")} <span className="text-gradient">{t("hero_title").split(" ").slice(-1)}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-white/85 mb-4 font-medium">{t("hero_sub")}</motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-base md:text-lg text-white/70 max-w-2xl mb-10">{t("hero_desc")}</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-4 mb-20">
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-primary text-white text-lg font-semibold shadow-glow hover:scale-105 transition-transform">
              {t("cta_free_quote")} <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/70 text-white text-lg font-semibold hover:bg-white hover:text-black transition-colors">
              {t("cta_view_work")}
            </Link>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl border-t border-white/20 pt-10">
            {stats.map((s) => (
              <div key={s.label}>
                <Counter to={s.value} suffix={s.suffix} />
                <div className="text-white/70 mt-2 text-sm md:text-base">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70">
          <ChevronDown className="h-8 w-8" />
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider">What we do</span>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-3 mb-5">Our Premium Services</h2>
            <p className="text-lg md:text-xl text-muted-foreground">Comprehensive solutions for modern architecture, engineered to last.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group p-8 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-glow transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <s.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{s.desc}</p>
                <Link to="/services" className="inline-flex items-center gap-1 text-primary font-semibold text-sm">Learn More <ArrowRight className="h-4 w-4" /></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW - UPDATED WITH YOUR alluminium.jpeg */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            {/* CHANGED: Now using your local alluminium.jpeg */}
            <img src="/images/alluminium.jpeg" alt="Aluminium installation" className="rounded-3xl shadow-elegant w-full" loading="lazy" />
            <div className="absolute -bottom-8 -right-8 hidden md:block bg-card border border-border p-6 rounded-2xl shadow-elegant max-w-[200px]">
              <div className="text-4xl font-extrabold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years of crafting excellence in Tanzania</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-primary font-semibold uppercase tracking-wider">About Us</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6">Excellence in Aluminium & Glass Since 2020</h2>
            <p className="text-lg text-muted-foreground mb-4">867 ALUFUSION LIMITED is a leading aluminium and glass works company in Tanzania, specialising in modern fabrication, installation and maintenance of architectural systems for residential, commercial and industrial buildings.</p>
            <p className="text-base text-muted-foreground mb-6">From custom curtain walls to frameless partitions and steel fabrication, our team delivers durable, beautiful and safe installations on time, every time.</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["Quality", "Integrity", "Innovation", "Safety", "Reliability"].map((c) => (
                <span key={c} className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">{c}</span>
              ))}
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full gradient-primary text-white font-semibold shadow-glow">Learn More About Us <ArrowRight className="h-4 w-4" /></Link>
          </motion.div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider">Why us</span>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-3 mb-5">Why 867 ALUFUSION?</h2>
            <p className="text-lg md:text-xl text-muted-foreground">Setting the standard for quality and professionalism.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["Professional Workforce", "Skilled technicians with years of experience."],
              ["High-Quality Materials", "Premium aluminium profiles and glass panels."],
              ["Timely Completion", "Projects delivered on schedule, every time."],
              ["Competitive Pricing", "Best value for premium quality."],
              ["After-Sales Support", "Ongoing maintenance and support."],
              ["Modern Equipment", "Latest tools and technology."],
            ].map(([title, desc], i) => (
              <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-8 rounded-2xl bg-card border border-border flex gap-5">
                <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-muted-foreground">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-3 mb-5">What Our Clients Say</h2>
            <p className="text-lg md:text-xl text-muted-foreground">Trusted by homeowners, businesses and contractors across Tanzania.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Asha Mwinyi", role: "Office Owner, Dar es Salaam", quote: "The team did an amazing job on our office glass partitions. Professional, on-time and high quality." },
              { name: "John Mbeki", role: "Architect", quote: "Reliable partner for curtain wall installations. Their finish and tolerances are exceptional." },
              { name: "Sarah Kimani", role: "Hotel Manager", quote: "From design to delivery, 867 ALUFUSION made our lobby renovation seamless and beautiful." },
            ].map((tt) => (
              <div key={tt.name} className="p-8 rounded-2xl bg-card border border-border shadow-elegant">
                <div className="flex gap-1 mb-4">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-primary text-primary" />)}</div>
                <p className="text-lg leading-relaxed mb-6">"{tt.quote}"</p>
                <div>
                  <div className="font-bold">{tt.name}</div>
                  <div className="text-sm text-muted-foreground">{tt.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-semibold uppercase tracking-wider">Portfolio</span>
              <h2 className="text-4xl md:text-6xl font-extrabold mt-3">Recent Projects</h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-primary font-semibold">View All Projects <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Commercial Curtain Wall", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80" },
              { title: "Residential Glass Balustrades", img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80" },
              { title: "Hotel Lobby Glass Partitions", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80" },
            ].map((p) => (
              <Link to="/projects" key={p.title} className="group relative overflow-hidden rounded-2xl aspect-[4/5] block">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                  <span className="inline-flex items-center gap-1 text-primary font-semibold">View Project <ArrowRight className="h-4 w-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 gradient-primary text-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-5">Ready to Transform Your Space?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Contact us today for a free consultation and detailed quote tailored to your project.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white text-primary text-lg font-bold hover:scale-105 transition-transform shadow-elegant">
            Request a Free Quote <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}