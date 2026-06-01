import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export function Floating() {
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 400);
      const h = document.documentElement;
      const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] bg-transparent">
        <div className="h-full gradient-primary transition-all" style={{ width: `${progress}%` }} />
      </div>
      <a href="https://wa.me/255778959501" target="_blank" rel="noreferrer" className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-glow hover:scale-110 transition-transform" aria-label="WhatsApp">
        <MessageCircle className="h-6 w-6" />
      </a>
      {show && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full gradient-primary text-white flex items-center justify-center shadow-glow hover:scale-110 transition-transform" aria-label="Back to top">
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}