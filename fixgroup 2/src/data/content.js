// FIX Group — site content
// Pas hier bedrijfsgegevens, diensten, reviews en FAQs aan.
// Alle pagina's lezen uit dit bestand — wijziging hier = wijziging overal.

export const site = {
  // Bedrijfsgegevens — PAS AAN voor go-live
  name: 'FIX Group',
  domain: 'https://fixgroup.nl',
  phone: '085 013 38 00',
  phoneRaw: '+31850133800',
  whatsapp: '+31850133800',
  email: 'info@fixgroup.nl',
  address: {
    street: 'Kerkstraat 1',
    postalCode: '1211 CL',
    city: 'Hilversum',
    country: 'NL',
  },
  kvk: '00000000', // TODO: jouw KvK-nummer
  btw: 'NL000000000B01', // TODO: jouw BTW-nummer

  // Stats
  emergencyResponse: 45,
  yearsActive: 14,
  jobsDone: 4800,
  rating: 4.8,
  reviewCount: 412,

  // Openingstijden voor LocalBusiness schema
  openingHours: '24/7',
};

export const branches = [
  {
    slug: '24-7-service',
    name: 'Fix 24/7 Service',
    short: '24/7 Service',
    color: '#E11D2E',
    tint: '#FDE8EA',
    tagline: 'Vakmannen wanneer ú het nodig heeft — 24 uur per dag.',
    desc: 'Van lekkende kraan tot complete verbouwing. Één allround team, één aanspreekpunt, dag en nacht bereikbaar.',
    metaTitle: 'Fix 24/7 Service — Vakman binnen 45 min · Hilversum & heel NL',
    metaDesc: 'Spoedreparaties, klussen, schilderwerk en renovatie. 24 uur per dag bereikbaar, binnen 45 minuten ter plaatse in ʼt Gooi en Randstad.',
    services: [
      { slug: 'spoedreparatie', title: 'Spoedreparatie', desc: 'Binnen 45 minuten een vakman aan de deur. 24/7, ook op feestdagen.', spoed: true },
      { slug: 'klussen-en-montage', title: 'Klussen & Montage', desc: 'Van meubels tot wandmontage. Grote en kleine klussen, vakkundig afgerond.', spoed: false },
      { slug: 'schilderwerk', title: 'Schilderwerk', desc: 'Binnen- en buitenschilderwerk. Strakke afwerking, MVO-verf.', spoed: false },
      { slug: 'behangen', title: 'Behangen', desc: 'Vakkundig behangen van alle soorten — vlies, glasvezel, fotobehang.', spoed: false },
      { slug: 'tuin-en-buitenwerk', title: 'Tuin & Buitenwerk', desc: 'Bestrating, schuttingen, buitenonderhoud. Nette oplevering.', spoed: false },
      { slug: 'timmerwerk', title: 'Timmerwerk', desc: 'Maatwerk kasten, deuren, vloeren. Op maat, in uw stijl.', spoed: false },
      { slug: 'keuken-en-badkamer-montage', title: 'Keuken & Badkamer Montage', desc: 'Complete montage van keuken of badkamer. Aansluiting tot afwerking.', spoed: false },
      { slug: 'verhuishulp', title: 'Verhuishulp', desc: 'Sjouwen, (de)monteren, opleveren. Desnoods morgen al.', spoed: false },
    ],
  },
  {
    slug: 'cleaning',
    name: 'Fix Cleaning',
    short: 'Cleaning',
    color: '#0E7C7B',
    tint: '#D9EEED',
    tagline: 'Professionele schoonmaak voor elk pand.',
    desc: 'Of het nu gaat om uw kantoor, vakantiewoning of een bouwproject — Fix Cleaning levert vlekkeloos resultaat. Structureel of eenmalig.',
    metaTitle: 'Fix Cleaning — Professionele schoonmaak kantoor & bedrijf · Hilversum',
    metaDesc: 'Kantoorschoonmaak, bouwschoonmaak, glazenwassen en vakantiewoning turnover. Vaste schoonmaker, vast tijdstip, vast tarief.',
    services: [
      { slug: 'kantoor-schoonmaak', title: 'Kantoorschoonmaak', desc: 'Dagelijks, wekelijks of periodiek. Vaste schoonmaker, vast tijdstip.', spoed: false },
      { slug: 'bedrijfsschoonmaak', title: 'Bedrijfsschoonmaak', desc: 'Voor MKB en zakelijke panden. Servicelevel op maat.', spoed: false },
      { slug: 'vakantiewoningen', title: 'Vakantiewoningen', desc: 'Direct na check-out. Wasserij, linnen, turnover binnen 3 uur.', spoed: true },
      { slug: 'bouwschoonmaak', title: 'Bouwschoonmaak', desc: 'Eindschoon bij oplevering. Stof, kit, verf — alles eraf.', spoed: false },
      { slug: 'glazenwassen', title: 'Glazenwassen', desc: 'Binnen en buiten. Met of zonder abonnement.', spoed: false },
      { slug: 'vloeronderhoud', title: 'Vloeronderhoud', desc: 'Kristalliseren, polijsten, onderhoud van alle vloertypes.', spoed: false },
      { slug: 'schoonmaak-na-verhuizing', title: 'Schoonmaak na Verhuizing', desc: 'Bezemschoon of tot in de puntjes — u kiest.', spoed: false },
    ],
  },
  {
    slug: 'electra',
    name: 'Fix Electra',
    short: 'Electra',
    color: '#D9881F',
    tint: '#FAEED8',
    tagline: 'Uw elektricien — van storing tot installatie.',
    desc: 'Kortsluiting, nieuwe aansluitingen of een volledige meterkast: Fix Electra regelt het veilig, NEN 1010-gecertificeerd. Ook bij spoed.',
    metaTitle: 'Fix Electra — Elektricien Hilversum · NEN 1010 · 24/7 spoed',
    metaDesc: 'Erkende elektricien voor storing, meterkast, laadpaal en domotica. NEN 1010-gecertificeerd, 24/7 bereikbaar, vaste prijs.',
    services: [
      { slug: 'storing-verhelpen', title: 'Storing Verhelpen', desc: 'Stroom eraf? Onze elektricien lokaliseert en verhelpt binnen één bezoek.', spoed: true },
      { slug: 'elektra-aanleggen', title: 'Elektra Aanleggen', desc: 'Nieuwe groepen, stopcontacten of bedrading. Veilig en volgens norm.', spoed: false },
      { slug: 'meterkast-vervangen', title: 'Meterkast Vervangen', desc: 'Oude meterkast? Wij vervangen hem NEN 1010-gecertificeerd in één dag.', spoed: false },
      { slug: 'verlichting-installeren', title: 'Verlichting Installeren', desc: 'Van inbouwspots tot dimbare LED-systemen. Ook smart.', spoed: false },
      { slug: 'laadpaal-installeren', title: 'Laadpaal Installeren', desc: 'Thuisladen? Wij installeren van Alfen tot Zaptec.', spoed: false },
      { slug: 'periodieke-keuring', title: 'NEN 1010 Keuring', desc: 'Verplichte of vrijwillige inspectie. Rapport binnen 48 uur.', spoed: false },
      { slug: 'rookmelders-en-detectie', title: 'Rookmelders & Detectie', desc: 'Installatie volgens Bouwbesluit, voor particulier en VvE.', spoed: false },
      { slug: 'domotica-en-smart-home', title: 'Domotica & Smart Home', desc: 'KNX, Loxone, Home Assistant — volledig gekoppeld.', spoed: false },
    ],
  },
  {
    slug: 'loodgieters',
    name: 'Fix Loodgieters',
    short: 'Loodgieters',
    color: '#1E4F8F',
    tint: '#DCE6F4',
    tagline: 'Loodgieter nodig? Fix Loodgieters staat klaar.',
    desc: 'Lekkage, een verstopt riool of een nieuwe CV-ketel: onze loodgieters lossen het op. Snel, schoon en met garantie.',
    metaTitle: 'Fix Loodgieters — Loodgieter Hilversum · 24/7 spoed · Lekkage & riool',
    metaDesc: 'Loodgieter voor lekkage, verstopping, CV-ketel en badkamer. Binnen 45 min ter plaatse bij spoed. VCA-gecertificeerd, met garantie.',
    services: [
      { slug: 'lekkage-verhelpen', title: 'Lekkage Verhelpen', desc: 'Van druppel tot waterschade. Lokaliseren, repareren, opruimen.', spoed: true },
      { slug: 'cv-ketel-onderhoud', title: 'CV-ketel Onderhoud', desc: 'Jaarlijks onderhoud, alle merken. Vast tarief, met rapportage.', spoed: false },
      { slug: 'cv-ketel-installatie', title: 'CV-ketel Installatie', desc: 'Nieuwe ketel geplaatst binnen één dag. Inclusief afvoer van oude.', spoed: false },
      { slug: 'riool-verstopt', title: 'Riool Verstopt', desc: 'Ontstoppen met camera-inspectie. Garantie op het werk.', spoed: true },
      { slug: 'badkamer-renovatie', title: 'Badkamer Renovatie', desc: 'Complete renovatie — sloop tot eindschoon. Vaste prijs.', spoed: false },
      { slug: 'kraan-vervangen', title: 'Kraan Vervangen', desc: 'Van keuken- tot douchekraan. Meestal binnen 30 minuten klaar.', spoed: false },
      { slug: 'vloerverwarming', title: 'Vloerverwarming', desc: 'Aanleg of storing. Inclusief inregeling.', spoed: false },
      { slug: 'gasleiding-en-aansluiting', title: 'Gasleiding & Aansluiting', desc: 'Veilig en volgens de laatste NEN-normen.', spoed: false },
    ],
  },
];

