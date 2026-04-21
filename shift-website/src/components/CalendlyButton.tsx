"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = "https://calendly.com/joe-shiftisit/30min";

export default function CalendlyButton({
  children,
  className = "btn-primary",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  useEffect(() => {
    // Preload Calendly CSS
    if (!document.querySelector('link[href*="calendly"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
  }, []);

  function openCalendly() {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    }
  }

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <button onClick={openCalendly} className={className}>
        {children}
      </button>
    </>
  );
}
