import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  size?: number;
  variant?: 'full' | 'icon' | 'white';
}

export default function Logo({ className, size = 48, variant = 'icon' }: LogoProps) {
  const colors = {
    red: '#c51d1e',
    green: '#0a6336',
    gold: '#f0b217',
    black: '#111111',
  };

  const whiteFilter = "brightness(0) invert(1)";
  const isWhite = variant === 'white';

  if (variant === 'full') {
    return (
      <div className={cn("relative flex items-center justify-center", className)} style={{ width: size, height: size }}>
        <img 
          src="/logo.png" 
          alt="GNMAL Leicester Logo" 
          className="w-full h-full object-contain relative z-10"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        {/* SVG Fallback */}
        <div className="absolute inset-0 z-0">
          <svg 
            viewBox="0 0 500 500" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full opacity-0 [img:not([src])~&]:opacity-100"
          >
            {/* Outer Thin Black Border */}
            <circle cx="250" cy="250" r="245" stroke={colors.black} strokeWidth="1.5" />
            
            {/* Ring Sections */}
            <path d="M 85, 345 A 190 190 0 0 1 245 60" fill="none" stroke={colors.red} strokeWidth="35" strokeLinecap="round" />
            <path d="M 255, 60 A 190 190 0 0 1 415, 345" fill="none" stroke={colors.gold} strokeWidth="35" strokeLinecap="round" />
            <path d="M 100, 360 A 190 190 0 0 0 400 360" fill="none" stroke={colors.green} strokeWidth="45" strokeLinecap="round" />

            <defs>
              <path id="topLogoPath" d="M 110, 310 A 160 160 0 0 1 390 310" />
              <path id="bottomLeicesterPath" d="M 150, 410 A 170 170 0 0 0 350 410" />
            </defs>

            <text style={{ fontSize: '22px', fill: colors.black, fontWeight: 900, fontFamily: 'Montserrat, sans-serif' }}>
              <textPath xlinkHref="#topLogoPath" startOffset="50%" textAnchor="middle">
                GHANAIAN NURSES & MIDWIVES ASSOCIATION
              </textPath>
            </text>

            <text style={{ fontSize: '48px', fill: colors.black, fontWeight: 900, fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.15em' }}>
              <textPath xlinkHref="#bottomLeicesterPath" startOffset="50%" textAnchor="middle">
                LEICESTER
              </textPath>
            </text>

            <g transform="translate(145, 145) scale(1.05)">
               <LogoContent colors={colors} />
            </g>
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative flex items-center justify-center", className)} style={{ width: size, height: size }}>
      <img 
        src="/logo.png" 
        alt="GNMAL Logo" 
        className="w-full h-full object-contain relative z-10"
        style={{ filter: isWhite ? whiteFilter : undefined }}
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <div className="absolute inset-0 z-0">
        <svg 
          width="100%"
          height="100%"
          viewBox="0 0 200 200" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-0 [img:not([src])~&]:opacity-100"
        >
          <LogoContent colors={colors} isWhite={isWhite} />
        </svg>
      </div>
    </div>
  );
}

function LogoContent({ colors, isWhite = false }: { colors: any, isWhite?: boolean }) {
  if (isWhite) {
    return (
      <path 
        d="M100 175C50 140 25 100 25 65C25 35 55 20 80 45C90 55 100 70 100 85C100 70 110 55 120 45C145 20 175 35 175 65C175 100 150 140 100 175Z" 
        fill="white" 
      />
    );
  }

  return (
    <g>
      {/* Heart Outline */}
      <path 
        d="M100 180C40 140 20 100 20 65C20 30 55 15 80 45C90 55 100 80 100 85C100 80 110 55 120 45C145 15 180 30 180 65C180 100 160 140 100 180Z" 
        fill="white"
        stroke={colors.red}
        strokeWidth="8"
      />
      
      {/* Red Side (Nurse) */}
      <path 
        d="M100 180C70 160 40 130 25 100C22 80 20 65 20 65C20 30 55 15 80 45C90 55 100 80 100 85V180Z" 
        fill={colors.red} 
      />
      
      {/* Nurse Cap */}
      <path d="M45 55L58 45L72 55V60H45V55Z" fill="white" />
      
      {/* Stethoscope around neck */}
      <circle cx="65" cy="115" r="10" stroke="white" strokeWidth="2.5" fill="none" />
      <path d="M65 105V85" stroke="white" strokeWidth="2" />

      {/* Green Side (Mother) */}
      <path 
        d="M100 180V85C100 80 110 55 120 45C145 15 180 30 180 65C180 100 160 140 100 180Z" 
        fill={colors.green} 
      />
      
      {/* Mother Profile line */}
      <path d="M115 55C125 65 135 85 132 110" stroke="white" strokeOpacity="0.4" strokeWidth="1.5" fill="none" />

      {/* Baby (Gold) */}
      <path 
        d="M110 130C125 120 128 95 110 85C95 80 88 95 90 115C95 135 105 145 110 130Z" 
        fill={colors.gold}
      />
    </g>
  );
}
