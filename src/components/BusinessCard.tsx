import Icon from "@/components/ui/icon";

const services = [
  "Проекты электроснабжения",
  "Молниезащита",
  "Заземляющие устройства",
  "Наружные электрические сети",
];

const CircuitLines = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 360 200"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="0" y1="40" x2="80" y2="40" stroke="#1e3a5f" strokeWidth="0.6" strokeOpacity="0.25" />
    <circle cx="80" cy="40" r="2" fill="none" stroke="#1e3a5f" strokeWidth="0.6" strokeOpacity="0.4" />
    <line x1="80" y1="40" x2="80" y2="80" stroke="#1e3a5f" strokeWidth="0.6" strokeOpacity="0.25" />
    <circle cx="80" cy="80" r="2" fill="none" stroke="#1e3a5f" strokeWidth="0.6" strokeOpacity="0.4" />
    <line x1="80" y1="80" x2="140" y2="80" stroke="#1e3a5f" strokeWidth="0.6" strokeOpacity="0.25" />

    <line x1="360" y1="160" x2="280" y2="160" stroke="#1e3a5f" strokeWidth="0.6" strokeOpacity="0.25" />
    <circle cx="280" cy="160" r="2" fill="none" stroke="#1e3a5f" strokeWidth="0.6" strokeOpacity="0.4" />
    <line x1="280" y1="160" x2="280" y2="120" stroke="#1e3a5f" strokeWidth="0.6" strokeOpacity="0.25" />
    <circle cx="280" cy="120" r="2" fill="none" stroke="#1e3a5f" strokeWidth="0.6" strokeOpacity="0.4" />
    <line x1="280" y1="120" x2="220" y2="120" stroke="#1e3a5f" strokeWidth="0.6" strokeOpacity="0.25" />

    <line x1="0" y1="170" x2="50" y2="170" stroke="#1e3a5f" strokeWidth="0.4" strokeOpacity="0.15" />
    <line x1="50" y1="170" x2="50" y2="190" stroke="#1e3a5f" strokeWidth="0.4" strokeOpacity="0.15" />

    <line x1="360" y1="30" x2="310" y2="30" stroke="#1e3a5f" strokeWidth="0.4" strokeOpacity="0.15" />
    <line x1="310" y1="30" x2="310" y2="10" stroke="#1e3a5f" strokeWidth="0.4" strokeOpacity="0.15" />

    <line x1="200" y1="0" x2="200" y2="200" stroke="#1e3a5f" strokeWidth="0.3" strokeOpacity="0.08" strokeDasharray="4 6" />

    <circle cx="320" cy="60" r="12" fill="none" stroke="#d97706" strokeWidth="0.5" strokeOpacity="0.3" />
    <line x1="314" y1="60" x2="326" y2="60" stroke="#d97706" strokeWidth="0.5" strokeOpacity="0.3" />
    <line x1="320" y1="54" x2="320" y2="66" stroke="#d97706" strokeWidth="0.5" strokeOpacity="0.3" />

    <circle cx="40" cy="140" r="8" fill="none" stroke="#d97706" strokeWidth="0.5" strokeOpacity="0.3" />
    <line x1="35" y1="140" x2="45" y2="140" stroke="#d97706" strokeWidth="0.5" strokeOpacity="0.3" />
    <line x1="40" y1="135" x2="40" y2="145" stroke="#d97706" strokeWidth="0.5" strokeOpacity="0.3" />
  </svg>
);

const Logo = () => (
  <div
    style={{
      width: 48,
      height: 48,
      borderRadius: "50%",
      overflow: "hidden",
      flexShrink: 0,
      border: "1.5px solid rgba(30,58,95,0.2)",
    }}
  >
    <img
      src="https://cdn.poehali.dev/files/0189970a-c31c-4592-8fb9-81378555226d.jpg"
      alt="logo"
      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
    />
  </div>
);

const BackCircuitLines = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 360 200"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="0" y1="100" x2="360" y2="100" stroke="#1e3a5f" strokeWidth="0.3" strokeOpacity="0.1" />
    <line x1="180" y1="0" x2="180" y2="200" stroke="#1e3a5f" strokeWidth="0.3" strokeOpacity="0.1" />

    <circle cx="180" cy="100" r="60" fill="none" stroke="#1e3a5f" strokeWidth="0.5" strokeOpacity="0.1" />
    <circle cx="180" cy="100" r="40" fill="none" stroke="#1e3a5f" strokeWidth="0.5" strokeOpacity="0.1" />

    <line x1="0" y1="20" x2="60" y2="20" stroke="#1e3a5f" strokeWidth="0.6" strokeOpacity="0.25" />
    <circle cx="60" cy="20" r="2" fill="none" stroke="#1e3a5f" strokeWidth="0.6" strokeOpacity="0.4" />
    <line x1="60" y1="20" x2="60" y2="50" stroke="#1e3a5f" strokeWidth="0.6" strokeOpacity="0.25" />
    <circle cx="60" cy="50" r="2" fill="none" stroke="#1e3a5f" strokeWidth="0.6" strokeOpacity="0.4" />
    <line x1="60" y1="50" x2="100" y2="50" stroke="#1e3a5f" strokeWidth="0.6" strokeOpacity="0.25" />

    <line x1="360" y1="180" x2="300" y2="180" stroke="#1e3a5f" strokeWidth="0.6" strokeOpacity="0.25" />
    <circle cx="300" cy="180" r="2" fill="none" stroke="#1e3a5f" strokeWidth="0.6" strokeOpacity="0.4" />
    <line x1="300" y1="180" x2="300" y2="150" stroke="#1e3a5f" strokeWidth="0.6" strokeOpacity="0.25" />
    <circle cx="300" cy="150" r="2" fill="none" stroke="#1e3a5f" strokeWidth="0.6" strokeOpacity="0.4" />
    <line x1="300" y1="150" x2="260" y2="150" stroke="#1e3a5f" strokeWidth="0.6" strokeOpacity="0.25" />

    <rect x="20" y="80" width="16" height="10" rx="1" fill="none" stroke="#d97706" strokeWidth="0.6" strokeOpacity="0.3" />
    <line x1="12" y1="85" x2="20" y2="85" stroke="#d97706" strokeWidth="0.6" strokeOpacity="0.3" />
    <line x1="36" y1="85" x2="44" y2="85" stroke="#d97706" strokeWidth="0.6" strokeOpacity="0.3" />

    <rect x="316" y="108" width="16" height="10" rx="1" fill="none" stroke="#d97706" strokeWidth="0.6" strokeOpacity="0.3" />
    <line x1="308" y1="113" x2="316" y2="113" stroke="#d97706" strokeWidth="0.6" strokeOpacity="0.3" />
    <line x1="332" y1="113" x2="340" y2="113" stroke="#d97706" strokeWidth="0.6" strokeOpacity="0.3" />
  </svg>
);

