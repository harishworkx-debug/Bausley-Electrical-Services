import { images } from './business';

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  h1: string;
  shortName: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: string;
  contentImage: string;
  icon: string; // lucide icon name
  shortDescription: string;
  overview: string;
  whatWeDo: string[];
  warningSigns: string[];
  benefits: string[];
  faqs: ServiceFaq[];
  ctaLabel: string;
  relatedServices: { slug: string; label: string }[];
}

export const services: ServiceData[] = [
  {
    slug: 'electrical-installation-valley-al',
    title: 'Electrical Installation',
    h1: 'Professional Electrical Installation in Valley, Alabama',
    shortName: 'Electrical Installation',
    description:
      'Complete electrical installation services for homes and businesses in Valley, AL — from new wiring and fixtures to full system installations.',
    metaTitle: 'Electrical Installation Valley, AL | Bausley Electrical Services',
    metaDescription:
      'Expert electrical installation services in Valley, Alabama. New wiring, fixtures, outlets, lighting, and complete system installations. Call 334-848-0075.',
    heroImage: images.wiringSafety,
    contentImage: images.techniciansInstall,
    icon: 'Plug',
    shortDescription:
      'New wiring, fixtures, and complete electrical system installations for residential properties.',
    overview:
      'Whether you are building a new home, adding an extension, or upgrading your current electrical system, proper installation is the foundation of safe and reliable power. Bausley Electrical Services provides comprehensive electrical installation services throughout Valley, Alabama, ensuring that every wire, outlet, fixture, and panel is installed to code and built to last.',
    whatWeDo: [
      'New construction electrical wiring and rough-in',
      'Fixture installation — lights, fans, outlets, and switches',
      'Whole-home electrical system installation',
      'Appliance circuit installation',
      'Outdoor and landscape electrical wiring',
      'Garage and workshop electrical setup',
    ],
    warningSigns: [
      'You are building a new home or addition and need full electrical installation',
      'You need additional circuits for new appliances or equipment',
      'Your current wiring is outdated and needs full replacement',
      'You are finishing a basement, garage, or accessory building',
    ],
    benefits: [
      'Code-compliant installation that passes inspection',
      'Safe, properly rated wiring for your electrical load',
      'Clean, professional workmanship with attention to detail',
      'Properly labeled circuits and panels for easy maintenance',
    ],
    faqs: [
      {
        question: 'Do you install electrical systems in new construction homes?',
        answer:
          'Yes. We provide complete new construction electrical installation, including wiring rough-in, panel installation, fixture placement, and final trim-out — all coordinated with your builder or contractor.',
      },
      {
        question: 'Can you install additional circuits for new appliances?',
        answer:
          'Absolutely. We install dedicated circuits for appliances like ranges, dryers, HVAC units, and other equipment that requires its own circuit for safe operation.',
      },
      {
        question: 'How long does an electrical installation take?',
        answer:
          'The timeline depends on the scope of the project. A single fixture or outlet may take an hour, while a full home installation can span several days. We provide a clear timeline before starting any work.',
      },
    ],
    ctaLabel: 'Discuss Your Installation Project',
    relatedServices: [
      { slug: 'wiring-rewiring-valley-al', label: 'View Wiring & Rewiring Services' },
      { slug: 'lighting-installation-valley-al', label: 'Explore Lighting Installation' },
      { slug: 'outlet-switch-installation-valley-al', label: 'See Outlet & Switch Installation' },
    ],
  },
  {
    slug: 'electrical-repair-troubleshooting-valley-al',
    title: 'Electrical Repair & Troubleshooting',
    h1: 'Electrical Repair & Troubleshooting in Valley, Alabama',
    shortName: 'Repair & Troubleshooting',
    description:
      'Fast, accurate electrical repair and troubleshooting for homes in Valley, AL. We diagnose and fix outlet issues, switch problems, faulty wiring, and more.',
    metaTitle: 'Electrical Repair & Troubleshooting Valley, AL | Bausley Electrical',
    metaDescription:
      'Reliable electrical repair and troubleshooting in Valley, Alabama. Flickering lights, dead outlets, switch problems, and wiring faults diagnosed and fixed. Call 334-848-0075.',
    heroImage: images.electricianRepair,
    contentImage: images.multimeterRepair,
    icon: 'Wrench',
    shortDescription:
      'Diagnosis and repair of electrical faults — flickering lights, dead outlets, tripping breakers, and more.',
    overview:
      'Electrical problems can be frustrating and potentially dangerous. Whether you have a dead outlet, a switch that does not work, flickering lights, or a breaker that keeps tripping, Bausley Electrical Services provides thorough troubleshooting to identify the root cause and perform a lasting repair — not just a temporary fix.',
    whatWeDo: [
      'Diagnose and repair dead or intermittent outlets',
      'Troubleshoot flickering or dimming lights',
      'Repair faulty or warm switches',
      'Identify and fix wiring faults and loose connections',
      'Resolve tripping breaker issues at the source',
      'Repair damaged or degraded wiring',
    ],
    warningSigns: [
      'Outlets that have stopped working or work intermittently',
      'Lights that flicker, dim, or buzz',
      'Switches that feel warm, spark, or do not respond',
      'Breakers that trip repeatedly without an obvious cause',
      'Burning smell or discoloration around outlets or switches',
    ],
    benefits: [
      'Accurate diagnosis that addresses the actual problem',
      'Safe, code-compliant repairs that last',
      'Clear explanation of what went wrong and how it was fixed',
      'Honest assessment of whether repair or replacement is the better option',
    ],
    faqs: [
      {
        question: 'How do I know if an outlet needs repair or replacement?',
        answer:
          'If an outlet is not working, feels warm to the touch, shows discoloration, or is loose, it should be inspected right away. We can diagnose whether the issue is the outlet itself, the wiring behind it, or a problem elsewhere on the circuit.',
      },
      {
        question: 'Why do my lights flicker when I turn on an appliance?',
        answer:
          'Flickering can indicate a loose connection, an overloaded circuit, or a problem with the wiring. It is important to have it diagnosed, as some causes are minor while others can be a fire hazard.',
      },
      {
        question: 'Can you find the cause of a breaker that keeps tripping?',
        answer:
          'Yes. We systematically troubleshoot the circuit to identify whether the trip is caused by an overload, a short circuit, a ground fault, or a faulty breaker — and then repair the underlying issue.',
      },
    ],
    ctaLabel: 'Schedule a Repair Visit',
    relatedServices: [
      { slug: 'circuit-breaker-services-valley-al', label: 'Explore Circuit Breaker Services' },
      { slug: 'electrical-power-restoration-diagnostics-valley-al', label: 'View Power Restoration & Diagnostics' },
      { slug: 'outlet-switch-installation-valley-al', label: 'See Outlet & Switch Installation' },
    ],
  },
  {
    slug: 'electrical-panel-repair-upgrades-valley-al',
    title: 'Electrical Panel Repair & Upgrades',
    h1: 'Electrical Panel Repair & Upgrades in Valley, Alabama',
    shortName: 'Panel Repair & Upgrades',
    description:
      'Panel upgrades, repairs, and replacements in Valley, AL. Increase your electrical capacity and improve safety with a modern electrical panel.',
    metaTitle: 'Electrical Panel Upgrade & Repair Valley, AL | Bausley Electrical',
    metaDescription:
      'Electrical panel repair and panel upgrades in Valley, Alabama. Increase capacity, improve safety, and replace outdated panels. Call 334-848-0075.',
    heroImage: images.electricianPanel,
    contentImage: images.panelWiring,
    icon: 'LayoutGrid',
    shortDescription:
      'Panel repair, replacement, and capacity upgrades to safely meet your home\'s electrical demands.',
    overview:
      'Your electrical panel is the heart of your home\'s electrical system. If your panel is outdated, damaged, or too small for your household\'s power needs, it can lead to tripping breakers, flickering lights, and serious safety risks. Bausley Electrical Services repairs and upgrades electrical panels throughout Valley, Alabama, ensuring your home has the capacity and protection it needs.',
    whatWeDo: [
      'Panel inspection and safety assessment',
      'Panel repair — damaged bus bars, loose lugs, failed breakers',
      'Panel upgrade from lower amperage to 200A or higher',
      'Full panel replacement for outdated or unsafe panels',
      'Sub-panel installation for additions and workshops',
      'Transfer switch installation for generators',
    ],
    warningSigns: [
      'Breakers trip frequently, especially when using multiple appliances',
      'The panel is warm to the touch or shows signs of corrosion',
      'You still have an older fuse box instead of a breaker panel',
      'Your panel is too small for your current electrical needs',
      'Burning smell or visible scorching around the panel',
    ],
    benefits: [
      'Increased electrical capacity for modern appliances',
      'Improved safety with modern breakers and proper grounding',
      'Elimination of nuisance tripping from overloaded circuits',
      'Compliance with current electrical codes',
    ],
    faqs: [
      {
        question: 'How do I know if I need a panel upgrade?',
        answer:
          'Common signs include frequent breaker trips, flickering lights, a warm panel, or a panel rated below 200 amps for a modern household. We can inspect your panel and recommend whether an upgrade is needed.',
      },
      {
        question: 'How long does a panel upgrade take?',
        answer:
          'A standard panel upgrade is typically completed in a single day, though the exact timeline depends on the complexity of the installation and any additional wiring work required.',
      },
      {
        question: 'Can you replace a fuse box with a breaker panel?',
        answer:
          'Yes. We replace outdated fuse boxes with modern breaker panels, bringing your electrical system up to current safety standards and code requirements.',
      },
    ],
    ctaLabel: 'Explore Panel Upgrades',
    relatedServices: [
      { slug: 'circuit-breaker-services-valley-al', label: 'View Circuit Breaker Services' },
      { slug: 'electrical-grounding-safety-valley-al', label: 'See Grounding & Safety Improvements' },
      { slug: 'electrical-installation-valley-al', label: 'Explore Electrical Installation' },
    ],
  },
  {
    slug: 'circuit-breaker-services-valley-al',
    title: 'Circuit Breaker Services',
    h1: 'Circuit Breaker Services in Valley, Alabama',
    shortName: 'Circuit Breaker Services',
    description:
      'Circuit breaker installation, replacement, and repair in Valley, AL. Stop nuisance tripping and protect your home with properly functioning breakers.',
    metaTitle: 'Circuit Breaker Services Valley, AL | Bausley Electrical Services',
    metaDescription:
      'Circuit breaker installation, replacement, and repair in Valley, Alabama. Stop nuisance tripping, protect your home, and ensure safe operation. Call 334-848-0075.',
    heroImage: images.circuitBreaker,
    contentImage: images.relayPanel,
    icon: 'Zap',
    shortDescription:
      'Breaker installation, replacement, and repair to keep your circuits protected and reliable.',
    overview:
      'Circuit breakers are your home\'s first line of defense against electrical overloads, short circuits, and ground faults. When a breaker fails, trips constantly, or will not reset, it puts your home at risk. Bausley Electrical Services provides complete circuit breaker services in Valley, Alabama — from individual breaker replacement to full circuit analysis and repair.',
    whatWeDo: [
      'Breaker testing and fault diagnosis',
      'Replacement of faulty or failed breakers',
      'Dedicated circuit breaker installation for appliances',
      'GFCI and AFCI breaker installation for safety compliance',
      'Circuit load balancing and analysis',
      'Breaker panel tuning and labeling',
    ],
    warningSigns: [
      'A breaker will not stay reset and trips immediately',
      'Breakers trip when you use specific appliances or outlets',
      'A breaker feels hot or shows signs of damage',
      'You hear buzzing from the breaker panel',
      'Your home still uses older breakers without GFCI or AFCI protection',
    ],
    benefits: [
      'Reliable circuit protection that works when you need it',
      'Reduced nuisance tripping from properly matched breakers',
      'Compliance with modern GFCI and AFCI safety requirements',
      'Balanced electrical loads across your panel',
    ],
    faqs: [
      {
        question: 'What is the difference between a GFCI and AFCI breaker?',
        answer:
          'A GFCI (Ground Fault Circuit Interrupter) protects against electric shock in wet areas like kitchens and bathrooms. An AFCI (Arc Fault Circuit Interrupter) detects dangerous electrical arcs that can cause fires. Both are now required by code in specific areas of the home.',
      },
      {
        question: 'Why does my breaker keep tripping?',
        answer:
          'Frequent tripping can be caused by an overloaded circuit, a short circuit, a ground fault, or a failing breaker. We diagnose the specific cause and recommend whether the breaker needs replacement or the circuit needs repair.',
      },
      {
        question: 'Can I replace a breaker myself?',
        answer:
          'Breaker replacement involves working inside the electrical panel, which carries serious safety risks. It should always be performed by a qualified electrician to ensure proper installation and safety.',
      },
    ],
    ctaLabel: 'Schedule Breaker Service',
    relatedServices: [
      { slug: 'electrical-panel-repair-upgrades-valley-al', label: 'Explore Panel Repair & Upgrades' },
      { slug: 'electrical-repair-troubleshooting-valley-al', label: 'View Repair & Troubleshooting' },
      { slug: 'electrical-grounding-safety-valley-al', label: 'See Grounding & Safety' },
    ],
  },
  {
    slug: 'wiring-rewiring-valley-al',
    title: 'Wiring & Rewiring',
    h1: 'Wiring & Rewiring Services in Valley, Alabama',
    shortName: 'Wiring & Rewiring',
    description:
      'Whole-home rewiring and wiring repair in Valley, AL. Replace outdated, damaged, or unsafe wiring with modern, code-compliant electrical wiring.',
    metaTitle: 'Wiring & Rewiring Valley, AL | Bausley Electrical Services',
    metaDescription:
      'Professional wiring and rewiring services in Valley, Alabama. Replace outdated wiring, fix damaged circuits, and ensure safe, reliable electrical service. Call 334-848-0075.',
    heroImage: images.wiringWall,
    contentImage: images.wiringExposed,
    icon: 'Cable',
    shortDescription:
      'Complete wiring and rewiring for older homes, renovations, and damaged wiring replacement.',
    overview:
      'Wiring is the backbone of your home\'s electrical system. Older homes in Valley may have wiring that is degraded, insufficient for modern power demands, or no longer safe. Bausley Electrical Services provides complete wiring and rewiring services, from replacing individual damaged runs to whole-home rewiring projects that bring your electrical system up to modern standards.',
    whatWeDo: [
      'Whole-home rewiring for older or renovated properties',
      'Replacement of damaged, degraded, or unsafe wiring',
      'New circuit wiring for additions and remodeled spaces',
      'Wiring inspection and safety assessment',
      'Replacement of outdated wiring types',
      'Structured wiring for modern electrical loads',
    ],
    warningSigns: [
      'Your home is more than 40 years old and has original wiring',
      'Wiring is visible and shows cracking, fraying, or discoloration',
      'Outlets only accept two-prong plugs (no ground)',
      'Lights dim or flicker when appliances turn on',
      'You smell burning plastic near outlets or switches',
      'Circuit breakers trip frequently or fuses blow regularly',
    ],
    benefits: [
      'Safe, modern wiring that handles today\'s electrical loads',
      'Elimination of fire hazards from degraded or outdated wiring',
      'Proper grounding throughout your home',
      'Increased capacity for modern appliances and devices',
    ],
    faqs: [
      {
        question: 'How long does whole-home rewiring take?',
        answer:
          'A complete rewiring project typically takes several days to a week, depending on the size of the home, accessibility of the wiring, and the scope of work. We provide a detailed timeline before starting.',
      },
      {
        question: 'Do I need to move out during rewiring?',
        answer:
          'In most cases, you can stay in your home during rewiring, though power will be temporarily off in the areas being worked on. We coordinate the work to minimize disruption.',
      },
      {
        question: 'How do I know if my home needs rewiring?',
        answer:
          'If your home is over 40 years old with original wiring, has two-prong outlets, flickering lights, or visible signs of wire damage, an inspection is recommended. We assess your wiring and recommend whether full or partial rewiring is needed.',
      },
    ],
    ctaLabel: 'Discuss Your Wiring Project',
    relatedServices: [
      { slug: 'electrical-installation-valley-al', label: 'View Electrical Installation' },
      { slug: 'electrical-grounding-safety-valley-al', label: 'See Grounding & Safety Improvements' },
      { slug: 'outlet-switch-installation-valley-al', label: 'Explore Outlet & Switch Installation' },
    ],
  },
  {
    slug: 'outlet-switch-installation-valley-al',
    title: 'Outlet & Switch Installation',
    h1: 'Outlet & Switch Installation in Valley, Alabama',
    shortName: 'Outlet & Switch Installation',
    description:
      'Install, replace, or upgrade outlets and switches in Valley, AL. GFCI outlets, USB outlets, dimmers, smart switches, and more.',
    metaTitle: 'Outlet & Switch Installation Valley, AL | Bausley Electrical',
    metaDescription:
      'Outlet and switch installation in Valley, Alabama. GFCI outlets, USB outlets, dimmers, smart switches, and replacements. Safe, professional installation. Call 334-848-0075.',
    heroImage: images.outletInstall,
    contentImage: images.outletGloved,
    icon: 'ToggleLeft',
    shortDescription:
      'Outlet and switch installation, replacement, and upgrades — including GFCI, USB, and dimmer options.',
    overview:
      'Outlets and switches are the parts of your electrical system you interact with every day. Whether you need additional outlets, safer GFCI protection in wet areas, dimmer switches for better lighting control, or replacement of worn-out devices, Bausley Electrical Services provides professional installation throughout Valley, Alabama.',
    whatWeDo: [
      'New outlet installation in any room',
      'GFCI outlet installation for kitchens, baths, and outdoor areas',
      'USB outlet installation for convenient device charging',
      'Dimmer switch installation for lighting control',
      'Smart switch and timer installation',
      'Replacement of damaged, loose, or discolored outlets and switches',
    ],
    warningSigns: [
      'Outlets are loose, cracked, or discolored',
      'You do not have GFCI protection in kitchens, bathrooms, or outdoors',
      'Plugs fall out of outlets easily',
      'Switches are difficult to toggle or feel warm',
      'You need additional outlets to eliminate extension cord use',
    ],
    benefits: [
      'Safe, properly grounded outlets throughout your home',
      'GFCI protection where required by code',
      'Convenient USB charging without adapters',
      'Modern dimmer and smart switch options for energy savings',
    ],
    faqs: [
      {
        question: 'Where are GFCI outlets required?',
        answer:
          'Current codes require GFCI protection in kitchens, bathrooms, garages, outdoor areas, crawl spaces, and near sinks. If your home lacks GFCI protection in these areas, we recommend upgrading.',
      },
      {
        question: 'Can you install a smart switch if I do not have a neutral wire?',
        answer:
          'Some smart switches require a neutral wire and some do not. We can assess your existing wiring and recommend a compatible smart switch option, or install a neutral wire if needed.',
      },
      {
        question: 'How many outlets can you add to a room?',
        answer:
          'The number of outlets depends on the circuit capacity and code requirements. We assess your existing wiring and recommend a safe layout that meets your needs and complies with local codes.',
      },
    ],
    ctaLabel: 'Schedule Outlet & Switch Work',
    relatedServices: [
      { slug: 'lighting-installation-valley-al', label: 'Explore Lighting Installation' },
      { slug: 'electrical-repair-troubleshooting-valley-al', label: 'View Repair & Troubleshooting' },
      { slug: 'wiring-rewiring-valley-al', label: 'See Wiring & Rewiring' },
    ],
  },
  {
    slug: 'lighting-installation-valley-al',
    title: 'Lighting Installation',
    h1: 'Lighting Installation in Valley, Alabama',
    shortName: 'Lighting Installation',
    description:
      'Interior and exterior lighting installation in Valley, AL. Recessed lighting, pendant lights, landscape lighting, and fixture replacement.',
    metaTitle: 'Lighting Installation Valley, AL | Bausley Electrical Services',
    metaDescription:
      'Professional lighting installation in Valley, Alabama. Recessed lighting, pendant lights, outdoor lighting, landscape lighting, and fixture replacement. Call 334-848-0075.',
    heroImage: images.lightBulb,
    contentImage: images.lightHanging,
    icon: 'Lightbulb',
    shortDescription:
      'Interior and exterior lighting installation — recessed lights, pendants, landscape lighting, and more.',
    overview:
      'Good lighting transforms a space. Whether you want to update a room with modern recessed lighting, add pendant lights over a kitchen island, install outdoor security lighting, or replace old fixtures, Bausley Electrical Services provides professional lighting installation throughout Valley, Alabama.',
    whatWeDo: [
      'Recessed and can lighting installation',
      'Pendant and chandelier installation',
      'Outdoor and security lighting installation',
      'Landscape and pathway lighting',
      'Under-cabinet lighting installation',
      'Fixture replacement and upgrades',
    ],
    warningSigns: [
      'Your current fixtures are outdated or damaged',
      'You want to modernize a room with new lighting',
      'You need additional lighting in dark areas of your home or yard',
      'Existing light fixtures flicker or do not work properly',
    ],
    benefits: [
      'Professional installation that is safe and code-compliant',
      'Proper wiring for new fixtures and lighting layouts',
      'Energy-efficient lighting options',
      'Enhanced curb appeal with outdoor and landscape lighting',
    ],
    faqs: [
      {
        question: 'Can you install recessed lighting in an existing ceiling?',
        answer:
          'Yes. We install recessed lighting in existing ceilings, routing wiring through the attic or using remodel-rated fixtures. We assess access and recommend the best approach for your space.',
      },
      {
        question: 'Do you install outdoor and landscape lighting?',
        answer:
          'Yes. We install outdoor security lighting, pathway lights, landscape lighting, and porch or entry fixtures, all with proper weather-rated fixtures and wiring.',
      },
      {
        question: 'Can you replace a light fixture I already purchased?',
        answer:
          'Yes. We can install fixtures you have purchased, provided they are compatible with your existing wiring and junction box. We verify compatibility before installation.',
      },
    ],
    ctaLabel: 'View Lighting Installation',
    relatedServices: [
      { slug: 'ceiling-fan-installation-valley-al', label: 'Explore Ceiling Fan Installation' },
      { slug: 'outlet-switch-installation-valley-al', label: 'See Outlet & Switch Installation' },
      { slug: 'electrical-installation-valley-al', label: 'View Electrical Installation' },
    ],
  },
  {
    slug: 'ceiling-fan-installation-valley-al',
    title: 'Ceiling Fan Installation',
    h1: 'Ceiling Fan Installation in Valley, Alabama',
    shortName: 'Ceiling Fan Installation',
    description:
      'Ceiling fan installation and replacement in Valley, AL. Safe mounting, proper wiring, and support box installation for indoor and outdoor fans.',
    metaTitle: 'Ceiling Fan Installation Valley, AL | Bausley Electrical Services',
    metaDescription:
      'Ceiling fan installation and replacement in Valley, Alabama. Indoor, outdoor, and heavy-duty fans with proper wiring and support. Call 334-848-0075.',
    heroImage: images.ceilingFanRoom,
    contentImage: images.ceilingFan,
    icon: 'Fan',
    shortDescription:
      'Ceiling fan installation and replacement with proper support, wiring, and mounting.',
    overview:
      'Ceiling fans improve comfort and reduce energy costs, but proper installation is critical for safety and performance. A ceiling fan that is not properly supported or wired can be a serious hazard. Bausley Electrical Services installs ceiling fans throughout Valley, Alabama, ensuring proper support boxes, secure mounting, and correct wiring every time.',
    whatWeDo: [
      'Ceiling fan installation in any room',
      'Outdoor and damp-rated ceiling fan installation',
      'Ceiling fan replacement and upgrades',
      'Support box installation and reinforcement',
      'Fan speed control and remote installation',
      'Lighted ceiling fan wiring and configuration',
    ],
    warningSigns: [
      'You have a fan still in the box that needs professional installation',
      'Your existing fan wobbles, clicks, or makes noise',
      'You want to replace an older fan with a new model',
      'Your ceiling junction box is not rated for a ceiling fan',
    ],
    benefits: [
      'Safe, secure mounting with proper fan-rated support boxes',
      'Correct wiring for fan and light functions',
      'Smooth, wobble-free operation',
      'Proper control setup — wall control, remote, or both',
    ],
    faqs: [
      {
        question: 'Do I need a special junction box for a ceiling fan?',
        answer:
          'Yes. Ceiling fans require a fan-rated support box that can hold the weight and movement of the fan. Standard light fixture boxes are not safe for ceiling fans. We install proper support boxes as part of every fan installation.',
      },
      {
        question: 'Can you install a ceiling fan where there is no existing fixture?',
        answer:
          'Yes. We can run wiring and install a support box in a new location, including switch wiring. The feasibility depends on attic access and ceiling structure, which we assess before starting.',
      },
      {
        question: 'Can you install a ceiling fan outdoors?',
        answer:
          'Yes, provided the fan is rated for outdoor or damp locations. We use appropriate weather-rated wiring and mounts for outdoor installations.',
      },
    ],
    ctaLabel: 'Schedule Ceiling Fan Installation',
    relatedServices: [
      { slug: 'lighting-installation-valley-al', label: 'View Lighting Installation' },
      { slug: 'outlet-switch-installation-valley-al', label: 'See Outlet & Switch Installation' },
      { slug: 'electrical-installation-valley-al', label: 'Explore Electrical Installation' },
    ],
  },
  {
    slug: 'electrical-grounding-safety-valley-al',
    title: 'Electrical Grounding & Safety Improvements',
    h1: 'Electrical Grounding & Safety Improvements in Valley, Alabama',
    shortName: 'Grounding & Safety',
    description:
      'Electrical grounding, surge protection, and safety improvements in Valley, AL. Protect your home and family with proper grounding and safety upgrades.',
    metaTitle: 'Electrical Grounding & Safety Valley, AL | Bausley Electrical',
    metaDescription:
      'Electrical grounding and safety improvements in Valley, Alabama. Grounding system installation, surge protection, GFCI/AFCI upgrades. Call 334-848-0075.',
    heroImage: images.greenBoxes,
    contentImage: images.electricalMeters,
    icon: 'ShieldCheck',
    shortDescription:
      'Grounding system upgrades, surge protection, and safety improvements for your home\'s electrical system.',
    overview:
      'Proper grounding and safety improvements are essential for protecting your home and family from electrical hazards. Many older homes in Valley lack adequate grounding, whole-house surge protection, or modern safety devices like GFCI and AFCI protection. Bausley Electrical Services provides comprehensive electrical safety improvements to bring your system up to modern standards.',
    whatWeDo: [
      'Grounding system installation and upgrade',
      'Whole-house surge protection installation',
      'GFCI and AFCI protection upgrades',
      'Safety inspection and hazard identification',
      'Bonding and grounding electrode system repair',
      'Smoke and carbon monoxide detector wiring',
    ],
    warningSigns: [
      'Your home has two-prong outlets with no ground',
      'You have no whole-house surge protection',
      'Outlets in wet areas lack GFCI protection',
      'You have experienced a shock from an appliance or outlet',
      'Your grounding system is old or cannot be verified',
    ],
    benefits: [
      'Protection against electric shock and electrocution',
      'Safeguarded electronics and appliances from power surges',
      'Compliance with modern electrical safety codes',
      'Reduced risk of electrical fires',
    ],
    faqs: [
      {
        question: 'What does whole-house surge protection do?',
        answer:
          'A whole-house surge protector is installed at your electrical panel and protects your entire home from voltage spikes caused by lightning, grid switching, or other external surges. It supplements, but does not replace, point-of-use surge protectors for sensitive electronics.',
      },
      {
        question: 'Can you add grounding to an older home?',
        answer:
          'In many cases, yes. We can assess your existing wiring and determine the best approach — whether that is running new grounded wiring, installing GFCI outlets as an alternative where rewiring is not feasible, or upgrading your grounding electrode system.',
      },
      {
        question: 'How often should I have my electrical system inspected?',
        answer:
          'For homes over 30 years old, a safety inspection every 3-5 years is recommended. We also recommend an inspection before purchasing an older home, after major renovations, or if you notice any warning signs of electrical problems.',
      },
    ],
    ctaLabel: 'Schedule a Safety Assessment',
    relatedServices: [
      { slug: 'electrical-panel-repair-upgrades-valley-al', label: 'View Panel Repair & Upgrades' },
      { slug: 'circuit-breaker-services-valley-al', label: 'Explore Circuit Breaker Services' },
      { slug: 'wiring-rewiring-valley-al', label: 'See Wiring & Rewiring' },
    ],
  },
  {
    slug: 'electrical-power-restoration-diagnostics-valley-al',
    title: 'Electrical Power Restoration & Electrical Diagnostics',
    h1: 'Electrical Power Restoration & Diagnostics in Valley, Alabama',
    shortName: 'Power Restoration & Diagnostics',
    description:
      'Power restoration and advanced electrical diagnostics in Valley, AL. Find and fix power loss, partial outages, and complex electrical issues.',
    metaTitle: 'Power Restoration & Electrical Diagnostics Valley, AL | Bausley Electrical',
    metaDescription:
      'Electrical power restoration and diagnostics in Valley, Alabama. Lost power, partial outages, and complex electrical problems diagnosed and repaired. Call 334-848-0075.',
    heroImage: images.multimeterTools,
    contentImage: images.circuitBoard,
    icon: 'Activity',
    shortDescription:
      'Advanced diagnostics and power restoration for partial outages, unexplained power loss, and complex faults.',
    overview:
      'When you lose power in part of your home or experience unexplained electrical issues, finding the source requires experience and the right diagnostic tools. Bausley Electrical Services provides advanced electrical diagnostics and power restoration throughout Valley, Alabama, systematically tracing faults to their source and restoring safe, reliable power.',
    whatWeDo: [
      'Power restoration for partial and complete outages',
      'Advanced circuit tracing and fault diagnosis',
      'Voltage testing and electrical system analysis',
      'Identification of hidden wiring faults',
      'Neutral and grounding fault diagnosis',
      'Panel and service entrance diagnostics',
    ],
    warningSigns: [
      'Part of your home has lost power',
      'Outlets work intermittently or at reduced voltage',
      'Lights get brighter or dimmer unexpectedly',
      'You have power on some circuits but not others',
      'A breaker will not reset after tripping',
    ],
    benefits: [
      'Systematic diagnosis that finds the actual fault',
      'Restoration of safe, reliable power to affected circuits',
      'Identification of underlying issues before they cause further problems',
      'Clear explanation of the fault and the repair needed',
    ],
    faqs: [
      {
        question: 'Why does only part of my home have power?',
        answer:
          'Partial power loss can be caused by a tripped breaker, a failed breaker, a loose neutral connection, a damaged wire, or an issue with the utility service. We diagnose the specific cause and restore power safely.',
      },
      {
        question: 'What is a loose neutral and why is it dangerous?',
        answer:
          'A loose neutral connection can cause voltage to fluctuate — sending too much voltage to some circuits and too little to others. This can damage electronics and create fire hazards. It requires immediate diagnosis and repair.',
      },
      {
        question: 'Do you handle power loss caused by storm damage?',
        answer:
          'Yes. We can diagnose and repair electrical damage caused by storms, including damaged service entrances, water-damaged panels, and wiring faults. If the issue is on the utility side, we help coordinate with your power company.',
      },
    ],
    ctaLabel: 'Get Power Restored',
    relatedServices: [
      { slug: 'electrical-repair-troubleshooting-valley-al', label: 'View Repair & Troubleshooting' },
      { slug: 'circuit-breaker-services-valley-al', label: 'See Circuit Breaker Services' },
      { slug: 'electrical-panel-repair-upgrades-valley-al', label: 'Explore Panel Repair & Upgrades' },
    ],
  },
  {
    slug: 'emergency-electrician-valley-al',
    title: 'Emergency Electrician',
    h1: 'Emergency Electrician in Valley, AL',
    shortName: 'Emergency Electrician',
    description: '24/7 emergency electrical repair in Valley, AL. We respond quickly to power loss, sparking outlets, and burning smells to keep your family safe.',
    metaTitle: 'Emergency Electrician Valley, AL | 24/7 Electrical Repair',
    metaDescription: 'Fast, reliable emergency electrician in Valley, AL. Sparking outlets, power loss, and urgent electrical hazards repaired quickly and safely. Call now.',
    heroImage: images.multimeterTools,
    contentImage: images.circuitBoard,
    icon: 'AlertTriangle',
    shortDescription: 'Fast response for power loss, sparking wires, and urgent electrical hazards.',
    overview: 'Electrical emergencies do not wait for business hours. When you have sparking wires, a sudden power loss, or smell burning plastic, you need an emergency electrician in Valley, AL immediately. Bausley Electrical Services provides rapid, safe emergency electrical repair to protect your home from fire hazards and restore your power safely.',
    whatWeDo: [
      'Rapid response emergency electrical repair',
      'Safe isolation and repair of sparking outlets or wires',
      'Immediate troubleshooting for sudden partial or full power loss',
      'Emergency panel and breaker diagnostics',
      'Storm damage electrical assessment and make-safe repairs',
      'After-hours urgent electrical safety interventions'
    ],
    warningSigns: [
      'You smell burning plastic or ozone near electrical devices',
      'Outlets or switches are sparking or smoking',
      'You lost power and your breakers will not reset',
      'You have water leaking near your electrical panel',
      'A downed tree has damaged your property-side electrical service'
    ],
    benefits: [
      'Immediate prevention of electrical fires',
      'Fast restoration of power to keep your home running',
      'Peace of mind knowing a licensed professional handled the hazard',
      'Clear explanation of what went wrong and how to prevent it'
    ],
    faqs: [
      { question: 'What counts as an electrical emergency?', answer: 'Sparking, smoking, burning smells, hot panels, and sudden unexplained power loss are all emergencies that require immediate professional attention.' },
      { question: 'Should I touch a sparking outlet?', answer: 'No. Never touch a sparking outlet or the appliance plugged into it. Go to your main panel and turn off the breaker for that circuit immediately.' },
      { question: 'Do you handle emergency storm damage?', answer: 'Yes, we can perform make-safe repairs for property-side storm damage, preparing your home for utility reconnection.' }
    ],
    ctaLabel: 'Call For Emergency Service',
    relatedServices: [
      { slug: 'electrical-repair-troubleshooting-valley-al', label: 'View Repair Services' },
      { slug: 'electrical-power-restoration-diagnostics-valley-al', label: 'See Power Restoration' }
    ]
  },
  {
    slug: 'electrical-inspection-valley-al',
    title: 'Electrical Inspection',
    h1: 'Electrical Inspection in Valley, AL',
    shortName: 'Electrical Inspection',
    description: 'Thorough electrical inspections in Valley, AL for home buyers, sellers, and older properties. Ensure your home is code-compliant and safe.',
    metaTitle: 'Electrical Inspection Valley, AL | Bausley Electrical Services',
    metaDescription: 'Comprehensive electrical inspection in Valley, AL. Code compliance, safety audits, and pre-purchase home electrical inspections. Call 334-848-0075.',
    heroImage: images.greenBoxes,
    contentImage: images.electricalMeters,
    icon: 'ClipboardCheck',
    shortDescription: 'Detailed safety audits and code-compliance inspections for your home.',
    overview: 'Knowing the exact condition of your electrical system is crucial for safety and peace of mind. Bausley Electrical Services provides detailed electrical inspections in Valley, AL. Whether you are buying a new home, preparing to sell, or just want to ensure your older home is safe, our comprehensive safety audits uncover hidden hazards, code violations, and aging components before they become costly emergencies.',
    whatWeDo: [
      'Pre-purchase and pre-sale home electrical inspections',
      'Detailed safety audits of older electrical systems',
      'Code-compliance checks for unpermitted previous work',
      'Panel health and capacity assessments',
      'Grounding and bonding verification',
      'Thermal imaging checks for overheating components'
    ],
    warningSigns: [
      'You are buying an older home and want to ensure the wiring is safe',
      'Your home has DIY wiring from a previous owner',
      'You are experiencing frequent electrical quirks and want a full checkup',
      'Your insurance company requires an electrical safety audit'
    ],
    benefits: [
      'Total clarity on the health of your home’s electrical system',
      'Prevention of electrical fires by catching hazards early',
      'Leverage in home buying negotiations if serious issues are found',
      'A prioritized list of necessary repairs versus optional upgrades'
    ],
    faqs: [
      { question: 'What is included in a standard electrical inspection?', answer: 'We inspect the main panel, test breakers, check grounding, verify outlet safety (GFCI/AFCI), and look for signs of degraded wiring.' },
      { question: 'How often should an older home be inspected?', answer: 'Homes over 40 years old should ideally have a comprehensive electrical inspection every 5 to 7 years, or immediately upon moving in.' },
      { question: 'Can you fix the code violations you find?', answer: 'Yes. We provide a detailed report and can handle all necessary repairs to bring your home fully up to code.' }
    ],
    ctaLabel: 'Schedule an Inspection',
    relatedServices: [
      { slug: 'electrical-grounding-safety-valley-al', label: 'Explore Grounding & Safety' },
      { slug: 'wiring-rewiring-valley-al', label: 'View Wiring Services' }
    ]
  },
  {
    slug: 'generator-installation-valley-al',
    title: 'Generator Installation',
    h1: 'Generator Installation in Valley, AL',
    shortName: 'Generator Installation',
    description: 'Professional generator installation in Valley, AL. Whole-home standby generators, transfer switches, and backup power solutions.',
    metaTitle: 'Generator Installation Valley, AL | Backup Power Solutions',
    metaDescription: 'Expert generator installation in Valley, AL. Standby generators, transfer switches, and reliable backup power for your home. Call 334-848-0075.',
    heroImage: images.circuitBreaker,
    contentImage: images.techniciansInstall,
    icon: 'BatteryCharging',
    shortDescription: 'Whole-home standby generators and transfer switches for reliable backup power.',
    overview: 'Never get left in the dark during severe weather. Bausley Electrical Services specializes in professional generator installation in Valley, AL. We install whole-home standby generators and manual transfer switches for portable units, ensuring your home seamlessly transitions to backup power when the grid fails. Protect your family, keep your food fresh, and maintain critical medical equipment with our reliable backup power solutions.',
    whatWeDo: [
      'Whole-home standby generator installation',
      'Manual transfer switch installation for portable generators',
      'Automatic transfer switch (ATS) wiring and setup',
      'Generator sizing and load calculation',
      'Integration with existing electrical panels',
      'Post-installation testing and safety verification'
    ],
    warningSigns: [
      'You live in an area prone to frequent or prolonged power outages',
      'You have critical medical equipment that requires uninterrupted power',
      'You work from home and cannot afford grid downtime',
      'You want to increase your home’s value and resilience'
    ],
    benefits: [
      'Automatic power restoration seconds after a grid failure',
      'Protection of refrigerated food and HVAC systems during long outages',
      'Safe, code-compliant connection that prevents dangerous backfeeding',
      'Ultimate peace of mind during severe storm seasons'
    ],
    faqs: [
      { question: 'What size generator do I need?', answer: 'It depends on your needs. We perform a load calculation to determine if you need a smaller unit for critical circuits or a large unit to run your entire home, including the AC.' },
      { question: 'Can I just plug a portable generator into an outlet?', answer: 'No! This is incredibly dangerous and illegal (called backfeeding). You must have a properly installed transfer switch to use a portable generator safely.' },
      { question: 'Do standby generators turn on automatically?', answer: 'Yes. A standby generator equipped with an automatic transfer switch (ATS) detects a grid failure and turns on automatically within seconds.' }
    ],
    ctaLabel: 'Get a Generator Quote',
    relatedServices: [
      { slug: 'electrical-panel-repair-upgrades-valley-al', label: 'View Panel Upgrades' },
      { slug: 'electrical-power-restoration-diagnostics-valley-al', label: 'Explore Power Restoration' }
    ]
  },
  {
    slug: 'ev-charger-installation-valley-al',
    title: 'EV Charger Installation',
    h1: 'EV Charger Installation in Valley, AL',
    shortName: 'EV Charger Installation',
    description: 'Level 2 EV charger installation in Valley, AL. Tesla Wall Connectors, universal chargers, and dedicated charging circuits for fast home charging.',
    metaTitle: 'EV Charger Installation Valley, AL | Bausley Electrical Services',
    metaDescription: 'Professional EV charger installation in Valley, AL. Level 2 chargers, Tesla Wall Connectors, and dedicated charging circuits. Call 334-848-0075.',
    heroImage: images.wiringWall,
    contentImage: images.electricianDrill,
    icon: 'Car',
    shortDescription: 'Fast, safe Level 2 EV charging stations installed right in your garage.',
    overview: 'Charging your electric vehicle on a standard 120V outlet is painfully slow. Upgrade to fast home charging with a professional EV charger installation in Valley, AL. Bausley Electrical Services installs Level 2 charging stations, Tesla Wall Connectors, and dedicated 240V circuits to get your car charged and ready overnight. We ensure your electrical panel can handle the load and that the installation is flawlessly safe and code-compliant.',
    whatWeDo: [
      'Level 2 EV charger installation (all vehicle brands)',
      'Tesla Wall Connector installation and configuration',
      'Installation of NEMA 14-50 240V receptacles for plug-in chargers',
      'Dedicated high-amperage charging circuits',
      'Panel load calculations to ensure your home can support the charger',
      'Garage and outdoor charging station setups'
    ],
    warningSigns: [
      'You are tired of slow Level 1 charging taking 24+ hours',
      'You just purchased a new EV and need home charging',
      'Your breaker trips when you try to charge your car',
      'You need an outdoor-rated charger installed securely'
    ],
    benefits: [
      'Wake up every morning with a fully charged vehicle',
      'Safe, dedicated circuitry that will not overload your home',
      'Maximized charging speeds specifically tailored to your EV’s capacity',
      'Added resale value to your home for future EV owners'
    ],
    faqs: [
      { question: 'Can my current electrical panel handle a Level 2 charger?', answer: 'Level 2 chargers require a dedicated 240V circuit (usually 40-60 amps). We perform a load calculation to see if your panel has the capacity, or if a service upgrade is needed.' },
      { question: 'Do you install Tesla chargers?', answer: 'Yes, we professionally install Tesla Wall Connectors as well as universal Level 2 chargers for brands like Ford, Chevy, and Hyundai.' },
      { question: 'Is a hardwired charger better than a plug-in (NEMA 14-50)?', answer: 'Hardwired chargers are generally safer, less prone to nuisance tripping with GFCI breakers, and can often deliver slightly faster charging speeds.' }
    ],
    ctaLabel: 'Schedule EV Charger Install',
    relatedServices: [
      { slug: 'electrical-panel-repair-upgrades-valley-al', label: 'View Panel Upgrades' },
      { slug: 'service-upgrade-electrician-valley-al', label: 'Explore Service Upgrades' }
    ]
  },
  {
    slug: 'surge-protection-valley-al',
    title: 'Surge Protection',
    h1: 'Whole-Home Surge Protection in Valley, AL',
    shortName: 'Surge Protection',
    description: 'Whole-home surge protection installation in Valley, AL. Protect your expensive appliances, TVs, and smart devices from destructive power surges.',
    metaTitle: 'Surge Protection Valley, AL | Whole-Home Surge Protectors',
    metaDescription: 'Whole-home surge protection in Valley, AL. Guard your appliances and electronics from lightning and power grid spikes. Call 334-848-0075.',
    heroImage: images.greenBoxes,
    contentImage: images.panelWiring,
    icon: 'Shield',
    shortDescription: 'Protect your valuable electronics from lightning and grid surges.',
    overview: 'Modern homes are packed with sensitive, expensive electronics—smart TVs, computers, HVAC boards, and smart appliances. A single power surge from lightning or grid switching can destroy them all instantly. Bausley Electrical Services installs whole-home surge protection in Valley, AL directly at your electrical panel. This acts as a massive shield, stopping destructive voltage spikes before they ever reach your outlets.',
    whatWeDo: [
      'Whole-home surge protector installation at the main panel',
      'Type 1 and Type 2 surge protection device (SPD) integration',
      'Assessment of home grounding systems to ensure surge protection works',
      'Layered surge protection strategies for sensitive home offices',
      'Replacement of deployed or expired surge protectors'
    ],
    warningSigns: [
      'You live in an area with frequent lightning storms',
      'You have thousands of dollars invested in home electronics',
      'Your power company frequently switches grid loads, causing flickers',
      'You have lost an appliance or TV to a power surge in the past'
    ],
    benefits: [
      'Comprehensive protection for everything plugged into your home',
      'Prevention of expensive appliance replacements due to fried control boards',
      'Enhanced lifespan for your daily electronics',
      'Peace of mind during severe Alabama thunderstorms'
    ],
    faqs: [
      { question: 'Do I still need power strips if I have whole-home surge protection?', answer: 'Yes. A layered approach is best. The whole-home unit stops massive external surges, while high-quality point-of-use power strips handle tiny internal surges generated by your own appliances.' },
      { question: 'How does a whole-home surge protector work?', answer: 'It is installed at your electrical panel. When it detects a dangerous voltage spike, it instantly shunts the excess electricity harmlessly into the earth through your home’s grounding system.' },
      { question: 'Do surge protectors wear out?', answer: 'Yes. Every time they absorb a surge, their capacity diminishes. Most have LED indicator lights to tell you when they need to be replaced.' }
    ],
    ctaLabel: 'Protect Your Home Today',
    relatedServices: [
      { slug: 'electrical-grounding-safety-valley-al', label: 'View Grounding & Safety' },
      { slug: 'electrical-panel-repair-upgrades-valley-al', label: 'Explore Panel Repair' }
    ]
  },
  {
    slug: 'commercial-electrician-valley-al',
    title: 'Commercial Electrician',
    h1: 'Commercial Electrician in Valley, AL',
    shortName: 'Commercial Electrician',
    description: 'Dependable commercial electrician in Valley, AL. We handle retail build-outs, office wiring, commercial lighting, and business electrical repairs.',
    metaTitle: 'Commercial Electrician Valley, AL | Bausley Electrical Services',
    metaDescription: 'Top-rated commercial electrician in Valley, AL. Office wiring, retail build-outs, commercial lighting, and reliable business electrical repair. Call today.',
    heroImage: images.wiringWall,
    contentImage: images.techniciansInstall,
    icon: 'Building',
    shortDescription: 'Dedicated electrical services for retail, offices, and commercial properties.',
    overview: 'Your business cannot afford electrical downtime. Whether you are opening a new retail location, upgrading office lighting, or dealing with equipment faults, you need a responsive commercial electrician in Valley, AL. Bausley Electrical Services understands commercial codes and the demands of local businesses. We provide efficient, high-quality commercial electrical installation and repair to keep your operations running smoothly and safely.',
    whatWeDo: [
      'Commercial electrical build-outs and remodeling',
      'Office wiring, data cabling, and workstation power setup',
      'Commercial lighting installation and LED retrofits',
      'Dedicated circuitry for heavy commercial equipment',
      'Commercial panel upgrades and three-phase power solutions',
      'Routine maintenance and rapid commercial electrical repair'
    ],
    warningSigns: [
      'You are moving into a new commercial space that needs customization',
      'Your business is experiencing tripped breakers halting productivity',
      'Your warehouse or retail lighting is dim and energy-inefficient',
      'You need dedicated power for new machinery or commercial appliances'
    ],
    benefits: [
      'Minimized business downtime through fast, reliable service',
      'Strict adherence to commercial electrical codes and safety standards',
      'Lower overhead costs through energy-efficient commercial LED upgrades',
      'A professional, clean workspace powered exactly to your specifications'
    ],
    faqs: [
      { question: 'Do you handle electrical work for retail build-outs?', answer: 'Yes, we work closely with business owners and general contractors to complete the electrical phase of retail and office build-outs on schedule.' },
      { question: 'Can you install dedicated circuits for commercial equipment?', answer: 'Absolutely. We regularly run dedicated, high-amperage circuits for heavy machinery, commercial kitchens, and server rooms.' },
      { question: 'Do you offer commercial LED lighting upgrades?', answer: 'Yes, upgrading to LED is one of the best investments a business can make. We replace old fluorescents and metal halides with bright, efficient LED fixtures.' }
    ],
    ctaLabel: 'Discuss Commercial Services',
    relatedServices: [
      { slug: 'lighting-installation-valley-al', label: 'Explore Lighting Installation' },
      { slug: 'electrical-panel-repair-upgrades-valley-al', label: 'View Panel Upgrades' }
    ]
  },
  {
    slug: 'residential-electrician-valley-al',
    title: 'Residential Electrician',
    h1: 'Trusted Residential Electrician in Valley, AL',
    shortName: 'Residential Electrician',
    description: 'Your go-to residential electrician in Valley, AL. We handle all home electrical needs, from troubleshooting and repairs to full house rewires.',
    metaTitle: 'Residential Electrician Valley, AL | Home Electrical Expert',
    metaDescription: 'Trusted residential electrician in Valley, AL. We provide comprehensive home electrical services, repairs, and installations. Call 334-848-0075.',
    heroImage: images.residentialHome,
    contentImage: images.wiringSafety,
    icon: 'Home',
    shortDescription: 'Complete home electrical services provided by trusted local experts.',
    overview: 'When it comes to your home, you want an electrician you can trust. Bausley Electrical Services is the premier residential electrician in Valley, AL. We specialize entirely in the unique needs of homeowners. Whether you need a simple switch replaced, a ceiling fan hung, or a complete home rewire, we treat your property with the utmost respect. We deliver clear communication, upfront pricing, and impeccable workmanship on every residential project.',
    whatWeDo: [
      'Comprehensive residential electrical troubleshooting',
      'Home lighting, outlet, and ceiling fan installation',
      'Electrical panel upgrades for modern homes',
      'Home additions, basement finishes, and remodeling electrical',
      'Code compliance updates for older residential properties',
      'Outdoor and landscape residential electrical work'
    ],
    warningSigns: [
      'You have a honey-do list of electrical tasks you want done safely',
      'You are remodeling your home and need a dedicated residential expert',
      'Your home’s electrical system feels outdated and unreliable',
      'You want to hire a local, trusted expert rather than a massive corporate franchise'
    ],
    benefits: [
      'Personalized, respectful service tailored specifically to homeowners',
      'Clean work areas—we leave your home as pristine as we found it',
      'Clear explanations of the work without confusing jargon',
      'Long-lasting repairs that keep your family safe for decades'
    ],
    faqs: [
      { question: 'Do you specialize in older homes?', answer: 'Yes, a large part of our residential work involves bringing older Valley homes up to modern safety and capacity standards.' },
      { question: 'Can you handle small residential jobs?', answer: 'Absolutely. Whether it is changing a hard-to-reach light fixture or completely rewiring a house, we handle residential jobs of all sizes.' },
      { question: 'Are you licensed and insured for residential work?', answer: 'Yes, we are fully licensed, insured, and deeply experienced in all residential electrical codes and best practices.' }
    ],
    ctaLabel: 'Book Residential Service',
    relatedServices: [
      { slug: 'electrical-installation-valley-al', label: 'View Electrical Installation' },
      { slug: 'electrical-repair-troubleshooting-valley-al', label: 'Explore Repair Services' }
    ]
  },
  {
    slug: 'smoke-detector-installation-valley-al',
    title: 'Smoke Detector Installation',
    h1: 'Smoke Detector Installation in Valley, AL',
    shortName: 'Smoke Detectors',
    description: 'Hardwired smoke detector installation in Valley, AL. Upgrade to interconnected smoke and carbon monoxide alarms for ultimate family safety.',
    metaTitle: 'Smoke Detector Installation Valley, AL | Hardwired Alarms',
    metaDescription: 'Professional smoke detector installation in Valley, AL. Hardwired, interconnected smoke and carbon monoxide alarms. Call 334-848-0075.',
    heroImage: images.ceilingFanRoom,
    contentImage: images.lightHanging,
    icon: 'BellRing',
    shortDescription: 'Hardwired, interconnected smoke and carbon monoxide alarm installation.',
    overview: 'Battery-operated smoke alarms are better than nothing, but they are not the safest option. Bausley Electrical Services provides hardwired smoke detector installation in Valley, AL. We install modern, interconnected smoke and carbon monoxide (CO) detectors. When one alarm detects smoke, every alarm in the house sounds simultaneously, giving your family maximum time to escape. We ensure your home meets all modern fire safety codes.',
    whatWeDo: [
      'Hardwired smoke detector installation with battery backup',
      'Carbon monoxide (CO) detector installation',
      'Interconnected alarm system wiring (when one sounds, they all sound)',
      'Replacement of expired or chirping smoke detectors',
      'Strategic placement of detectors according to NFPA fire codes',
      'Smart smoke detector installation (e.g., Nest Protect)'
    ],
    warningSigns: [
      'Your current smoke detectors are over 10 years old (they expire!)',
      'Your alarms are constantly chirping despite new batteries',
      'You rely solely on battery-operated, non-interconnected alarms',
      'You do not have a dedicated carbon monoxide detector in your home'
    ],
    benefits: [
      'Ultimate safety: interconnected alarms wake the whole house instantly',
      'No more changing batteries constantly (10-year sealed backups available)',
      'Compliance with strict modern building and fire codes',
      'Dual protection against both fire and silent carbon monoxide leaks'
    ],
    faqs: [
      { question: 'Do smoke detectors really expire?', answer: 'Yes. The sensors in smoke and CO detectors degrade over time. The NFPA requires replacement of all smoke detectors every 10 years, and CO detectors every 5-7 years.' },
      { question: 'What does interconnected mean?', answer: 'Interconnected means the alarms communicate via a physical wire or wirelessly. If a fire starts in the basement, the alarm in your upstairs bedroom will sound immediately.' },
      { question: 'Where should smoke detectors be placed?', answer: 'Code requires them inside every bedroom, outside every sleeping area, and on every level of the home, including the basement.' }
    ],
    ctaLabel: 'Upgrade Your Smoke Detectors',
    relatedServices: [
      { slug: 'electrical-grounding-safety-valley-al', label: 'View Grounding & Safety' },
      { slug: 'electrical-installation-valley-al', label: 'Explore Electrical Installation' }
    ]
  },
  {
    slug: 'security-lighting-valley-al',
    title: 'Security Lighting',
    h1: 'Security Lighting Installation in Valley, AL',
    shortName: 'Security Lighting',
    description: 'Deter intruders with professional security lighting in Valley, AL. Motion sensors, floodlights, and perimeter lighting installed safely.',
    metaTitle: 'Security Lighting Installation Valley, AL | Motion & Floodlights',
    metaDescription: 'Expert security lighting installation in Valley, AL. Motion sensors, floodlights, and outdoor perimeter lighting to protect your home. Call 334-848-0075.',
    heroImage: images.lightBulb,
    contentImage: images.wiringWall,
    icon: 'ShieldAlert',
    shortDescription: 'Motion-activated floodlights and perimeter lighting to deter intruders.',
    overview: 'A well-lit home is a safe home. Darkness is an intruder’s best friend, which is why Bausley Electrical Services provides expert security lighting installation in Valley, AL. We strategically install high-powered LED floodlights, ultra-responsive motion sensors, and robust perimeter lighting to eliminate dark blind spots around your property. We pull the necessary outdoor wiring safely so your system operates flawlessly year-round.',
    whatWeDo: [
      'Installation of motion-activated LED security floodlights',
      'Perimeter and eave lighting installation',
      'Dusk-to-dawn sensor lighting setup',
      'Smart security lighting and camera-combo installation (e.g., Ring Floodlights)',
      'Strategic placement to eliminate dark spots and avoid blinding neighbors',
      'Weatherproof outdoor wiring and conduit installation'
    ],
    warningSigns: [
      'Your driveway, backyard, or side gates are pitch black at night',
      'There have been recent security concerns or break-ins in your neighborhood',
      'You are relying on weak porch lights for outdoor security',
      'You want to install a smart floodlight camera but need hardwired power'
    ],
    benefits: [
      'Proven deterrence against trespassers and burglars',
      'Safer navigation around your property at night',
      'Lower energy bills with highly efficient LED and motion-activated fixtures',
      'Increased property value and immense peace of mind'
    ],
    faqs: [
      { question: 'Can you install a floodlight where there is currently no power?', answer: 'Yes. We are experts at safely pulling new outdoor wiring and mounting weatherproof boxes exactly where you need the lighting most.' },
      { question: 'Are motion sensors adjustable?', answer: 'Yes, modern motion sensors allow us to adjust the sensitivity and range, so they trigger for people and cars, but not every time a small animal runs by.' },
      { question: 'Do you install smart security lights with cameras?', answer: 'Absolutely. We frequently install Ring, Nest, and other hardwired smart security floodlights that connect to your Wi-Fi.' }
    ],
    ctaLabel: 'Enhance Your Security',
    relatedServices: [
      { slug: 'lighting-installation-valley-al', label: 'View General Lighting' },
      { slug: 'electrical-installation-valley-al', label: 'Explore Electrical Installation' }
    ]
  },
  {
    slug: 'service-upgrade-electrician-valley-al',
    title: 'Service Upgrade Electrician',
    h1: 'Electrical Service Upgrade in Valley, AL',
    shortName: 'Service Upgrades',
    description: 'Need more power? Upgrade to a 200 amp or 400 amp electrical service in Valley, AL. We handle everything from the meter base to the panel.',
    metaTitle: 'Electrical Service Upgrade Valley, AL | 200 Amp Upgrades',
    metaDescription: 'Complete electrical service upgrade in Valley, AL. 200 amp and 400 amp upgrades, meter base replacement, and heavy load capacity. Call 334-848-0075.',
    heroImage: images.electricianPanel,
    contentImage: images.panelWiring,
    icon: 'Zap',
    shortDescription: 'Upgrade to 200A or 400A service to power modern appliances and EVs safely.',
    overview: 'If your home is running on an old 100-amp service, it simply cannot handle today’s electrical demands—especially if you want to add an EV charger, hot tub, or larger HVAC system. Bausley Electrical Services is your expert service upgrade electrician in Valley, AL. We handle complete electrical service upgrades (typically to 200A or 400A), coordinating with the utility company, replacing the meter base, and installing a new, high-capacity panel.',
    whatWeDo: [
      'Complete 200 Amp and 400 Amp electrical service upgrades',
      'Meter base replacement and utility line coordination',
      'Grounding electrode system installation to modern code',
      'Weatherhead and service entrance cable (SEC) replacement',
      'Total main breaker panel replacement during the upgrade',
      'Load calculation for heavy additions (HVAC, EV, pools)'
    ],
    warningSigns: [
      'You have an old 60-amp or 100-amp service panel',
      'You want to install an EV charger but do not have the capacity',
      'Your lights dim severely when the AC or microwave turns on',
      'Your service entrance cables outside look frayed or weather-damaged'
    ],
    benefits: [
      'Abundant power capacity for modern appliances, hot tubs, and EVs',
      'Drastically reduced fire hazards by eliminating overloaded systems',
      'A brand new, code-compliant meter base and grounding system',
      'Significant increase in home resale value'
    ],
    faqs: [
      { question: 'What is the difference between a panel upgrade and a service upgrade?', answer: 'A panel upgrade just replaces the indoor box. A service upgrade increases the total power coming to the house, which requires a new panel, a new outdoor meter base, and new main wires from the utility.' },
      { question: 'How long will my power be out during a service upgrade?', answer: 'Typically, power is out for 4 to 8 hours while we disconnect the old service, install the new equipment, and have the utility reconnect the power.' },
      { question: 'Do I need a 200-amp or 400-amp service?', answer: 'Most modern homes require 200 amps. If you have a very large home, multiple HVAC units, double electric ovens, and an EV, a 400-amp service may be necessary. We perform load calculations to be sure.' }
    ],
    ctaLabel: 'Upgrade Your Power Capacity',
    relatedServices: [
      { slug: 'electrical-panel-repair-upgrades-valley-al', label: 'View Panel Upgrades' },
      { slug: 'ev-charger-installation-valley-al', label: 'Explore EV Chargers' }
    ]
  }
];

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  services.find((s) => s?.slug === slug);
