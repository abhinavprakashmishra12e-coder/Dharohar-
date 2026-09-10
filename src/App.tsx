import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { IndiaReliefMap } from './components/IndiaReliefMap';
import { VirtualTour360 } from './components/VirtualTour360';
import { GeoTracker } from './components/GeoTracker';
import { MuseumGallery } from './components/MuseumGallery';
import { StateDetailModal } from './components/StateDetailModal';
import { CloudsBackground } from './components/CloudsBackground';
import { StateHeritage, Landmark } from './types/heritage';
import { INDIAN_STATES } from './data/indiaHeritageData';
import { HERITAGE_LANDMARKS } from './data/landmarksData';

export default function App() {
  const [activeView, setActiveView] = useState<'map' | 'tour' | 'radar' | 'museum'>('map');
  const [activeTourSceneId, setActiveTourSceneId] = useState<string>('taj-mahal-360');
  const [selectedStateForModal, setSelectedStateForModal] = useState<StateHeritage | null>(null);

  // Handle selecting a landmark to launch 360 tour
  const handleLaunchLandmark360 = (landmark: Landmark) => {
    if (landmark.panoramicSceneId) {
      setActiveTourSceneId(landmark.panoramicSceneId);
    } else {
      setActiveTourSceneId('taj-mahal-360');
    }
    setActiveView('tour');
  };

  // Handle selecting a state by ID
  const handleSelectStateById = (stateId: string) => {
    const found = INDIAN_STATES.find((s) => s.id === stateId);
    if (found) {
      setSelectedStateForModal(found);
    }
  };

  // Handle selecting a landmark by ID from search
  const handleSelectLandmarkById = (landmarkId: string) => {
    const found = HERITAGE_LANDMARKS.find((l) => l.id === landmarkId);
    if (found) {
      handleLaunchLandmark360(found);
    }
  };

  // Locate state on map from other views
  const handleLocateOnMap = (stateId: string) => {
    setActiveView('map');
    const found = INDIAN_STATES.find((s) => s.id === stateId);
    if (found) {
      setSelectedStateForModal(found);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-transparent text-slate-800 selection:bg-amber-500/25 selection:text-amber-950">
      {/* Universal Soft Sky & Drifting Clouds Background on Every Page */}
      <CloudsBackground />

      {/* Foreground Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {/* Top Header & Navigation */}
        <Navbar
          activeView={activeView}
          setActiveView={setActiveView}
          onSelectState={handleSelectStateById}
          onSelectLandmark={handleSelectLandmarkById}
        />

        {/* Main View Router */}
        <main className="flex-1 flex flex-col">
          {activeView === 'map' && (
            <IndiaReliefMap
              onSelectState={(state) => setSelectedStateForModal(state)}
              onLaunchLandmark360={handleLaunchLandmark360}
              onOpenRadar={() => setActiveView('radar')}
            />
          )}

          {activeView === 'tour' && (
            <VirtualTour360
              initialSceneId={activeTourSceneId}
              onClose={() => setActiveView('map')}
              onLocateOnMap={handleLocateOnMap}
            />
          )}

          {activeView === 'radar' && (
            <GeoTracker
              onLaunchLandmark360={handleLaunchLandmark360}
              onLocateOnMap={handleLocateOnMap}
            />
          )}

          {activeView === 'museum' && (
            <MuseumGallery
              onSelectState={handleLocateOnMap}
            />
          )}
        </main>

        {/* State Cultural Heritage Deep-Dive Modal */}
        {selectedStateForModal && (
          <StateDetailModal
            state={selectedStateForModal}
            onClose={() => setSelectedStateForModal(null)}
            onLaunchLandmark360={handleLaunchLandmark360}
          />
        )}
      </div>
    </div>
  );
}
