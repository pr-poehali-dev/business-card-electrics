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
    <line x1="0" y1="40" x2="80" y2="40" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.3" />
    <circle cx="80" cy="40" r="2" fill="none" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.5" />
    <line x1="80" y1="40" x2="80" y2="80" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.3" />
    <circle cx="80" cy="80" r="2" fill="none" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.5" />
    <line x1="80" y1="80" x2="140" y2="80" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.3" />

    <line x1="360" y1="160" x2="280" y2="160" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.3" />
    <circle cx="280" cy="160" r="2" fill="none" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.5" />
    <line x1="280" y1="160" x2="280" y2="120" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.3" />
    <circle cx="280" cy="120" r="2" fill="none" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.5" />
    <line x1="280" y1="120" x2="220" y2="120" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.3" />

    <line x1="0" y1="170" x2="50" y2="170" stroke="#f59e0b" strokeWidth="0.3" strokeOpacity="0.2" />
    <line x1="50" y1="170" x2="50" y2="190" stroke="#f59e0b" strokeWidth="0.3" strokeOpacity="0.2" />

    <line x1="360" y1="30" x2="310" y2="30" stroke="#f59e0b" strokeWidth="0.3" strokeOpacity="0.2" />
    <line x1="310" y1="30" x2="310" y2="10" stroke="#f59e0b" strokeWidth="0.3" strokeOpacity="0.2" />

    <line x1="200" y1="0" x2="200" y2="200" stroke="#f59e0b" strokeWidth="0.2" strokeOpacity="0.06" strokeDasharray="4 6" />

    <circle cx="320" cy="60" r="12" fill="none" stroke="#f59e0b" strokeWidth="0.4" strokeOpacity="0.15" />
    <line x1="314" y1="60" x2="326" y2="60" stroke="#f59e0b" strokeWidth="0.4" strokeOpacity="0.15" />
    <line x1="320" y1="54" x2="320" y2="66" stroke="#f59e0b" strokeWidth="0.4" strokeOpacity="0.15" />

    <circle cx="40" cy="140" r="8" fill="none" stroke="#f59e0b" strokeWidth="0.4" strokeOpacity="0.15" />
    <line x1="35" y1="140" x2="45" y2="140" stroke="#f59e0b" strokeWidth="0.4" strokeOpacity="0.15" />
    <line x1="40" y1="135" x2="40" y2="145" stroke="#f59e0b" strokeWidth="0.4" strokeOpacity="0.15" />
  </svg>
);

const LightningBolt = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="18,2 8,18 16,18 14,30 24,14 16,14" fill="#f59e0b" />
  </svg>
);

const BackCircuitLines = () => (
  <svg
    className="absolute inset-0 w-full h-full"
    viewBox="0 0 360 200"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="0" y1="100" x2="360" y2="100" stroke="#f59e0b" strokeWidth="0.3" strokeOpacity="0.1" />
    <line x1="180" y1="0" x2="180" y2="200" stroke="#f59e0b" strokeWidth="0.3" strokeOpacity="0.1" />

    <circle cx="180" cy="100" r="60" fill="none" stroke="#f59e0b" strokeWidth="0.4" strokeOpacity="0.08" />
    <circle cx="180" cy="100" r="40" fill="none" stroke="#f59e0b" strokeWidth="0.4" strokeOpacity="0.08" />

    <line x1="0" y1="20" x2="60" y2="20" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.25" />
    <circle cx="60" cy="20" r="2" fill="none" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.4" />
    <line x1="60" y1="20" x2="60" y2="50" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.25" />
    <circle cx="60" cy="50" r="2" fill="none" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.4" />
    <line x1="60" y1="50" x2="100" y2="50" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.25" />

    <line x1="360" y1="180" x2="300" y2="180" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.25" />
    <circle cx="300" cy="180" r="2" fill="none" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.4" />
    <line x1="300" y1="180" x2="300" y2="150" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.25" />
    <circle cx="300" cy="150" r="2" fill="none" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.4" />
    <line x1="300" y1="150" x2="260" y2="150" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.25" />

    <rect x="20" y="80" width="16" height="10" rx="1" fill="none" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.2" />
    <line x1="12" y1="85" x2="20" y2="85" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.2" />
    <line x1="36" y1="85" x2="44" y2="85" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.2" />

    <rect x="316" y="108" width="16" height="10" rx="1" fill="none" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.2" />
    <line x1="308" y1="113" x2="316" y2="113" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.2" />
    <line x1="332" y1="113" x2="340" y2="113" stroke="#f59e0b" strokeWidth="0.5" strokeOpacity="0.2" />
  </svg>
);

