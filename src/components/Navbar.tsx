import React, { useState } from "react";
import { Code } from "lucide-react";
import IntegrationModal from "./IntegrationModal";
import logo from "../images/logo02.png"; // Assure-toi que le chemin est correct

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <img
                src={logo} // Utilisation du fichier importé
                alt="Logo"
                className="h-8 w-auto rounded-lg"
              />
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center px-6 py-2 rounded-lg text-sm font-medium text-white hover:bg-white/10 focus:outline-none transition-all backdrop-blur-md border border-white/20 shadow-lg"
            >
              <Code className="mr-2 h-4 w-4" />
              Intégration
            </button>
          </div>
        </div>
      </nav>
      <IntegrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
