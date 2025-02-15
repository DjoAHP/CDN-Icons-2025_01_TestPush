import React from "react";
import { X, Copy, Check } from "lucide-react";

interface IntegrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IntegrationModal({
  isOpen,
  onClose,
}: IntegrationModalProps) {
  const [copiedHTML, setCopiedHTML] = React.useState(false);
  const [copiedReact, setCopiedReact] = React.useState(false);

  const htmlCode = `<link
  href="https://cdn.jsdelivr.net/npm/@jodevahp/ahp-icons-library-2025@1.0.3/dist/index.css"
  rel="stylesheet"
/>`;

  const reactCode = `import { StarIcon, HeartIcon } from "@jodevahp/ahp-icons-library-2025@1.0.3";`;

  const copyToClipboard = async (text: string, type: "html" | "react") => {
    await navigator.clipboard.writeText(text);
    if (type === "html") {
      setCopiedHTML(true);
      setTimeout(() => setCopiedHTML(false), 2000);
    } else {
      setCopiedReact(true);
      setTimeout(() => setCopiedReact(false), 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="w-[90vw] h-[80vh] max-w-6xl mx-auto bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
        {/* Header with centered title */}
        <div className="relative h-24 flex items-center justify-center bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 border-b border-white/10">
          <h2 className="text-4xl font-bold text-white text-center">
            Intégrations
          </h2>
          <button
            onClick={onClose}
            className="absolute right-6 text-white/70 hover:text-white transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
        </div>

        {/* Content */}
        <div className=" p-12 h-[calc(80vh-6rem)] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* HTML Integration */}
            <div className="backdrop-blur-md bg-black/20 rounded-2xl p-8 border border-white/10 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-medium text-white">
                  Intégration HTML
                </h3>
                <button
                  onClick={() => copyToClipboard(htmlCode, "html")}
                  className="text-indigo-300 hover:text-indigo-200 transition-colors"
                >
                  {copiedHTML ? (
                    <Check className="h-6 w-6" />
                  ) : (
                    <Copy className="h-6 w-6" />
                  )}
                </button>
              </div>
              <pre className="bg-black/30 text-indigo-200 p-6 rounded-xl text-base overflow-x-auto border border-indigo-500/20 shadow-inner">
                <code>{htmlCode}</code>
              </pre>
            </div>

            {/* React Integration */}
            <div className="backdrop-blur-md bg-black/20 rounded-2xl p-8 border border-white/10 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-medium text-white">
                  Intégration React
                </h3>
                <button
                  onClick={() => copyToClipboard(reactCode, "react")}
                  className="text-indigo-300 hover:text-indigo-200 transition-colors"
                >
                  {copiedReact ? (
                    <Check className="h-6 w-6" />
                  ) : (
                    <Copy className="h-6 w-6" />
                  )}
                </button>
              </div>
              <pre className="bg-black/30 text-indigo-200 p-6 rounded-xl text-base overflow-x-auto border border-indigo-500/20 shadow-inner">
                <code>{reactCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
