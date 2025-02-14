import React, { useState } from 'react';
import { StarIcon, HeartIcon, HomeIcon, NewIcon,  MuteIcon, CloudcIcon, } from './icons';
import { ChevronDown, ChevronUp, Search, Copy, Check } from 'lucide-react';

const icons = [
  { id: 'star', component: StarIcon, category: 'Interface' },
  { id: 'heart', component: HeartIcon, category: 'Interface' },
  { id: 'home', component: HomeIcon, category: 'Navigation' },
  { id: 'new', component: NewIcon, category: 'Interface' },
  { id: 'mute', component: MuteIcon, category: 'Interface' },
  { id: 'cloudc', component: CloudcIcon, category: 'Interface' },
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
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Container principal avec effet glassmorphism */}
      <div className="max-w-6xl mx-auto bg-gray-800/30 backdrop-blur-lg rounded-xl border border-gray-700/50 p-6 shadow-xl">
        <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Icon Library
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
                {`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@jodevahp/ahp-icons-library-2025/dist/index.css" />`}
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredIcons.map(({ id, component: Icon }) => (
            <div
              key={id}
              className="relative group bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 flex flex-col items-center gap-2 hover:bg-gray-700/30 transition-colors"
            >
              <Icon size={24} className="text-gray-200" />
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
  );
}

export default App;
