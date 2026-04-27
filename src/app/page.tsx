import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Animations";

export const metadata: Metadata = {
  title: "Inici — FastNets",
  description:
    "FastNets: instal·ladors professionals de telecomunicacions a Catalunya. ICT, fibra òptica, xarxes, CCTV i consultoria tècnica.",
};

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10L10 3l7 7M5 8v7h4v-4h2v4h4V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Instal·lació ICT",
    desc: "Infraestructures de telecomunicació per a edificis residencials i comercials segons normativa vigent.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Fibra Òptica",
    desc: "Desplegament i fusió de fibra òptica per a operadors, empreses i centres de dades.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="3" y="7" width="14" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 7V5a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Seguretat i CCTV",
    desc: "Sistemes de videovigilància, control d'accés i alarmes per a instal·lacions de qualsevol mida.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2 5h16M2 10h16M2 15h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="5" y="3" width="10" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Xarxes de Dades",
    desc: "Disseny i implementació de xarxes LAN/WAN estructurades i solucions Wi-Fi empresarial.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L2 7v6l8 5 8-5V7L10 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Projectes Tècnics",
    desc: "Elaboració de projectes executius i direcció d'obra per a instal·lacions de telecomunicació.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 4h12v12H4z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 4v12M4 8h12M4 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Manteniment",
    desc: "Serveis preventius i correctius per garantir el funcionament òptim de les vostres instal·lacions.",
  },
];

const stats = [
  { value: "200+", label: "Projectes completats" },
  { value: "15+", label: "Anys d'experiència" },
  { value: "98%", label: "Satisfacció client" },
  { value: "50+", label: "Clients actius" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(#F5F0E8 1px,transparent 1px),linear-gradient(90deg,#F5F0E8 1px,transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        {/* Accent glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563EB]/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-4xl">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2A2A2A] bg-[#1A1A1A] text-xs text-[#A89F91] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse"/>
                Operatiu a Catalunya · Certificats per la CMT
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-[#F5F0E8] mb-6">
                Telecomunicacions
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">
                  d&apos;alta precisió
                </span>
                <br />
                per al vostre negoci
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="text-lg text-[#A89F91] max-w-2xl leading-relaxed mb-10">
                FastNets dissenya, instal·la i manté infraestructures crítiques de telecomunicació
                per a empreses, promotors i institucions. Rigor tècnic i solucions a mida.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/que-fem" className="btn-primary">
                  Veure projectes
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/clients" className="btn-ghost">
                  Parla amb nosaltres
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Stats row */}
          <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2A2A2A] rounded-xl overflow-hidden mt-24 border border-[#2A2A2A]" staggerDelay={0.08}>
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="bg-[#111111] px-6 py-8">
                  <div className="text-3xl font-semibold text-[#F5F0E8] mb-1">{s.value}</div>
                  <div className="text-xs text-[#6B7280]">{s.label}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <div className="section-label mb-3">Serveis</div>
                <h2 className="text-3xl font-semibold text-[#F5F0E8]">
                  Tot el que necessiteu<br />en un sol partner
                </h2>
              </div>
              <p className="text-sm text-[#6B7280] max-w-sm">
                Des del disseny fins a la posada en marxa, gestionem cada fase del vostre projecte de telecomunicació amb la màxima professionalitat.
              </p>
            </div>
          </FadeIn>

          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2A2A2A] rounded-xl overflow-hidden" staggerDelay={0.07}>
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <div className="card rounded-none h-full group hover:bg-[#161616] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mb-5 group-hover:bg-[#2563EB]/20 transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="font-semibold text-[#F5F0E8] mb-2 text-sm">{f.title}</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{f.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 border-t border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A1A1A] to-[#111111] border border-[#2A2A2A] p-12 md:p-16">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#2563EB]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative max-w-2xl">
                <div className="section-label mb-4">Treballem junts</div>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#F5F0E8] mb-4">
                  Teniu un projecte en ment?
                </h2>
                <p className="text-[#A89F91] mb-8 leading-relaxed">
                  Contacteu amb nosaltres i us respondrem en menys de 24h. Analitzem els vostres requisits i us presentem una proposta tècnica personalitzada.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="mailto:info@fastnets.cat" className="btn-primary">
                    Enviar correu
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 4l5 4 5-4M2 4h10v7H2V4z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <Link href="/qui-som" className="btn-ghost">
                    Qui som
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
