import React, { useState } from 'react';
// navbar 
import Navbar from "./components/Navbar";
// icons 
import { StarIcon, HeartIcon, HomeIcon, NewIcon, MuteIcon, CloudcIcon, CloudrIcon, CloudExport, CloudlIcon, CloudImport, CloudNot, CloudSun, CloudvIcon, AddwIcon, AddwtIcon, SourieaIcon, SouriebIcon, CollapseaIcon, ExpandaIcon, CollapsebIcon, ExpandbIcon, CollapsecIcon, ExpandcIcon, TerreaIcon, AnalyseaIcon, LterminalIcon, PterminalIcon, QraIcon, QrbIcon, LoupeaIcon, LoupemIcon, LoupepIcon, JoysaIcon } from './icons';
// lucide 
import { ChevronDown, ChevronUp, Search, Copy, Check } from 'lucide-react';

const icons = [
  // INTERFACE 
  { id: 'star', component: StarIcon, category: 'Interface' },
  { id: 'heart', component: HeartIcon, category: 'Interface' },
  { id: 'new', component: NewIcon, category: 'Interface' },
  // NAVIGATION 
  { id: 'home', component: HomeIcon, category: 'Navigation' },
  // MULTIMEDIA 
  { id: 'mute', component: MuteIcon, category: 'Multimedia' },
  // CLOUD 
  { id: 'cloud-c', component: CloudcIcon, category: 'Cloud' },
  { id: 'cloud-l', component: CloudlIcon, category: 'Cloud' },
  { id: 'cloud-r', component: CloudrIcon, category: 'Cloud' },
  { id: 'cloud-export', component: CloudExport, category: 'Cloud' },
  { id: 'cloud-import', component: CloudImport, category: 'Cloud' },
  { id: 'cloud-not', component: CloudNot, category: 'Cloud' },
  { id: 'cloud-sun', component: CloudSun, category: 'Cloud' },
  { id: 'cloud-v', component: CloudvIcon, category: 'Cloud' },
  // ADD 
  { id: 'addw', component: AddwIcon, category: 'Add' },
  { id: 'addwt', component: AddwtIcon, category: 'Add' },
  // APPAREIL 
  { id: 'souriea', component: SourieaIcon, category: 'Appareil' },
  { id: 'sourieb', component: SouriebIcon, category: 'Appareil' },
  // WINDOW 
  { id: 'collapsea', component: CollapseaIcon, category: 'Window' },
  { id: 'expanda', component: ExpandaIcon, category: 'Window' },
  { id: 'collapseb', component: CollapsebIcon, category: 'Window' },
  { id: 'expandb', component: ExpandbIcon, category: 'Window' },
  { id: 'collapsec', component: CollapsecIcon, category: 'Window' },
  { id: 'expandc', component: ExpandcIcon, category: 'Window' },
  { id: 'loupea', component: LoupeaIcon, category: 'Window' },
  { id: 'loupe-moina', component: LoupemIcon, category: 'Window' },
  { id: 'loupe-plusa', component: LoupepIcon, category: 'Window' },
  // JEUX VIDEO 
   // UTILITY 
   { id: 'Joys01', component: JoysaIcon, category: 'Jeux Videos' },
  // WORLD 
  { id: 'terre01', component: TerreaIcon, category: 'World' },
  // UTILITY 
  { id: 'analyse01', component: AnalyseaIcon, category: 'Utility' },
  { id: 'qr01', component: QraIcon, category: 'Utility' },
  { id: 'qr02', component: QrbIcon, category: 'Utility' },
  // TERMINAL
  { id: 'lterminal', component: LterminalIcon, category: 'Terminal' },
  { id: 'pterminal', component: PterminalIcon, category: 'Terminal' },


];

const categories = [...new Set(icons.map(icon => icon.category))];

function App() {
  const [showCDN, setShowCDN] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredIcons = icons.filter(icon => {
    const matchesSearch = icon.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || icon.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const copyIconId = (id: string) => {
    navigator.clipboard.writeText(`ahp-icon-${id}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <>
      {/* NAVBAR  */}
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white p-6">
        {/* Container principal avec effet glassmorphism */}
        <div className="custom-container">
          <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            IcOnes LiBrArY AHP
          </h1>

          {/* Section CDN avec toggle */}
          <div className="mb-6">
            <button
              onClick={() => setShowCDN(!showCDN)}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors"
            >
              {showCDN ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              Show CDN Link
            </button>

            {showCDN && (
              <div className="mt-2 p-4 bg-gray-900/50 rounded-lg border border-gray-700/50">
                <code className="text-sm text-blue-300">
                  {`<link
  href="https://cdn.jsdelivr.net/npm/@jodevahp/ahp-icons-library-2025@1.0.9/dist/index.css"
  rel="stylesheet"
/>`}
                </code>
              </div>
            )}
          </div>

          {/* Barre de recherche et filtres */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Rechercher une icône..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-900/50 border border-gray-700/50 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-gray-900/50 border border-gray-700/50 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
            >
              <option value="">Toutes les catégories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Grille d'icônes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-3">
            {filteredIcons.map(({ id, component: Icon }) => (
              <div
                key={id}
                className="relative group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 flex flex-col items-center gap-2 hover:bg-gray-700/30 transition-colors"
              >
                <Icon size={24} style={{ color: "#e9e9f2" }} />

                <span className="text-xs text-gray-400">{id}</span>
                <button
                  onClick={() => copyIconId(id)}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Copier l'ID"
                >
                  {copiedId === id ? (
                    <Check size={16} className="text-green-400" />
                  ) : (
                    <Copy
                      size={16}
                      className="text-gray-400 hover:text-gray-200"
                    />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
