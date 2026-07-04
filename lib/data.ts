import {
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Code2,
  Compass,
  Cpu,
  MailCheck,
  MessageSquareText,
  Rocket,
  Search,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";

export const brand = {
  name: "Asthetic Pravin",
  owner: "Pravin Bhatta",
  role: "AI Marketing Expert & Consultant",
  location: "Mahendranagar, Kanchanpur, Nepal",
  email: "pravinbhatta68@gmail.com",
  phone: "+977 9849150607",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    slug: "ai-marketing-strategy",
    title: "AI Marketing Strategy",
    icon: BrainCircuit,
    description:
      "Position your brand with an AI-enabled growth roadmap, campaign architecture, and measurable acquisition strategy.",
    benefits: ["Sharper positioning", "Faster campaign planning", "Better ROI visibility"],
    features: ["Market analysis", "AI growth roadmap", "Campaign intelligence", "KPI dashboards"],
    tools: ["ChatGPT", "Claude", "Perplexity", "GA4", "Looker Studio"],
  },
  {
    slug: "ai-consulting",
    title: "AI Consulting",
    icon: Bot,
    description:
      "Advisory for teams that want practical, secure, and revenue-focused adoption of modern AI systems.",
    benefits: ["Clear AI priorities", "Reduced manual work", "Team enablement"],
    features: ["AI opportunity audit", "Use-case mapping", "Workflow design", "Training sessions"],
    tools: ["OpenAI", "Zapier", "Notion AI", "Airtable", "Make"],
  },
  {
    slug: "ai-automation",
    title: "AI Automation",
    icon: Workflow,
    description:
      "Automate repetitive marketing, lead handling, reporting, and content workflows with reliable AI systems.",
    benefits: ["Saved hours weekly", "Consistent operations", "Lower execution cost"],
    features: ["Lead routing", "Report automation", "Content pipelines", "CRM triggers"],
    tools: ["Make", "Zapier", "HubSpot", "Google Sheets", "OpenAI API"],
  },
  {
    slug: "lead-generation",
    title: "Lead Generation",
    icon: Target,
    description:
      "Build smarter lead funnels using audience research, persuasive offers, automation, and conversion tracking.",
    benefits: ["Qualified prospects", "Cleaner funnels", "Higher conversion rate"],
    features: ["Offer design", "Landing flows", "Lead magnets", "Nurture sequences"],
    tools: ["Meta Ads", "LinkedIn", "HubSpot", "Apollo", "GA4"],
  },
  {
    slug: "seo-strategy",
    title: "SEO Strategy",
    icon: Search,
    description:
      "Create search systems powered by topical authority, technical clarity, and AI-assisted content operations.",
    benefits: ["Organic growth", "Better content velocity", "Higher intent traffic"],
    features: ["Keyword clusters", "Technical audits", "Content briefs", "Performance tracking"],
    tools: ["Ahrefs", "Semrush", "Search Console", "Screaming Frog", "Surfer"],
  },
  {
    slug: "content-marketing",
    title: "Content Marketing",
    icon: MessageSquareText,
    description:
      "Turn expertise into high-performing content engines for blogs, social channels, newsletters, and campaigns.",
    benefits: ["Consistent publishing", "Stronger authority", "Reusable assets"],
    features: ["Content strategy", "Editorial calendars", "AI briefs", "Repurposing systems"],
    tools: ["Notion", "ChatGPT", "Canva", "Buffer", "Google Docs"],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    icon: Share2,
    description:
      "Create AI-assisted social systems that improve reach, consistency, and audience trust across platforms.",
    benefits: ["Improved engagement", "Faster production", "Brand consistency"],
    features: ["Platform strategy", "Post systems", "Creative testing", "Analytics reviews"],
    tools: ["Meta Business Suite", "LinkedIn", "Buffer", "Canva", "Metricool"],
  },
  {
    slug: "email-marketing-automation",
    title: "Email Marketing Automation",
    icon: MailCheck,
    description:
      "Design lifecycle email journeys that nurture leads, educate buyers, and increase repeat engagement.",
    benefits: ["Automated nurturing", "Better retention", "Higher revenue per lead"],
    features: ["Welcome flows", "Segmentation", "Copy systems", "A/B testing"],
    tools: ["Mailchimp", "ConvertKit", "Klaviyo", "HubSpot", "ActiveCampaign"],
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Engineering",
    icon: Code2,
    description:
      "Build reusable prompt systems for marketing research, content, reporting, customer support, and strategy.",
    benefits: ["Reliable outputs", "Reusable playbooks", "Better team adoption"],
    features: ["Prompt libraries", "Role workflows", "Quality checks", "Team documentation"],
    tools: ["ChatGPT", "Claude", "Gemini", "Perplexity", "Custom GPTs"],
  },
  {
    slug: "business-ai-integration",
    title: "Business AI Integration",
    icon: Cpu,
    description:
      "Integrate AI into business operations with systems that support marketing, sales, reporting, and service.",
    benefits: ["Connected systems", "Scalable operations", "Better decision speed"],
    features: ["System audit", "Integration plan", "Automation builds", "Team handover"],
    tools: ["OpenAI API", "CRMs", "Airtable", "Make", "Vercel"],
  },
];

