export interface ServiceAreaData {
  slug: string;
  city: string;
  county: string;
  state: string;
  stateAbbr: string;
  distance: string;
  primaryService: {
    slug: string;
    title: string;
  };
  metaTitle: string;
  metaDescription: string;
  h1: string;
  description: string;
  overview: string;
  serviceFocus: string;
  localContext: string;
  ctaLabel: string;
}

export const serviceAreas: ServiceAreaData[] = [
  {
    slug: 'valley-al',
    city: 'Valley',
    county: 'Chambers County',
    state: 'Alabama',
    stateAbbr: 'AL',
    distance: '0 miles',
    primaryService: { slug: 'electrical-installation', title: 'Electrical Installation' },
    metaTitle: 'Electrician in Valley, AL | Bausley Electrical Services',
    metaDescription:
      'Bausley Electrical Services provides reliable electrical installation and repair in Valley, Alabama. Local electrician serving Valley and surrounding areas. Call 334-497-0921.',
    h1: 'Electrician in Valley, Alabama',
    description:
      'Bausley Electrical Services is based in Valley, Alabama, providing electrical installation, repair, and safety services to local homeowners.',
    overview:
      'Bausley Electrical Services is based right here in Valley, Alabama. We are familiar with the homes in this area — from older properties that may need wiring upgrades to newer construction that requires fixture and outlet installation. Our local presence means we can respond quickly and provide the kind of personal, dependable service that matters when you have an electrical problem.',
    serviceFocus:
      'We focus on complete electrical installation services for Valley homeowners, including new wiring, fixture installation, outlet and switch work, and panel installation for new construction and renovation projects.',
    localContext:
      'Valley sits along the Chattahoochee River in Chambers County, and many of the homes here range from mid-century builds to newer developments. Older homes in the area often benefit from electrical inspections to identify wiring that may need upgrading to handle modern electrical loads safely.',
    ctaLabel: 'Call Your Local Valley Electrician',
  },
  {
    slug: 'lanett-al',
    city: 'Lanett',
    county: 'Chambers County',
    state: 'Alabama',
    stateAbbr: 'AL',
    distance: '2 miles',
    primaryService: { slug: 'electrical-repair-troubleshooting', title: 'Electrical Repair & Troubleshooting' },
    metaTitle: 'Electrical Repair in Lanett, AL | Bausley Electrical Services',
    metaDescription:
      'Electrical repair and troubleshooting in Lanett, Alabama. Flickering lights, dead outlets, and breaker issues diagnosed and fixed. Call 334-497-0921.',
    h1: 'Electrical Repair & Troubleshooting in Lanett, Alabama',
    description:
      'Fast, reliable electrical repair and troubleshooting for homeowners in Lanett, AL — just across the river from Valley.',
    overview:
      'Lanett is just across the Chattahoochee River from Valley, and we provide the same dependable electrical repair services to homeowners there. Whether you have a dead outlet, a switch that is not working, or a breaker that keeps tripping, we diagnose the issue accurately and perform a lasting repair.',
    serviceFocus:
      'Our primary service in Lanett is electrical repair and troubleshooting — finding and fixing the root cause of outlet failures, flickering lights, tripping breakers, and other common electrical faults in local homes.',
    localContext:
      'Lanett has a mix of historic and mid-century homes, many of which have aging electrical systems that can develop connection issues, degraded wiring, or overloaded circuits as electrical demands have grown over the years.',
    ctaLabel: 'Schedule a Repair in Lanett',
  },
  {
    slug: 'west-point-ga',
    city: 'West Point',
    county: 'Harris County',
    state: 'Georgia',
    stateAbbr: 'GA',
    distance: '5 miles',
    primaryService: { slug: 'electrical-panel-repair-upgrades', title: 'Electrical Panel Repair & Upgrades' },
    metaTitle: 'Electrical Panel Upgrade in West Point, GA | Bausley Electrical',
    metaDescription:
      'Electrical panel repair and upgrades in West Point, Georgia. Replace outdated panels, increase capacity, and improve safety. Call 334-497-0921.',
    h1: 'Electrical Panel Repair & Upgrades in West Point, Georgia',
    description:
      'Panel repair, replacement, and capacity upgrades for homes in West Point, GA, just minutes from Valley.',
    overview:
      'West Point, Georgia sits just across the state line from Valley, and we provide electrical panel services to homeowners in the area. If your panel is outdated, too small for your needs, or showing signs of wear, we can repair or upgrade it to ensure safe, reliable power distribution throughout your home.',
    serviceFocus:
      'Our primary service in West Point is electrical panel repair and upgrades — replacing outdated panels, increasing amperage capacity, and ensuring your panel meets modern safety standards.',
    localContext:
      'West Point has seen significant growth with new residential development near the Kia manufacturing plant, alongside older homes near downtown that may have panels insufficient for today\'s electrical demands.',
    ctaLabel: 'Explore Panel Upgrades in West Point',
  },
  {
    slug: 'la-fayette-al',
    city: 'La Fayette',
    county: 'Chambers County',
    state: 'Alabama',
    stateAbbr: 'AL',
    distance: '15 miles',
    primaryService: { slug: 'wiring-rewiring', title: 'Wiring & Rewiring' },
    metaTitle: 'Wiring & Rewiring in La Fayette, AL | Bausley Electrical Services',
    metaDescription:
      'Wiring and rewiring services in La Fayette, Alabama. Replace outdated wiring, improve safety, and update older homes. Call 334-497-0921.',
    h1: 'Wiring & Rewiring in La Fayette, Alabama',
    description:
      'Whole-home rewiring and wiring repair for older homes in La Fayette, AL, many of which need electrical system updates.',
    overview:
      'La Fayette is the county seat of Chambers County, and many of its homes are older properties that may benefit from wiring inspection and upgrades. Bausley Electrical Services provides wiring and rewiring services to La Fayette homeowners, replacing outdated wiring with modern, code-compliant electrical systems.',
    serviceFocus:
      'Our primary service in La Fayette is wiring and rewiring — addressing the outdated, degraded, or insufficient wiring found in many older homes and replacing it with safe, modern electrical wiring.',
    localContext:
      'As a historic county seat, La Fayette has many homes built decades ago that may still have original wiring. These homes often need rewiring to safely support modern electrical loads and to eliminate fire hazards associated with aging wiring.',
    ctaLabel: 'Discuss Wiring in La Fayette',
  },
  {
    slug: 'opelika-al',
    city: 'Opelika',
    county: 'Lee County',
    state: 'Alabama',
    stateAbbr: 'AL',
    distance: '25 miles',
    primaryService: { slug: 'outlet-switch-installation', title: 'Outlet & Switch Installation' },
    metaTitle: 'Outlet & Switch Installation in Opelika, AL | Bausley Electrical',
    metaDescription:
      'Outlet and switch installation in Opelika, Alabama. GFCI outlets, USB outlets, dimmers, and smart switches. Professional installation. Call 334-497-0921.',
    h1: 'Outlet & Switch Installation in Opelika, Alabama',
    description:
      'Outlet and switch installation, replacement, and upgrades for homeowners in Opelika, AL.',
    overview:
      'Opelika is a growing city in Lee County, and we provide outlet and switch installation services to homeowners throughout the area. Whether you need GFCI outlets for safety compliance, USB outlets for convenient charging, or dimmer switches for better lighting control, we provide professional installation.',
    serviceFocus:
      'Our primary service in Opelika is outlet and switch installation — adding new outlets, upgrading to GFCI protection, installing dimmer and smart switches, and replacing worn or unsafe devices.',
    localContext:
      'Opelika has a wide range of housing, from historic downtown homes to newer subdivisions. Many older homes in the area lack GFCI protection in kitchens and bathrooms, while newer homes often need additional outlets or smart switch upgrades.',
    ctaLabel: 'Schedule Outlet Work in Opelika',
  },
  {
    slug: 'auburn-al',
    city: 'Auburn',
    county: 'Lee County',
    state: 'Alabama',
    stateAbbr: 'AL',
    distance: '30 miles',
    primaryService: { slug: 'lighting-installation', title: 'Lighting Installation' },
    metaTitle: 'Lighting Installation in Auburn, AL | Bausley Electrical Services',
    metaDescription:
      'Lighting installation in Auburn, Alabama. Recessed lighting, outdoor lighting, landscape lighting, and fixture replacement. Call 334-497-0921.',
    h1: 'Lighting Installation in Auburn, Alabama',
    description:
      'Interior and exterior lighting installation for homes in Auburn, AL, including recessed, pendant, and landscape lighting.',
    overview:
      'Auburn is home to Auburn University and a wide range of residential properties, from student-area homes to established family neighborhoods. We provide professional lighting installation services throughout Auburn, helping homeowners update their spaces with modern lighting solutions.',
    serviceFocus:
      'Our primary service in Auburn is lighting installation — recessed lighting, pendant and chandelier installation, outdoor and security lighting, and landscape lighting for improved aesthetics and safety.',
    localContext:
      'Auburn\'s mix of older and newer homes creates a variety of lighting needs, from updating fixtures in historic properties near downtown to installing modern recessed and outdoor lighting in newer subdivisions.',
    ctaLabel: 'View Lighting Options in Auburn',
  },
  {
    slug: 'phenix-city-al',
    city: 'Phenix City',
    county: 'Russell County',
    state: 'Alabama',
    stateAbbr: 'AL',
    distance: '35 miles',
    primaryService: { slug: 'circuit-breaker-services', title: 'Circuit Breaker Services' },
    metaTitle: 'Circuit Breaker Services in Phenix City, AL | Bausley Electrical',
    metaDescription:
      'Circuit breaker installation, replacement, and repair in Phenix City, Alabama. Stop nuisance tripping and improve safety. Call 334-497-0921.',
    h1: 'Circuit Breaker Services in Phenix City, Alabama',
    description:
      'Circuit breaker installation, replacement, and repair for homeowners in Phenix City, AL.',
    overview:
      'Phenix City sits along the Chattahoochee River across from Columbus, Georgia, and we provide circuit breaker services to homeowners in the area. Whether you have breakers that trip constantly, breakers that will not reset, or breakers that need upgrading to modern GFCI or AFCI protection, we diagnose and resolve the issue.',
    serviceFocus:
      'Our primary service in Phenix City is circuit breaker services — breaker testing, replacement of failed breakers, GFCI and AFCI breaker installation, and circuit load analysis to eliminate nuisance tripping.',
    localContext:
      'Phenix City has a mix of older and newer housing stock. Many older homes have breaker panels that predate current GFCI and AFCI requirements and may benefit from breaker upgrades for improved safety and compliance.',
    ctaLabel: 'Schedule Breaker Service in Phenix City',
  },
  {
    slug: 'salem-al',
    city: 'Salem',
    county: 'Lee County',
    state: 'Alabama',
    stateAbbr: 'AL',
    distance: '18 miles',
    primaryService: { slug: 'ceiling-fan-installation', title: 'Ceiling Fan Installation' },
    metaTitle: 'Ceiling Fan Installation in Salem, AL | Bausley Electrical Services',
    metaDescription:
      'Ceiling fan installation and replacement in Salem, Alabama. Proper support, wiring, and mounting for indoor and outdoor fans. Call 334-497-0921.',
    h1: 'Ceiling Fan Installation in Salem, Alabama',
    description:
      'Ceiling fan installation and replacement for homes in Salem, AL, with proper support boxes and wiring.',
    overview:
      'Salem is a community in eastern Lee County, and we provide ceiling fan installation services to homeowners in the area. Proper installation is critical — ceiling fans require fan-rated support boxes and secure mounting to operate safely. We ensure every fan we install is properly supported, wired, and balanced.',
    serviceFocus:
      'Our primary service in Salem is ceiling fan installation — new fan installation, replacement of existing fans, support box installation, and setup of fan controls and remotes.',
    localContext:
      'Salem\'s warm Alabama climate makes ceiling fans a popular addition for improved comfort and energy efficiency. Many homes in the area benefit from ceiling fan installation in living rooms, bedrooms, and outdoor covered patios.',
    ctaLabel: 'Schedule Fan Installation in Salem',
  },
  {
    slug: 'cusseta-al',
    city: 'Cusseta',
    county: 'Chambers County',
    state: 'Alabama',
    stateAbbr: 'AL',
    distance: '12 miles',
    primaryService: { slug: 'electrical-grounding-safety', title: 'Electrical Grounding & Safety' },
    metaTitle: 'Electrical Grounding & Safety in Cusseta, AL | Bausley Electrical',
    metaDescription:
      'Electrical grounding and safety improvements in Cusseta, Alabama. Grounding upgrades, surge protection, and safety inspections. Call 334-497-0921.',
    h1: 'Electrical Grounding & Safety in Cusseta, Alabama',
    description:
      'Grounding upgrades, surge protection, and electrical safety improvements for homes in Cusseta, AL.',
    overview:
      'Cusseta is a small community in Chambers County, and many of the homes in the area are older properties that may lack proper grounding or modern safety devices. We provide grounding and safety improvement services to Cusseta homeowners, bringing electrical systems up to current safety standards.',
    serviceFocus:
      'Our primary service in Cusseta is electrical grounding and safety improvements — grounding system installation, whole-house surge protection, GFCI upgrades, and safety inspections for older homes.',
    localContext:
      'Rural communities like Cusseta often have homes with older electrical systems that predate modern grounding requirements. These homes can benefit significantly from grounding upgrades and safety device installation.',
    ctaLabel: 'Schedule a Safety Assessment in Cusseta',
  },
  {
    slug: 'chambers-county-al',
    city: 'Chambers County',
    county: 'Chambers County',
    state: 'Alabama',
    stateAbbr: 'AL',
    distance: 'Countywide',
    primaryService: { slug: 'electrical-power-restoration-diagnostics', title: 'Power Restoration & Diagnostics' },
    metaTitle: 'Power Restoration & Diagnostics Chambers County, AL | Bausley Electrical',
    metaDescription:
      'Electrical power restoration and diagnostics throughout Chambers County, Alabama. Partial outages, fault diagnosis, and power restoration. Call 334-497-0921.',
    h1: 'Power Restoration & Electrical Diagnostics in Chambers County, Alabama',
    description:
      'Power restoration and advanced electrical diagnostics throughout Chambers County, AL.',
    overview:
      'Bausley Electrical Services provides power restoration and advanced electrical diagnostics throughout Chambers County. When you lose power in part of your home or experience unexplained electrical issues, our systematic diagnostic process identifies the fault and restores safe, reliable power.',
    serviceFocus:
      'Our primary service throughout Chambers County is power restoration and electrical diagnostics — tracing faults, diagnosing partial outages, and resolving complex electrical issues that other approaches may miss.',
    localContext:
      'Chambers County\'s mix of rural and small-town homes means electrical issues can range from storm-damaged service entrances to aging wiring faults in older properties. Our diagnostic process is designed to handle the full range of issues found across the county.',
    ctaLabel: 'Get Power Restored in Chambers County',
  },
];

export const getAreaBySlug = (slug: string): ServiceAreaData | undefined =>
  serviceAreas.find((a) => a.slug === slug);
