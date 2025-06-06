"use client";

import { useState } from "react";
import Script from "next/script";
import { ChevronDown, ChevronUp, Calendar } from "lucide-react"; // Import icons

interface CollapsibleCalendlyProps {
  calendlyUrl: string;
}

export default function CollapsibleCalendly({
  calendlyUrl,
}: CollapsibleCalendlyProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-8 border rounded-lg overflow-hidden">
      {/* Button to toggle visibility */}
      <button
        onClick={toggleExpansion}
        className="flex items-center justify-between w-full px-6 py-4 bg-gray-200 hover:bg-gray-300 transition-colors duration-200 text-lg font-medium text-gray-800 cursor-pointer"
        aria-expanded={isExpanded}
        aria-controls="calendly-embed-area"
      >
        Schedule a detailed discussion
        {isExpanded ? (
          <ChevronUp className="ml-2 h-5 w-5" />
        ) : (
          <ChevronDown className="ml-2 h-5 w-5" />
        )}
      </button>

      {/* Collapsible area */}
      {isExpanded && (
        <div id="calendly-embed-area" className="p-4 bg-white">
          {/* Calendly inline embed */}
          <div
            className="calendly-inline-widget"
            data-url={calendlyUrl}
            style={{ minWidth: "320px", height: "630px" }}
          ></div>
          {/* Calendly Script */}
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            async
          />
        </div>
      )}
    </div>
  );
}
