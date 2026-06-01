import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({ meta: [
    { title: "Projects — 867 ALUFUSION Portfolio" },
    { name: "description", content: "Explore our portfolio of curtain walls, glass facades, balustrades and aluminium installations across Tanzania." },
  ]}),
  component: ProjectsPage,
});

type Cat = "All" | "Commercial" | "Residential" | "Industrial" | "Hospitality";
const cats: Cat[] = ["All", "Commercial", "Residential", "Industrial", "Hospitality"];

// Projects with CORRECTED image paths (using your renamed files)
const projects = [
  // Commercial Projects (using your renamed commercial building images)
  { 
    title: "Tanzania Revenue Authority HQ", 
    cat: "Commercial", 
    location: "Dar es Salaam", 
    img: "/projects/commercial-curtain-wall.jpeg", 
    scope: "Commercial Curtain Wall", 
    desc: "Full curtain wall design, fabrication and installation for the TRA HQ tower.",
    materials: "Premium aluminium profiles, double-glazed insulated glass units, structural silicone sealant.",
    timeline: "8 months",
    testimonial: "867 ALUFUSION delivered exceptional quality on time and within budget for our headquarters."
  },
  { 
    title: "Millennium Business Park", 
    cat: "Commercial", 
    location: "Dar es Salaam", 
    img: "/projects/commercial-curtain-wall1.jpeg", 
    scope: "Office Partitions & Curtain Wall", 
    desc: "Frameless glass office partitions across 4 floors of premium office space.",
    materials: "Tempered glass, aluminium frames, acoustic seals.",
    timeline: "4 months",
    testimonial: "The team was professional and the installation quality is outstanding."
  },
  { 
    title: "Dar es Salaam Mall", 
    cat: "Commercial", 
    location: "Dar es Salaam", 
    img: "/projects/commercial-curtain-wall2.jpeg", 
    scope: "Shop Front Systems", 
    desc: "Aluminium shop front systems for 60+ retail tenants.",
    materials: "Aluminium profiles, clear glass, security fittings.",
    timeline: "6 months",
    testimonial: "Excellent workmanship on all shop fronts."
  },
  { 
    title: "NMB Bank Headquarters", 
    cat: "Commercial", 
    location: "Dar es Salaam", 
    img: "/projects/commercial-curtain-wall3.jpeg", 
    scope: "Structural Glazing", 
    desc: "Engineered structural glazing system for the main banking hall.",
    materials: "Structural glazing, insulated glass, steel reinforcements.",
    timeline: "5 months",
    testimonial: "Highly professional team with great attention to detail."
  },
  { 
    title: "Commercial Tower Complex", 
    cat: "Commercial", 
    location: "Dar es Salaam", 
    img: "/projects/commercial-curtain-wall4.jpeg", 
    scope: "Full Building Envelope", 
    desc: "Complete aluminium and glass facade for commercial tower.",
    materials: "Curtain wall system, spandrel glass, aluminium cladding.",
    timeline: "10 months",
    testimonial: "One of the best facade installations we've seen."
  },

  // Residential Projects (using your renamed residential images)
  { 
    title: "Kisutu Residential Tower", 
    cat: "Residential", 
    location: "Dar es Salaam", 
    img: "/projects/residential-glass-balustrade.jpeg", 
    scope: "Residential Aluminium Windows", 
    desc: "Premium sliding and casement windows for 120 residential units.",
    materials: "Aluminium profiles, tempered glass, stainless steel hardware.",
    timeline: "6 months",
    testimonial: "The windows are beautiful and very energy efficient."
  },
  { 
    title: "Regency Apartments", 
    cat: "Residential", 
    location: "Mwanza", 
    img: "/projects/residential-glass-balustrade1.jpeg", 
    scope: "Frameless Glass & Balustrades", 
    desc: "Frameless balcony glass and shower cubicles across 80 apartments.",
    materials: "Tempered glass, stainless steel handrails, aluminium frames.",
    timeline: "4 months",
    testimonial: "Amazing transformation of our balcony spaces."
  },
  { 
    title: "Harbour View Villas", 
    cat: "Residential", 
    location: "Dar es Salaam", 
    img: "/projects/residential-glass-balustrade2.jpeg", 
    scope: "Glass Balustrades & Railings", 
    desc: "Tempered glass balustrades for beachfront luxury villas.",
    materials: "Laminated glass, marine-grade stainless steel.",
    timeline: "3 months",
    testimonial: "Safety and beauty perfectly combined."
  },
  { 
    title: "Garden City Apartments", 
    cat: "Residential", 
    location: "Arusha", 
    img: "/projects/residential-glass-balustrade3.jpeg", 
    scope: "Aluminium Windows & Doors", 
    desc: "Complete window and door replacement for residential complex.",
    materials: "Thermally broken aluminium, double glazing.",
    timeline: "5 months",
    testimonial: "Quality products and professional installation."
  },

  // Hospitality Projects (using your renamed hotel images)
  { 
    title: "Serena Hotel Renovation", 
    cat: "Hospitality", 
    location: "Zanzibar", 
    img: "/projects/hotel-glass-partition.jpeg", 
    scope: "Hospitality Glass Facade", 
    desc: "Frameless glass partitions and decorative facade upgrades across guest areas.",
    materials: "Laminated glass, brushed aluminium, automatic door systems.",
    timeline: "4 months",
    testimonial: "The lobby renovation looks spectacular."
  },
  { 
    title: "Kilimanjaro Resort", 
    cat: "Hospitality", 
    location: "Arusha", 
    img: "/projects/hotel-glass-partition1.jpeg", 
    scope: "Glass Balustrades & Partitions", 
    desc: "Tempered glass balustrades for pool decks and lobby partitions.",
    materials: "Toughened glass, polished stainless steel.",
    timeline: "3 months",
    testimonial: "World-class finish and attention to detail."
  },
  { 
    title: "Beachfront Hotel", 
    cat: "Hospitality", 
    location: "Dar es Salaam", 
    img: "/projects/hotel-glass-partition2.jpeg", 
    scope: "Glass Facade & Shop Fronts", 
    desc: "Full glass facade for hotel entrance and retail spaces.",
    materials: "Structural glazing, insulated glass units.",
    timeline: "6 months",
    testimonial: "Excellent project management from start to finish."
  },
  { 
    title: "Luxury Safari Lodge", 
    cat: "Hospitality", 
    location: "Serengeti", 
    img: "/projects/hotel-glass-partition3.jpeg", 
    scope: "Glass Partitions & Railings", 
    desc: "Frameless glass railings and interior partitions.",
    materials: "Tempered glass, natural stone accents.",
    timeline: "2 months",
    testimonial: "Perfect integration with the natural environment."
  },
  { 
    title: "City Center Hotel", 
    cat: "Hospitality", 
    location: "Dar es Salaam", 
    img: "/projects/hotel-glass-partition4.jpeg", 
    scope: "Lobby Glass Installation", 
    desc: "Floor-to-ceiling glass partitions for hotel lobby.",
    materials: "Structural glass, minimal frames, acoustic seals.",
    timeline: "3 months",
    testimonial: "The glass work is absolutely stunning."
  },

  // Industrial Projects (using your renamed industrial images)
  { 
    title: "JNICC Convention Centre", 
    cat: "Industrial", 
    location: "Dar es Salaam", 
    img: "/projects/industrial-aluminium-facade.jpeg", 
    scope: "Large-Format Glass Works", 
    desc: "Large-format structural glass works for public conference halls.",
    materials: "Structural glazing, laminated glass, steel supports.",
    timeline: "8 months",
    testimonial: "Handled complex requirements with expertise."
  },
  { 
    title: "Industrial Manufacturing Plant", 
    cat: "Industrial", 
    location: "Mwanza", 
    img: "/projects/industrial-aluminium-facade1.jpeg", 
    scope: "Aluminium Facade & Windows", 
    desc: "Industrial-grade aluminium windows and facade systems.",
    materials: "Heavy-duty aluminium profiles, tempered glass.",
    timeline: "5 months",
    testimonial: "Durable and practical solutions for industrial needs."
  },
  { 
    title: "Warehouse Complex", 
    cat: "Industrial", 
    location: "Dar es Salaam", 
    img: "/projects/industrial-aluminium-facade2.jpeg", 
    scope: "Aluminium Cladding", 
    desc: "Aluminium cladding and louver systems for warehouse.",
    materials: "Aluminium composite panels, ventilated facades.",
    timeline: "4 months",
    testimonial: "Great value and excellent execution."
  },
  { 
    title: "Factory Expansion", 
    cat: "Industrial", 
    location: "Arusha", 
    img: "/projects/industrial-aluminium-facade3.jpeg", 
    scope: "Steel & Glass Integration", 
    desc: "Combined steel structure with glass curtain wall.",
    materials: "Steel framework, insulated glass panels.",
    timeline: "6 months",
    testimonial: "Seamless integration of steel and glass."
  },
  { 
    title: "Industrial Park", 
    cat: "Industrial", 
    location: "Dar es Salaam", 
    img: "/projects/industrial-aluminium-facade4.jpeg", 
    scope: "Complete Facade System", 
    desc: "Full aluminium and glass facade for industrial park buildings.",
    materials: "Curtain wall, spandrel glass, aluminium cladding.",
    timeline: "9 months",
    testimonial: "Transformed the industrial area into a modern business hub."
  },
];

