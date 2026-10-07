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
    slug: 'electrical-installation',
    title: 'Electrical Installation',
    h1: 'Professional Electrical Installation in Valley, Alabama',
    shortName: 'Electrical Installation',
    description:
      'Complete electrical installation services for homes and businesses in Valley, AL — from new wiring and fixtures to full system installations.',
    metaTitle: 'Electrical Installation Valley, AL | Bausley Electrical Services',
    metaDescription:
      'Expert electrical installation services in Valley, Alabama. New wiring, fixtures, outlets, lighting, and complete system installations. Call 334-497-0921.',
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
      { slug: 'wiring-rewiring', label: 'View Wiring & Rewiring Services' },
      { slug: 'lighting-installation', label: 'Explore Lighting Installation' },
      { slug: 'outlet-switch-installation', label: 'See Outlet & Switch Installation' },
    ],
  },
  {
    slug: 'electrical-repair-troubleshooting',
    title: 'Electrical Repair & Troubleshooting',
    h1: 'Electrical Repair & Troubleshooting in Valley, Alabama',
    shortName: 'Repair & Troubleshooting',
    description:
      'Fast, accurate electrical repair and troubleshooting for homes in Valley, AL. We diagnose and fix outlet issues, switch problems, faulty wiring, and more.',
    metaTitle: 'Electrical Repair & Troubleshooting Valley, AL | Bausley Electrical',
    metaDescription:
      'Reliable electrical repair and troubleshooting in Valley, Alabama. Flickering lights, dead outlets, switch problems, and wiring faults diagnosed and fixed. Call 334-497-0921.',
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
      { slug: 'circuit-breaker-services', label: 'Explore Circuit Breaker Services' },
      { slug: 'electrical-power-restoration-diagnostics', label: 'View Power Restoration & Diagnostics' },
      { slug: 'outlet-switch-installation', label: 'See Outlet & Switch Installation' },
    ],
  },
  {
    slug: 'electrical-panel-repair-upgrades',
    title: 'Electrical Panel Repair & Upgrades',
    h1: 'Electrical Panel Repair & Upgrades in Valley, Alabama',
    shortName: 'Panel Repair & Upgrades',
    description:
      'Panel upgrades, repairs, and replacements in Valley, AL. Increase your electrical capacity and improve safety with a modern electrical panel.',
    metaTitle: 'Electrical Panel Upgrade & Repair Valley, AL | Bausley Electrical',
    metaDescription:
      'Electrical panel repair and panel upgrades in Valley, Alabama. Increase capacity, improve safety, and replace outdated panels. Call 334-497-0921.',
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
      { slug: 'circuit-breaker-services', label: 'View Circuit Breaker Services' },
      { slug: 'electrical-grounding-safety', label: 'See Grounding & Safety Improvements' },
      { slug: 'electrical-installation', label: 'Explore Electrical Installation' },
    ],
  },
  {
    slug: 'circuit-breaker-services',
    title: 'Circuit Breaker Services',
    h1: 'Circuit Breaker Services in Valley, Alabama',
    shortName: 'Circuit Breaker Services',
    description:
      'Circuit breaker installation, replacement, and repair in Valley, AL. Stop nuisance tripping and protect your home with properly functioning breakers.',
    metaTitle: 'Circuit Breaker Services Valley, AL | Bausley Electrical Services',
    metaDescription:
      'Circuit breaker installation, replacement, and repair in Valley, Alabama. Stop nuisance tripping, protect your home, and ensure safe operation. Call 334-497-0921.',
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
      { slug: 'electrical-panel-repair-upgrades', label: 'Explore Panel Repair & Upgrades' },
      { slug: 'electrical-repair-troubleshooting', label: 'View Repair & Troubleshooting' },
      { slug: 'electrical-grounding-safety', label: 'See Grounding & Safety' },
    ],
  },
  {
    slug: 'wiring-rewiring',
    title: 'Wiring & Rewiring',
    h1: 'Wiring & Rewiring Services in Valley, Alabama',
    shortName: 'Wiring & Rewiring',
    description:
      'Whole-home rewiring and wiring repair in Valley, AL. Replace outdated, damaged, or unsafe wiring with modern, code-compliant electrical wiring.',
    metaTitle: 'Wiring & Rewiring Valley, AL | Bausley Electrical Services',
    metaDescription:
      'Professional wiring and rewiring services in Valley, Alabama. Replace outdated wiring, fix damaged circuits, and ensure safe, reliable electrical service. Call 334-497-0921.',
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
      { slug: 'electrical-installation', label: 'View Electrical Installation' },
      { slug: 'electrical-grounding-safety', label: 'See Grounding & Safety Improvements' },
      { slug: 'outlet-switch-installation', label: 'Explore Outlet & Switch Installation' },
    ],
  },
  {
    slug: 'outlet-switch-installation',
    title: 'Outlet & Switch Installation',
    h1: 'Outlet & Switch Installation in Valley, Alabama',
    shortName: 'Outlet & Switch Installation',
    description:
      'Install, replace, or upgrade outlets and switches in Valley, AL. GFCI outlets, USB outlets, dimmers, smart switches, and more.',
    metaTitle: 'Outlet & Switch Installation Valley, AL | Bausley Electrical',
    metaDescription:
      'Outlet and switch installation in Valley, Alabama. GFCI outlets, USB outlets, dimmers, smart switches, and replacements. Safe, professional installation. Call 334-497-0921.',
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
      { slug: 'lighting-installation', label: 'Explore Lighting Installation' },
      { slug: 'electrical-repair-troubleshooting', label: 'View Repair & Troubleshooting' },
      { slug: 'wiring-rewiring', label: 'See Wiring & Rewiring' },
    ],
  },
  {
    slug: 'lighting-installation',
    title: 'Lighting Installation',
    h1: 'Lighting Installation in Valley, Alabama',
    shortName: 'Lighting Installation',
    description:
      'Interior and exterior lighting installation in Valley, AL. Recessed lighting, pendant lights, landscape lighting, and fixture replacement.',
    metaTitle: 'Lighting Installation Valley, AL | Bausley Electrical Services',
    metaDescription:
      'Professional lighting installation in Valley, Alabama. Recessed lighting, pendant lights, outdoor lighting, landscape lighting, and fixture replacement. Call 334-497-0921.',
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
      { slug: 'ceiling-fan-installation', label: 'Explore Ceiling Fan Installation' },
      { slug: 'outlet-switch-installation', label: 'See Outlet & Switch Installation' },
      { slug: 'electrical-installation', label: 'View Electrical Installation' },
    ],
  },
  {
    slug: 'ceiling-fan-installation',
    title: 'Ceiling Fan Installation',
    h1: 'Ceiling Fan Installation in Valley, Alabama',
    shortName: 'Ceiling Fan Installation',
    description:
      'Ceiling fan installation and replacement in Valley, AL. Safe mounting, proper wiring, and support box installation for indoor and outdoor fans.',
    metaTitle: 'Ceiling Fan Installation Valley, AL | Bausley Electrical Services',
    metaDescription:
      'Ceiling fan installation and replacement in Valley, Alabama. Indoor, outdoor, and heavy-duty fans with proper wiring and support. Call 334-497-0921.',
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
      { slug: 'lighting-installation', label: 'View Lighting Installation' },
      { slug: 'outlet-switch-installation', label: 'See Outlet & Switch Installation' },
      { slug: 'electrical-installation', label: 'Explore Electrical Installation' },
    ],
  },
  {
    slug: 'electrical-grounding-safety',
    title: 'Electrical Grounding & Safety Improvements',
    h1: 'Electrical Grounding & Safety Improvements in Valley, Alabama',
    shortName: 'Grounding & Safety',
    description:
      'Electrical grounding, surge protection, and safety improvements in Valley, AL. Protect your home and family with proper grounding and safety upgrades.',
    metaTitle: 'Electrical Grounding & Safety Valley, AL | Bausley Electrical',
    metaDescription:
      'Electrical grounding and safety improvements in Valley, Alabama. Grounding system installation, surge protection, GFCI/AFCI upgrades. Call 334-497-0921.',
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
      { slug: 'electrical-panel-repair-upgrades', label: 'View Panel Repair & Upgrades' },
      { slug: 'circuit-breaker-services', label: 'Explore Circuit Breaker Services' },
      { slug: 'wiring-rewiring', label: 'See Wiring & Rewiring' },
    ],
  },
  {
    slug: 'electrical-power-restoration-diagnostics',
    title: 'Electrical Power Restoration & Electrical Diagnostics',
    h1: 'Electrical Power Restoration & Diagnostics in Valley, Alabama',
    shortName: 'Power Restoration & Diagnostics',
    description:
      'Power restoration and advanced electrical diagnostics in Valley, AL. Find and fix power loss, partial outages, and complex electrical issues.',
    metaTitle: 'Power Restoration & Electrical Diagnostics Valley, AL | Bausley Electrical',
    metaDescription:
      'Electrical power restoration and diagnostics in Valley, Alabama. Lost power, partial outages, and complex electrical problems diagnosed and repaired. Call 334-497-0921.',
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
      { slug: 'electrical-repair-troubleshooting', label: 'View Repair & Troubleshooting' },
      { slug: 'circuit-breaker-services', label: 'See Circuit Breaker Services' },
      { slug: 'electrical-panel-repair-upgrades', label: 'Explore Panel Repair & Upgrades' },
    ],
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  services.find((s) => s.slug === slug);