export const CardFront = () => (
  <div className="card-face card-front">
    <div className="absolute inset-0 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e8f0f8]" />
    <div className="absolute top-0 left-0 w-[5px] h-full bg-[#1e3a5f]" />
    <div className="absolute top-0 left-[5px] right-0 h-[3px] bg-gradient-to-r from-[#d97706] to-transparent" />
    <div className="absolute bottom-0 left-[5px] right-0 h-[1px] bg-[#1e3a5f]/20" />
    <CircuitLines />

    <div className="relative z-10 h-full flex flex-col justify-between p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2.5">
          <Logo />
          <div>
            <div className="text-[#d97706] font-oswald text-[8px] tracking-[0.25em] uppercase font-medium leading-tight">
              Электроснабжение
            </div>
            <div className="text-[#1e3a5f]/50 font-oswald text-[7px] tracking-[0.2em] uppercase">
              & Молниезащита
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[#1e3a5f]/30 font-ibm text-[7px] tracking-widest uppercase">ИП</div>
        </div>
      </div>

      <div>
        <div className="text-[#1e3a5f] font-oswald text-[22px] font-bold leading-tight tracking-wide uppercase mb-0.5">
          Иванов
        </div>
        <div className="text-[#1e3a5f] font-oswald text-[15px] font-medium leading-tight tracking-wider uppercase mb-0.5">
          Владислав Геннадьевич
        </div>
        <div className="w-12 h-[2px] bg-[#d97706] mt-2 mb-3" />
        <div className="text-[#1e3a5f]/60 font-ibm text-[8px] tracking-[0.15em] uppercase font-light">
          Индивидуальный предприниматель
        </div>
      </div>
    </div>
  </div>
);

export const CardBack = () => (
  <div className="card-face card-back">
    <div className="absolute inset-0 bg-gradient-to-bl from-[#1e3a5f] via-[#1a3357] to-[#142844]" />
    <div className="absolute top-0 right-0 w-[5px] h-full bg-[#d97706]" />
    <div className="absolute top-0 left-0 right-[5px] h-[3px] bg-gradient-to-r from-[#d97706]/0 to-[#d97706]" />
    <div className="absolute bottom-0 left-0 right-[5px] h-[1px] bg-white/10" />
    <BackCircuitLines />

    <div className="relative z-10 h-full flex flex-col justify-between p-5">
      <div>
        <div className="text-[#d97706] font-oswald text-[8px] tracking-[0.3em] uppercase mb-2.5 font-medium">
          Сфера деятельности
        </div>
        <div className="flex flex-col gap-1.5">
          {services.map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-4 h-[1px] bg-[#d97706]/70 flex-shrink-0" />
              <span className="text-white font-ibm text-[9px] leading-tight font-medium tracking-wide">{s}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="w-full h-[0.5px] bg-white/15 mb-1" />
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border border-[#d97706]/70 flex items-center justify-center flex-shrink-0">
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
              <path d="M2 2C2 2 3 1 4 2L5 4C5 4 5.5 5 4.5 5.5C4.5 5.5 5.5 7 7 8C7 8 7.5 7 8 7.5L9 8.5C9 8.5 10 9.5 8 10C6 10 1 5 2 2Z" fill="#d97706" />
            </svg>
          </div>
          <span className="text-white font-oswald text-[12px] font-medium tracking-wider">
            +7 (917) 202-37-53
          </span>
        </div>
      </div>
    </div>
  </div>
);

const BusinessCard = () => {
  return (
    <div className="min-h-screen bg-[#dde6f0] flex flex-col items-center justify-center gap-12 p-8">
      <div className="text-center mb-2">
        <div className="text-[#1e3a5f]/40 font-ibm text-xs tracking-widest uppercase">Двухсторонняя визитка · 90×50 мм</div>
      </div>

      <div className="flex flex-col items-center gap-10">
        <div>
          <div className="text-[#1e3a5f]/40 font-ibm text-[10px] tracking-widest uppercase mb-3 text-center">Лицевая сторона</div>
          <div className="card-wrapper" style={{ width: "340px", height: "189px" }}>
            <CardFront />
          </div>
        </div>

        <div>
          <div className="text-[#1e3a5f]/40 font-ibm text-[10px] tracking-widest uppercase mb-3 text-center">Оборотная сторона</div>
          <div className="card-wrapper" style={{ width: "340px", height: "189px" }}>
            <CardBack />
          </div>
        </div>
      </div>

      <div className="text-[#1e3a5f]/30 font-ibm text-[9px] tracking-widest text-center">
        Масштаб 1:1 при печати на 300 dpi
      </div>
    </div>
  );
};

export default BusinessCard;