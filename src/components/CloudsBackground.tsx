import React from 'react';

export const CloudsBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* 1. Base Sky Gradient: Soft light blue into white */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(175deg, #cbe5f8 0%, #e2f1fc 30%, #f4f9fd 65%, #dff0fa 100%)',
        }}
      />

      {/* 2. Radiant Warm Sunlight Flare in Top-Left (as in image.png) */}
      <div 
        className="absolute -top-24 -left-24 w-[650px] h-[650px] rounded-full blur-3xl opacity-75 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 248, 220, 0.95) 0%, rgba(254, 240, 138, 0.5) 40%, rgba(251, 191, 36, 0.15) 70%, transparent 85%)',
        }}
      />

      {/* Subtle Sunbeam Shimmer */}
      <div 
        className="absolute top-0 left-1/4 w-[800px] h-[500px] pointer-events-none opacity-40 transform -rotate-12"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(255, 255, 255, 0.8) 0%, rgba(224, 242, 254, 0.3) 50%, transparent 80%)',
        }}
      />

      {/* 3. Floating Atmospheric Clouds Layer 1 - Slow Drift */}
      <div className="absolute top-10 -left-20 w-[420px] h-[160px] opacity-80 animate-cloud-slow">
        {/* Soft SVG Cumulus Cloud */}
        <svg viewBox="0 0 400 160" className="w-full h-full drop-shadow-[0_12px_24px_rgba(186,218,245,0.45)]">
          <ellipse cx="140" cy="95" rx="90" ry="50" fill="#ffffff" />
          <ellipse cx="230" cy="85" rx="80" ry="55" fill="#ffffff" />
          <ellipse cx="190" cy="65" rx="70" ry="50" fill="#ffffff" />
          <ellipse cx="100" cy="105" rx="60" ry="35" fill="#f8fafc" />
          <ellipse cx="280" cy="105" rx="65" ry="38" fill="#f8fafc" />
        </svg>
      </div>

      {/* Floating Cloud 2 - Top Right */}
      <div className="absolute top-16 -right-16 w-[460px] h-[180px] opacity-75 animate-cloud-fast">
        <svg viewBox="0 0 420 170" className="w-full h-full drop-shadow-[0_12px_24px_rgba(186,218,245,0.4)]">
          <ellipse cx="170" cy="100" rx="95" ry="55" fill="#ffffff" />
          <ellipse cx="260" cy="90" rx="85" ry="50" fill="#ffffff" />
          <ellipse cx="210" cy="65" rx="75" ry="48" fill="#ffffff" />
          <ellipse cx="110" cy="110" rx="65" ry="40" fill="#f1f5f9" />
          <ellipse cx="310" cy="115" rx="60" ry="35" fill="#f1f5f9" />
        </svg>
      </div>

      {/* Floating Cloud 3 - Mid-Left Horizon */}
      <div className="absolute top-1/3 -left-32 w-[520px] h-[200px] opacity-60 animate-cloud-slow" style={{ animationDuration: '42s' }}>
        <svg viewBox="0 0 450 180" className="w-full h-full drop-shadow-[0_15px_30px_rgba(186,218,245,0.35)]">
          <ellipse cx="180" cy="105" rx="100" ry="60" fill="#ffffff" />
          <ellipse cx="280" cy="95" rx="90" ry="55" fill="#ffffff" />
          <ellipse cx="230" cy="70" rx="80" ry="50" fill="#ffffff" />
          <ellipse cx="120" cy="115" rx="70" ry="42" fill="#f8fafc" />
        </svg>
      </div>

      {/* Floating Cloud 4 - Mid-Right */}
      <div className="absolute top-1/2 -right-24 w-[480px] h-[190px] opacity-65 animate-cloud-fast" style={{ animationDuration: '36s' }}>
        <svg viewBox="0 0 440 180" className="w-full h-full drop-shadow-[0_15px_30px_rgba(186,218,245,0.35)]">
          <ellipse cx="160" cy="100" rx="90" ry="55" fill="#ffffff" />
          <ellipse cx="260" cy="90" rx="85" ry="50" fill="#ffffff" />
          <ellipse cx="205" cy="65" rx="75" ry="48" fill="#ffffff" />
          <ellipse cx="315" cy="110" rx="65" ry="38" fill="#f1f5f9" />
        </svg>
      </div>

      {/* Fluffy Low Clouds at Bottom Rim (framing the page nicely) */}
      <div className="absolute -bottom-16 left-0 right-0 h-44 flex justify-between items-end opacity-70 pointer-events-none">
        <div className="w-[580px] h-36 bg-gradient-to-t from-white via-white/80 to-transparent rounded-t-full blur-2xl -ml-20" />
        <div className="w-[640px] h-40 bg-gradient-to-t from-white via-white/85 to-transparent rounded-t-full blur-2xl" />
        <div className="w-[560px] h-36 bg-gradient-to-t from-white via-white/80 to-transparent rounded-t-full blur-2xl -mr-20" />
      </div>
    </div>
  );
};
