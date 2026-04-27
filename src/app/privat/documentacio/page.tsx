import type { Metadata } from "next";
import { FadeIn } from "@/components/ui/Animations";

export const metadata: Metadata = { title: "Documentació Interna | Àrea Privada" };

const docCards = [
  {
    id: "poster-riscos",
    title: "Póster Senyalització de Riscos",
    desc: "Senyal·lització de riscos laborals per a instal·ladors de telecomunicació. Obligatori a obra.",
    icon: "⚠️",
    type: "PDF / Imatge",
    color: "#F59E0B",
    link: "#",
  },
  {
    id: "models-butlletins",
    title: "Models de Butlletins",
    desc: "Plantilles oficials de butlletins ICT per a instal·ladors homologats. Formats Word i PDF.",
    icon: "📄",
    type: "Plantilles",
    color: "#2563EB",
    link: "#",
  },
  {
    id: "normatives",
    title: "Normatives Telecomunicació",
    desc: "RD 346/2011 ICT, REBT, RIEL, normes UNE i directrius de la CMT actualitzades.",
    icon: "📋",
    type: "Normativa",
    color: "#10B981",
    link: "#",
  },
  {
    id: "residus",
    title: "Gestió de Residus",
    desc: "Protocol intern per a la gestió de residus elèctrics i electrònics (WEEE) i cablejat antic.",
    icon: "♻️",
    type: "Procediment",
    color: "#10B981",
    link: "#",
  },
  {
    id: "autocad",
    title: "Blocs AutoCAD",
    desc: "Repositori de blocs DWG per a plànols de telecomunicació: ICT, fibra, xarxes i seguretat.",
    icon: "📐",
    type: "Arxius CAD",
    color: "#8B5CF6",
    link: "#",
    isRepo: true,
  },
  {
    id: "proveidors",
    title: "Llistat de Proveïdors",
    desc: "Base de dades de proveïdors homologats: material ICT, fibra, xarxes i seguretat.",
    icon: "🏢",
    type: "Taula",
    color: "#C8A96E",
    link: "#",
    isTable: true,
  },
];

const suppliers = [
  { name: "Electro Materiales S.L.", category: "ICT / Cablejat", contact: "comercial@electro.es", status: "Actiu" },
  { name: "FiberTech Catalunya", category: "Fibra Òptica", contact: "vendes@fibertech.cat", status: "Actiu" },
  { name: "Cisco Systems ES", category: "Xarxes", contact: "partners@cisco.com", status: "Actiu" },
  { name: "Axis Communications", category: "CCTV", contact: "sales@axis.com", status: "Actiu" },
  { name: "OBO Bettermann", category: "Canalitzacions", contact: "info@obo.es", status: "Actiu" },
  { name: "Residus TIC S.L.", category: "Gestió Residus", contact: "info@residustic.cat", status: "Actiu" },
];

const autocadFiles = [
  { name: "RITI_RITS_standard.dwg", size: "2.4 MB", version: "v2.1" },
  { name: "BAT_plantilla_A4.dwg", size: "840 KB", version: "v1.3" },
  { name: "Rack_19inch_blocks.dwg", size: "1.1 MB", version: "v1.0" },
  { name: "Rosetes_fibra_optica.dwg", size: "560 KB", version: "v2.0" },
  { name: "Cameres_IP_simbols.dwg", size: "780 KB", version: "v1.5" },
  { name: "Canalon_perfilat_armari.dwg", size: "1.3 MB", version: "v1.2" },
];

export default function DocumentacioPage() {
  return (
    <div className="p-8">
      <FadeIn>
        <div className="mb-8">
          <div className="section-label mb-2">Àrea de Documentació</div>
          <h1 className="text-2xl font-semibold text-[#F5F0E8]">Documentació Interna</h1>
          <p className="text-sm text-[#6B7280] mt-1">Recursos tècnics, normatives i eines per a l'equip</p>
        </div>
      </FadeIn>

      {/* Quick Access Cards */}
      <FadeIn delay={0.1}>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
          {docCards.map((doc) => (
            <div key={doc.id} className="card flex flex-col group">
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{doc.icon}</span>
                <span
                  className="text-[10px] font-medium px-2 py-0.5 rounded"
                  style={{ color: doc.color, backgroundColor: doc.color + '18' }}
                >
                  {doc.type}
                </span>
              </div>
              <h3 className="font-semibold text-[#F5F0E8] text-sm mb-1">{doc.title}</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed flex-1 mb-4">{doc.desc}</p>
              {!doc.isRepo && !doc.isTable && (
                <a
                  href={doc.link}
                  className="inline-flex items-center gap-1.5 text-xs transition-colors"
                  style={{ color: doc.color }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Accedir
                </a>
              )}
            </div>
          ))}
        </div>
      </FadeIn>

      {/* Suppliers Table */}
      <FadeIn delay={0.15}>
        <div className="rounded-xl border border-[#2A2A2A] bg-[#111111] mb-10 overflow-hidden">
          <div className="px-6 py-4 border-b border-[#2A2A2A] flex items-center justify-between">
            <h2 className="font-semibold text-[#F5F0E8] text-sm">🏢 Llistat de Proveïdors</h2>
            <span className="text-xs text-[#6B7280]">{suppliers.length} proveïdors</span>
          </div>
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Proveïdor</th>
                  <th>Categoria</th>
                  <th>Contacte</th>
                  <th>Estat</th>
                </tr>
              </thead>
              <tbody>
                {suppliers.map((s, i) => (
                  <tr key={i}>
                    <td className="font-medium text-[#F5F0E8]">{s.name}</td>
                    <td className="text-[#A89F91]">{s.category}</td>
                    <td>
                      <a href={`mailto:${s.contact}`} className="text-[#2563EB] hover:underline text-xs">
                        {s.contact}
                      </a>
                    </td>
                    <td>
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-medium px-2 py-0.5 rounded bg-[#10B981]/15 text-[#10B981]">
                        <span className="w-1 h-1 rounded-full bg-current"/>
                        {s.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>

      {/* AutoCAD Repository */}
      <FadeIn delay={0.2}>
        <div className="rounded-xl border border-[#2A2A2A] bg-[#111111] overflow-hidden">
          <div className="px-6 py-4 border-b border-[#2A2A2A] flex items-center justify-between">
            <h2 className="font-semibold text-[#F5F0E8] text-sm">📐 Repositori Blocs AutoCAD</h2>
            <span className="text-xs text-[#6B7280]">{autocadFiles.length} arxius</span>
          </div>
          <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-2">
            {autocadFiles.map((f) => (
              <div
                key={f.name}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#3A3A3A] transition-colors group"
              >
                <div className="w-8 h-8 rounded bg-[#8B5CF6]/15 text-[#8B5CF6] flex items-center justify-center flex-shrink-0 text-xs font-mono font-semibold">
                  DWG
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium text-[#F5F0E8] truncate">{f.name}</div>
                  <div className="text-[10px] text-[#6B7280]">{f.size} · {f.version}</div>
                </div>
                <button
                  id={`download-${f.name}`}
                  className="text-[#6B7280] group-hover:text-[#8B5CF6] transition-colors flex-shrink-0"
                  title="Descarregar"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 2v7M4 7l3 3 3-3M2 12h10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