export const features = [
  { title: "AI Expertise", icon: Sparkles, text: "Practical AI systems designed for real marketing outcomes." },
  { title: "Personalized Strategies", icon: Compass, text: "Every plan is tuned to your market, offer, and growth stage." },
  { title: "Data-Driven Decisions", icon: BarChart3, text: "Campaigns are guided by signals, not guesswork." },
  { title: "Business Growth", icon: TrendingUp, text: "Strategy, automation, and execution aligned around revenue." },
  { title: "Continuous Support", icon: CheckCircle2, text: "Clear communication through launch, learning, and optimization." },
  { title: "Measurable Results", icon: Rocket, text: "Dashboards and reporting keep progress visible." },
];

export const processSteps = [
  { step: "01", title: "Discovery", text: "Audit goals, market, offers, workflows, and current marketing performance." },
  { step: "02", title: "Strategy", text: "Design an AI-enabled roadmap with priority campaigns and automations." },
  { step: "03", title: "Implementation", text: "Build content systems, funnels, automations, and measurement flows." },
  { step: "04", title: "Optimization", text: "Use performance data to improve conversion, speed, and scale." },
];

export const skills = [
  ["AI Marketing", 96],
  ["SEO", 91],
  ["Automation", 94],
  ["Prompt Engineering", 95],
  ["Analytics", 88],
  ["Content Strategy", 92],
  ["Digital Marketing", 93],
] as const;

export const blogPosts = [
  {
    slug: "ai-marketing-roadmap-for-growing-businesses",
    title: "How to Build an AI Marketing Roadmap for Growing Businesses",
    category: "AI Marketing",
    tags: ["Strategy", "Automation", "Growth"],
    image: "/images/blog-ai-roadmap.png",
    excerpt:
      "A practical way to decide where AI belongs in your marketing stack, from research to reporting.",
    date: "2026-05-18",
    popular: true,
  },
  {
    slug: "chatgpt-prompts-for-content-strategy",
    title: "ChatGPT Prompts That Improve Content Strategy",
    category: "Prompt Engineering",
    tags: ["ChatGPT", "Content", "Prompts"],
    image: "/images/blog-prompts.png",
    excerpt:
      "Use reusable prompt systems to research audiences, create briefs, and produce stronger campaign ideas.",
    date: "2026-04-29",
    popular: true,
  },
  {
    slug: "marketing-automation-that-saves-time",
    title: "Marketing Automation Workflows That Save Time Every Week",
    category: "Marketing Automation",
    tags: ["Automation", "CRM", "Workflows"],
    image: "/images/blog-automation.png",
    excerpt:
      "High-leverage automations for lead capture, follow-up, reporting, and content distribution.",
    date: "2026-04-10",
    popular: false,
  },
  {
    slug: "seo-in-the-age-of-ai-search",
    title: "SEO in the Age of AI Search",
    category: "SEO",
    tags: ["SEO", "AI Tools", "Search"],
    image: "/images/blog-seo.png",
    excerpt:
      "How brands can build topical authority while adapting to AI-assisted discovery and search behavior.",
    date: "2026-03-22",
    popular: true,
  },
  {
    slug: "digital-transformation-for-local-businesses",
    title: "Digital Transformation for Local Businesses",
    category: "Digital Transformation",
    tags: ["AI Tools", "Business", "Nepal"],
    image: "/images/blog-transformation.png",
    excerpt:
      "A simple modernization path for businesses that want better marketing, operations, and customer experience.",
    date: "2026-03-02",
    popular: false,
  },
  {
    slug: "choosing-the-right-ai-tools",
    title: "Choosing the Right AI Tools for Your Marketing Stack",
    category: "AI Tools",
    tags: ["Tools", "Stack", "Consulting"],
    image: "/images/blog-tools.png",
    excerpt:
      "A decision framework for selecting AI tools that fit your workflow instead of adding unnecessary complexity.",
    date: "2026-02-16",
    popular: false,
  },
];

export const testimonials = [
  {
    quote:
      "Pravin helped us turn scattered marketing ideas into a clear AI-assisted growth system. The execution felt premium and practical.",
    name: "Aarav Sharma",
    role: "Founder, SaaS Startup",
  },
  {
    quote:
      "Our team now publishes faster, follows up with leads automatically, and finally understands what is working.",
    name: "Mira KC",
    role: "Operations Lead",
  },
  {
    quote:
      "The AI strategy brought clarity to our campaigns and gave us measurable improvements within the first month.",
    name: "Nabin Joshi",
    role: "Marketing Director",
  },
];

export const faqs = [
  {
    question: "Do you work with businesses outside Nepal?",
    answer:
      "Yes. Consulting, automation planning, and marketing strategy can be delivered remotely for clients anywhere.",
  },
  {
    question: "Can you help if my business is new to AI?",
    answer:
      "Absolutely. The process starts with practical use cases and clear workflows so your team can adopt AI confidently.",
  },
  {
    question: "What happens after a consultation?",
    answer:
      "You receive recommended priorities, a practical roadmap, and the next steps for strategy, automation, or implementation.",
  },
];

export const accentOptions = ["purple", "cyan", "blue", "emerald"] as const;
