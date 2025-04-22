"use client";
import React, { useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Script from "next/script";

// Extender el objeto Window con las propiedades de reCAPTCHA
declare global {
  interface Window {
    grecaptcha?: {
      render: (element: HTMLElement, options: { sitekey: string }) => void;
    };
    onloadCallback?: () => void;
  }
}

const ContactSection: React.FC = () => {
  const [state, handleSubmit] = useForm("xjkwbjew");
  const recaptchaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Función para cargar reCAPTCHA
    const loadReCaptcha = () => {
      if (typeof window !== 'undefined' && window.grecaptcha) {
        try {
          window.grecaptcha.render(recaptchaRef.current!, {
            sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '',
          });
        } catch (error) {
          console.error('Error al renderizar reCAPTCHA:', error);
        }
      }
    };

    // Intentar cargar reCAPTCHA cuando el script esté listo
    if (window.grecaptcha?.render) {
      loadReCaptcha();
    } else {
      // Si no está listo, esperar a que se cargue
      window.onloadCallback = loadReCaptcha;
    }
  }, []);

  if (state.succeeded) {
    return (
      <section className="py-12 px-4 bg-[#0a1120]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-4 text-center text-white">Contacto</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Gracias por contactarme. Te responderé lo antes posible.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js?onload=onloadCallback"
        async
        defer
      />
      <section className="py-12 px-4 bg-[#0a1120]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-4 text-center text-white">Contacto</h2>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarme.
          </p>
          <form 
            onSubmit={handleSubmit}
            className="space-y-6 max-w-xl mx-auto bg-[#0f172a]/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-800"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nombre</label>
              <input 
                id="name"
                type="text" 
                name="name" 
                placeholder="Tu nombre" 
                required 
                className="w-full px-4 py-3 rounded-lg bg-[#1e293b] border-2 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input 
                id="email"
                type="email" 
                name="email" 
                placeholder="Tu email" 
                required 
                className="w-full px-4 py-3 rounded-lg bg-[#1e293b] border-2 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Mensaje</label>
              <textarea 
                id="message"
                name="message" 
                placeholder="Tu mensaje..." 
                required 
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-[#1e293b] border-2 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 outline-none resize-none"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            <div 
              ref={recaptchaRef} 
              className="g-recaptcha" 
              data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''} 
            />
            <ValidationError prefix="reCAPTCHA" field="g-recaptcha-response" errors={state.errors} />

            <button 
              type="submit" 
              className="group relative w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg overflow-hidden transition-all duration-300"
              disabled={state.submitting}
            >
              <div className="absolute inset-0 w-0 bg-blue-500 transition-all duration-300 ease-out group-hover:w-full"></div>
              <span className="relative flex items-center justify-center gap-2">
                Enviar mensaje
                <svg 
                  className="w-5 h-5 transform transition-transform duration-300 ease-out group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
