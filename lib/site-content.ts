export const siteContent = {
  brand: {
    name: "Westside Union",
    tagline: "You provide the vision. We provide the solution.",
    description: "A Technology-Driven Business Solutions Provider delivering integrated technology, design, and consulting services.",
    locations: ["Toronto", "San Francisco"],
    social: {
      instagram: "#",
      linkedin: "#",
      crunchbase: "#",
    },
    contactEmail: "info@westside-union.com", // Placeholder
  },
  nav: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Work", href: "/work" },
    { name: "Research", href: "/research" },
  ],
  home: {
    hero: {
      badge: "Technology-Driven Business Solutions (Since 2009)",
      titlePrefix: "You provide the vision. We provide the",
      rotatingWords: ["solution.", "strategy.", "growth.", "future."], // "solution" is static in tagline but dynamic here looks cool
      subheading: "A cross-functional team headquartered in Toronto and San Francisco, specializing in software, hardware, AI, and data-driven innovation.",
      primaryCta: "Book a Consultation",
      secondaryCta: "View Our Work",
      trustedByText: "Trusted by 40+ clients across Retail, Healthcare, Fashion, Finance, and Startups",
    },
    pillars: [
      {
        title: "Strategic and Market Alignment",
        description: "Conduct market research to align goals with customer needs. Build engaging digital solutions and provide growth strategies.",
        icon: "Target",
      },
      {
        title: "Financial and Operational Management",
        description: "Offer tools for efficient cash flow/expense tracking and automate processes to reduce costs and boost productivity.",
        icon: "TrendingUp",
      },
      {
        title: "People and Brand Development",
        description: "Create strong brand identities, provide tools for team alignment, and ensure seamless legal and regulatory compliance.",
        icon: "Users",
      },
    ],
    features: {
      title: "Capabilities",
      subtitle: "Innovative design, precise development, insightful research—your success, our mission.",
      items: [
        {
          title: "Product Strategy & UX",
          description: "Transforming ideas into visually stunning and functional realities.",
        },
        {
          title: "Custom Software & AI",
          description: "Turning innovative ideas into cutting-edge digital solutions.",
        },
        {
          title: "Multimedia & Visuals",
          description: "DOOH advertising, product visualization, and VFX design.",
        },
        {
          title: "Operational Consulting",
          description: "Business planning, offline marketing, and operational improvement.",
        },
      ],
    },
    stats: [
      { label: "Satisfied Clients", value: "40+" },
      { label: "Completed Projects", value: "2,500+" },
      { label: "Awards Won", value: "6+" },
      { label: "Years Experience", value: "15+" },
    ],
  },
  about: {
    summary: "Founded in 2009 as a design firm specializing in branding, UI/UX, and visual storytelling, Westside Union has evolved into a cross-functional solution provider delivering integrated technology, design, and consulting services. We focus on software, hardware, AI, and data-driven innovation, partnering with clients from concept to deployment.",
    timeline: [
      { year: "2009", title: "Founded", description: "Founded by Jacky Ho and Jerry Schuman. Time-zone advantage across Asia & North America.", image: "/images/timeline/founded.webp" },
      { year: "2013", title: "Rebranding & Expansion", description: "CTR Strategy Inc. invested; rebranded as Westside Union Inc.; expanded into VFX, software/hardware, and 3D printing.", image: "/images/timeline/expansion.webp" },
      { year: "2014", title: "R&D & SaaS", description: "Joined Google Ignite; started R&D; Project BitChat (encrypted messenger) and Project BizApp.", image: "/images/timeline/saas.webp" },
      { year: "2015", title: "Project Leap M", description: "Smart garments for real-time ECG monitoring + reporting (Bio Union).", image: "/images/timeline/leap-m.webp" },
      { year: "2016", title: "Project LEIA", description: "Interactive 3D hologram system for Crystal Galleria (Shanghai); began investing in startups.", image: "/images/timeline/leia.webp" },
      { year: "2017", title: "Global Presence", description: "MEDICA Connected Health Forum panel; Bio Union founded in San Francisco.", image: "/images/timeline/global.webp" },
      { year: "2018", title: "Blockchain Leadership", description: "Founder invited as founding member of Taiwan Blockchain SRO; helped draft regulatory direction.", image: "/images/timeline/blockchain.webp" },
      { year: "2025", title: "Westside Union Corp", description: "Founded in Toronto to expand Canada operations.", image: "/images/timeline/corp.webp" },
    ],
  },
  services: [
    {
      category: "Design",
      items: ["Branding & Graphic Design", "Commercial Interior Design", "Product Design", "UI/UX Design"],
      description: "Transforms ideas into visually stunning and functional realities.",
    },
    {
      category: "Development",
      items: ["A.I. Integration", "Software & Hardware Development", "DApp Development"],
      description: "Turns innovative ideas into cutting-edge digital and physical solutions.",
    },
    {
      category: "Multimedia",
      items: ["DOOH Advertising", "Product Visualisation", "Live Events Visuals", "VFX Design"],
      description: "Captivates audiences with immersive visual experiences.",
    },
    {
      category: "Consulting",
      items: ["Offline Marketing", "Business Planning", "Incorporate Your Business", "Operational Improvement"],
      description: "Provides insights and strategies to propel business forward.",
    },
  ],
  products: [
    {
      id: "rapid-id",
      name: "Rapid ID",
      tagline: "Transform Your AI-powered Photo ID Service Into a Revenue Machine.",
      description: "Enterprise-grade ID photo automation: background removal, precision cropping, compliance validation across 100+ international formats.",
      image: "/images/products/rapid-id.jpg",
      target: "Print shops, photo studios, courier services, travel agencies.",
      features: ["Automated Background Removal", "Precision Cropping", "Compliance Validation"],
      category: "Services & Retail",
    },
    {
      id: "ws-wallet",
      name: "WS Wallet Pass",
      tagline: "Next-gen Loyalty & Engagement",
      description: "Apple & Google Wallet compatible passes (loyalty cards, coupons, e-gift cards) with no app download required.",
      features: ["Real-time location-aware offers", "No app download needed", "High engagement rates"],
      image: "/images/products/ws-wallet.jpg",
      category: "Financial",
    },
    {
      id: "digital-billboard",
      name: "Digital Billboard Ad Solutions",
      tagline: "Smart, Adaptive Advertising",
      description: "Real-time adaptability (weather/events/traffic), hyperlocal targeting, and analytics/ROI tracking.",
      examples: "+25% restaurant foot traffic (Queen Street), +40% event attendance (Yonge–Dundas Square).",
      image: "/images/products/digital-billboard.jpg",
      features: ["Real-time ad adaptability", "Hyperlocal audience targeting", "Detailed ROI analytics"],
      category: "Utilities",
    },
  ],
  work: [
    {
      title: "Right Time Inc",
      category: "Rebranding",
      description: "Heritage Polished New. Toronto watch retailer & Swatch Group official service provider.",
    },
    {
      title: "Seven Crash Shanghai",
      category: "Interior Design",
      description: "Beyond the Ordinary. Flagship store interior design.",
    },
    {
      title: "BANDO Industrial",
      category: "Package Design",
      description: "Charm with Storm, Brand New Form.",
    },
    {
      title: "NATKIEL",
      category: "Interior Design",
      description: "New Wave, Same Chill. Flagship store design.",
    },
    {
      title: "The Village Art Gallery",
      category: "VR/Web3",
      description: "3D virtual online art gallery (2024, Unity3D, Decentraland, Ethereum).",
    },
    {
      title: "Bio Union",
      category: "Hardware/Health",
      description: "Smart garment designed to save lives (2018; raised USD $2.6M).",
    },
    {
      title: "BEECO Technology",
      category: "Cloud/Infrastructure",
      description: "Cloud-based crypto mining services (2016; Linux).",
    },
    {
      title: "Ties.Network",
      category: "Blockchain",
      description: "Ties.DB; advisor Jacky Ho; raised USD $9M; pre-valuation USD $48M.",
    },
  ],
  research: [
    {
      slug: "agentic-ai-soul-of-business",
      title: "Agentic AI and the Soul of Business",
      date: "Dec 06, 2025",
      excerpt: "Exploring how autonomous AI agents are reshaping business operations and decision-making processes.",
      image: "/images/research/agentic-ai.png",
    },
    {
      slug: "beyond-chatbots",
      title: "Beyond Chatbots: How to Build Real Customer Relationships",
      date: "Nov 19, 2025",
      excerpt: "Moving past simple conversational interfaces to create deep, value-driven customer interactions in the AI era.",
      image: "/images/research/chatbots.png",
    },
    {
      slug: "ai-overload-automation-wrong",
      title: "The AI Overload: Why Most Companies Are Getting Automation Wrong",
      date: "Feb 20, 2025",
      excerpt: "Automation shouldn't just be about speed—it should be about strategic efficiency. Here's where many go wrong.",
      image: "/images/research/ai-overload.png",
    },
    {
      slug: "ai-revolutionizing-businesses",
      title: "How AI is Revolutionizing Businesses of All Sizes",
      date: "Feb 17, 2025",
      excerpt: "From small startups to large enterprises, AI is leveling the playing field and creating new opportunities for growth.",
      image: "/images/research/ai-revolution.png",
    },
  ],
  contact: {
    title: "Start Your Transformation",
    subtitle: "Ready to scale? Let's talk about your vision.",
    fields: {
      name: "Name",
      email: "Email",
      company: "Company",
      message: "Message",
    },
    submitParams: {
      subject: "New Inquiry from Westside Union Website",
    },
  },
}
