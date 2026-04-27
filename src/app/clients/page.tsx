import type { Metadata } from "next";
import { FadeIn, Stagger, StaggerItem } from "@/components/ui/Animations";
import FAQ from "@/components/ui/FAQ";

export const metadata: Metadata = {
  title: "Clients",
  description:
    "Clients de FastNets: empreses, institucions i promotors que confien en els nostres serveis professionals de telecomunicació.",
};

const clients = [
  { name: "Grup Construccions RW", sector: "Promotora", initials: "GC" },
  { name: "Tecno Industrial S.L.", sector: "Indústria", initials: "TI" },
  { name: "Universitat Oberta", sector: "Educació", initials: "UO" },
  { name: "LogiPark Group", sector: "Logística", initials: "LP" },
  { name: "Clínica Sanitat Plus", sector: "Salut", initials: "CS" },
  { name: "Ajuntament de Vic", sector: "Administració Pública", initials: "AV" },
  { name: "Retail Chain S.A.", sector: "Retail", initials: "RC" },
  { name: "DataHosting BCN", sector: "Data Center", initials: "DH" },
];

const faqItems = [
  {
    question: "Quins serveis de telecomunicació oferia FastNets?",
    answer:
      "FastNets ofereix instal·lació ICT per a edificis, desplegament de fibra òptica, disseny de xarxes LAN/WAN, sistemes CCTV i control d'accés, projectes tècnics i consultoria especialitzada.",
  },
  {
    question: "Ateneu projectes fora de Catalunya?",
    answer:
      "Principalment operem a Catalunya, però podem valorar projectes puntuals a d'altres comunitats autònomes. Poseu-vos en contacte amb nosaltres per estudiar el cas concret.",
  },
  {
    question: "Disposeu de tècnics certificats?",
    answer:
      "Sí, el nostre equip disposa de totes les certificacions necessàries: tècnics ICT homologats, fusionadors de fibra òptica certificats i tècnics en xarxes certificats Cisco i Fluke.",
  },
  {
    question: "Quin temps trigueu a presentar un pressupost?",
    answer:
      "Normalment presentem un pressupost detallat en un termini de 48-72 hores laborables des de la recepció de la documentació tècnica. Per a projectes urgents, podem agilitzar el procés.",
  },
  {
    question: "Oferiu servei de manteniment postvenda?",
    answer:
      "Sí, disposem de contractes de manteniment preventiu i correctiu adaptats a les necessitats de cada client. Els nostres SLAs van des de 4 fins a 24 hores de resposta.",
  },
  {
    question: "Com puc sol·licitar un pressupost?",
    answer:
      "Podeu contactar-nos per correu a info@fastnets.cat o mitjançant el formulari de contacte d'aquesta pàgina. Un tècnic us atendrà en menys de 24 hores laborables.",
  },
];

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="section-label mb-4">Clients</div>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#F5F0E8] mb-6 max-w-2xl leading-tight">
              Empreses que confien en nosaltres
            </h1>
            <p className="text-[#A89F91] max-w-2xl leading-relaxed">
              Des de promotores i industrials fins a institucions públiques i centres de dades. La diversitat dels nostres clients reflecteix la versatilitat del nostre equip.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Client Grid */}
      <section className="py-24 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-10">
            <h2 className="text-xl font-semibold text-[#F5F0E8]">Principals clients</h2>
          </FadeIn>
          <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#2A2A2A] rounded-xl overflow-hidden" staggerDelay={0.06}>
            {clients.map((c) => (
              <StaggerItem key={c.name}>
                <div className="bg-[#111111] p-6 flex flex-col items-start gap-3 hover:bg-[#161616] transition-colors group h-full">
                  <div className="w-12 h-12 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center text-sm font-semibold text-[#A89F91] group-hover:border-[#3A3A3A] transition-colors">
                    {c.initials}
                  </div>
                  <div>
                    <div className="font-medium text-[#F5F0E8] text-sm leading-snug">{c.name}</div>
                    <div className="text-xs text-[#6B7280] mt-1">{c.sector}</div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 border-b border-[#2A2A2A]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <FadeIn>
              <div>
                <div className="section-label mb-3">Preguntes Freqüents</div>
                <h2 className="text-2xl font-semibold text-[#F5F0E8] mb-4">
                  Teniu dubtes?
                </h2>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  Aquí responem les preguntes més habituals dels nostres clients. Si no trobeu el que busqueu, no dubteu en contactar-nos.
                </p>
              </div>
            </FadeIn>
            <div className="lg:col-span-2">
              <FadeIn delay={0.1}>
                <FAQ items={faqItems} />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-12">
            <div className="section-label mb-3">Contacte</div>
            <h2 className="text-2xl font-semibold text-[#F5F0E8]">
              Sol·liciteu un pressupost
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl">
              <form id="contact-form" className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs text-[#6B7280] mb-2 font-medium">Nom</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="El vostre nom"
                      className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-sm text-[#F5F0E8] placeholder-[#6B7280] focus:outline-none focus:border-[#2563EB] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs text-[#6B7280] mb-2 font-medium">Empresa</label>
                    <input
                      id="company"
                      type="text"
                      placeholder="Nom de l'empresa"
                      className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-sm text-[#F5F0E8] placeholder-[#6B7280] focus:outline-none focus:border-[#2563EB] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-[#6B7280] mb-2 font-medium">Correu electrònic</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="correu@empresa.cat"
                    className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-sm text-[#F5F0E8] placeholder-[#6B7280] focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs text-[#6B7280] mb-2 font-medium">Servei d'interès</label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-sm text-[#A89F91] focus:outline-none focus:border-[#2563EB] transition-colors"
                  >
                    <option value="">Seleccioneu un servei</option>
                    <option>Instal·lació ICT</option>
                    <option>Fibra Òptica</option>
                    <option>Xarxes de Dades</option>
                    <option>CCTV i Seguretat</option>
                    <option>Projecte Tècnic</option>
                    <option>Manteniment</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs text-[#6B7280] mb-2 font-medium">Descripció del projecte</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Descriviu breument el vostre projecte o necessitat..."
                    className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-sm text-[#F5F0E8] placeholder-[#6B7280] focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
                  />
                </div>
                <button
                  id="contact-submit"
                  type="submit"
                  className="btn-primary w-full justify-center"
                >
                  Enviar sol·licitud
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>

              <div className="space-y-6">
                <div className="card">
                  <h3 className="font-medium text-[#F5F0E8] text-sm mb-3">Informació de contacte</h3>
                  <div className="space-y-3 text-sm text-[#6B7280]">
                    <p>📧 info@fastnets.cat</p>
                    <p>📞 +34 93 000 00 00</p>
                    <p>📍 Carrer de la Tecnologia, 42<br/>08000 Barcelona, Catalunya</p>
                    <p>🕐 Dilluns–Divendres, 8:00–18:00</p>
                  </div>
                </div>
                <div className="card">
                  <h3 className="font-medium text-[#F5F0E8] text-sm mb-2">Temps de resposta</h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    Els nostres tècnics us respondran en un termini màxim de <span className="text-[#10B981]">24 hores laborables</span>. Per a urgències, contacteu directament per telèfon.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
