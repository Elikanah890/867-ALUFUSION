import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Download, ArrowRight, Wrench, Sparkles, Truck, ClipboardList, Shield, PenTool, Settings, Layers, Square } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Services — Aluminium, Glass, Steel | 867 ALUFUSION" },
    { name: "description", content: "End-to-end aluminium fabrication, glass works, steel works, maintenance, design consultancy and material supply across Tanzania." },
  ]}),
  component: ServicesPage,
});

// Service data with CORRECTED image paths (no spaces)
const services = [
  { 
    id: "01",
    title: "Aluminium Works", 
    img: "/service/alluminium.jpeg", 
    desc: "From sliding windows to large-format curtain walls, our aluminium systems combine engineering precision with refined aesthetics.", 
    items: ["Sliding Windows", "Casement Windows", "Top-Hung Windows", "Aluminium Doors", "Shop Front Systems", "Office Partitions", "Curtain Wall Systems", "Aluminium Cladding", "Louvers", "Canopies", "Skylights"],
    icon: Square
  },
  { 
    id: "02",
    title: "Glass Works", 
    img: "/service/glasswork.jpeg", 
    desc: "High-performance glass solutions designed for safety, clarity and modern architectural impact.", 
    items: ["Frameless Glass Partitions", "Tempered Glass Installations", "Glass Doors", "Shower Cubicles", "Glass Railings", "Mirrors", "Glass Balustrades", "Structural Glazing", "Glass Facades", "Display Units"],
    icon: Layers
  },
  { 
    id: "03",
    title: "Steel Works & Metal Fabrication", 
    img: "/service/steel and metal.jpeg", 
    desc: "Custom steel fabrication for structures, gates, frames and bespoke metal products.", 
    items: ["Steel Structures", "Gates & Grills", "Doors & Windows", "Roofing Structures", "Tanks & Frames", "Custom Metal Products"],
    icon: Wrench
  },
  { 
    id: "04",
    title: "Maintenance Services", 
    img: "/service/maintainess.jpeg", 
    desc: "Keep your installations performing at their best with our comprehensive maintenance programs.", 
    items: ["Aluminium & Glass Repairs", "Replacement of Damaged Glass", "Door & Window Maintenance", "Hardware Replacement", "Preventive Maintenance Contracts"],
    icon: Settings
  },
  { 
    id: "05",
    title: "Custom Design & Consultancy", 
    img: "/service/customer.jpeg", 
    desc: "Expert technical guidance from site assessment to detailed drawings and feasibility analysis.", 
    items: ["Site Assessment & Measurements", "Technical Advice", "Drawings & Specifications", "Feasibility Assessments"],
    icon: PenTool
  },
  { 
    id: "06",
    title: "Supply of Materials", 
    img: "/service/supply.jpeg", 
    desc: "Premium aluminium, glass and accessories sourced from trusted global manufacturers.", 
    items: ["Aluminium Profiles", "Glass Panels", "Accessories & Fittings", "Steel & Metal Materials"],
    icon: Truck
  },
  { 
    id: "07",
    title: "Installation & Project Management", 
    img: "/service/installation-project-management.jpeg", 
    desc: "Coordinated on-site installation managed by experienced project leads.", 
    items: ["On-site Installation", "Coordination with Contractors", "Timeline Adherence", "Safety Compliance"],
    icon: ClipboardList
  },
  { 
    id: "08",
    title: "Health & Safety Compliance", 
    img: "/service/health-safety-compliance.jpeg", 
    desc: "We follow strict safety protocols and local building codes on every project.", 
    items: ["Safety Measures", "Local Building Code Compliance", "Risk Assessment", "Worker Protection"],
    icon: Shield
  },
];

function ServicesPage() {
  return (
    <>
      {/* PAGE HEADER - SAME BACKGROUND AS HOME PAGE */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hd.jpeg" alt="Background" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/75" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary text-sm font-semibold mb-6"
          >
            What We Offer
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-4"
          >
            Our Comprehensive Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
          >
            End-to-end solutions from design to installation
          </motion.p>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-28 lg:space-y-36">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                {/* Image Section */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="rounded-3xl shadow-elegant w-full aspect-[4/3] object-cover transform group-hover:scale-[1.02] transition-transform duration-700" loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://placehold.co/800x600/1a1a2e/EA580C?text=Image+Coming+Soon";
                    }}
                  />
                  {/* Service Number Badge */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
                    <span className="text-white font-bold text-2xl">{service.id}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-primary/10 text-primary">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <span className="text-primary font-semibold uppercase tracking-wider text-sm">Service {service.id}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  
                  {/* Services List - Grid Layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 group/item">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span className="text-sm text-muted-foreground group-hover/item:text-primary transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <Link to="/contact">
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-primary text-white font-semibold shadow-glow hover:scale-105 transition-transform duration-300">
                      Request Quote <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider">Why Choose Us</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-5">The 867 ALUFUSION Advantage</h2>
            <p className="text-lg text-muted-foreground">We combine expertise, quality materials, and professional service to deliver exceptional results.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Expert Team", desc: "Skilled professionals with years of experience" },
              { title: "Premium Quality", desc: "Top-grade materials from trusted suppliers" },
              { title: "Timely Delivery", desc: "Projects completed on schedule" },
              { title: "24/7 Support", desc: "Ongoing maintenance and after-sales care" },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary transition-all duration-300 hover:-translate-y-1">
                <Sparkles className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD BROCHURE SECTION */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block p-3 rounded-2xl bg-white/10 mb-6">
            <Download className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Download Our Service Brochure</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get a detailed overview of our full service offering, capabilities, and past projects.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-bold shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Download className="h-5 w-5" /> Download PDF Brochure
          </a>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground mb-8">
            Tell us about your project and we'll provide a tailored quote within 24 hours.
          </p>
          <Link to="/contact">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full gradient-primary text-white font-semibold shadow-glow hover:scale-105 transition-transform">
              Contact Our Experts <ArrowRight className="h-5 w-5" />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}