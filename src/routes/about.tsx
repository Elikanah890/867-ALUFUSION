import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, Target, Award, Users, ShieldCheck, Lightbulb, Heart, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About 867 ALUFUSION — Aluminium & Glass Experts in Tanzania" },
    { name: "description", content: "Learn about 867 ALUFUSION LIMITED, our vision, mission, values and team delivering premium aluminium and glass installations." },
  ]}),
  component: AboutPage,
});

const values = [
  { icon: Award, name: "Quality", desc: "Premium materials, flawless execution." },
  { icon: ShieldCheck, name: "Integrity", desc: "Honest pricing and transparent process." },
  { icon: Lightbulb, name: "Innovation", desc: "Modern systems, modern techniques." },
  { icon: Heart, name: "Customer Focus", desc: "Your vision is our blueprint." },
  { icon: Sparkles, name: "Reliability", desc: "On time, on budget, every time." },
  { icon: ShieldCheck, name: "Safety", desc: "Compliant with all building codes." },
];

function AboutPage() {
  return (
    <>
      {/* PAGE HEADER - WITH YOUR hd.jpeg BACKGROUND */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hd.jpeg" alt="Background" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/75" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-extrabold text-white mb-4">
            About 867 ALUFUSION
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Crafting architectural excellence across Tanzania
          </motion.p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider">Our story</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6">Our Journey</h2>
            <p className="text-lg text-muted-foreground mb-4">Founded in 2020, 867 ALUFUSION LIMITED has grown into one of Tanzania's most trusted aluminium and glass works companies. We specialise in fabrication, installation and maintenance of architectural systems for residential, commercial and industrial buildings.</p>
            <p className="text-base text-muted-foreground mb-4">Our team of skilled technicians, engineers and project managers brings together decades of combined experience, delivering projects that balance beauty, durability and safety.</p>
            <p className="text-base text-muted-foreground">Every project we execute reflects our commitment to precision, professionalism and customer satisfaction.</p>
          </div>
          <img src="/images/alluminium.jpeg" alt="Team working" className="rounded-3xl shadow-elegant w-full" loading="lazy" />
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-8">
          {[
            { icon: Star, title: "Our Vision", text: "To be East Africa's most trusted name in aluminium and glass works — delivering innovative, sustainable and aesthetically inspiring architectural solutions that shape modern skylines." },
            { icon: Target, title: "Our Mission", text: "To provide premium aluminium, glass and steel fabrication services with uncompromising quality, safety and on-time delivery — empowering architects, builders and homeowners to bring their visions to life." },
          ].map((c) => (
            <div key={c.title} className="relative p-10 rounded-3xl bg-card border border-border shadow-elegant overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 gradient-primary" />
              <c.icon className="h-12 w-12 text-primary mb-5" />
              <h3 className="text-3xl font-extrabold mb-4">{c.title}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider">Core values</span>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-3">What We Stand For</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="text-center p-8 rounded-2xl bg-card border border-border">
                <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-5 flex items-center justify-center shadow-glow"><v.icon className="h-9 w-9 text-white" /></div>
                <h3 className="text-xl font-bold mb-2">{v.name}</h3>
                <p className="text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STRATEGIC OBJECTIVES */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center">Strategic Objectives</h2>
          <div className="space-y-4">
            {[
              { n: "01", title: "Excellence in Execution", desc: "Deliver every project to the highest fabrication and installation standards, exceeding client expectations on quality and finish." },
              { n: "02", title: "Sustainable Growth", desc: "Expand our capabilities across Tanzania while investing in modern equipment and ongoing training for our team." },
              { n: "03", title: "Client Partnerships", desc: "Build long-term relationships with architects, contractors and end clients through transparency, reliability and after-sales support." },
            ].map((o) => (
              <div key={o.n} className="flex gap-6 p-8 rounded-2xl bg-card border border-border">
                <div className="text-5xl font-extrabold text-primary">{o.n}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{o.title}</h3>
                  <p className="text-lg text-muted-foreground">{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="py-24 gradient-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Sparkles className="h-12 w-12 mx-auto mb-6 opacity-90" />
          <p className="text-2xl md:text-4xl font-bold leading-tight">"Every project is executed with attention to detail to ensure durability, safety, and aesthetic excellence."</p>
        </div>
      </section>

      {/* TEAM SECTION - UPDATED WITH RENAMED IMAGES */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider">Our team</span>
            <h2 className="text-4xl md:text-6xl font-extrabold mt-3 mb-5">Meet Our Leadership</h2>
            <p className="text-lg text-muted-foreground">Experienced professionals dedicated to your vision.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 - Using your renamed image */}
            <div className="rounded-2xl overflow-hidden bg-card border border-border">
              <img src="/team/alufusion-team-1.png" alt="Managing Director" className="w-full aspect-[4/5] object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-bold">Managing Director</h3>
                <p className="text-primary font-semibold text-sm mt-1">867 ALUFUSION</p>
              </div>
            </div>
            {/* Team Member 2 - Using your renamed image */}
            <div className="rounded-2xl overflow-hidden bg-card border border-border">
              <img src="/team/alufusion-team-2.png" alt="Head of Operations" className="w-full aspect-[4/5] object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-bold">Head of Operations</h3>
                <p className="text-primary font-semibold text-sm mt-1">867 ALUFUSION</p>
              </div>
            </div>
            {/* Team Member 3 - Using your first image again */}
            <div className="rounded-2xl overflow-hidden bg-card border border-border">
              <img src="/team/alufusion-team-1.png" alt="Lead Engineer" className="w-full aspect-[4/5] object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-xl font-bold">Lead Engineer</h3>
                <p className="text-primary font-semibold text-sm mt-1">867 ALUFUSION</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <Users className="h-12 w-12 text-primary mx-auto mb-5" />
          <h2 className="text-3xl md:text-5xl font-extrabold mb-10">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Residential", "Commercial", "Industrial", "Hospitality", "Healthcare", "Education", "Government"].map((i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-card border border-border text-lg font-semibold hover:border-primary hover:text-primary transition-colors">{i}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}