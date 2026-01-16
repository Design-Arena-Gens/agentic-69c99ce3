export type Locale = "en" | "so";

type HeroCopy = {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  diasporaTitle: string;
  diasporaSummary: string;
  diasporaCta: string;
};

type LandingCopy = {
  hero: HeroCopy;
  featuredTitle: string;
  featuredSubtitle: string;
  paymentTitle: string;
  paymentSummary: string;
  monitorTitle: string;
  monitorSummary: string;
};

type DashboardCopy = {
  landlord: {
    title: string;
    occupancy: string;
    revenue: string;
    callout: string;
  };
  tenant: {
    title: string;
    rentDue: string;
    paymentHistory: string;
  };
};

type NavigationCopy = {
  home: string;
  dashboard: string;
  properties: string;
  contact: string;
  languageLabel: string;
};

type PropertyCardCopy = {
  verified: string;
  perMonth: string;
  viewWhatsapp: string;
};

export type Messages = {
  navigation: NavigationCopy;
  landing: LandingCopy;
  dashboard: DashboardCopy;
  propertyCard: PropertyCardCopy;
  payments: {
    prompt: string;
    evcLabel: string;
    dahabLabel: string;
    phonePlaceholder: string;
    submit: string;
    disclaimer: string;
  };
};

export const messages: Record<Locale, Messages> = {
  en: {
    navigation: {
      home: "Home",
      dashboard: "Dashboard",
      properties: "Verified Listings",
      contact: "Contact",
      languageLabel: "Language",
    },
    landing: {
      hero: {
        title: "Verified Property Management for Modern Somalia",
        subtitle:
          "Dahab-Rent connects trusted landlords, diaspora owners, and vetted agents for transparent leasing across Mogadishu, Hargeisa, Garowe, and beyond.",
        searchPlaceholder: "Search by District (e.g., Hodan, Hamarweyne)",
        diasporaTitle: "Diaspora Property Oversight",
        diasporaSummary:
          "Monitor your rentals in Somalia with verified inspections, USD-denominated ledgers, and direct agent relationships tailored for diaspora owners.",
        diasporaCta: "Request a Verified Agent",
      },
      featuredTitle: "Featured Verified Listings",
      featuredSubtitle:
        "Every property is agent-inspected, geotagged, and denominated in USD for international investors.",
      paymentTitle: "Rent Collections that Speak Somalia",
      paymentSummary:
        "Trigger secure EVC Plus or e-Dahab USSD pushes directly from Dahab-Rent. Tenants can pay in seconds using their mobile wallets.",
      monitorTitle: "Property Monitor, Reimagined",
      monitorSummary:
        "Stay current on inspections, see real-time rent ledgers, and view agent-uploaded media without leaving your dashboard.",
    },
    dashboard: {
      landlord: {
        title: "Landlord Performance",
        occupancy: "Occupancy Rate",
        revenue: "Total Revenue (USD)",
        callout: "Verified Agent Oversight Active",
      },
      tenant: {
        title: "Tenant Snapshot",
        rentDue: "Days Until Rent Due",
        paymentHistory: "Recent Payments",
      },
    },
    propertyCard: {
      verified: "Verified",
      perMonth: "per month",
      viewWhatsapp: "Chat on WhatsApp",
    },
    payments: {
      prompt: "Pay Rent",
      evcLabel: "EVC Plus",
      dahabLabel: "e-Dahab",
      phonePlaceholder: "61X XXX XXX",
      submit: "Send STK Push",
      disclaimer:
        "A USSD push will be sent to your handset. USD is the primary currency for Dahab-Rent contracts.",
    },
  },
  so: {
    navigation: {
      home: "Bogga Hore",
      dashboard: "Maamulka",
      properties: "Guryaha La Xaqiijiyay",
      contact: "La Xiriir",
      languageLabel: "Luuqad",
    },
    landing: {
      hero: {
        title: "Maamul Guryo La Hubiyay oo u Adeega Soomaaliya",
        subtitle:
          "Dahab-Rent waxay isku xirtaa mulkiilayaasha la isku halayn karo, milkiilayaasha qurbo-joogta ah, iyo wakiillada la xaqiijiyay si ay u keenaan kirro hufan magaalooyinka sida Muqdisho, Hargeysa, iyo Garowe.",
        searchPlaceholder: "Ka raadi Degmo (tusaale, Hodan, Hamarweyne)",
        diasporaTitle: "La Socodka Hantida Qurbo-joogta",
        diasporaSummary:
          "Si joogto ah ula soco kireysiga Soomaaliya adigoo helaya kormeerro la xaqiijiyay, diiwaanno USD ah, iyo wakiillo laguu qoondeeyay.",
        diasporaCta: "Codso Wakiil La Xaqiijiyay",
      },
      featuredTitle: "Guryaha La Xaqiijiyay ee La Xushay",
      featuredSubtitle:
        "Guri walba waxa kormeera wakiil, waxa uu leeyahay GPS, waxaana lagu xisaabiyaa USD si ay ugu fududaato maalgashadayaasha caalamiga ah.",
      paymentTitle: "Ururinta Kirada ee La Hagaajiyay",
      paymentSummary:
        "Bilow USSD (STK Push) EVC Plus ama e-Dahab si degdeg ah Dahab-Rent gudaheeda. Kiraystayaashu waxay ku bixin karaan daqiiqado gudahood.",
      monitorTitle: "Ka Warhaynta Hantida",
      monitorSummary:
        "U fiirso kormeerka bilaha ah, hel diiwaan lacag-bixin oo toos ah, oo daawo sawirrada wakiillada ku jira dashboard-kaaga.",
    },
    dashboard: {
      landlord: {
        title: "Waxqabadka Mulkiilaha",
        occupancy: "Heerka Deggenaanshaha",
        revenue: "Dakhliga Guud (USD)",
        callout: "Kormeeraha Wakiilka La Xaqiijiyay Waa Firfircoon",
      },
      tenant: {
        title: "Dulmar Kirayste",
        rentDue: "Maalmaha ka Haray Kirada",
        paymentHistory: "Lacag-bixinnadii Ugu Dambeeyay",
      },
    },
    propertyCard: {
      verified: "La Xaqiijiyay",
      perMonth: "bil kasta",
      viewWhatsapp: "Kala Hadal WhatsApp",
    },
    payments: {
      prompt: "Bixi Kirada",
      evcLabel: "EVC Plus",
      dahabLabel: "e-Dahab",
      phonePlaceholder: "61X XXX XXX",
      submit: "Gudbi STK Push",
      disclaimer:
        "USSD ayaa lagugu diri doonaa taleefankaaga. USD waa lacagta rasmiga ah ee heshiisyada Dahab-Rent.",
    },
  },
};

export const availableLocales: Locale[] = ["en", "so"];
