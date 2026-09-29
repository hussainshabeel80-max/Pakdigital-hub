export interface ServiceItem {
  id: string;
  badge: string;
  title: string;
  shortDesc: string;
  ctaText: string;
  items: string[];
  startingPrice: string;
  detailedSection: {
    heading: string;
    explanation: string;
    whatWeDo: string[];
    benefits: string[];
    suitableFor: string[];
  };
}

export interface CaseStudyItem {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  strategy: string;
  results: string;
  services: string[];
  status: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  business: string;
  industry: string;
  initials: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const AGENCY_CONFIG = {
  name: "PakDigital Hub",
  tagline: "Your Growth. Our Strategy.",
  subtitle: "Digital Marketing & E-commerce Growth Agency",
  phone: "+92 315 1708943",
  whatsappNumber: "923151708943",
  email: "pakdigitalhubagency@gmail.com",
  facebookUrl: "https://www.facebook.com/profile.php?id=61594877632310",
  whatsappDefaultMsg: "Hello PakDigital Hub, I would like to schedule a free digital marketing consultation for my business.",
  founderImage: "/src/assets/images/pakdigital_founder_hero_1790612429779.jpg",
  realEstateImage: "/src/assets/images/real_estate_leads_1790612343116.jpg",
  analyticsImage: "/src/assets/images/ecommerce_growth_1790612367540.jpg",
  agencyCollabImage: "/src/assets/images/agency_team_collaboration_1790612443705.jpg"
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "seo",
    badge: "Organic Search Visibility",
    title: "SEO Services",
    shortDesc: "Improve your search visibility, attract relevant organic traffic and build long-term online presence.",
    ctaText: "Explore SEO",
    startingPrice: "Tailored Package",
    items: [
      "Keyword Research",
      "Technical SEO",
      "On-Page SEO",
      "Website Optimization",
      "Local SEO",
      "Content Optimization",
      "Competitor Analysis",
      "Link Building",
      "SEO Monitoring",
      "Reporting"
    ],
    detailedSection: {
      heading: "Comprehensive Search Engine Optimization (SEO)",
      explanation: "Search Engine Optimization is the foundation of sustainable digital presence. We implement structured on-page enhancements, technical health audits, competitor intelligence, and contextual backlink strategies to help search engines accurately understand and rank your offerings.",
      whatWeDo: [
        "In-depth keyword intent mapping aligned with buyer queries",
        "Technical crawls resolving indexing, schema markup, and speed bottlenecks",
        "On-page metadata, header structure, and internal link optimization",
        "Authority content creation and search intent fulfillment",
        "Transparent rank tracking and bi-weekly performance updates"
      ],
      benefits: [
        "Consistent inflow of qualified commercial search queries",
        "Reduced long-term dependence on paid advertising clicks",
        "Enhanced brand authority and organic search trustworthiness",
        "Sustainable compounding return on digital marketing investment"
      ],
      suitableFor: [
        "B2B service firms seeking qualified corporate inquiries",
        "E-commerce stores aiming for product discovery on Google",
        "Local practices and clinics serving defined geographic areas",
        "Corporate websites needing modern technical infrastructure"
      ]
    }
  },
  {
    id: "gbp",
    badge: "Local Maps & Discovery",
    title: "Google Business Profile & Local SEO",
    shortDesc: "Improve your local visibility and help customers discover your business on Google Search and Maps.",
    ctaText: "Improve Local Visibility",
    startingPrice: "Tailored Package",
    items: [
      "GBP Setup",
      "GBP Optimization",
      "Category Optimization",
      "Services & Products",
      "Google Posts",
      "Service Area Optimization",
      "Review Response Management",
      "Local Keyword Optimization",
      "Local SEO Strategy",
      "Performance Monitoring"
    ],
    detailedSection: {
      heading: "Google Business Profile & Local Map Pack Dominance",
      explanation: "When local customers search for businesses 'near me' or within your city, your Google Business Profile is the first point of contact. We optimize your profile attributes, service catalogs, local geotargeting, and engagement to maximize inquiries directly through Google Maps.",
      whatWeDo: [
        "Complete verification, category audit, and service area configuration",
        "High-definition photo updates, weekly promotional Google updates, and Q&A management",
        "Product catalog structuring with direct WhatsApp/phone call actions",
        "Ethical review collection workflows and professional response handling",
        "Local citation cleanup to preserve consistent Name, Address, and Phone (NAP)"
      ],
      benefits: [
        "Direct phone calls, directions requests, and website visits from high-intent locals",
        "Higher placement in the Google 3-Pack for regional keywords",
        "Immediate credibility through organized customer reviews and real business photos",
        "Frictionless mobile contact for walk-in and on-demand clients"
      ],
      suitableFor: [
        "Clinics, dental centers, diagnostic labs, and healthcare practitioners",
        "Real estate agency offices, builder demonstration centers, and brokers",
        "Restaurants, cafes, food chains, and catering services",
        "Home service contractors, repair centers, and specialized consultants"
      ]
    }
  },
  {
    id: "meta-ads",
    badge: "Paid Social Performance",
    title: "Meta Ads",
    shortDesc: "Reach your target audience through Facebook and Instagram advertising campaigns designed around your business goals.",
    ctaText: "Generate More Leads",
    startingPrice: "Tailored Package",
    items: [
      "Facebook Ads",
      "Instagram Ads",
      "Lead Generation",
      "WhatsApp Campaigns",
      "Audience Targeting",
      "Location Targeting",
      "Retargeting",
      "Campaign Optimization",
      "Ad Copy Guidance",
      "Performance Monitoring"
    ],
    detailedSection: {
      heading: "High-Intent Meta Advertising (Facebook & Instagram)",
      explanation: "Meta's advertising ecosystem offers precision targeting based on location, demographics, interest clusters, and behavioral intent. We build targeted funnels that take potential buyers from initial awareness to qualified WhatsApp inquiries and instant lead form submissions.",
      whatWeDo: [
        "Audience research identifying high-net-worth buyers and interested prospects",
        "Direct-to-WhatsApp campaign architecture for fast conversation starts",
        "Native Meta instant lead generation forms with qualifying filter questions",
        "Custom creative guidance, compelling ad copy, and high-contrast visuals",
        "A/B testing of angles, hooks, and targeting segments for lower cost per lead"
      ],
      benefits: [
        "Rapid pipeline filling with verifiable inbound buyer inquiries",
        "Direct conversational connection with decision-makers via WhatsApp",
        "Granular geo-fencing around specific project areas, cities, or commercial hubs",
        "Complete visibility into cost per lead, click-through rates, and conversion flow"
      ],
      suitableFor: [
        "Real estate developers, property builders, agents, and housing projects",
        "E-commerce fashion, accessories, and consumer lifestyle brands",
        "Local service businesses running promotional seasonal offers",
        "Educational institutions, training institutes, and consultancy firms"
      ]
    }
  },
  {
    id: "google-ads",
    badge: "Search Intent & Conversions",
    title: "Google Ads",
    shortDesc: "Reach potential customers when they are actively searching for products and services like yours.",
    ctaText: "Reach More Customers",
    startingPrice: "Tailored Package",
    items: [
      "Keyword Research",
      "Search Campaigns",
      "Campaign Setup",
      "Ad Copy",
      "Location Targeting",
      "Negative Keywords",
      "Call Campaigns",
      "Lead Generation",
      "Conversion Tracking",
      "Campaign Optimization"
    ],
    detailedSection: {
      heading: "Google Search Ads & Precision PPC Management",
      explanation: "Google Search captures customers at the very moment of purchasing intent. Our paid search management ensures every rupee of your budget targets commercial keywords, prevents wasted clicks with tight negative keyword lists, and drives high-value conversions.",
      whatWeDo: [
        "Keyword research focused on commercial intent and immediate buyer problems",
        "Campaign architecture utilizing exact match and tight phrase match structures",
        "Comprehensive negative keyword libraries to filter out irrelevant student/job searches",
        "Direct phone call ads optimized for mobile callers and instant dispatch",
        "Continuous conversion tracking setup via Google Tag Manager and Analytics"
      ],
      benefits: [
        "Immediate placement at the top of Google search results for urgent queries",
        "Elimination of wasted ad spend through rigorous search term auditing",
        "Direct trackability from impression to phone call or website inquiry",
        "Scalable lead volume that can be throttled according to business capacity"
      ],
      suitableFor: [
        "High-ticket service providers (corporate legal, accounting, logistics, solar)",
        "Emergency and urgent local services (contractors, clinics, repair specialists)",
        "Real estate project launches with specific location-intent searches",
        "E-commerce retailers bidding on exact brand and product nomenclature"
      ]
    }
  },
  {
    id: "amazon",
    badge: "Marketplace Presence & Trust",
    title: "Amazon Reviews & Ratings Services",
    shortDesc: "Help strengthen your Amazon product presence through review monitoring, customer feedback strategies and product credibility-focused solutions.",
    ctaText: "Explore Amazon Services",
    startingPrice: "Tailored Package",
    items: [
      "Review Monitoring",
      "Rating Analysis",
      "Customer Feedback Strategy",
      "Review Management",
      "Competitor Review Analysis",
      "Product Feedback Insights",
      "Customer Experience Optimization",
      "Performance Monitoring"
    ],
    detailedSection: {
      heading: "Amazon Marketplace Credibility & Customer Feedback Optimization",
      explanation: "On Amazon, customer sentiment and listing credibility dictate your conversion rate. We provide compliant feedback intelligence, competitor review gap analysis, and post-purchase customer communication strategies designed to foster genuine positive customer satisfaction without violating marketplace guidelines.",
      whatWeDo: [
        "Continuous tracking and alerts for new customer reviews and critical feedback",
        "Competitor review sentiment analysis to identify market defects and customer desires",
        "Compliant post-purchase follow-up systems via Amazon Buyer-Seller messaging",
        "Listing content audit to align buyer expectations with actual product features",
        "Detailed monthly feedback reports highlighting recurring customer feedback themes"
      ],
      benefits: [
        "Identification of product listing inaccuracies before they result in negative ratings",
        "100% adherence to Amazon Terms of Service (no black-hat or fake review risks)",
        "Improved listing conversion rate through authentic buyer trust and clarity",
        "Data-driven product improvement insights extracted directly from market feedback"
      ],
      suitableFor: [
        "Private label Amazon sellers seeking sustainable brand equity",
        "Wholesalers and brand owners managing multiple ASIN catalogs",
        "International e-commerce exporters entering US/UK/EU/UAE Amazon marketplaces",
        "Manufacturers wanting actionable feedback on product packaging and defects"
      ]
    }
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Goal-Focused Strategy",
    description: "Every campaign begins with your specific business objective—whether that is inbound WhatsApp leads, foot traffic, or qualified phone inquiries. We build plans that measure business impact, not vanity impressions."
  },
  {
    title: "Data-Driven Decisions",
    description: "We base budget allocations, keyword targeting, and ad creatives on objective data and market analysis. Every adjustment is backed by clear search and engagement metrics."
  },
  {
    title: "Targeted Marketing",
    description: "We pinpoint your ideal clients through precise geographic fencing, demographic filters, and purchase intent triggers, ensuring your marketing reaches people who can actually buy."
  },
  {
    title: "Clear Communication",
    description: "You receive straightforward, transparent reporting without confusing technical jargon. We keep you updated on progress, upcoming steps, and areas of campaign refinement."
  },
  {
    title: "Continuous Optimization",
    description: "Digital marketing is never set-and-forget. We routinely analyze search term reports, negative keywords, ad fatigue, and conversion metrics to maintain consistent performance."
  },
  {
    title: "Growth-Focused Approach",
    description: "We align digital marketing with your commercial capacity. As your business scales and lead flow increases, we adapt the marketing infrastructure to support sustainable long-term expansion."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    name: "DISCOVER",
    headline: "Understand Your Business",
    detail: "We conduct an initial discovery session to understand your business model, profit margins, target audience, existing digital assets, and primary growth bottlenecks."
  },
  {
    step: "02",
    name: "RESEARCH",
    headline: "Market & Competitor Analysis",
    detail: "Our team analyzes local and industry competitors, identifies high-intent keyword gaps, audits existing profiles, and assesses customer acquisition costs in your niche."
  },
  {
    step: "03",
    name: "STRATEGY",
    headline: "Custom Roadmap Formulation",
    detail: "We formulate a customized digital marketing roadmap outlining the exact channel mix (SEO, GBP, Meta Ads, Google Ads), messaging angles, and tracking checkpoints."
  },
  {
    step: "04",
    name: "EXECUTE",
    headline: "Campaign Launch & Profile Setup",
    detail: "We implement on-page technical fixes, set up or optimize your Google Business Profile, design ad creatives, configure conversion tracking, and launch targeted campaigns."
  },
  {
    step: "05",
    name: "OPTIMIZE & REPORT",
    headline: "Refinement & Transparent Tracking",
    detail: "We monitor day-to-day incoming data, filter non-performing search terms, A/B test ad variations, and provide clear bi-weekly reports detailing leads and opportunities."
  }
];

