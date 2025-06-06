"use client";

import Script from "next/script";
import { Calendar } from "lucide-react";
// Removed useState as it's not currently used

interface CalendlyButtonProps {
  calendlyUrl: string;
}

export default function CalendlyButton({ calendlyUrl }: CalendlyButtonProps) {
  const openCalendlyPopup = () => {
    console.log("Button clicked, attempting to open Calendly popup.");
    // Check if Calendly object is available from the external script
    // @ts-ignore: Calendly is loaded externally
    if (typeof Calendly !== "undefined") {
      console.log("Calendly script detected, initializing popup.");
      // Initialize the Calendly popup widget
      // @ts-ignore: Calendly is loaded externally
      Calendly.initPopupWidget({ url: calendlyUrl });
    } else {
      console.error(
        "Calendly script not loaded yet. Opening in new tab as fallback."
      );
      // Fallback: Open the Calendly link in a new tab if the script is not loaded
      window.open(calendlyUrl, "_blank");
    }
  };

  return (
    <>
      {/* Calendly Popup Trigger Button */}
      <button
        onClick={openCalendlyPopup}
        className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors duration-200 shadow-md cursor-pointer"
      >
        <Calendar className="mr-2 h-6 w-6" />
        Schedule a Call
      </button>

      {/* Calendly Popup Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />

      {/* 
        Note: The [Violation] permissions policy: payment warning is a browser message 
        related to the site's HTTP Permissions-Policy header, not the client-side JS. 
        It needs to be fixed on the server/hosting configuration to allow the 'payment' feature.
        Client-side code cannot override this policy.
      */}
    </>
  );
}
