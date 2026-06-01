import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, ChevronDown } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact 867 ALUFUSION — Free Quotes & Consultation" },
    { name: "description", content: "Get in touch with 867 ALUFUSION for a free aluminium and glass works quote. Call, email or visit us in Dar es Salaam." },
  ]}),
  component: ContactPage,
});

const faqs = [
  { q: "What areas do you serve?", a: "We serve all regions of Tanzania including Dar es Salaam, Arusha, Mwanza, Zanzibar and more." },
  { q: "Do you provide free quotes?", a: "Yes, we provide free consultation and quotes for all projects." },
  { q: "What is your typical project timeline?", a: "Timeline varies by project scope. Small projects take 1–2 weeks, large commercial projects 4–8 weeks." },
  { q: "Do you offer warranty?", a: "Yes, we offer warranty on all our installation work and materials." },
  { q: "Can you work with my architect/contractor?", a: "Absolutely! We collaborate with architects and contractors on all projects." },
  { q: "What brands of aluminium do you use?", a: "We use premium grade aluminium profiles from trusted manufacturers." },
];

function sanitizeInput(input: string): string {
  return input.replace(/[<>"'&]/g, (char) => {
    const map: Record<string, string> = { "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#x27;", "&": "&amp;" };
    return map[char];
  }).slice(0, 1000);
}

function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target as HTMLFormElement;
    const name = sanitizeInput((form.elements.namedItem("name") as HTMLInputElement)?.value || "");
    const email = sanitizeInput((form.elements.namedItem("email") as HTMLInputElement)?.value || "");
    const phone = sanitizeInput((form.elements.namedItem("phone") as HTMLInputElement)?.value || "");
    const details = sanitizeInput((form.elements.namedItem("details") as HTMLTextAreaElement)?.value || "");

    if (!name || !email || !phone) {
      toast.error("Please fill in all required fields.");
      setSubmitting(false);
      return;
    }

    console.log("Contact form submitted:", { name, email, phone, details });
    toast.success("Request sent! We'll get back to you within 24 hours.");
    form.reset();
    setSubmitting(false);
  };
  return (
    <>
      <PageHeader title="Get In Touch" subtitle="Request a free quote or schedule a consultation" image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80" />

      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-12">
          <form onSubmit={handleSubmit} className="lg:col-span-3 p-10 rounded-3xl bg-card border border-border shadow-elegant space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Request a Quote</h2>
            <p className="text-muted-foreground mb-4">Fill out the form and our team will respond within 24 hours.</p>
              <div className="grid md:grid-cols-2 gap-5">
              <div><label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name *</label><input id="name" name="name" required className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none" /></div>
              <div><label htmlFor="email" className="block text-sm font-semibold mb-2">Email *</label><input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none" /></div>
              <div><label htmlFor="phone" className="block text-sm font-semibold mb-2">Phone *</label><input id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none" /></div>
              <div><label htmlFor="service" className="block text-sm font-semibold mb-2">Service Interest</label>
                <select id="service" name="service" className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none">
                  <option>Aluminium Works</option><option>Glass Works</option><option>Steel Works</option><option>Maintenance</option><option>Design Consultancy</option><option>Material Supply</option>
                </select>
              </div>
            </div>
            <div><label htmlFor="details" className="block text-sm font-semibold mb-2">Project Details / Budget</label><textarea id="details" name="details" rows={5} className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none" /></div>
            <div>
              <label className="block text-sm font-semibold mb-2">Preferred Contact Method</label>
              <div className="flex gap-6">
                {["Phone", "Email", "WhatsApp"].map((m) => (
                  <label key={m} className="flex items-center gap-2"><input type="radio" name="contact" defaultChecked={m === "Phone"} className="accent-primary" /> {m}</label>
                ))}
              </div>
            </div>
            <div><label className="block text-sm font-semibold mb-2">Upload drawings or reference (optional)</label><input type="file" className="w-full text-sm" /></div>
            <button type="submit" disabled={submitting} className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full gradient-primary text-white text-lg font-bold shadow-glow hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:cursor-not-allowed">{submitting ? "Sending..." : "Send Request"} {!submitting && <Send className="h-5 w-5" />}</button>
          </form>

          <div className="lg:col-span-2 space-y-5">
            {[
              { icon: Phone, title: "+255 778 959 501", desc: "Call us Mon–Fri 8am–6pm" },
              { icon: Mail, title: "info@867alufusion.com", desc: "We respond within 24 hours" },
              { icon: MapPin, title: "Dar es Salaam, Tanzania", desc: "View on Google Maps" },
            ].map((c) => (
              <div key={c.title} className="p-6 rounded-2xl bg-card border border-border flex gap-4">
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0"><c.icon className="h-6 w-6 text-white" /></div>
                <div>
                  <div className="font-bold text-lg">{c.title}</div>
                  <div className="text-muted-foreground text-sm">{c.desc}</div>
                </div>
              </div>
            ))}
            <div className="rounded-2xl overflow-hidden border border-border h-80">
              <iframe title="Map" src="https://www.google.com/maps?q=Dar%20es%20Salaam%2C%20Tanzania&output=embed" className="w-full h-full" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="max-w-3xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold uppercase tracking-wider">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-3">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="rounded-2xl bg-card border border-border overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className="font-bold text-lg">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 text-primary transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-6 pb-6 text-muted-foreground">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}