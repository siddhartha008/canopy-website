export type NavLink = {
  id: string;
  name: string;
  href: string;
  isRoute: boolean;
};

export type NavItem = NavLink & {
  submenu: NavLink[];
};

export type Person = {
  id: string;
  name: string;
  title: string;
  category: string;
  image: string;
  description: string;
  linkedin: string;
};

export type Stat = {
  id: string;
  icon: string;
  title: string;
  value: number;
  suffix: string;
};

export type Testimonial = {
  id: string;
  text: string;
  name: string;
  position: string;
  image: string;
};

export type Logo = { id: string; image: string; alt: string };

export type StoryParagraph = { id: string; text: string; style: 'lead' | 'body' | 'emphasis' };

export type ValueItem = { id: string; icon: string; label: string; description: string };

export type ProgramCard = { id: string; name: string; image: string; route: string };

export type ImpactPoint = { id: string; label: string; text: string };

export type EmphasizedLine = { id: string; emphasis: string; text: string };

export type ChartPoint = {
  id: string;
  title: string;
  preValue: number;
  postValue: number;
  growth: string;
};

export type HeadlineStat = { id: string; headline: string; subtext: string };

export type StudentStory = {
  id: string;
  name: string;
  image: string;
  shortBio: string;
  fullStory: string;
};

export type District = {
  id: string;
  name: string;
  schools: number;
  students: string;
  mapIndex: number | null;
};

export type Chapter = {
  title: string;
  heroImage: string;
  intro: string;
  whatWeDoTitle: string;
  whatWeDoImage: string;
  whatWeDoPoints: string[];
  involvedTitle: string;
  involvedIntro: string;
  involvedImage: string;
  involvedPoints: string[];
  emailLabel: string;
  email: string;
  extraNote: string;
  closing: string;
  newsletterBefore: string;
  newsletterLabel: string;
  newsletterHref: string;
  newsletterAfter: string;
  teamIntro: string;
  teamTitle: string;
  members: Person[];
  bankTitle: string;
  bankNote: string;
  bank: { id: string; label: string; value: string }[];
};

export type Publication = {
  id: string;
  title: string;
  cover: string;
  file: string;
  label: string;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
};

export type FeaturedItem = {
  id: string;
  title: string;
  url: string;
  image: string;
};

export type InvolveWay = {
  id: string;
  title: string;
  body: string;
  image: string;
  imageSide: 'left' | 'right';
  flipImage: boolean;
  buttons: { id: string; label: string; href: string; newTab: boolean; popup: boolean }[];
};

export type DonateTier = {
  id: string;
  amount: string;
  description: string;
  icon: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: string;
};

export type FaqCategory = { id: string; name: string; icon: string };

export type SiteContent = {
  site: { logo: string; donateLabel: string; copyright: string };
  navigation: { items: NavItem[] };
  footer: {
    mission: string;
    takeActionTitle: string;
    takeAction: { id: string; label: string; href: string }[];
    resourcesTitle: string;
    resources: { id: string; label: string; href: string }[];
    officeTitle: string;
    officeLines: string[];
    mapUrl: string;
    phoneLabel: string;
    phone: string;
    emailLabel: string;
    email: string;
    followTitle: string;
    instagram: string;
    facebook: string;
    linkedin: string;
    youtube: string;
    newsletterTitle: string;
  };
  home: {
    hero: { desktopImage: string; mobileImage: string; highlight: string; rest: string };
    intro: {
      beforePercent: string;
      percent: string;
      dropoutPhrase: string;
      afterDropout: string;
      changing: string;
      middle: string;
      beforeHundred: string;
      hundred: string;
      afterHundred: string;
      ending: string;
    };
    about: {
      image: string;
      title: string;
      paragraphs: string[];
      button: string;
      href: string;
    };
    impact: { title: string; intro: string; stats: Stat[] };
    testimonials: Testimonial[];
    support: {
      stat: string;
      beforeHighlight: string;
      highlight: string;
      body: string;
      button: string;
    };
    partners: { title: string; image: string };
    featured: { title: string; button: string; href: string; logos: Logo[] };
    newsletter: { title: string; description: string; privacy: string; button: string };
  };
  mission: {
    whyImage: string;
    whyTitle: string;
    whyBody: string;
    missionTitle: string;
    missionBody: string;
    visionTitle: string;
    visionBody: string;
    theoryTitle: string;
    theoryImage: string;
    theorySlides: string[];
    valuesTitle: string;
    values: ValueItem[];
    closingImage: string;
    closingText: string;
  };
  story: {
    topImage: string;
    bottomImage: string;
    paragraphs: StoryParagraph[];
  };
  team: {
    title: string;
    filters: string[];
    facilitatorNote: string;
    volunteerNote: string;
    members: Person[];
  };
  board: {
    title: string;
    filters: string[];
    members: Person[];
  };
  ourWork: {
    heroImage: string;
    introBefore: string;
    cost: string;
    and: string;
    quality: string;
    middle: string;
    emphasis: string;
    after: string;
    ecosystemImage: string;
    programsTitle: string;
    programs: ProgramCard[];
  };
  canship: {
    heroImage: string;
    title: string;
    paragraphs: string[];
    lifecycleTitle: string;
    lifecycleImage: string;
    impactTitle: string;
    impactImage: string;
    points: ImpactPoint[];
    stats: EmphasizedLine[];
    bottomImage: string;
  };
  katha: {
    heroImage: string;
    title: string;
    paragraphs: string[];
    lifecycleTitle: string;
    lifecycleImage: string;
    slides: string[];
    impactTitle: string;
    impactImage: string;
    points: ImpactPoint[];
    stats: EmphasizedLine[];
  };
  impactPage: {
    heroImage: string;
    title: string;
    intro: string;
    charts: ChartPoint[];
    beforeLabel: string;
    afterLabel: string;
    footnote: string;
    methodNote: string;
    headlines: HeadlineStat[];
    studentsTitle: string;
    students: StudentStory[];
    mapTitle: string;
    mapIntro: string;
    districts: District[];
    ecosystemTitle: string;
    ecosystemImage: string;
    sdgTitle: string;
    sdgs: Logo[];
  };
  france: Chapter;
  usa: Chapter;
  publications: {
    sections: { id: string; label: string; visible: boolean; intro: string; items: Publication[] }[];
  };
  policies: { title: string; intro: string; items: Publication[] };
  blogs: { title: string; posts: BlogPost[] };
  featuredPage: { title: string; items: FeaturedItem[] };
  getInvolved: {
    heroImage: string;
    title: string;
    intro: string;
    ways: InvolveWay[];
    helpTitle: string;
    helpBody: string;
    helpEmail: string;
    helpClosing: string;
    helpImage: string;
  };
  donate: {
    heroImage: string;
    headline: string;
    intro: string;
    supportsTitle: string;
    tiers: DonateTier[];
    button: string;
    taxNote: string;
    whyTitle: string;
    whyImage: string;
    whyPoints: string[];
    bankTitle: string;
    bank: { id: string; label: string; value: string }[];
    thanks: string;
    thanksEmphasis: string;
    presetAmounts: number[];
  };
  faq: {
    title: string;
    intro: string;
    categories: FaqCategory[];
    items: FaqItem[];
    stillTitle: string;
    stillBody: string;
    contactLabel: string;
    contactHref: string;
    emailLabel: string;
    emailHref: string;
  };
};
