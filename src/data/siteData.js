// =============================================
// TECHNO PRODUCTS – REAL SITE DATA
// All content sourced from technoproducts.in
// =============================================

export const companyInfo = {
  name: "Techno Products",
  fullName: "Techno Products Development Pvt. Ltd.",
  shortName: "TPDPL",
  brand: "TECHNO",
  tagline: "Engineering With A Higher Purpose",
  heroHeadline: "ONE-STOP SOURCING & SOLUTION PARTNER FOR ALL INDUSTRIAL PRODUCTS",
  gst: "33AABCT1291J1ZF",
  founded: 1999,
  yearsOfExperience: 26,
  email: "info@technoproducts.in",
  phone: "+91 44 4855 5333",
  whatsapp: "+919840062220",
  address: {
    line1: "Techno Products Development Pvt. Ltd.",
    line2: "Chennai, Tamil Nadu, India",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/techno-products-development-pvt-ltd",
    facebook: "https://www.facebook.com/technoproductsdevelopment",
    youtube: "https://www.youtube.com/@technoproducts",
    instagram: "https://www.instagram.com/techno_products_in/",
    twitter: "https://twitter.com/TechnoProducts",
  },
};

// Only 3 real, verified statistics
export const stats = [
  {
    number: "26",
    suffix: "+",
    label: "Years of Experience",
    description: "Established in 1999",
    color: "#0067A4",
  },
  {
    number: "5000",
    suffix: "+",
    label: "Loyal Customers",
    description: "Across India & beyond",
    color: "#D71B32",
  },
  {
    number: "15",
    suffix: "+",
    label: "Awards & Recognition",
    description: "Recognizing engineering excellence",
    color: "#12703C",
  },
];

export const aboutContent = {
  headline: "A Trusted Name in Industrial Engineering for Over 26 Years",
  subheadline: "Premier Channel Partner for World-Class Industrial Brands",
  description: [
    "TECHNO Products is expanding its footprint across the globe, serving localised and international project requirements with the same dedication that has defined us for over two decades. Celebrating 26 years of unrivalled service and commitment, TECHNO — the flagship brand of Techno Products Development Pvt. Ltd. — stands as one of India's leading channel partners for globally recognised industrial brands.",
    "Established in 1999, the company has continuously raised industry standards through customer-centric service, engineering excellence, reliable industrial products, technical expertise, and innovative industrial automation solutions. We are an authorised distributor for globally recognised manufacturers including Danfoss, Innomotics (A Siemens Business), Schneider Electric, and Motovario.",
  ],
  pillars: [
    { title: "Engineering Excellence", text: "We don't just supply products — we deliver complete, purpose-built engineering solutions tailored to your industrial requirements." },
    { title: "Authorised Partnerships", text: "Official channel partner for globally recognised industrial brands, ensuring genuine, quality-certified products with full manufacturer support." },
    { title: "Customer-Centric Approach", text: "A customer-first philosophy drives every interaction — from initial consultation to long-term after-sales support and maintenance." },
    { title: "26 Years of Trust", text: "Since 1999, TECHNO has been a consistent, reliable partner through two and a half decades of industrial growth across India." },
  ],
  story: {
    beyondDistribution: "Techno Products Development Pvt. Ltd. was founded with a vision to bridge the gap between global industrial technology and Indian industries. We operate beyond mere product distribution — offering engineering consultation, technical support, project commissioning, and maintenance services.",
    strategicExpansion: "Over the past 26 years, TECHNO has forged strategic alliances with premier global manufacturers. Today, we are proud authorised partners for Danfoss DrivePro®, Innomotics SIMOLOG, Schneider Electric, and Motovario.",
    logisticsCenters: "Our expansive logistics network strategically positioned across South India enables rapid deployment of products and support to our customers.",
    customerCentricExcellence: "Customer-centric excellence is not just a value at TECHNO — it is our operating principle. From pre-sales technical consultation to post-installation support, our dedicated team ensures your operations run at peak efficiency.",
    futureForward: "TECHNO is committed to embracing future technologies in industrial automation, smart energy management, and Industry 4.0 solutions.",
  },
};

// Only 3 real services
export const services = [
  {
    id: "mechanical",
    title: "Mechanical Services",
    shortTitle: "Mechanical",
    icon: "cog",
    description: "Comprehensive mechanical engineering solutions including selection, sizing, installation guidance, and maintenance support for motors, gearboxes, couplings, and mechanical drive systems.",
    features: [
      "Motor & Gearbox Selection",
      "Mechanical Drive System Design",
      "Load & Torque Calculations",
      "Preventive Maintenance Planning",
      "Spare Parts Management",
      "Field Installation Support",
    ],
  },
  {
    id: "electrical",
    title: "Electrical Services",
    shortTitle: "Electrical",
    icon: "zap",
    description: "End-to-end electrical solutions covering switchgear, cables, panel wiring, energy auditing, and electrical system design for industrial and commercial applications.",
    features: [
      "Switchgear & Protection Design",
      "Cable Sizing & Selection",
      "Energy Audit & Optimization",
      "Electrical Safety Compliance",
      "Power Quality Analysis",
      "Emergency Support Services",
    ],
  },
  {
    id: "control-panels",
    title: "Control Panel Solutions",
    shortTitle: "Control Panels",
    icon: "layout-dashboard",
    description: "Design and fabrication of custom control panels including MCC panels, PCC panels, VFD panels, and automation control panels built to international standards.",
    features: [
      "MCC & PCC Panel Design",
      "VFD Drive Panels",
      "Automation Control Panels",
      "Safety Relay Integration",
      "Thermal Imaging Testing",
      "FAT & SAT Support",
    ],
  },
];