export const INDUSTRIES_SERVED = [
  {
    id: "real-estate",
    title: "Real Estate & Builders",
    isFeatured: true,
    desc: "Specialized lead generation campaigns for builders, property developers, agents, apartment launches, and inventory sales.",
    tags: ["Builders", "Property Developers", "Agents", "Flats & Apartments", "Project Launches", "WhatsApp Inquiries"]
  },
  {
    id: "ecommerce",
    title: "E-commerce Businesses",
    desc: "Targeted Meta & Google ad funnels, product catalog optimization, and organic visibility to attract paying shoppers.",
    tags: ["DTC Brands", "Fashion & Apparel", "Electronics", "Lifestyle Products"]
  },
  {
    id: "amazon",
    title: "Amazon Sellers",
    desc: "Review monitoring, feedback strategy, and product credibility enhancement for competitive marketplace listings.",
    tags: ["Private Label", "Wholesale Brands", "Brand Registry", "ASIN Health"]
  },
  {
    id: "local-biz",
    title: "Local Businesses",
    desc: "Google Business Profile optimization and Local SEO to capture walk-in customers and telephone bookings.",
    tags: ["Retail Stores", "Automotive Workshops", "Service Centers", "Regional Branches"]
  },
  {
    id: "healthcare",
    title: "Healthcare & Clinics",
    desc: "Local map dominance, appointment generation, and verified profile setups for doctors, dentists, and specialized clinics.",
    tags: ["Dental Clinics", "Aesthetic Centers", "Diagnostic Labs", "Medical Specialists"]
  },
  {
    id: "restaurants",
    title: "Restaurants & Cafes",
    desc: "Local search presence, Google Maps location awareness, and visually engaging social campaigns to drive foot traffic.",
    tags: ["Fine Dining", "Fast Food Chains", "Cafes & Bakeries", "Catering"]
  },
  {
    id: "home-services",
    title: "Home Services",
    desc: "High-intent Google Ads and local search optimization for on-demand repair, solar installation, and maintenance contractors.",
    tags: ["Solar Installers", "Electricians & Plumbers", "HVAC Services", "Interior Designers"]
  },
  {
    id: "pro-services",
    title: "Professional Services",
    desc: "Search credibility and commercial lead generation for corporate consultancies, accountants, legal, and software agencies.",
    tags: ["Legal Practices", "Chartered Accountants", "IT Consultancies", "Corporate Advisors"]
  },
  {
    id: "education",
    title: "Education & Institutes",
    desc: "Student enrollment campaigns, course awareness, and local campus discovery through targeted Meta and Search campaigns.",
    tags: ["Training Academies", "Schools & Colleges", "Language Centers", "Coaching Institutes"]
  },
  {
    id: "retail",
    title: "Retail & Brands",
    desc: "Omnichannel presence uniting physical store visibility with e-commerce acquisition funnels.",
    tags: ["Boutiques", "Showrooms", "Consumer Goods", "Franchise Networks"]
  }
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "cs-01",
    client: "Client / Business Name [Project Under NDA]",
    industry: "Real Estate Development",
    challenge: "High-end residential tower project faced low inquiry volume and high acquisition costs using unsegmented traditional media channels.",
    strategy: "Implemented hyper-targeted Meta Lead Generation campaigns with qualifying form questions, paired with a dedicated WhatsApp click-to-chat funnel for property consultants.",
    results: "Consistent stream of qualified buyer inquiries directly into sales team WhatsApp, with significantly reduced cost per verified prospective buyer.",
    services: ["Meta Ads", "Lead Generation", "WhatsApp Automation"],
    status: "Verified Active Campaign"
  },
  {
    id: "cs-02",
    client: "Client / Business Name [Local Practice]",
    industry: "Specialized Healthcare Clinic",
    challenge: "New clinic location had zero visibility on Google Maps and lost local appointment searches to established competitors.",
    strategy: "Executed comprehensive Google Business Profile verification, structured medical service categories, localized geotags, and built consistent local citations.",
    results: "Achieved top 3 local map placement for primary specialty keywords, resulting in steady direct phone calls and in-clinic consultation bookings.",
    services: ["Google Business Profile", "Local SEO", "Citation Cleanup"],
    status: "Verified Active Campaign"
  },
  {
    id: "cs-03",
    client: "Client / Business Name [E-commerce Brand]",
    industry: "Consumer Products & Amazon Marketplace",
    challenge: "E-commerce catalog struggled with low organic keyword rankings and erratic customer review sentiment on new product listings.",
    strategy: "Full technical SEO audit, optimized product metadata, combined with Amazon review monitoring and structured post-purchase customer feedback workflow.",
    results: "Improved keyword indexation across major product categories and stabilized listing rating profile without violating marketplace terms.",
    services: ["Technical SEO", "Amazon Review Strategy", "On-Page SEO"],
    status: "Verified Active Campaign"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t-01",
    quote: "Add verified client testimonial here. Verified client feedback from a partner business regarding campaign strategy, communication, and lead generation outcomes.",
    author: "Client Name",
    role: "Managing Director",
    business: "Business Name",
    industry: "Real Estate & Construction",
    initials: "RE"
  },
  {
    id: "t-02",
    quote: "Add verified client testimonial here. Verified client feedback detailing local search visibility improvements and Google Business Profile management performance.",
    author: "Client Name",
    role: "Founder & Lead Consultant",
    business: "Business Name",
    industry: "Healthcare & Specialized Clinic",
    initials: "HC"
  },
  {
    id: "t-03",
    quote: "Add verified client testimonial here. Verified client feedback highlighting clear communication, structured reporting, and strategic advertising alignment.",
    author: "Client Name",
    role: "Head of Operations",
    business: "Business Name",
    industry: "E-commerce & Retail",
    initials: "EC"
  }
];

