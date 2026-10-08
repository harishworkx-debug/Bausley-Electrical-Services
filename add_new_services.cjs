const fs = require('fs');
let content = fs.readFileSync('src/data/services.ts', 'utf8');

const newServices = `
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
    metaDescription: 'Comprehensive electrical inspection in Valley, AL. Code compliance, safety audits, and pre-purchase home electrical inspections. Call 334-497-0921.',
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
    metaDescription: 'Expert generator installation in Valley, AL. Standby generators, transfer switches, and reliable backup power for your home. Call 334-497-0921.',
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
    metaDescription: 'Professional EV charger installation in Valley, AL. Level 2 chargers, Tesla Wall Connectors, and dedicated charging circuits. Call 334-497-0921.',
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
    metaDescription: 'Whole-home surge protection in Valley, AL. Guard your appliances and electronics from lightning and power grid spikes. Call 334-497-0921.',
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
    metaDescription: 'Trusted residential electrician in Valley, AL. We provide comprehensive home electrical services, repairs, and installations. Call 334-497-0921.',
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
    metaDescription: 'Professional smoke detector installation in Valley, AL. Hardwired, interconnected smoke and carbon monoxide alarms. Call 334-497-0921.',
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
    metaDescription: 'Expert security lighting installation in Valley, AL. Motion sensors, floodlights, and outdoor perimeter lighting to protect your home. Call 334-497-0921.',
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
    metaDescription: 'Complete electrical service upgrade in Valley, AL. 200 amp and 400 amp upgrades, meter base replacement, and heavy load capacity. Call 334-497-0921.',
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
`;

content = content.replace(/];\s*export const getServiceBySlug/g, ',' + newServices + '];\n\nexport const getServiceBySlug');

fs.writeFileSync('src/data/services.ts', content, 'utf8');
console.log('Added 10 new services successfully.');