export const reviews = [
  { quote: 'Binnen een half uur stond de loodgieter voor de deur. Lekkage verholpen, keuken droog. Top service.', who: 'Marleen K.', when: 'Hilversum · 3 weken geleden', rating: 5, branch: 'Loodgieters' },
  { quote: 'Meterkast op één dag vervangen, inclusief nieuwe groepen. Vakkundig en netjes opgeleverd.', who: 'Peter D.', when: 'Amsterdam · 1 maand geleden', rating: 5, branch: 'Electra' },
  { quote: 'We gebruiken Fix Cleaning nu al twee jaar voor ons kantoor. Altijd betrouwbaar, nooit problemen.', who: 'Sophie van L.', when: 'Amersfoort · 2 weken geleden', rating: 5, branch: 'Cleaning' },
];

export const faqs = [
  { q: 'Zijn jullie écht 24/7 bereikbaar?', a: "Ja. Bel op elk moment — ook 's nachts, weekenden en feestdagen. Bij spoed zijn we binnen gemiddeld 45 minuten ter plaatse binnen ons werkgebied." },
  { q: 'Rekenen jullie voorrijkosten?', a: 'Bij een geplande afspraak niet. Voor spoedoproepen buiten kantoortijden geldt een spoedtarief dat we vooraf duidelijk communiceren — geen verrassingen achteraf.' },
  { q: "In welke regio's werken jullie?", a: "Thuisbasis is Hilversum. We bedienen 't Gooi, Randstad en op afspraak heel Nederland. Check de postcode-check op deze pagina voor uw adres." },
  { q: 'Geven jullie garantie op het werk?', a: 'Ja. Op installatiewerk 2 jaar, op reparaties 3 maanden. Alle vakmensen zijn gecertificeerd (NEN 1010 voor elektra, VCA voor loodgieters).' },
  { q: 'Hoe snel krijg ik een offerte?', a: 'Via ons offerteformulier meestal binnen 4 werkuren. Voor simpele klussen bellen we dezelfde dag terug met een prijsindicatie.' },
];

export const workgebied = [
  'Hilversum', 'Amsterdam', 'Utrecht', 'Almere', 'Amersfoort',
  'Bussum', 'Naarden', 'Huizen', 'Laren', 'Blaricum',
];

// Helper: vind een tak op slug
export function getBranch(slug) {
  return branches.find((b) => b.slug === slug);
}

// Helper: vind een dienst op branch+service slug
export function getService(branchSlug, serviceSlug) {
  const b = getBranch(branchSlug);
  if (!b) return null;
  const s = b.services.find((x) => x.slug === serviceSlug);
  return s ? { branch: b, service: s } : null;
}