export const PRICING_PACKAGES = [
  {
    id: "seo-package",
    name: "SEO Services",
    startingFrom: "Tailored",
    frequency: "Scope",
    badge: "Organic Growth",
    description: "Comprehensive on-page, technical, and local search engine optimization tailored to your domain and keyword competition.",
    deliverables: [
      "Targeted Keyword Research & Mapping",
      "Technical SEO Audit & Health Fixes",
      "On-Page Optimization & Meta Structuring",
      "Local Search & Geo-Targeting Integration",
      "Content Guidance & Keyword Density",
      "Competitor Position Monitoring",
      "Bi-Weekly Progress & Ranking Reports"
    ],
    ctaText: "Inquire for SEO Plan",
    recommendedFor: "Businesses seeking sustainable organic inbound traffic"
  },
  {
    id: "gbp-package",
    name: "Google Business Profile",
    startingFrom: "Tailored",
    frequency: "Scope",
    badge: "Local Discovery",
    description: "Complete setup, optimization, and monthly management to capture high-intent local map searchers in your target city.",
    deliverables: [
      "GBP Verification & Profile Optimization",
      "Primary & Secondary Category Setup",
      "Product & Service Catalog Uploads",
      "Weekly Strategic Google Updates/Posts",
      "Service Area Geotag Configuration",
      "Review Response Guidance & Management",
      "Local Map Search Performance Tracking"
    ],
    ctaText: "Inquire for Local SEO",
    recommendedFor: "Clinics, restaurants, local shops, and regional offices"
  },
  {
    id: "meta-package",
    name: "Meta Ads Management",
    startingFrom: "Tailored",
    frequency: "Scope",
    badge: "Most Popular",
    isFeatured: true,
    description: "Targeted Facebook and Instagram advertising campaigns built for immediate inquiries and verified buyer leads.",
    deliverables: [
      "Campaign Setup on Facebook & Instagram",
      "Audience Research & Geographic Fencing",
      "WhatsApp Direct-Message Funnel Setup",
      "Meta Instant Lead Forms Configuration",
      "Ad Copy Formulation & Creative Advice",
      "A/B Testing of Creative Variations",
      "Regular Budget & Conversion Monitoring"
    ],
    ctaText: "Inquire for Meta Ads",
    recommendedFor: "Real estate builders, agents, and consumer services"
  },
  {
    id: "google-package",
    name: "Google Ads Management",
    startingFrom: "Tailored",
    frequency: "Scope",
    badge: "High Intent",
    description: "Paid Search and Call campaigns targeting customers at the exact moment they search for your service.",
    deliverables: [
      "High-Intent Commercial Keyword Setup",
      "Search Campaign Architecture & Match Types",
      "Negative Keyword Library Formulation",
      "Compelling Ad Copywriting & Extensions",
      "Call-Only Campaign Setup for Mobile Users",
      "Conversion & Tracking Setup Guidance",
      "Ongoing Bid Adjustments & Optimization"
    ],
    ctaText: "Inquire for Google Ads",
    recommendedFor: "Urgent local services, B2B firms, and project sales"
  },
  {
    id: "amazon-package",
    name: "Amazon Services",
    startingFrom: "Tailored",
    frequency: "Scope",
    badge: "Marketplace Presence",
    description: "Tailored Amazon product listing credibility, review monitoring, and customer feedback strategy.",
    deliverables: [
      "Amazon Listing Review & Health Audit",
      "Customer Feedback & Sentiment Analysis",
      "Compliant Post-Purchase Communication Strategy",
      "Competitor Negative Review Gap Analysis",
      "Product Experience & Packaging Insights",
      "Listing Clarity Optimization",
      "Tailored Scope Based on ASIN Count"
    ],
    ctaText: "Inquire for Amazon Plan",
    recommendedFor: "Private label sellers, exporters, and brand owners"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    category: "Services",
    question: "What digital marketing services do you provide?",
    answer: "PakDigital Hub provides comprehensive digital marketing solutions including Search Engine Optimization (SEO), Google Business Profile & Local SEO optimization, Meta Ads (Facebook & Instagram advertising), Google Ads (Search, Call, and Lead generation campaigns), and Amazon Reviews & Ratings feedback strategy services."
  },
  {
    category: "SEO",
    question: "How long does SEO take?",
    answer: "SEO is a strategic, compounding process. Initial technical and on-page improvements typically begin reflecting in crawl data within the first 4 to 8 weeks. Noticeable organic ranking and traffic movement usually develops within 3 to 6 months, depending on keyword competition, current website domain authority, and industry difficulty. We do not make unrealistic overnight ranking claims."
  },
  {
    category: "Local SEO",
    question: "Can you manage my Google Business Profile?",
    answer: "Yes. We handle end-to-end Google Business Profile management, including initial setup or verification recovery, category refinement, service and product menu cataloging, weekly posts, review response management, service area definition, and local keyword optimization to help you earn consistent visibility on Google Maps."
  },
  {
    category: "Advertising",
    question: "Do you run Facebook and Instagram Ads?",
    answer: "Yes. We design and manage targeted Meta Ads campaigns across Facebook and Instagram. Our campaigns focus on lead generation, direct WhatsApp message inquiries, localized audience targeting, and custom retargeting built around your business goals."
  },
  {
    category: "Advertising",
    question: "Do you manage Google Ads?",
    answer: "Yes. We manage Google Search, Call-only, and Lead Generation campaigns. We conduct comprehensive keyword research, configure tight negative keyword lists to prevent budget waste, write compelling ad copy, and optimize bids continuously to maximize qualified inquiries."
  },
  {
    category: "Industries",
    question: "Do you work with real estate businesses?",
    answer: "Yes, real estate is one of our primary focus sectors. We build targeted Meta Ads and search campaigns specifically for real estate developers, builders, property agents, and project launches to generate genuine WhatsApp and phone inquiries from serious buyers and investors."
  },
  {
    category: "Marketplaces",
    question: "Do you work with Amazon sellers?",
    answer: "Yes. We work with Amazon sellers on customer feedback strategy, review monitoring, competitor sentiment analysis, and listing credibility improvement. We strictly adhere to Amazon's official guidelines—we never offer, solicit, or engage in fake, paid, or manipulated reviews."
  },
  {
    category: "Pricing",
    question: "How much does digital marketing cost?",
    answer: "Packages are tailored according to your business, target market, competition and requirements. We analyze your commercial goals, geographic targeting, and marketing complexity to build a customized proposal."
  },
  {
    category: "Pricing",
    question: "Is advertising budget included in your management fee?",
    answer: "No. The advertising budget paid directly to platforms like Meta (Facebook/Instagram) or Google is separate from our agency management fee. You retain full control over your advertising budget and pay the platforms directly or allocate it according to agreed campaign targets."
  },
  {
    category: "Onboarding",
    question: "How can I get started?",
    answer: "Getting started is straightforward. You can connect with us directly via WhatsApp at +92 315 1708943, call us, or fill out the consultation form on this website. We will discuss your current digital presence, evaluate your growth goals, and propose a structured marketing plan tailored to your business."
  }
];
