import React from 'react';

interface AppData {
  name: string;
  src: string;
}

const apps: AppData[] = [
  { name: "PhonePe", src: "/images/phonepay.png" },
  { name: "Google Pay", src: "/images/gpay.png" },
  { name: "Paytm", src: "/images/paytm.png" },
  { name: "Amazon Pay", src: "/images/amazonpay.png" },
  { name: "AI Tools", src: "/images/ai.png" },
];

const RevolvingEarth: React.FC = () => {
  const orbitRadius = 160;

  const position = (angle: number, radius: number) => {
    const rad = (angle * Math.PI) / 180;
    return {
      left: `calc(50% + ${Math.cos(rad) * radius}px)`,
      top: `calc(50% + ${Math.sin(rad) * radius}px)`,
    };
  };

  return (
    <div className="relative flex items-center justify-center w-full max-h-screen ">
      <div className="relative w-[300px] h-[300px] sm:w-[410px] sm:h-[410px] flex items-center justify-center">

        {/* Subtle radial glow */}
        <div className="absolute w-[240px] h-[240px] sm:w-[330px] sm:h-[330px] bg-gradient-to-br from-indigo-450/20 to-purple-500/20 blur-3xl rounded-full" />

        {/* Earth */}
        <div className="relative z-10">
          <img
            src="/images/earth.png"
            alt="Earth"
            className="w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full object-cover"
          />
        </div>

        {/* Orbit Lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full rounded-full border border-purple-20/40"></div>
          <div className="absolute w-[80%] h-[80%] rounded-full border border-purple-200/30"></div>
          <div className="absolute w-[60%] h-[60%] rounded-full border border-purple-200/20"></div>
        </div>

        {/* Orbiting icons */}
        <div 
          className="absolute inset-0"
          style={{
            animation: 'spin 12s linear infinite'
          }}
        >
          {apps.map((app, i) => {
            const angle = i * (360 / apps.length);
            const pos = position(angle, orbitRadius);

            return (
              <div
                key={app.name}
                className="absolute"
                style={{ left: pos.left, top: pos.top }}
              >
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center border border-gray-200/40 -translate-x-1/2 -translate-y-1/2 shadow-lg hover:scale-125 transition-transform cursor-pointer"
                  style={{
                    animation: 'spin 12s linear infinite reverse'
                  }}
                >
                  <img
                    src={app.src}
                    alt={app.name}
                    className="w-9 h-9 object-contain"
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default RevolvingEarth;