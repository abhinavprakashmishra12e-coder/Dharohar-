import React, { useState } from 'react';
import { 
  Compass, 
  Map as MapIcon, 
  Eye, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Search, 
  Landmark as LandmarkIcon,
  X
} from 'lucide-react';
import { INDIAN_STATES } from '../data/indiaHeritageData';
import { HERITAGE_LANDMARKS } from '../data/landmarksData';
import { soundEngine } from '../utils/audioSynthesizer';

interface NavbarProps {
  activeView: 'map' | 'tour' | 'radar' | 'museum';
  setActiveView: (view: 'map' | 'tour' | 'radar' | 'museum') => void;
  onSelectState: (stateId: string) => void;
  onSelectLandmark: (landmarkId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  setActiveView,
  onSelectState,
  onSelectLandmark,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSound = () => {
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
    if (!muted && !soundEngine.getCurrentPreset()) {
      soundEngine.playPreset('sitar_raga');
    }
  };

  const filteredStates = searchQuery.trim()
    ? INDIAN_STATES.filter(
        (s) =>
          s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.hindiName.includes(searchQuery) ||
          s.capital.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const filteredLandmarks = searchQuery.trim()
    ? HERITAGE_LANDMARKS.filter(
        (l) =>
          l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          l.hindiName.includes(searchQuery) ||
          l.stateName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-sky-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <div 
          onClick={() => setActiveView('map')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 p-0.5 shadow-md shadow-amber-500/25 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-xl font-bold tracking-wider text-slate-900 group-hover:text-amber-600 transition-colors">
                DHAROHAR
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-800 font-semibold uppercase tracking-wider border border-amber-500/30">
                धरोहर
              </span>
            </div>
            <p className="text-[11px] text-slate-500 tracking-wide font-normal hidden sm:block">
              Cultural Heritage Discovery of India
            </p>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <nav className="flex items-center p-1 rounded-xl bg-sky-100/70 border border-sky-200/80 shadow-inner">
          <button
            id="nav-tab-map"
            onClick={() => setActiveView('map')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeView === 'map'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                : 'text-slate-600 hover:text-slate-950 hover:bg-white/70'
            }`}
          >
            <MapIcon className="w-4 h-4" />
            <span>3D Relief Map</span>
          </button>

          <button
            id="nav-tab-tour"
            onClick={() => setActiveView('tour')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeView === 'tour'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                : 'text-slate-600 hover:text-slate-950 hover:bg-white/70'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span className="flex items-center gap-1.5">
              360° Virtual Tour
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping hidden md:inline-block" />
            </span>
          </button>

          <button
            id="nav-tab-radar"
            onClick={() => setActiveView('radar')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeView === 'radar'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                : 'text-slate-600 hover:text-slate-950 hover:bg-white/70'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Geolocation</span>
          </button>

          <button
            id="nav-tab-museum"
            onClick={() => setActiveView('museum')}
            className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
              activeView === 'museum'
                ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-md shadow-amber-500/25'
                : 'text-slate-600 hover:text-slate-950 hover:bg-white/70'
            }`}
          >
            <LandmarkIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Museum Gallery</span>
            <span className="sm:hidden">Museum</span>
          </button>
        </nav>

        {/* Search & Audio controls */}
        <div className="flex items-center gap-2">
          {/* Quick Search */}
          <div className="relative">
            <button
              id="search-toggle-btn"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-lg bg-white/80 hover:bg-white text-slate-700 hover:text-amber-600 border border-sky-200 shadow-sm transition-colors"
              title="Search States & Monuments"
            >
              <Search className="w-4 h-4" />
            </button>

            {isSearchOpen && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-white/95 border border-sky-200 p-3 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl">
                <div className="flex items-center gap-2 bg-sky-50/80 border border-sky-200 rounded-xl px-3 py-2">
                  <Search className="w-4 h-4 text-amber-500 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search states, monuments, or dances..."
                    className="bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none w-full"
                    autoFocus
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery('')}>
                      <X className="w-3.5 h-3.5 text-slate-400 hover:text-slate-700" />
                    </button>
                  )}
                </div>

                {/* Results dropdown */}
                {searchQuery.trim() && (
                  <div className="mt-2 max-h-64 overflow-y-auto space-y-1">
                    {filteredStates.length > 0 && (
                      <div className="text-[11px] font-semibold text-amber-700 px-2 py-1 uppercase tracking-wider">
                        States & Regions ({filteredStates.length})
                      </div>
                    )}
                    {filteredStates.map((s) => (
                      <div
                        key={s.id}
                        onClick={() => {
                          onSelectState(s.id);
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="px-2.5 py-1.5 rounded-lg hover:bg-sky-50 cursor-pointer flex items-center justify-between text-xs text-slate-800"
                      >
                        <span className="font-medium text-slate-900">{s.name}</span>
                        <span className="text-[11px] text-amber-600">{s.hindiName}</span>
                      </div>
                    ))}

                    {filteredLandmarks.length > 0 && (
                      <div className="text-[11px] font-semibold text-amber-700 px-2 py-1 uppercase tracking-wider pt-2 border-t border-sky-100">
                        Monuments & Heritage Sites ({filteredLandmarks.length})
                      </div>
                    )}
                    {filteredLandmarks.map((l) => (
                      <div
                        key={l.id}
                        onClick={() => {
                          onSelectLandmark(l.id);
                          setIsSearchOpen(false);
                          setSearchQuery('');
                        }}
                        className="px-2.5 py-1.5 rounded-lg hover:bg-sky-50 cursor-pointer flex items-center justify-between text-xs text-slate-800"
                      >
                        <span className="font-medium text-slate-900">{l.name}</span>
                        <span className="text-[11px] text-slate-500">{l.stateName}</span>
                      </div>
                    ))}

                    {filteredStates.length === 0 && filteredLandmarks.length === 0 && (
                      <div className="p-4 text-center text-xs text-slate-500">
                        No state or landmark matched "{searchQuery}".
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Sound Synthesizer Toggle */}
          <button
            id="ambient-sound-toggle"
            onClick={toggleSound}
            className={`p-2 rounded-lg border transition-all duration-200 flex items-center gap-1.5 ${
              !isMuted
                ? 'bg-amber-500/15 text-amber-800 border-amber-500/40 shadow-sm shadow-amber-500/20'
                : 'bg-white/80 text-slate-600 border-sky-200 hover:text-slate-900'
            }`}
            title={!isMuted ? 'Mute Ambient Music' : 'Play Indian Cultural Raga'}
          >
            {!isMuted ? (
              <>
                <Volume2 className="w-4 h-4 text-amber-600" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping hidden md:inline-block" />
              </>
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
