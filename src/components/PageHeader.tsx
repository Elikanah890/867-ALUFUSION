import { motion } from "framer-motion";

export function PageHeader({ title, subtitle, image }: { title: string; subtitle: string; image: string }) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/65" />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 text-center py-24">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-extrabold mb-6">{title}</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">{subtitle}</motion.p>
      </div>
    </section>
  );
}