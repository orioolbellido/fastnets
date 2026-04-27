import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Animations";

export const metadata: Metadata = {
  title: "Què Fem",
  description:
    "Projectes professionals de telecomunicació: ICT, fibra òptica, xarxes de dades, CCTV i seguretat. Portfolio de FastNets.",
};

const projects = [
  {
    id: "ict-residencial",
    title: "ICT Residencial",
    category: "Instal·lació ICT",
    description:
      "Disseny i execució d'instal·lació ICT per a edificis residencials plurifamiliars. Incloem BAT, RITI, RITS i canalitzacions principals.",
    tags: ["ICT", "Normativa", "Edificació"],
    status: "Actiu",
    driveUrl: "https://drive.google.com",
    hasDoc: true,
  },
  {
    id: "fibra-industrial",
    title: "Fibra Òptica Industrial",
    category: "Fibra Òptica",
    description:
      "Desplegament de xarxa troncal de fibra òptica en polígon industrial. 8 km de cable SM OS2 i 24 armaris de distribució.",
    tags: ["FTTH", "OS2", "Distribució"],
    status: "Completat",
    driveUrl: "https://drive.google.com",
    hasDoc: true,
  },
  {
    id: "xarxa-campus",
    title: "Xarxa Campus Universitari",
    category: "Xarxes de Dades",
    description:
      "Renovació completa de la infraestructura de xarxa de dades d'un campus universitari. 40 switch Cisco i 300 punts d'accés Wi-Fi 6.",
    tags: ["LAN", "Cisco", "Wi-Fi 6"],
    status: "Completat",
    driveUrl: null,
    hasDoc: false,
  },
  {
    id: "cctv-logistic",
    title: "CCTV Centre Logístic",
    category: "Seguretat",
    description:
      "Sistema de videovigilància perimetral i interior per a centre logístic de 15.000 m². 120 càmeres IP full HD i VMS central.",
    tags: ["CCTV", "IP", "VMS"],
    status: "Actiu",
    driveUrl: "https://drive.google.com",
    hasDoc: true,
  },
  {
    id: "datacenter-housing",
    title: "Housing Data Center",
    category: "Infraestructura",
    description:
      "Infraestructura de telecomunicació per a nou data center Tier II. Canalitzacions redundants, patch panels Cat6A i gestió de cablejat.",
    tags: ["DataCenter", "Cat6A", "Tier II"],
    status: "En curs",
    driveUrl: "https://drive.google.com",
    hasDoc: true,
  },
  {
    id: "control-acces",
    title: "Control d'Accés Corporatiu",
    category: "Seguretat",
    description:
      "Implantació de sistema de control d'accés biométric i per targeta RFID per a seu corporativa de 6 plantes. Integrat amb RRHH.",
    tags: ["RFID", "Biometria", "Integració"],
    status: "Completat",
    driveUrl: null,
    hasDoc: false,
  },
];

const statusColors: Record<string, string> = {
  Actiu: "#10B981",
  Completat: "#6B7280",
  "En curs": "#2563EB",
};

export default function QueFemPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="section-label mb-4">Projectes i Serveis</div>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#F5F0E8] mb-6 max-w-2xl leading-tight">
              El que fem, parla per si sol
            </h1>
            <p className="text-[#A89F91] max-w-2xl leading-relaxed">
              Un portfolio de projectes d'instal·lació de telecomunicació que cobreix des d'edificis residencials fins a grans infraestructures industrials i corporatives.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" staggerDelay={0.07}>
            {projects.map((p) => (
              <StaggerItem key={p.id}>
                <div className="card h-full flex flex-col group">
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wide uppercase px-2 py-1 rounded"
                      style={{
                        color: statusColors[p.status],
                        backgroundColor: statusColors[p.status] + '18',
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: statusColors[p.status] }}/>
                      {p.status}
                    </span>
                    <span className="text-xs text-[#6B7280]">{p.category}</span>
                  </div>

                  <h3 className="font-semibold text-[#F5F0E8] mb-2">{p.title}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed flex-1 mb-5">{p.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-[#1A1A1A] text-[#A89F91] border border-[#2A2A2A]">
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.hasDoc && p.driveUrl && (
                    <a
                      href={p.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-[#2563EB] hover:text-[#60A5FA] transition-colors mt-auto group/link"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M5 2H2.5A1.5 1.5 0 001 3.5v8A1.5 1.5 0 002.5 13h9a1.5 1.5 0 001.5-1.5V8m-3-7h4v4m0-4L7 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Veure al Drive
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-0 group-hover/link:opacity-100 transition-opacity -translate-x-1 group-hover/link:translate-x-0 transition-transform">
                        <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  )}
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-12">
            <div className="section-label mb-3">Àrees de servei</div>
            <h2 className="text-2xl font-semibold text-[#F5F0E8]">
              Catàleg de serveis professionals
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Instal·lació ICT",
                  items: ["Projecte tècnic ICT", "RITI/RITS", "Arquetes i canalitzacions", "BAT i PAU", "Verificació i certificació"],
                },
                {
                  title: "Fibra Òptica",
                  items: ["Fusió i empatament", "OTDR i certificació", "Rosetes de fibra", "Armaris ODF", "Caixes de splicing"],
                },
                {
                  title: "Xarxes de Dades",
                  items: ["Cablejat estructurat Cat6/6A", "Patch panels i racks", "Switch i routers", "Wi-Fi mesh", "Certificació Fluke"],
                },
                {
                  title: "Seguretat",
                  items: ["CCTV IP i analògic", "VMS i gravació", "Control d'accés RFID", "Intrusió i alarmes", "Integració BMS"],
                },
              ].map((s) => (
                <div key={s.title} className="card">
                  <h3 className="font-semibold text-[#F5F0E8] mb-4 text-sm">{s.title}</h3>
                  <ul className="space-y-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-[#6B7280]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0"/>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