function ProjectsPage() {
  const [filter, setFilter] = useState<Cat>("All");
  const [open, setOpen] = useState<typeof projects[0] | null>(null);
  const list = filter === "All" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <>
      {/* PAGE HEADER - SAME BACKGROUND AS HOME */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hd.jpeg" alt="Background" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/75" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-4"
          >
            Our Portfolio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto"
          >
            Showcasing our finest aluminium and glass installations across Tanzania
          </motion.p>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {cats.map((c) => (
              <button 
                key={c} 
                onClick={() => setFilter(c)} 
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${filter === c ? "gradient-primary text-white shadow-glow" : "bg-card border border-border hover:border-primary hover:text-primary"}`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((p, i) => (
              <motion.div 
                key={p.title} 
                layout 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: i * 0.05 }} 
                className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-glow transition-all hover:-translate-y-1 cursor-pointer"
                onClick={() => setOpen(p)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://placehold.co/600x400/1a1a2e/EA580C?text=Project+Image";
                    }}
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full gradient-primary text-white text-xs font-bold uppercase">
                    {p.cat}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4" /> {p.location}
                  </p>
                  <button className="inline-flex items-center gap-1 text-primary font-semibold group/btn">
                    View Case Study <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Count */}
          <div className="text-center mt-12 text-muted-foreground">
            Showing {list.length} of {projects.length} projects
          </div>
        </div>
      </section>

      {/* MODAL FOR PROJECT DETAILS */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setOpen(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.95, opacity: 0 }} 
              onClick={(e) => e.stopPropagation()} 
              className="bg-card max-w-4xl w-full rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img 
                  src={open.img} 
                  alt={open.title} 
                  className="w-full aspect-video object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://placehold.co/1200x600/1a1a2e/EA580C?text=Project+Image";
                  }}
                />
                <button 
                  onClick={() => setOpen(null)} 
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="p-8">
                <span className="text-primary font-bold uppercase text-sm tracking-wider">{open.scope}</span>
                <h3 className="text-3xl font-extrabold mt-2 mb-3">{open.title}</h3>
                <p className="text-muted-foreground mb-6 flex items-center gap-1">
                  <MapPin className="h-4 w-4 inline" /> {open.location}
                </p>
                <p className="text-lg mb-6 leading-relaxed">{open.desc}</p>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="bg-muted/30 p-4 rounded-xl">
                    <div className="font-bold mb-2 text-primary">Materials Used</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{open.materials}</p>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-xl">
                    <div className="font-bold mb-2 text-primary">Project Timeline</div>
                    <p className="text-muted-foreground text-sm">{open.timeline}</p>
                  </div>
                </div>
                
                <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground bg-muted/20 p-4 rounded-r-xl">
                  "{open.testimonial}"
                </blockquote>
                
                <div className="mt-6 flex justify-end">
                  <Link to="/contact">
                    <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-primary text-white font-semibold shadow-glow hover:scale-105 transition-transform">
                      Request Similar Quote <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA SECTION */}
      <section className="py-24 gradient-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5">Have a Project in Mind?</h2>
          <p className="text-xl text-white/90 mb-8">Let's discuss how we can bring your vision to life with our premium aluminium and glass solutions.</p>
          <Link to="/contact">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-bold shadow-elegant hover:scale-105 transition-transform duration-300">
              Contact Our Team <ArrowRight className="h-5 w-5" />
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}