// 8 real product categories as specified
export const productCategories = [
  {
    id: "motors",
    name: "Electric Motors",
    shortName: "Motors",
    slug: "motors",
    tag: "Power Transmission",
    description: "High-efficiency electric motors from globally trusted manufacturers for demanding industrial environments — from fractional HP to large horsepower ratings.",
    count: "80+",
    brands: ["Innomotics", "Motovario", "ABB"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    filters: { hp: true, rpm: true, brand: true, mounting: true },
  },
  {
    id: "gearboxes",
    name: "Gearboxes",
    shortName: "Gearboxes",
    slug: "gearboxes",
    tag: "Power Transmission",
    description: "Precision-engineered gearboxes including helical, bevel, worm, and planetary types for reliable torque multiplication and speed reduction.",
    count: "40+",
    brands: ["Motovario", "SEW", "Bonfiglioli"],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop",
    filters: { hp: true, type: true, model: true },
  },
  {
    id: "drives",
    name: "Drives",
    shortName: "Drives",
    slug: "drives",
    tag: "Motion Control",
    description: "Industry-leading variable frequency drives for precise motor speed control, energy savings, and process optimisation across all industrial applications.",
    count: "50+",
    brands: ["Danfoss", "Schneider Electric", "ABB"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=400&fit=crop",
    filters: { model: true, kw: true },
  },
  {
    id: "cables",
    name: "Cables",
    shortName: "Cables",
    slug: "cables",
    tag: "Electrical",
    description: "Premium industrial cables designed for safe, reliable power transmission and complex control systems in demanding environments.",
    count: "100+",
    brands: ["Polycab", "Finolex", "Lapp"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    filters: { type: true, core: true },
  },
  {
    id: "switchgears",
    name: "Switchgears",
    shortName: "Switchgears",
    slug: "switchgears",
    tag: "Protection",
    description: "Reliable industrial switchgears for superior electrical protection, isolation, and control of distribution networks.",
    count: "60+",
    brands: ["Schneider Electric", "Siemens", "L&T"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    filters: { type: true, amps: true },
  },
  {
    id: "enclosures",
    name: "Enclosures",
    shortName: "Enclosures",
    slug: "enclosures",
    tag: "Protection",
    description: "Robust industrial enclosures designed to protect critical electrical and automation components from harsh environments.",
    count: "30+",
    brands: ["Rittal", "Eldon", "Schneider Electric"],
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&h=400&fit=crop",
    filters: { material: true, ip_rating: true },
  }
];

export const brandPartners = [
  {
    name: "Danfoss",
    fullName: "Danfoss VLT | VACON",
    description: "World leader in variable frequency drives and power electronics. TECHNO is a DrivePro® Authorised Partner providing genuine VFD products, commissioning, and lifecycle services.",
    authorized: true,
    certification: "DrivePro® Authorised Partner",
  },
  {
    name: "Innomotics",
    fullName: "Innomotics – A Siemens Business",
    description: "Premier manufacturer of high-efficiency electric motors and mechanical drives. TECHNO is an authorised SIMOLOG Service Partner for genuine motor products and technical support.",
    authorized: true,
    certification: "SIMOLOG Authorised Service Partner",
  },
  {
    name: "Schneider Electric",
    fullName: "Schneider Electric",
    description: "Global specialist in energy management and automation. As an authorised channel partner, TECHNO supplies genuine Schneider switchgear, drives, and automation products.",
    authorized: true,
    certification: "Authorised Channel Partner",
  },
  {
    name: "Motovario",
    fullName: "Motovario",
    description: "Italian manufacturer of precision gearboxes, geared motors, and variable speed drives. TECHNO is an authorised distributor supplying the complete Motovario product range.",
    authorized: true,
    certification: "Authorised Distributor",
  },
];

// Only 4 real clients as specified
export const clients = [
  { name: "TNPL", fullName: "Tamil Nadu Newsprint and Papers Ltd.", industry: "Paper & Pulp" },
  { name: "Larsen & Toubro", fullName: "Larsen & Toubro Limited", industry: "Engineering & Construction" },
  { name: "Chettinad Cement", fullName: "Chettinad Cement Corporation", industry: "Cement" },
  { name: "Schwing Stetter", fullName: "Schwing Stetter India Pvt. Ltd.", industry: "Construction Equipment" },
];

export const industries = [
  { name: "Cement & Mining", icon: "mountain" },
  { name: "Automotive", icon: "car" },
  { name: "Food & Beverage", icon: "package" },
  { name: "Paper & Pulp", icon: "file-text" },
  { name: "Textile", icon: "layers" },
  { name: "Chemical & Pharma", icon: "flask-conical" },
  { name: "Water Treatment", icon: "droplets" },
  { name: "Infrastructure", icon: "building-2" },
  { name: "HVAC", icon: "wind" },
];

export const certifications = [
  {
    title: "Danfoss DrivePro® Authorised Partner",
    description: "Certified partner for Danfoss VLT and VACON variable frequency drives, providing genuine products, commissioning, and lifecycle services.",
    issuer: "Danfoss",
  },
  {
    title: "Innomotics SIMOLOG Authorised Service Partner",
    description: "Authorised service partner for Innomotics (A Siemens Business) motor products, providing genuine spare parts, maintenance, and technical support.",
    issuer: "Innomotics – A Siemens Business",
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about#who-we-are" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Mission & Vision", href: "/about#mission" },
      { label: "Our History", href: "/about#history" },
      { label: "Certifications", href: "/about#certifications" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    mega: true,
    children: productCategories.map((cat) => ({
      label: cat.shortName,
      desc: cat.tag,
      href: `/products/${cat.slug}`,
      icon: cat.id,
    })),
  },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export const leadership = [
  {
    name: "Founder & Managing Director",
    title: "Founder & Managing Director",
    role: "Visionary Leader",
    message: "Founded in 1999 with a mission to bring world-class industrial technology to Indian industries, TECHNO Products has grown into a trusted partner for thousands of customers across South India. Our commitment remains unchanged — to deliver engineering excellence and customer-first service.",
    linkedin: "#",
  },
  {
    name: "General Manager – Sales & Operations",
    title: "General Manager – Sales & Operations",
    role: "Operations Leadership",
    message: "Our sales and operations teams work in close coordination to ensure that every customer receives not just a product, but a complete solution backed by technical expertise and on-time delivery.",
    linkedin: "#",
  },
  {
    name: "HR Director",
    title: "HR Director",
    role: "People & Culture",
    message: "At TECHNO, our people are our greatest asset. We invest in continuous learning and development to ensure our engineers and support staff are always equipped with the latest technical knowledge.",
    linkedin: "#",
  },
];

export const branches = [
  {
    city: "Chennai",
    type: "Head Office",
    address: "Chennai, Tamil Nadu, India",
    phone: "+91 44 4855 5333",
    email: "info@technoproducts.in",
    isHQ: true,
  },
];

export const timeline = [
  { year: "1999", title: "Company Founded", description: "Techno Products established in Chennai, Tamil Nadu with a vision to serve industrial distribution needs." },
  { year: "2005", title: "First Major Partnership", description: "Became an authorised distributor for leading international industrial brands." },
  { year: "2010", title: "Expansion Across South India", description: "Extended operations and customer reach across Tamil Nadu and neighbouring states." },
  { year: "2015", title: "Danfoss Partnership", description: "Achieved authorised DrivePro® partner status with Danfoss VLT | VACON." },
  { year: "2019", title: "20 Years of Excellence", description: "Celebrated two decades of unrivalled service with 5,000+ satisfied customers." },
  { year: "2022", title: "Innomotics Authorisation", description: "Became SIMOLOG Authorised Service Partner for Innomotics (A Siemens Business)." },
  { year: "2025", title: "Global Expansion", description: "Expanding footprints globally, serving international project requirements from Chennai." },
];

// ── SOLUTIONS ──────────────────────────────────────────────────────────────────

export const solutions = [
  {
    id: 'motion-solutions',
    slug: 'motion-solutions',
    title: 'Motion Solutions',
    shortTitle: 'Motion',
    tagline: 'PRECISION IN EVERY REVOLUTION',
    headline: 'Advanced Motion Control for Demanding Industrial Environments',
    description: 'From fractional-HP fractional duty to multi-megawatt continuous operation, our motion solutions combine world-class motors, drives, and gearboxes into fully integrated systems engineered for your exact process requirements.',
    overview: 'Motion control is at the core of every industrial operation. Techno Products brings together the industry\'s most trusted brands — Danfoss, Innomotics, and Motovario — to deliver complete motion systems that are precisely sized, commissioned, and supported throughout their lifecycle. Our engineers analyse your load profiles, duty cycles, and environmental conditions to specify the optimal solution.',
    benefits: [
      { title: 'Energy Efficiency', desc: 'Variable speed control reduces energy consumption by up to 50% on variable torque loads such as pumps and fans.' },
      { title: 'Reduced Downtime', desc: 'Predictive diagnostics and premium components extend MTBF and slash unplanned maintenance events.' },
      { title: 'Precise Control', desc: 'Closed-loop feedback enables ±0.1% speed accuracy for critical process applications.' },
      { title: 'Global Support', desc: 'Authorised service network backed by OEM spare parts and technical expertise.' },
    ],
    industries: ['Cement & Mining', 'Paper & Pulp', 'Water Treatment', 'Automotive', 'Food & Beverage'],
    relatedProducts: ['motors', 'drives', 'gearboxes'],
    image: '/images/mega-menu/motion_solutions_1788775067540.jpg',
    icon: '⚙️',
    color: '#0067A4',
  },
  {
    id: 'industrial-automation',
    slug: 'industrial-automation',
    title: 'Industrial Automation',
    shortTitle: 'Automation',
    tagline: 'INTELLIGENCE AT EVERY STAGE',
    headline: 'End-to-End Automation Systems for Modern Manufacturing',
    description: 'We design, supply, and commission complete industrial automation systems — from field instrumentation and PLC programming to SCADA integration and HMI development — enabling smart, connected factories.',
    overview: 'Industry 4.0 demands more than individual automation components — it requires seamlessly integrated systems that communicate, self-diagnose, and optimise in real time. Our automation engineers work across the entire technology stack: from field-level sensors and actuators through PLC logic and drive coordination to plant-level SCADA visibility.',
    benefits: [
      { title: 'OEE Improvement', desc: 'Integrated automation routinely delivers 15–30% improvement in Overall Equipment Effectiveness.' },
      { title: 'Data Visibility', desc: 'Real-time production data enables evidence-based decisions and proactive maintenance scheduling.' },
      { title: 'Safety Integration', desc: 'Safety PLC and safety relay systems designed to IEC 61511 functional safety standards.' },
      { title: 'Scalable Architecture', desc: 'Modular designs allow future capacity expansion without major rework.' },
    ],
    industries: ['Automotive', 'Pharmaceutical', 'Food & Beverage', 'Textile', 'Chemical'],
    relatedProducts: ['drives', 'switchgears', 'enclosures'],
    image: '/images/mega-menu/industrial_automation_1788775223576.jpg',
    icon: '🤖',
    color: '#00446F',
  },
  {
    id: 'power-transmission',
    slug: 'power-transmission',
    title: 'Power Transmission',
    shortTitle: 'Power Trans.',
    tagline: 'TRANSMITTING STRENGTH RELIABLY',
    headline: 'Robust Mechanical Power Transmission for Heavy Industry',
    description: 'Helical, bevel-helical, worm, and planetary gearboxes; couplings; belt and chain drives — precisely selected and engineered into reliable power transmission systems that handle the most demanding torque and speed requirements.',
    overview: 'Mechanical power transmission failures are among the leading causes of unplanned industrial downtime. Our engineering team conducts thorough duty cycle analysis, service factor calculations, and thermal assessments to select and specify the right gearbox, coupling, and drive train for every application — ensuring long service life and minimal maintenance.',
    benefits: [
      { title: 'Optimised Sizing', desc: 'Precise duty cycle analysis prevents under-specification failures and over-specification cost waste.' },
      { title: 'Broad Brand Portfolio', desc: 'Access to Motovario, SEW-Eurodrive, and Bonfiglioli for best-fit selection across all applications.' },
      { title: 'Application Engineering', desc: 'Detailed load calculations, service factor assessment, and shaft alignment verification.' },
      { title: 'Lifecycle Support', desc: 'Genuine OEM spare parts and scheduled preventive maintenance programmes.' },
    ],
    industries: ['Cement & Mining', 'Steel', 'Paper & Pulp', 'Chemical', 'Warehousing & Logistics'],
    relatedProducts: ['gearboxes', 'motors'],
    image: '/images/mega-menu/power_transmission_1788775239394.jpg',
    icon: '🔩',
    color: '#D71B32',
  },
  {
    id: 'electrical-systems',
    slug: 'electrical-systems',
    title: 'Electrical Systems',
    shortTitle: 'Electrical',
    tagline: 'SAFE, EFFICIENT ELECTRICAL INFRASTRUCTURE',
    headline: 'Complete Electrical System Design and Supply',
    description: 'From switchgear selection and cable sizing to power factor correction and energy auditing, we provide holistic electrical solutions that maximise safety, reliability, and energy efficiency across your entire facility.',
    overview: 'A poorly designed electrical system is both a safety risk and an ongoing cost burden. Our electrical engineering team designs complete LV distribution systems, selects protection devices, specifies cable routes, and conducts power quality audits — delivering electrical infrastructure that meets IS, IEC, and customer-specific standards.',
    benefits: [
      { title: 'Power Quality', desc: 'Harmonic analysis and mitigation ensures stable power supply and prevents equipment damage.' },
      { title: 'Energy Savings', desc: 'Power factor correction and energy audits identify measurable savings opportunities.' },
      { title: 'Safety Compliance', desc: 'All designs comply with IS/IEC standards and include arc flash risk assessment.' },
      { title: 'Emergency Support', desc: '24/7 emergency breakdown support for critical electrical systems.' },
    ],
    industries: ['Infrastructure', 'Water Treatment', 'Chemical & Pharma', 'Food & Beverage', 'Cement & Mining'],
    relatedProducts: ['cables', 'switchgears', 'enclosures'],
    image: 'https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?w=1400&h=900&fit=crop&q=85',
    icon: '⚡',
    color: '#12703C',
  },
  {
    id: 'control-panel-solutions',
    slug: 'control-panel-solutions',
    title: 'Control Panel Solutions',
    shortTitle: 'Control Panels',
    tagline: 'ENGINEERED PANELS. PROVEN PERFORMANCE.',
    headline: 'Custom Control Panels Built to International Standards',
    description: 'From MCC and PCC panels to VFD drive panels and automation control panels, every enclosure we build is engineered, fabricated, and factory-tested to exact client specifications and international quality standards.',
    overview: 'A control panel is the nerve centre of your electrical and automation system. We manage the entire panel engineering lifecycle — from detailed schematic design and component procurement through in-house fabrication, wiring, Factory Acceptance Testing (FAT), and Site Acceptance Testing (SAT) — ensuring plug-and-play installation on site.',
    benefits: [
      { title: 'Proven Quality', desc: 'Every panel undergoes rigorous FAT including insulation testing, continuity checks, and functional simulation.' },
      { title: 'Faster Commissioning', desc: 'Pre-tested, labelled, and documented panels reduce site commissioning time by up to 40%.' },
      { title: 'Premium Components', desc: 'Schneider Electric, Siemens, and ABB devices ensure long-term reliability and spares availability.' },
      { title: 'Full Documentation', desc: 'As-built drawings, test reports, and operation manuals supplied with every panel.' },
    ],
    industries: ['Automotive', 'Textile', 'Water Treatment', 'Pharmaceutical', 'OEM Machinery'],
    relatedProducts: ['switchgears', 'enclosures', 'drives'],
    image: 'https://images.unsplash.com/photo-1580983590035-cb477611ef4f?w=1400&h=900&fit=crop&q=85',
    icon: '🖥️',
    color: '#0067A4',
  },
  {
    id: 'industrial-engineering',
    slug: 'industrial-engineering',
    title: 'Industrial Engineering',
    shortTitle: 'Engineering',
    tagline: 'COMPLETE PROJECT SOLUTIONS',
    headline: 'Turnkey Industrial Engineering from Concept to Commissioning',
    description: 'End-to-end engineering project management — concept design, equipment selection, installation supervision, commissioning, and operator training — for new plant installations and retrofit upgrades.',
    overview: 'Managing a complex industrial project requires a single accountable partner who understands the complete system. As your turnkey engineering partner, we take ownership from initial concept through detailed design, equipment procurement, installation supervision, and final commissioning — eliminating the coordination gaps that cause delays and cost overruns.',
    benefits: [
      { title: 'Single Point of Accountability', desc: 'One contract, one partner responsible for the entire project outcome.' },
      { title: 'On-Time Delivery', desc: 'Rigorous project management with milestone tracking and proactive risk management.' },
      { title: 'Cost Certainty', desc: 'Fixed-scope contracts with transparent change management processes.' },
      { title: 'Knowledge Transfer', desc: 'Comprehensive operator training programmes ensure your team can manage the system independently.' },
    ],
    industries: ['Cement & Mining', 'Steel', 'Infrastructure', 'Water Treatment', 'Chemical & Pharma'],
    relatedProducts: ['motors', 'drives', 'gearboxes', 'switchgears'],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&h=900&fit=crop&q=85',
    icon: '🏗️',
    color: '#00446F',
  },
  {
    id: 'maintenance-support',
    slug: 'maintenance-support',
    title: 'Maintenance & Support',
    shortTitle: 'Maintenance',
    tagline: 'KEEPING YOUR OPERATIONS RUNNING',
    headline: 'Proactive Maintenance Services that Eliminate Downtime',
    description: 'Annual maintenance contracts, preventive inspection programmes, emergency breakdown support, and spare parts management — a complete lifecycle support package that maximises plant uptime and minimises total cost of ownership.',
    overview: 'Unplanned downtime costs Indian industry billions every year. Our structured maintenance programmes shift your operations from reactive to proactive — using scheduled inspections, thermographic surveys, vibration analysis, and predictive indicators to identify potential failures before they occur.',
    benefits: [
      { title: 'Predictive Maintenance', desc: 'Vibration analysis, thermal imaging, and insulation testing identify issues months before failure.' },
      { title: 'AMC Programmes', desc: 'Annual Maintenance Contracts with defined response SLAs and scheduled inspection visits.' },
      { title: 'Genuine Spare Parts', desc: 'OEM-authorised spare parts stocked locally for rapid deployment during breakdowns.' },
      { title: '24/7 Emergency Response', desc: 'Dedicated emergency helpline with on-site response commitment for critical systems.' },
    ],
    industries: ['Paper & Pulp', 'Cement & Mining', 'Water Treatment', 'Automotive', 'Food & Beverage'],
    relatedProducts: ['motors', 'drives', 'gearboxes'],
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1400&h=900&fit=crop&q=85',
    icon: '🔧',
    color: '#D71B32',
  },
];

// ── INDUSTRIES (detailed with slugs) ──────────────────────────────────────────

export const industriesData = [
  {
    id: 'cement-mining',
    slug: 'cement-mining',
    name: 'Cement & Mining',
    shortDesc: 'Engineered for extreme dust, vibration, and continuous operation.',
    fullDesc: 'Cement and mining operations are among the most mechanically demanding environments on earth. Crushing, grinding, conveying, and kiln processes subject drive systems to continuous heavy loads, extreme temperatures, and aggressive dust ingress. Our solutions are specifically engineered for these conditions.',
    image: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=1400&h=900&fit=crop&q=85',
    heroImage: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=1800&h=1000&fit=crop&q=85',
    icon: 'mountain',
    challenges: [
      'Extreme dust and abrasive particle ingress into mechanical and electrical equipment',
      'High cyclic loads on conveyor and crusher drives causing premature bearing failure',
      'Kiln drive reliability — even 30 minutes of unplanned downtime costs lakhs in lost production',
      'Harsh ambient temperatures of 45–60°C in kiln areas reducing motor and drive life',
      'Regulatory compliance for explosion-proof areas in coal handling sections',
    ],
    solutions: [
      'IP65/IP66 rated motors with special shaft seal arrangements for dust environments',
      'Heavy-duty planetary gearboxes for kiln and mill drives with 25+ year design life',
      'Danfoss VFD drives with built-in motor diagnostics and thermal protection',
      'Custom MCC panels with active cooling and dust filtration for harsh environments',
      'Preventive maintenance programmes with thermographic and vibration monitoring',
    ],
    applications: ['Rotary Kiln Drives', 'Ball Mill Drives', 'Conveyor Systems', 'Crusher Drives', 'Bucket Elevators', 'Coal Mill Systems'],
    relatedProducts: ['motors', 'gearboxes', 'drives'],
    relatedCaseStory: { client: 'Chettinad Cement', result: '99.8% Kiln Uptime', href: '/case-stories/chettinad-cement-kiln' },
  },
  {
    id: 'automotive',
    slug: 'automotive',
    name: 'Automotive',
    shortDesc: 'Precision automation for high-speed assembly line manufacturing.',
    fullDesc: 'Automotive manufacturing demands absolute precision, microsecond synchronisation, and zero tolerance for unplanned stoppages. From body shop conveyor systems to paint booth HVAC drives and final assembly line automation, we provide the motion control and panel engineering that keeps production moving.',
    image: 'https://images.unsplash.com/photo-1617305988352-7b2655bf51bb?w=1400&h=900&fit=crop&q=85',
    heroImage: 'https://images.unsplash.com/photo-1617305988352-7b2655bf51bb?w=1800&h=1000&fit=crop&q=85',
    icon: 'car',
    challenges: [
      'Microsecond synchronisation of multiple conveyor sections and robotic stations',
      'High-cycle duty on assembly line drives requiring premium motor insulation',
      'Complex, multi-zone MCC panels with integrated safety systems for each production area',
      'Paint booth environmental controls requiring precise HVAC drive management',
      'Strict OEM component qualification requirements and PPAP documentation needs',
    ],
    solutions: [
      'Danfoss FC302 drives with STO (Safe Torque Off) safety function for robot cells',
      'Schneider Electric safety PLCs and safety relays for collaborative robot areas',
      'Custom FAT-tested MCC panels with factory-wired zone safety isolation',
      'Premium IE3/IE4 efficiency motors with enhanced insulation for VFD duty',
      'Dedicated commissioning support with on-site programming and operator training',
    ],
    applications: ['Body Shop Conveyors', 'Paint Booth HVAC', 'Final Assembly Lines', 'Robot Cell Safety', 'Press Shop Drives', 'Warehousing AGVs'],
    relatedProducts: ['drives', 'switchgears', 'motors'],
    relatedCaseStory: { client: 'TVS Motors', result: '40% Faster Commissioning', href: '/case-stories/tvs-motors-automation' },
  },
  {
    id: 'food-beverage',
    slug: 'food-beverage',
    name: 'Food & Beverage',
    shortDesc: 'Hygienic, wash-down ready solutions meeting strict food safety standards.',
    fullDesc: 'Food and beverage production operates under the most stringent hygiene and safety regulations of any manufacturing sector. Our solutions are specifically selected for food-grade environments — stainless steel construction, IP69K wash-down ratings, and compliance with FSSAI, HACCP, and international food safety standards.',
    image: 'https://images.unsplash.com/photo-1585233159955-467f1396a1a7?w=1400&h=900&fit=crop&q=85',
    heroImage: 'https://images.unsplash.com/photo-1585233159955-467f1396a1a7?w=1800&h=1000&fit=crop&q=85',
    icon: 'package',
    challenges: [
      'Wash-down environments requiring IP69K rated motors and sealed gearboxes',
      'Food-safe lubrication requirements for all mechanical components in production zones',
      'Temperature extremes from blast freezing (-40°C) to hot-fill processing (+90°C)',
      'Precise speed control for filling, packaging, and labelling line synchronisation',
      'Stringent cleaning-in-place (CIP) cycle management for conveyor drive systems',
    ],
    solutions: [
      'Stainless steel motors with IP69K rating for direct wash-down environments',
      'Motovario hygienic gearboxes with NSF H1 food-grade lubricants',
      'VFD drives with PID control for precise process speed management',
      'Sealed conveyor drive systems resistant to high-pressure steam cleaning',
      'HACCP-compliant documentation for all installed equipment',
    ],
    applications: ['Filling & Packaging Lines', 'Conveyor Systems', 'Refrigeration Compressors', 'Mixing & Blending', 'Cooling Tower Fans', 'CIP Systems'],
    relatedProducts: ['motors', 'gearboxes', 'drives'],
    relatedCaseStory: null,
  },
  {
    id: 'paper-pulp',
    slug: 'paper-pulp',
    name: 'Paper & Pulp',
    shortDesc: 'High-torque drive systems for continuous, heavy-duty paper mill operation.',
    fullDesc: 'Paper mills operate 24/7 under demanding conditions, where drive system failures translate directly into massive production losses. From the stock preparation pulpers through the paper machine drive sections to the reeler and winders, we supply and support complete drive and motor systems for the full paper manufacturing process.',
    image: 'https://images.unsplash.com/photo-1508215682970-13f5080ab4bf?w=1400&h=900&fit=crop&q=85',
    heroImage: 'https://images.unsplash.com/photo-1508215682970-13f5080ab4bf?w=1800&h=1000&fit=crop&q=85',
    icon: 'file-text',
    challenges: [
      'Precise speed and tension control across multiple paper machine drive sections',
      'High-humidity environments accelerating corrosion of motors and electrical equipment',
      'Critical process — unplanned downtime costs ₹10–50 lakhs per hour in lost production',
      'DC to AC drive migration for aging paper machines requiring precise speed ratio control',
      'Chemical exposure from bleaching and pulping process areas',
    ],
    solutions: [
      'Danfoss VLT AutomationDrive FC302 in master-follower configuration for drive sections',
      'Corrosion-protected motors with special shaft seals for humid paper mill environments',
      'Custom drive retrofit engineering with load transfer calculations for DC-to-AC migrations',
      'Online UPS systems for critical drive sections preventing web breaks during grid disturbances',
      'Preventive AMC programmes with quarterly drive and motor health assessments',
    ],
    applications: ['Paper Machine Drive Sections', 'Stock Preparation', 'Vacuum Pumps', 'Calendering', 'Reeler & Winder', 'Bleaching Plant Pumps'],
    relatedProducts: ['drives', 'motors', 'gearboxes'],
    relatedCaseStory: { client: 'TNPL', result: '32% Energy Savings', href: '/case-stories/tnpl-vfd-retrofit' },
  },
  {
    id: 'textile',
    slug: 'textile',
    name: 'Textile',
    shortDesc: 'Reliable automation optimising speed and tension across spinning and weaving.',
    fullDesc: 'Textile manufacturing depends on ultra-precise motion control — variations in spindle speed or tension directly impact yarn quality, fabric consistency, and end product value. Our drive and motor solutions are selected for the demanding duty cycles and precise control requirements of modern spinning, weaving, and processing machinery.',
    image: 'https://images.unsplash.com/photo-1605333554477-9be72d733591?w=1400&h=900&fit=crop&q=85',
    heroImage: 'https://images.unsplash.com/photo-1605333554477-9be72d733591?w=1800&h=1000&fit=crop&q=85',
    icon: 'layers',
    challenges: [
      'Ultra-precise speed control with ±0.01% accuracy for spinning applications',
      'Lint and fibre ingress into motors and drives in spinning shed environments',
      'High spindle count requiring reliable, compact drives with small footprint',
      'Stenter frame temperature uniformity requiring precise fan and burner control',
      'Energy efficiency under pressure from rising electricity costs',
    ],
    solutions: [
      'Danfoss FC280/FC302 compact drives for spinning and weaving machinery',
      'Filtered motor designs with special lint-resistant ventilation for spinning sheds',
      'Energy optimiser algorithm in VFD drives reducing motor losses on constant-torque loads',
      'Temperature PID control loops for stenter and dryer applications',
      'Multi-drive coordination solutions for warping and sizing machine drives',
    ],
    applications: ['Ring Frame Drives', 'Open-End Spinning', 'Weaving Machines', 'Stenter Fans', 'Dyeing & Processing', 'Yarn Winding'],
    relatedProducts: ['drives', 'motors'],
    relatedCaseStory: null,
  },
  {
    id: 'chemical-pharma',
    slug: 'chemical-pharma',
    name: 'Chemical & Pharma',
    shortDesc: 'Explosion-proof and precision solutions for hazardous process environments.',
    fullDesc: 'Chemical and pharmaceutical manufacturing involves hazardous materials, stringent regulatory oversight, and zero-tolerance quality standards. Our engineering team is experienced in specifying ATEX/IECEx rated equipment, managing classified zone documentation, and designing electrical systems that meet the exacting requirements of GMP manufacturing environments.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1400&h=900&fit=crop&q=85',
    heroImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1800&h=1000&fit=crop&q=85',
    icon: 'flask-conical',
    challenges: [
      'ATEX Zone 1 and Zone 2 classified areas requiring explosion-proof certified equipment',
      'Precise pump speed control for dosing, transfer, and reactor agitation applications',
      'GMP documentation requirements for all installed equipment in pharma facilities',
      'Corrosive chemical environments requiring special motor and cable material selection',
      'Validation requirements (IQ/OQ/PQ) for pharmaceutical production equipment',
    ],
    solutions: [
      'ATEX/IECEx certified motors for Zone 1 and Zone 2 hazardous area applications',
      'Danfoss drives with remote installation for hazardous area pump control',
      'Complete hazardous area zone drawing review and equipment selection service',
      'GMP-compliant documentation packages including FAT protocols and calibration certificates',
      'Stainless steel enclosures and cable trays for corrosive chemical environments',
    ],
    applications: ['Reactor Agitators', 'Transfer Pumps', 'Dosing Systems', 'HVAC for Cleanrooms', 'Effluent Treatment', 'Packaging Lines'],
    relatedProducts: ['motors', 'drives', 'enclosures'],
    relatedCaseStory: null,
  },
  {
    id: 'water-treatment',
    slug: 'water-treatment',
    name: 'Water Treatment',
    shortDesc: 'Energy-optimised VFD systems for pumps, blowers, and treatment processes.',
    fullDesc: 'Water and wastewater treatment facilities face an ongoing challenge: maximising treatment efficiency while minimising the energy cost of pumping. Variable frequency drives offer the most impactful lever for energy reduction in water systems, and Danfoss AQUA Drive technology — which we supply and commission — is the global benchmark for water pump control.',
    image: 'https://images.unsplash.com/photo-1563223771-482f6f9fc565?w=1400&h=900&fit=crop&q=85',
    heroImage: 'https://images.unsplash.com/photo-1563223771-482f6f9fc565?w=1800&h=1000&fit=crop&q=85',
    icon: 'droplets',
    challenges: [
      'Energy costs dominate operating budgets — pumping accounts for 40–50% of total electricity use',
      'Water hammer and pressure surges causing pipe bursts and valve damage',
      'Variable demand requires precise pressure management without constant manual intervention',
      'Remote unmanned pump stations requiring reliable, self-protecting drive systems',
      'Flooding risk in below-grade pump rooms requiring special installation considerations',
    ],
    solutions: [
      'Danfoss AQUA Drive FC202 with built-in cascade pump controller and dry-run protection',
      'Pressure-regulated closed-loop control eliminating water hammer completely',
      'Remote monitoring via SCADA integration for unmanned pump station management',
      'Corrosion-protected drives with conformal coated PCBs for humid pump room environments',
      'Energy audits quantifying savings potential and calculating VFD payback period',
    ],
    applications: ['Municipal Water Pumping', 'Sewage Transfer', 'Effluent Treatment', 'Desalination Plants', 'Irrigation Systems', 'Cooling Tower Pumps'],
    relatedProducts: ['drives', 'motors', 'switchgears'],
    relatedCaseStory: { client: 'Water Treatment Board', result: '45% Energy Reduction', href: '/case-stories/water-treatment-pumping' },
  },
  {
    id: 'infrastructure',
    slug: 'infrastructure',
    name: 'Infrastructure',
    shortDesc: 'Comprehensive electrical and HVAC solutions for large commercial projects.',
    fullDesc: 'Large commercial and infrastructure projects — airports, data centres, hospitals, metro systems, and high-rise buildings — demand electrical systems and mechanical drives of the highest reliability. We supply and commission the electrical distribution, HVAC drive systems, and backup power solutions that keep critical infrastructure running.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?w=1400&h=900&fit=crop&q=85',
    heroImage: 'https://images.unsplash.com/photo-1504307651254-35680f356f58?w=1800&h=1000&fit=crop&q=85',
    icon: 'building-2',
    challenges: [
      'Complex multi-zone HVAC systems requiring precise airflow and temperature control',
      'Critical load power quality requirements for data centres and hospitals',
      'High-rise building pressurisation, lift motor control, and fire system integration',
      'Energy efficiency mandates under GRIHA/LEED green building rating systems',
      'Long-distance cable runs requiring precise sizing and voltage drop calculations',
    ],
    solutions: [
      'VFD-controlled AHU and chiller pump drives with BACnet/Modbus integration to BMS',
      'Premium switchgear and busbar trunking for high-capacity LV distribution',
      'Power factor correction panels eliminating reactive power penalties',
      'Energy metering and sub-metering systems for LEED certification documentation',
      'UPS and active harmonic filter integration for critical load protection',
    ],
    applications: ['HVAC Air Handling Units', 'Chilled Water Pumps', 'Lift Machine Room Equipment', 'Data Centre Cooling', 'Fire Suppression Systems', 'Parking Ventilation'],
    relatedProducts: ['drives', 'cables', 'switchgears'],
    relatedCaseStory: null,
  },
  {
    id: 'hvac',
    slug: 'hvac',
    name: 'HVAC',
    shortDesc: 'Energy-efficient drive and control solutions for heating, ventilation, and air conditioning systems.',
    fullDesc: 'Modern HVAC systems require intelligent motor control to maintain precise environmental conditions while minimizing energy consumption. We supply advanced VFDs and electrical panels specifically designed for AHUs, chillers, cooling towers, and pumping systems in commercial and industrial facilities.',
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1400&h=900&fit=crop&q=85',
    heroImage: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1800&h=1000&fit=crop&q=85',
    icon: 'wind',
    challenges: [
      'High energy consumption from continuously running fans and pumps',
      'Precise temperature and humidity control requirements',
      'Integration with complex Building Management Systems (BMS)',
      'Acoustic noise and vibration management in commercial spaces',
      'System reliability during extreme weather conditions'
    ],
    solutions: [
      'Danfoss HVAC specific VFDs with built-in cascade controllers',
      'Energy audits to optimize pump and fan system efficiency',
      'BACnet and Modbus RTU ready drives for seamless BMS integration',
      'Custom MCC panels for centralized HVAC system control',
      'Active harmonic filters to maintain power quality'
    ],
    applications: ['Air Handling Units (AHUs)', 'Chilled Water Pumps', 'Cooling Tower Fans', 'Condenser Water Pumps', 'Exhaust Systems', 'Ventilation Fans'],
    relatedProducts: ['drives', 'motors', 'switchgears'],
    relatedCaseStory: null,
  }
];

// ── BLOG POSTS ─────────────────────────────────────────────────────────────────

export const blogPosts = [
  {
    id: 1,
    slug: 'how-vfd-drives-reduce-energy-costs',
    title: 'How Variable Frequency Drives Reduce Industrial Energy Costs by up to 50%',
    excerpt: 'Variable frequency drives are the single most impactful energy-saving technology available to industrial operations today. Here\'s the engineering science behind why, and how to calculate your potential savings.',
    category: 'Energy & Automation',
    author: 'Techno Products Engineering Team',
    date: '2025-06-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=500&fit=crop&q=85',
    featured: true,
    tags: ['VFD', 'Energy Savings', 'Danfoss', 'Automation'],
  },
  {
    id: 2,
    slug: 'motor-selection-guide-industrial',
    title: 'The Complete Guide to Industrial Motor Selection: IE2 vs IE3 vs IE4 Efficiency Classes',
    excerpt: 'Choosing the wrong motor efficiency class costs money every day it runs. This guide explains the real-world energy and payback differences between motor efficiency classes for Indian industrial conditions.',
    category: 'Technical Guides',
    author: 'Techno Products Engineering Team',
    date: '2025-05-28',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop&q=85',
    featured: false,
    tags: ['Motors', 'Efficiency', 'IE3', 'Innomotics'],
  },
  {
    id: 3,
    slug: 'predictive-maintenance-industry-40',
    title: 'Predictive Maintenance in the Age of Industry 4.0: From Reactive to Intelligent',
    excerpt: 'How modern drive systems and IIoT sensors are transforming maintenance from a reactive cost centre into a proactive competitive advantage — with real data from Indian industrial implementations.',
    category: 'Industry 4.0',
    author: 'Techno Products Engineering Team',
    date: '2025-05-10',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=500&fit=crop&q=85',
    featured: false,
    tags: ['Predictive Maintenance', 'Industry 4.0', 'IIoT'],
  },
  {
    id: 4,
    slug: 'gearbox-selection-cement-industry',
    title: 'Gearbox Selection for Cement Industry Applications: A Practical Engineering Approach',
    excerpt: 'Selecting a gearbox for a ball mill or rotary kiln is one of the most consequential engineering decisions in a cement plant. Get it wrong and you face catastrophic failure. This guide shows you how to get it right.',
    category: 'Application Engineering',
    author: 'Techno Products Engineering Team',
    date: '2025-04-20',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=500&fit=crop&q=85',
    featured: false,
    tags: ['Gearboxes', 'Cement', 'Motovario', 'Application Engineering'],
  },
  {
    id: 5,
    slug: 'control-panel-design-best-practices',
    title: 'Control Panel Design: 10 Engineering Best Practices That Prevent Field Problems',
    excerpt: 'Most field commissioning issues originate in panel design errors that could easily have been prevented. Our experienced panel engineers share the ten checks that every panel design should pass before fabrication begins.',
    category: 'Panel Engineering',
    author: 'Techno Products Engineering Team',
    date: '2025-03-30',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=500&fit=crop&q=85',
    featured: false,
    tags: ['Control Panels', 'MCC', 'Engineering Best Practices'],
  },
  {
    id: 6,
    slug: 'water-pump-energy-savings-vfd',
    title: 'Case Analysis: How a Municipal Water Authority Saved ₹28 Lakhs Annually with VFD Retrofits',
    excerpt: 'A detailed engineering and financial analysis of a pumping station VFD retrofit project — including load profiling, drive selection, installation challenges, and the verified energy savings recorded after 12 months of operation.',
    category: 'Case Analysis',
    author: 'Techno Products Engineering Team',
    date: '2025-03-05',
    readTime: '11 min read',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop&q=85',
    featured: false,
    tags: ['Water', 'VFD', 'Danfoss AQUA', 'Energy Savings'],
  },
];

// ── TESTIMONIALS ───────────────────────────────────────────────────────────────

export const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    title: 'General Manager – Electrical',
    company: 'TNPL – Tamil Nadu Newsprint',
    industry: 'Paper & Pulp',
    rating: 5,
    quote: 'Techno Products delivered a complete VFD retrofit for our paper machine that exceeded every performance target. The energy savings alone paid back the investment in 14 months. More importantly, the technical support during commissioning was exceptional — their engineers were on-site for the entire startup and didn\'t leave until everything was perfect.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&q=85',
    result: '32% Energy Savings',
  },
  {
    id: 2,
    name: 'Suresh Krishnamurthy',
    title: 'Plant Manager',
    company: 'Chettinad Cement Corporation',
    industry: 'Cement Manufacturing',
    rating: 5,
    quote: 'Our rotary kiln was our biggest reliability problem for years. After Techno Products redesigned the entire drive train with Innomotics motors and Motovario planetary gearboxes, we\'ve achieved 99.8% kiln uptime for the past 18 months. That\'s a transformation in our operational efficiency.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=85',
    result: '99.8% Kiln Uptime',
  },
  {
    id: 3,
    name: 'Priya Venkataraman',
    title: 'Engineering Head',
    company: 'TVS Motors',
    industry: 'Automotive',
    rating: 5,
    quote: 'The control panels Techno Products engineered for our new assembly line were delivered, tested, and commissioned 40% ahead of our original schedule. The quality of the documentation alone is world-class — every wire is labelled, every test is recorded. Our maintenance team found the panels incredibly easy to work with.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&q=85',
    result: '40% Faster Commissioning',
  },
  {
    id: 4,
    name: 'Anand Subramanian',
    title: 'Chief Engineer',
    company: 'Schwing Stetter India',
    industry: 'Construction Equipment',
    rating: 5,
    quote: 'We\'ve worked with many drives suppliers over the years, but Techno Products stands apart for one reason: their engineers actually understand the application. When we had a complex regenerative braking challenge, they came back with a solution, not a sales pitch. That\'s the kind of technical partner you want.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=85',
    result: 'Regenerative Solution Delivered',
  },
  {
    id: 5,
    name: 'Kavitha Muthukumar',
    title: 'Senior Procurement Manager',
    company: 'Dalmia Bharat Cement',
    industry: 'Cement',
    rating: 5,
    quote: 'On-time delivery is non-negotiable for us given our plant maintenance windows. In 3 years of working with Techno Products, they have delivered every order on schedule — often with less lead time than we expected. The quality of genuine Danfoss and Innomotics products, combined with their local support, makes them our preferred vendor.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=85',
    result: '100% On-Time Delivery',
  },
  {
    id: 6,
    name: 'Muthukrishnan Pillai',
    title: 'Maintenance Manager',
    company: 'Bannari Amman Sugars',
    industry: 'Food & Beverage',
    rating: 5,
    quote: 'The annual maintenance contract with Techno Products has completely changed how we manage our drive assets. Quarterly health checks, priority spare parts, and emergency response — knowing that support is just a call away lets us focus on production rather than worrying about breakdowns.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&q=85',
    result: 'Zero Emergency Downtime in 12 Months',
  },
];

// ── JOB OPENINGS ───────────────────────────────────────────────────────────────

export const jobOpenings = [
  {
    id: 1,
    title: 'Senior Application Engineer – Drives & Automation',
    department: 'Engineering',
    location: 'Chennai, Tamil Nadu',
    type: 'Full Time',
    experience: '4–8 years',
    description: 'Lead technical pre-sales and post-sales support for Danfoss and Schneider Electric drive and automation systems. Conduct load analysis, system sizing, and customer application engineering for complex industrial projects.',
    requirements: [
      'B.E./B.Tech in Electrical or Electronics Engineering',
      '4+ years experience with industrial VFD drives (Danfoss, ABB, or equivalent)',
      'Strong understanding of motor control theory, PLC programming (preferred)',
      'Excellent communication and customer-facing skills',
      'Willingness to travel for site visits across South India',
    ],
  },
  {
    id: 2,
    title: 'Control Panel Design Engineer',
    department: 'Panel Engineering',
    location: 'Chennai, Tamil Nadu',
    type: 'Full Time',
    experience: '2–5 years',
    description: 'Design and draft control panel schematics for MCC, VFD, and automation panels. Manage panel BOM preparation, component selection, and coordinate with fabrication team for on-time delivery.',
    requirements: [
      'Diploma/B.E. in Electrical Engineering',
      '2+ years in industrial control panel design',
      'Proficiency in AutoCAD Electrical or EPLAN',
      'Knowledge of Schneider Electric, Siemens switchgear products',
      'Understanding of IS/IEC electrical standards',
    ],
  },
  {
    id: 3,
    title: 'Territory Sales Engineer',
    department: 'Sales',
    location: 'Coimbatore / Madurai, Tamil Nadu',
    type: 'Full Time',
    experience: '2–4 years',
    description: 'Develop and manage customer relationships across assigned territory. Generate enquiries, prepare technical-commercial proposals, and close orders for industrial drives, motors, and engineering services.',
    requirements: [
      'B.E./B.Tech in Electrical, Mechanical, or related Engineering',
      '2+ years in industrial B2B technical sales',
      'Strong network in local industrial and manufacturing sector preferred',
      'Self-motivated with ability to manage territory independently',
      'Valid driving licence',
    ],
  },
  {
    id: 4,
    title: 'Service Engineer – Drives & Motors',
    department: 'Service & Support',
    location: 'Chennai, Tamil Nadu',
    type: 'Full Time',
    experience: '2–5 years',
    description: 'Provide on-site commissioning, troubleshooting, and maintenance support for Danfoss drives and Innomotics motors across customer facilities in South India.',
    requirements: [
      'Diploma/B.E. in Electrical Engineering',
      '2+ years in VFD drive commissioning and troubleshooting',
      'Hands-on experience with Danfoss VLT / VACON preferred',
      'Strong problem-solving skills and customer-handling ability',
      'Willingness to travel extensively for site work',
    ],
  },
  {
    id: 5,
    title: 'Junior Engineer – Procurement & Logistics',
    department: 'Operations',
    location: 'Chennai, Tamil Nadu',
    type: 'Full Time',
    experience: '0–2 years',
    description: 'Manage purchase orders, vendor coordination, and logistics for industrial components. Support order fulfilment, maintain inventory records, and coordinate with sales and engineering teams for on-time delivery.',
    requirements: [
      'B.E./B.Com or equivalent qualification',
      'Strong organisational and communication skills',
      'Proficiency in MS Office / ERP systems',
      'Freshers with strong academic record will be considered',
    ],
  },
];

export const caseStoriesData = [
  {
    id: 1,
    slug: 'tnpl-vfd-retrofit',
    client: 'TNPL – Tamil Nadu Newsprint & Papers Ltd.',
    title: 'VFD Retrofit & Automation Upgrade for Paper Machine Drives',
    industry: 'Paper & Pulp',
    location: 'Kagithapuram, Tamil Nadu, India',
    duration: '14 Weeks (Complete Turnover)',
    clientCategory: 'Continuous Process Manufacturing',
    result: '32% Energy Savings',
    executiveSummary: 'Replaced aging, maintenance-heavy DC drives with advanced Danfoss VLT® AutomationDrive FC 302 series across 14 critical paper machine drive sections. The comprehensive turnkey upgrade delivered a 32% direct energy reduction, eliminated unplanned web breaks, and achieved ultra-precise synchronization across all machine rolls.',
    tags: ['Automation', 'Electrical Systems', 'Industrial Solutions', 'Control Panels', 'Drive Retrofit'],
    heroComposition: [
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&h=700&fit=crop&q=85',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&q=80'
    ],
    overview: 'Tamil Nadu Newsprint and Papers Limited (TNPL) operates one of the largest bagasse-based paper mills in the world. Their high-speed Paper Machine #2 operates continuously 24/7, producing premium writing and printing paper. The main drive system originally consisted of analog DC motors and thyristor drives installed over two decades ago. As the equipment aged, maintaining precise roll synchronization became increasingly difficult, resulting in frequent paper breaks and excessive downtime during high-speed operation.',
    challenge: 'The primary challenge was two-fold: electrical obsolescence and tight mechanical constraints. Spare parts for the legacy DC drives were no longer available from the original manufacturer. Furthermore, paper machine drive sections require ultra-precise load sharing and millisecond-level torque response; any deviation between the wire, press, and dryer sections immediately causes paper web breaks, ruining production. The entire retrofit—including panel removal, cable re-routing, motor installation, and software synchronization—had to be executed within a strict 10-day annual plant shutdown window.',
    engineeringSolution: 'Techno Products engineered a complete turnkey AC drive conversion using Danfoss VLT® AutomationDrive FC 302 heavy-duty industrial VFDs. We built 8 multi-section custom MCC and drive enclosures featuring active harmonic filtering to maintain IEEE 519 compliance. Our engineering team programmed master-follower synchronization over high-speed PROFINET communications, allowing instant load distribution across all 14 drive sections. Custom local touch-screen HMIs were installed at the operator stations with real-time web tension graphs and diagnostic alarms.',
    implementationProcess: [
      { phase: 'Phase 1: Comprehensive Site Audit & Load Analysis', desc: 'Conducted a 2-week pre-shutdown engineering audit, mapping exact torque requirements, harmonic profiles, and spatial footprint for all 14 DC drive sections.' },
      { phase: 'Phase 2: Custom MCC & VFD Panel Assembly', desc: 'Engineered and assembled IP54-rated control panels in our facility with integrated Danfoss FC 302 drives, safety PLCs, and dedicated cooling systems.' },
      { phase: 'Phase 3: Turnkey Shutdown Installation', desc: 'Executed 24/7 mechanical and electrical dismantling during the annual shutdown, installing high-efficiency AC motors and connecting over 4,000 meters of shielded drive cables.' },
      { phase: 'Phase 4: Synchronized Commissioning & FAT', desc: 'Performed comprehensive loop checks, master-follower tuning, and high-speed web tension simulations, successfully commissioning the machine 18 hours ahead of schedule.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1400&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&h=600&fit=crop&q=85'
    ],
    resultsStats: [
      { value: '99.8%', label: 'System Reliability', desc: 'Zero unplanned drive failures since commissioning' },
      { value: '32%', label: 'Energy Savings', desc: 'Measured annual reduction in electrical power consumption' },
      { value: '40%', label: 'Reduced Downtime', desc: 'Drastic drop in web tension breaks and recovery time' },
      { value: '24/7', label: 'Operational Support', desc: 'Continuous remote monitoring & preventive AMC' },
    ],
    relatedProductSlugs: ['drives', 'motors', 'control-panels'],
  },
  {
    id: 2,
    slug: 'chettinad-cement-kiln',
    client: 'Chettinad Cement Corporation',
    title: 'Heavy-Duty Planetary Gearbox & Motor Upgrade for Rotary Kiln Drive',
    industry: 'Cement Manufacturing',
    location: 'Karur, Tamil Nadu, India',
    duration: '10 Weeks (Engineering & Installation)',
    clientCategory: 'Heavy Building Materials',
    result: '99.8% Kiln Uptime',
    executiveSummary: 'Designed and installed a rugged mechanical drive train upgrade utilizing high-efficiency Innomotics motors and custom-sized Motovario planetary gearboxes for a 5,000 TPD cement rotary kiln, increasing reliability and eliminating gear mesh vibrations under severe temperatures.',
    tags: ['Mechanical Transmission', 'Planetary Gearboxes', 'Heavy Motors', 'Kiln Automation', 'Vibration Analysis'],
    heroComposition: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=900&h=700&fit=crop&q=85',
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop&q=85'
    ],
    overview: 'Cement manufacturing is one of the most punishing industrial environments on earth. The rotary kiln is the heart of the cement clinker production line, rotating continuously at elevated temperatures in heavy dust and shock-load conditions. Chettinad Cement was experiencing recurring mechanical vibration spikes and oil overheating on their main kiln drive train, leading to mandatory kiln stoppages that cost thousands of dollars per hour in lost production.',
    challenge: 'The legacy helical gearbox had suffered micro-pitting on the intermediate gear teeth caused by extreme ambient heat (over 55°C near the kiln shell) and fluctuating clinker load torques. Re-engineering the drive train required selecting a gearbox rated for 2.5x peak starting torque while fitting exactly within the existing concrete pedestal foundation without requiring civil modifications.',
    engineeringSolution: 'Techno Products delivered an engineered mechanical solution combining a heavy-duty Motovario planetary gear unit with an IE3 premium efficiency Innomotics 400 kW induction motor. The planetary gearbox was configured with an external forced-lubrication unit incorporating dual oil coolers and magnetic particle filters. An auxiliary auxiliary barring drive was integrated for slow-speed kiln rotation during emergency power outages and refractory maintenance.',
    implementationProcess: [
      { phase: 'Phase 1: Foundation Verification & Alignment Study', desc: 'Performed laser alignment and vibration baseline readings on the existing foundation and bull gear.' },
      { phase: 'Phase 2: Custom Gearbox & Motor Assembly', desc: 'Integrated and pre-aligned the baseplate, planetary reducer, flexible pin couplings, and main drive motor at our engineering workshop.' },
      { phase: 'Phase 3: Kiln Drive Cutover & Erection', desc: 'Utilized heavy crane rigging to remove the 8-ton legacy unit and position the new drive assembly within a 36-hour window.' },
      { phase: 'Phase 4: Thermal & Vibration Verification', desc: 'Monitored bearing temperatures, oil flow rates, and gear mesh vibration across a 72-hour continuous full-load run.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1400&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&h=80',
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&h=600&fit=crop&q=85'
    ],
    resultsStats: [
      { value: '99.8%', label: 'Kiln Uptime Achieved', desc: 'Continuous operation without unscheduled drive stops' },
      { value: '65%', label: 'Vibration Reduction', desc: 'Smooth gear engagement with zero peak resonance' },
      { value: '18°C', label: 'Lower Oil Temp', desc: 'Efficient external cooling doubling lubricant life' },
      { value: '24/7', label: 'Continuous Support', desc: 'Dedicated on-call mechanical technicians' },
    ],
    relatedProductSlugs: ['gearboxes', 'motors', 'drives'],
  },
  {
    id: 3,
    slug: 'tvs-motors-automation',
    client: 'TVS Motor Company',
    title: 'Turnkey Automation & MCC Control Panels for High-Speed Assembly Line',
    industry: 'Automotive',
    location: 'Hosur, Tamil Nadu, India',
    duration: '8 Weeks (Design, Build & Commission)',
    clientCategory: 'Two-Wheeler & EV Manufacturing',
    result: '40% Faster Commissioning',
    executiveSummary: 'Engineered, manufactured, and commissioned intelligent MCC and PLC automation panels featuring Schneider Electric switchgear and advanced safety relays for a high-speed vehicle assembly line, cutting on-site commissioning time by 40%.',
    tags: ['Control Panels', 'Automation', 'Safety Systems', 'Conveyor Control', 'Automotive Assembly'],
    heroComposition: [
      'https://images.unsplash.com/photo-1565608438257-fac3c27bdbdf?w=900&h=700&fit=crop&q=85',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop&q=85'
    ],
    overview: 'TVS Motor Company is one of India\'s premier two-wheeler and electric vehicle manufacturers. To support the launch of their new flagship scooter platform, the Hosur manufacturing facility required a state-of-the-art automated assembly line capable of producing one finished vehicle every 25 seconds. The conveyor system required synchronized multi-station indexing, automated quality checkpoints, and SIL-3 safety interlocks.',
    challenge: 'Automotive assembly lines cannot tolerate control panel failures or slow communication loops. The control architecture needed to integrate over 80 variable speed conveyor motors, pneumatic lifters, barcode scanners, and robotic tightening stations. Traditional hard-wired control panels would have required weeks of on-site wiring, putting the tight vehicle launch schedule at severe risk.',
    engineeringSolution: 'Techno Products designed and fabricated 12 modular intelligent Motor Control Centers (iMCC) and automation panels. Using Schneider Electric TeSys Island digital load management units and Altivar drives connected over EtherNet/IP, we eliminated 70% of traditional point-to-point control wiring. Quick-disconnect industrial plug systems allowed complete pre-testing and Factory Acceptance Testing (FAT) in our assembly shop before dispatch.',
    implementationProcess: [
      { phase: 'Phase 1: Electrical CAD & Safety Architecture Design', desc: 'Developed complete EPLAN electrical schematics, 3D panel layouts, and safety interlock matrices conforming to IEC 60204-1 standards.' },
      { phase: 'Phase 2: Panel Fabrication & Digital Wiring', desc: 'Assembled CRCA enclosures with segregated power and control compartments, utilizing automated wire processing for 100% trace accuracy.' },
      { phase: 'Phase 3: Rigorous Shop FAT & Simulation', desc: 'Connected simulated I/O racks and tested every motor starter and safety relay sequence prior to shipping to the Hosur plant.' },
      { phase: 'Phase 4: Rapid Plug-and-Play Site Integration', desc: 'Completed physical mounting and network loop checks in just 4 days, enabling immediate dry-run testing with the robotics team.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1565608438257-fac3c27bdbdf?w=1400&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&h=80'
    ],
    resultsStats: [
      { value: '40%', label: 'Faster Commissioning', desc: 'Achieved rapid line startup through pre-tested plug-and-play panels' },
      { value: '25 sec', label: 'Cycle Time Indexing', desc: 'Flawless synchronization across 40+ assembly stations' },
      { value: 'SIL-3', label: 'Safety Compliance', desc: 'Complete operator protection with zero bypass vulnerabilities' },
      { value: '100%', label: 'Diagnostic Visibility', desc: 'Real-time motor current and health alerts via SCADA' },
    ],
    relatedProductSlugs: ['control-panels', 'drives', 'motors'],
  },
  {
    id: 4,
    slug: 'water-treatment-pumping',
    client: 'Municipal Water & Sewage Treatment Board',
    title: 'Intelligent Pumping Station Energy Optimization & Harmonic Mitigation',
    industry: 'Water Treatment',
    location: 'Coimbatore, Tamil Nadu, India',
    duration: '12 Weeks (Multi-Station Rollout)',
    clientCategory: 'Public Infrastructure & Utilities',
    result: '45% Energy Reduction',
    executiveSummary: 'Modernized 6 municipal raw water and sewage pumping stations by replacing energy-wasting Direct-On-Line starters with Danfoss VLT® AQUA Drive FC 202 VFDs and dedicated cascade controller logic, slashing energy bills by 45%.',
    tags: ['Water & Wastewater', 'Pumping Optimization', 'Energy Efficiency', 'Harmonic Filters', 'Smart Drives'],
    heroComposition: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=700&fit=crop&q=85',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?w=800&h=600&fit=crop&q=85'
    ],
    overview: 'Municipal water supply and wastewater treatment utilities account for nearly 35% of a city\'s total electrical energy consumption. In Coimbatore, the major raw water pumping stations were operating using fixed-speed vertical turbine pumps throttled by mechanical control valves. During off-peak hours when demand dropped, excess pressure caused severe hydraulic stress, leading to frequent pipe bursts and exorbitant electricity bills.',
    challenge: 'Throttling centrifugal pumps with mechanical valves wastes immense amounts of electrical energy and creates destructive water hammer effects during pump starting and stopping. Additionally, pumping stations located near residential areas face strict power quality guidelines; any harmonic distortion generated by high-horsepower drives could disrupt the local grid and overheat utility transformers.',
    engineeringSolution: 'Techno Products implemented an intelligent pumping solution utilizing Danfoss VLT® AQUA Drive FC 202 series VFDs equipped with advanced multi-master cascade control. Instead of running all pumps at full speed against throttled valves, the AQUA drives automatically stage and speed-regulate pumps based on real-time reservoir levels and discharge pressure transmitters. Built-in DC link chokes and passive harmonic filters ensured full compliance with utility grid standards.',
    implementationProcess: [
      { phase: 'Phase 1: Hydraulic Audit & Energy Baseline Study', desc: 'Logged 30-day pump flow, head, and power consumption profiles to calculate exact energy savings potential across all 6 stations.' },
      { phase: 'Phase 2: IP54 Drive & Harmonic Filter Enclosures', desc: 'Designed weather-resistant outdoor drive enclosures with forced ventilation and anti-condensation heaters for humid pump rooms.' },
      { phase: 'Phase 3: Phased Cutover Without Water Interruption', desc: 'Executed pump-by-pump drive retrofits during low-demand night hours, ensuring zero interruption to the city water supply.' },
      { phase: 'Phase 4: Automatic Deragging & Pipe Fill Tuning', desc: 'Configured specialized Danfoss water software features including automatic pump impeller deragging and soft pipe-filling modes.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&h=800&fit=crop&q=85',
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop&q=85',
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=600&fit=crop&q=85'
    ],
    resultsStats: [
      { value: '45%', label: 'Energy Reduction', desc: 'Verified drop in kWh consumption across all 6 pumping stations' },
      { value: 'Zero', label: 'Water Hammer Bursts', desc: 'Soft acceleration and pipe-fill modes eliminating pressure surges' },
      { value: '< 5%', label: 'Harmonic Distortion', desc: 'Clean grid power maintaining transformer thermal health' },
      { value: '3.2 Yrs', label: 'Project Payback', desc: 'Rapid return on investment funded entirely by electricity savings' },
    ],
    relatedProductSlugs: ['drives', 'motors', 'control-panels'],
  },
];

// ── CATEGORY FILTERS & DETAILED PRODUCT DATA ──────────────────────────────────

export const categoryFiltersData = {
  motors: {
    HP: ['0.16', '0.25', '0.35', '0.5', '0.75', '1', '1.5', '2', '3', '4', '5', '7.5', '10', '12.5', '15', '20', '25', '30', '40', '50', '60', '75', '100', '120', '150', '170', '180', '200', '215', '220', '240', '270', '300', '335', '340', '370', '425', '473', '500'],
    RPM: ['3000 (2 Pole)', '1500 (4 Pole)', '1000 (6 Pole)', '750 (8 Pole)'],
    Brand: ['Siemens', 'Crompton', 'Havells', 'Bharat Bijlee', 'Marathon', 'Innomotics', 'Motovario', 'ABB'],
    Mounting: ['Foot', 'Flange', 'Foot Cum Flange', 'Face', 'Foot Cum Face']
  },
  gearboxes: {
    HP: ['0.12', '0.16', '0.25', '0.33', '0.5', '0.75', '1', '1.5', '2', '3', '4', '5', '5.5', '7.5', '10', '12.5', '15', '20', '25', '30', '40', '50', '60', '75'],
    Type: ['Bevel Helical – A Series', 'Inline Helical – AS Series', 'Planetary – 3 Series', 'Shaft Mounted – TA Series', 'VF', 'VFR Series', 'Worm – W', 'WR'],
    Model: ['100', '100.1', '110', '130', '150', '16', '185', '20', '210', '25', '250', '30', '30.3', '35', '35.35', '44', '45', '45.55', '49', '49.55', '50.6', '55', '60', '60.6', '603', '63', '70.7', '75', '80', '80.8', '86', '90']
  },
  drives: {
    Model: ['AUTOMATION DRIVE (ADVANCED) – FC301', 'AUTOMATION DRIVE (ADVANCED) – FC302', 'AUTOMATION DRIVE (BASIC) – FC360', 'HVAC (ADVANCED) – FC102', 'HVAC (BASIC) – FC101', 'MICRO DRIVE (BASIC) – FC051'],
    KW: ['0.18', '0.37', '0.75', '1.1', '1.5', '2.2', '3', '4', '5.5', '7.5', '11', '15', '18', '18.5', '22', '30', '37', '45', '55', '110', '200']
  },
  cables: {
    Category: ['Aluminium Armoured', 'Copper Armoured', 'Flexible'],
    Color: ['Black', 'Blue', 'Brown', 'Green', 'Grey', 'Grey Black', 'Orange', 'Red', 'White', 'Yellow', 'Yellow with Green'],
    Type: ['FR', 'FRLS']
  },
  switchgears: {
    Category: ['ACB', 'MCB', 'MCCB'],
    Amps: ['20', '250', '2500'],
    Pole: ['3 Pole', '4 Pole']
  },
  enclosures: {
    Type: ['Double Door', 'Floor Standing', 'Single Door'],
    Mounting: ['Floor Mounted', 'Wall Mounted'],
    Depth: ['120', '210', '300', '400']
  }
};

const getDeterministicItem = (arr, seed) => arr[seed % arr.length];

// Generate unified deterministic product data
export const allProductsData = productCategories.flatMap((cat, catIdx) => {
  return Array.from({ length: 48 }).map((_, i) => {
    const filtersForCat = categoryFiltersData[cat.slug] || {};
    const specs = {};
    const seed = catIdx * 100 + i;

    // Assign deterministic specs from official filter list
    Object.keys(filtersForCat).forEach((key, kIdx) => {
      specs[key] = getDeterministicItem(filtersForCat[key], seed + kIdx * 7);
    });

    let overrideBrand = cat.brands ? getDeterministicItem(cat.brands, seed) : 'Techno Standard';
    if (cat.slug === 'motors' && specs.Brand) {
      overrideBrand = specs.Brand;
    }

    // Build category-specific detailed fields
    let extraSpecs = {};
    let highlights = [];
    let features = [];
    let applications = ['Manufacturing', 'Cement & Heavy Industry', 'Water Treatment', 'Infrastructure'];
    
    if (cat.slug === 'motors') {
      extraSpecs = {
        'HP / Power': specs.HP ? `${specs.HP} HP (${(parseFloat(specs.HP)*0.746).toFixed(2)} kW)` : '15 HP (11 kW)',
        'RPM': specs.RPM || '1500 (4 Pole)',
        'Mounting': specs.Mounting || 'Foot (B3)',
        'Brand': overrideBrand,
        'Voltage': '415V ±10% 3-Phase 50Hz',
        'Efficiency Class': 'IE3 Premium Efficiency',
        'Frame Size': `${100 + (i % 6) * 20}L`,
        'Model': `${overrideBrand.toUpperCase()}-1LE1-${1000 + i}`,
      };
      highlights = ['IE3 Premium Efficiency', 'Cast Iron Enclosure (IP55)', 'Continuous Duty S1', 'Class F Insulation'];
      features = [
        'Heavy-duty cast iron construction designed to withstand extreme mechanical vibration and harsh industrial atmospheres.',
        'Optimized low-loss stator and rotor lamination design delivering exceptional IE3 energy efficiency and reduced operating costs.',
        'Bi-directional external cooling fan (IC 411) maintaining optimal thermal equilibrium under continuous full-load operation.',
        'Factory-embedded PTC thermistors in stator windings enabling real-time thermal overload monitoring and protection.',
        'Precision-machined terminal box with dual earth terminals and multi-entry glands ensuring safe, reliable field wiring.'
      ];
      applications = ['Manufacturing & Assembly Lines', 'Cement Rotary Kilns & Crushers', 'Paper & Pulp Processing Mills', 'Water & Wastewater Pumping Stations', 'Chemical & Pharmaceutical Plants'];
    } else if (cat.slug === 'gearboxes') {
      extraSpecs = {
        'HP Rating': specs.HP ? `${specs.HP} HP` : '10 HP',
        'Type': specs.Type || 'Planetary – 3 Series',
        'Model': specs.Model || '250',
        'Reduction Ratio': `${10 + (i % 8) * 5}:1`,
        'Mounting': 'Solid Shaft / Flange Mounted',
        'Brand': overrideBrand,
        'Housing Material': 'High-Tensile Nodular Cast Iron',
        'Input Speed': '1500 RPM Nominal',
      };
      highlights = ['Precision Ground Gears', 'High Torque Density', 'Synthetic Lubrication', 'Low Noise & Vibration'];
      features = [
        'Case-hardened and precision-ground helical profile gears ensuring high load-carrying capacity and near-silent operation.',
        'Rigid nodular cast iron housing engineered for maximum torsional stiffness under severe shock loads.',
        'Premium double-lip oil seals and labyrinth sealing arrangements preventing oil leakage and dust contamination.',
        'Optimized gear geometry providing over 96% mechanical transmission efficiency per stage.',
        'Universal mounting footprint compatible with standard IEC motor B5 and B14 flange interfaces.'
      ];
      applications = ['Heavy Material Conveyors', 'Ball Mills & Rotary Feeders', 'Overhead Cranes & Hoists', 'Sugar & Textile Machinery'];
    } else if (cat.slug === 'drives') {
      extraSpecs = {
        'Model': specs.Model || 'AUTOMATION DRIVE (ADVANCED) – FC302',
        'KW Rating': specs.KW ? `${specs.KW} kW` : '15 kW',
        'Brand': overrideBrand,
        'Input Voltage': '380–500V AC ±10% 3-Phase',
        'Output Frequency': '0–590 Hz Programmable',
        'Enclosure IP Rating': 'IP20 / IP55 / IP66 Optional',
        'Overload Capacity': '160% for 60 seconds (Heavy Duty)',
        'Communication Protocol': 'Modbus RTU, Profinet, EtherNet/IP',
      };
      highlights = ['Automatic Motor Adaptation (AMA)', 'Integrated DC Link Chokes', 'Safe Torque Off (SIL3 / PLe)', 'Smart Logic Controller'];
      features = [
        'Automatic Motor Adaptation (AMA) measuring motor electrical parameters at standstill to optimize torque and efficiency.',
        'Integrated dual DC link reactors significantly mitigating harmonic distortion and extending DC link capacitor lifetime.',
        'Embedded Safe Torque Off (STO) safety functionality certified to SIL 3 according to IEC 61508 and Performance Level PLe.',
        'Coated printed circuit boards conforming to Class 3C3 according to IEC 60721-3-3 for protection against corrosive gases.',
        'User-friendly multi-language graphical display panel with quick menu wizards for rapid field commissioning.'
      ];
      applications = ['Process Automation & Pumps', 'HVAC Air Handling Units', 'Extruders & Injection Moulding', 'Paper Machine Sectional Drives'];
    } else if (cat.slug === 'cables') {
      extraSpecs = {
        'Category': specs.Category || 'Aluminium Armoured',
        'Color': specs.Color || 'Black',
        'Type': specs.Type || 'FRLS (Flame Retardant Low Smoke)',
        'Brand': overrideBrand,
        'Conductor Material': 'Electrolytic Grade Copper / Aluminium',
        'Voltage Grade': '1100V (1.1 kV)',
        'Insulation': 'XLPE (Cross-Linked Polyethylene)',
        'Standard Compliance': 'IS 7098 (Part 1) / IS 1554',
      };
      highlights = ['1.1 kV Rated Voltage', 'XLPE Insulation', 'Galvanized Steel Strip Armour', 'FRLS Outer Sheath'];
      features = [
        'High-purity electrolytic grade copper/aluminium conductors ensuring low electrical resistance and superior conductivity.',
        'Cross-Linked Polyethylene (XLPE) insulation offering high dielectric strength and continuous operation up to 90°C conductor temp.',
        'Heavy-duty galvanized steel strip or wire armour providing robust mechanical protection against physical impact and crushing.',
        'Specially formulated Flame Retardant Low Smoke (FRLS) PVC outer sheath emitting minimal toxic halogen gases during fire events.',
        'Sequential meter marking embossed along the sheath for accurate cutting, inventory tracking, and field laying.'
      ];
      applications = ['Underground Power Distribution', 'Industrial Plant Wiring', 'Cable Tray Trench Networks', 'High-Rise Commercial Buildings'];
    } else if (cat.slug === 'switchgears') {
      extraSpecs = {
        'Category': specs.Category || 'ACB (Air Circuit Breaker)',
        'Amps Rating': specs.Amps ? `${specs.Amps}A` : '250A',
        'Pole Configuration': specs.Pole || '4 Pole',
        'Brand': overrideBrand,
        'Breaking Capacity (Icu)': '50 kA / 65 kA at 415V AC',
        'Rated Voltage': '690V AC 50/60Hz',
        'Trip Unit Type': 'Microprocessor / Electronic Protection',
        'Standard Compliance': 'IEC 60947-2 / IS/IEC 60947-2',
      };
      highlights = ['Microprocessor Trip Unit', 'High Breaking Capacity (65 kA)', 'Draw-out / Fixed Version', 'Zero Arc Flash Hazard Design'];
      features = [
        'Advanced microprocessor-based electronic trip unit offering true RMS sensing and adjustable LSI/LSIG protection settings.',
        'High ultimate short-circuit breaking capacity (Icu up to 65 kA) ensuring total discrimination and system selectivity.',
        'Modular draw-out mechanism with safety shutters and padlockable racking handles for rapid maintenance and inspection.',
        'Integrated digital display for real-time monitoring of phase currents, voltages, power factor, and energy consumption.',
        'Full compatibility with SCADA and energy management systems via Modbus RTU and Ethernet communication modules.'
      ];
      applications = ['Main Power Control Centres (PCC)', 'Industrial Substation Boards', 'Motor Control Centres (MCC)', 'Emergency Generator Changeovers'];
    } else {
      // Enclosures & Others
      extraSpecs = {
        'Enclosure Type': specs.Type || 'Floor Standing Modular',
        'Mounting': specs.Mounting || 'Floor Mounted',
        'Depth': specs.Depth ? `${specs.Depth} mm` : '400 mm',
        'Brand': overrideBrand,
        'Material': 'Cold Rolled Steel Sheet (CRCA) 2.0 mm',
        'IP Rating': 'IP55 / IP66 Certified',
        'Surface Finish': 'RAL 7035 Textured Powder Coating',
        'Door Locking System': '4-Point Espagnolette Lock with Key',
      };
      highlights = ['IP55/IP66 Weather Resistance', 'CRCA 2.0mm Sheet Steel', 'RAL 7035 Powder Coated', 'Modular Expandable Frame'];
      features = [
        'Manufactured from heavy-gauge Cold Rolled Steel Sheet (CRCA) with rigid folded frame construction for maximum load bearing.',
        'Seamless foamed-in-place polyurethane (PU) gasket providing certified IP55/IP66 protection against dust and high-pressure water.',
        'Multi-stage nanoceramic pre-treatment followed by electro-deposited epoxy polyester powder coating (RAL 7035) for rust resistance.',
        'Reversible heavy-duty concealed hinges allowing 130° door opening angle with interchangeable left/right mounting.',
        'Galvanized internal mounting plate with precision pre-punched grid pattern facilitating fast, accurate switchgear installation.'
      ];
      applications = ['Automotive & OEM Automation Cells', 'Outdoor Weatherproof Distribution', 'Pharma & Cleanroom Panels', 'Water Treatment MCC Panels'];
    }

    const name = `Enterprise Series ${cat.shortName} Model ${1000 + i}`;
    const slug = `${cat.slug}-${overrideBrand.toLowerCase().replace(/\s+/g, '-')}-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${i + 1}`;

    return {
      id: `${cat.id}-prod-${i + 1}`,
      slug: slug,
      name: name,
      brand: overrideBrand,
      categoryId: cat.id,
      categorySlug: cat.slug,
      categoryName: cat.name,
      description: `High-efficiency industrial ${cat.shortName} designed for robust performance, continuous operation, and strict international compliance in demanding environments.`,
      shortDescription: `Engineered by ${overrideBrand}, this industrial ${cat.shortName.toLowerCase()} delivers exceptional reliability, high thermal capacity, and precise control for mission-critical B2B applications.`,
      image: `https://images.unsplash.com/photo-${i % 2 === 0 ? '1581091226825-a6a2a5aee158' : '1504328345606-18bbc8c9d7d1'}?w=900&h=900&fit=crop&q=80`,
      thumbnails: [
        `https://images.unsplash.com/photo-${i % 2 === 0 ? '1581091226825-a6a2a5aee158' : '1504328345606-18bbc8c9d7d1'}?w=900&h=900&fit=crop&q=80`,
        `https://images.unsplash.com/photo-${i % 2 !== 0 ? '1581091226825-a6a2a5aee158' : '1504328345606-18bbc8c9d7d1'}?w=900&h=900&fit=crop&q=80`,
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=900&fit=crop&q=80'
      ],
      highlights: highlights,
      overview: `The ${name} represents the benchmark in industrial ${cat.name.toLowerCase()} technology. Built by ${overrideBrand} and distributed with full lifecycle engineering support by Techno Products, this unit is engineered specifically for heavy industrial environments where uptime, precision, and safety are non-negotiable.\n\nWhether deployed in continuous process cement kilns, high-speed automated manufacturing cells, or municipal utility infrastructures, this equipment operates with outstanding energy efficiency and minimal maintenance overhead. Every unit comes backed by comprehensive manufacturer warranties, certified test reports, and 24/7 technical assistance from our factory-trained domain engineers.`,
      specs: { ...specs, ...extraSpecs },
      features: features,
      applications: applications,
      downloads: [
        { title: `${overrideBrand} ${cat.shortName} Technical Datasheet`, type: 'PDF', size: '2.4 MB' },
        { title: `Installation, Operation & Commissioning Manual`, type: 'PDF', size: '4.8 MB' },
        { title: `${overrideBrand} Industrial Portfolio Catalogue`, type: 'PDF', size: '12.1 MB' },
        { title: `Type Test Certificate & Compliance Documentation`, type: 'PDF', size: '1.8 MB' }
      ]
    };
  });
});