export const CardFront = () => (
  <div className="card-face card-front">
    <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#111827] to-[#0a1628]" />
    <div className="absolute top-0 left-0 w-1 h-full bg-amber-400" />
    <div className="absolute top-0 left-1 right-0 h-[2px] bg-gradient-to-r from-amber-400 to-transparent" />
    <CircuitLines />

    <div className="relative z-10 h-full flex flex-col justify-between p-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-2">
          <LightningBolt />
          <div>
            <div className="text-amber-400 font-oswald text-[8px] tracking-[0.25em] uppercase font-medium leading-tight">
              Электроснабжение
            </div>
            <div className="text-amber-400/50 font-oswald text-[7px] tracking-[0.2em] uppercase">
              & Молниезащита
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-white/20 font-ibm text-[7px] tracking-widest uppercase">ИП</div>
        </div>
      </div>

      <div>
        <div className="text-white font-oswald text-[22px] font-bold leading-tight tracking-wide uppercase mb-0.5">
          Иванов
        </div>
        <div className="text-white font-oswald text-[15px] font-medium leading-tight tracking-wider uppercase mb-0.5">
          Владислав Геннадьевич
        </div>
        <div className="w-12 h-[1px] bg-amber-400 mt-2 mb-3" />
        <div className="text-amber-400/80 font-ibm text-[8px] tracking-[0.15em] uppercase font-light">
          Индивидуальный предприниматель
        </div>
      </div>
    </div>
  </div>
);

export const CardBack = () => (
  <div className="card-face card-back">
    <div className="absolute inset-0 bg-gradient-to-bl from-[#0d1117] via-[#111827] to-[#0a1628]" />
    <div className="absolute top-0 right-0 w-1 h-full bg-amber-400" />
    <div className="absolute bottom-0 left-0 right-1 h-[2px] bg-gradient-to-l from-amber-400 to-transparent" />
    <BackCircuitLines />

    <div className="relative z-10 h-full flex flex-col justify-between p-5">
      <div>
        <div className="text-amber-400 font-oswald text-[8px] tracking-[0.3em] uppercase mb-3 font-medium">
          Сфера деятельности
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
          {services.map((s, i) => (
            <div key={i} className="flex items-start gap-1.5">
              <div className="w-[3px] h-[3px] rounded-full bg-amber-400 mt-[5px] flex-shrink-0" />
              <span className="text-white/85 font-ibm text-[8px] leading-tight font-light">{s}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="w-full h-[0.5px] bg-white/10 mb-1" />
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full border border-amber-400/50 flex items-center justify-center flex-shrink-0">
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
              <path d="M2 2C2 2 3 1 4 2L5 4C5 4 5.5 5 4.5 5.5C4.5 5.5 5.5 7 7 8C7 8 7.5 7 8 7.5L9 8.5C9 8.5 10 9.5 8 10C6 10 1 5 2 2Z" fill="#f59e0b" />
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
    <div className="min-h-screen bg-[#070b10] flex flex-col items-center justify-center gap-12 p-8">
      <div className="text-center mb-2">
        <div className="text-white/30 font-ibm text-xs tracking-widest uppercase">Двухсторонняя визитка · 90×50 мм</div>
      </div>

      <div className="flex flex-col items-center gap-10">
        <div>
          <div className="text-amber-400/50 font-ibm text-[10px] tracking-widest uppercase mb-3 text-center">Лицевая сторона</div>
          <div className="card-wrapper" style={{ width: "340px", height: "189px" }}>
            <CardFront />
          </div>
        </div>

        <div>
          <div className="text-amber-400/50 font-ibm text-[10px] tracking-widest uppercase mb-3 text-center">Оборотная сторона</div>
          <div className="card-wrapper" style={{ width: "340px", height: "189px" }}>
            <CardBack />
          </div>
        </div>
      </div>

      <div className="text-white/15 font-ibm text-[9px] tracking-widest text-center">
        Масштаб 1:1 при печати на 300 dpi
      </div>
    </div>
  );
};

export default BusinessCard;
