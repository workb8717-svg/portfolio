export const packagesData = [
  {
    id: 'website-app',
    number: '01',
    name: 'Website + App',
    slug: 'website-app',
    path: '/packages/website-app',
    teaser: 'From idea to a working website or app — pick the depth that fits your project.',
    isPlaceholder: false,
    tiers: [
      {
        id: 'basic',
        name: 'Basic',
        price: '₹999',
        badge: 'Standard',
        tagline: 'Clean, simple, ready to go.',
        delivery: '3 days',
        features: [
          'Simple website (up to 4 pages) OR a basic app with core screens',
          'Fully responsive, mobile-friendly',
          '1 round of revisions',
          'Delivery in 3 days'
        ]
      },
      {
        id: 'pro',
        name: 'Pro',
        price: '₹2,499',
        badge: 'Most Popular',
        isPopular: true,
        tagline: 'Built to stand out, not just show up.',
        delivery: '5–6 days',
        features: [
          'Multi-page website (up to 8 pages) OR app with more screens/features',
          'Custom design — no templates',
          '2 rounds of revisions',
          'Delivery in 5–6 days',
          'Priority communication during the project',
          'Custom domain included',
          '2 months of site/app maintenance included'
        ]
      },
      {
        id: 'premium',
        name: 'Premium',
        price: '₹4,999',
        badge: 'Ultimate',
        tagline: 'Website and app, built together, without limits.',
        delivery: '10–11 days',
        features: [
          'Full custom website AND app, built together',
          'Unlimited revisions within the original scope',
          'Delivery in 10–11 days (longer than Pro because this covers two full builds — website and app — not one)',
          'Custom domain included',
          '6 months of site/app maintenance included'
        ]
      }
    ]
  },
  {
    id: 'logo-canva',
    number: '02',
    name: 'Logo + Canva',
    slug: 'logo-canva',
    path: '/packages/logo-canva',
    teaser: 'Branding and everyday marketing visuals, packaged together.',
    isPlaceholder: false,
    tiers: [
      {
        id: 'basic',
        name: 'Basic',
        price: '₹499',
        badge: 'Standard',
        tagline: 'Sharp and simple, right from the start.',
        delivery: '1–2 days',
        features: [
          '1 logo concept, polished into the final version',
          'OR 2 Canva creatives (festival/poster/ad) instead of a logo',
          'One editing pass included',
          'Ready in 1–2 days'
        ]
      },
      {
        id: 'pro',
        name: 'Pro',
        price: '₹799',
        badge: 'Most Popular',
        isPopular: true,
        tagline: 'More depth, more polish, more you.',
        delivery: '5 days',
        features: [
          '1 logo with 2 directions to pick from + 3 Canva creatives',
          'Two rounds of edits included',
          'Ready in 5 days',
          'Faster replies while we work together',
          '3 months of free Canva creatives added after delivery'
        ]
      },
      {
        id: 'premium',
        name: 'Premium',
        price: '₹1,999',
        badge: 'Ultimate',
        tagline: 'A full identity, built to last.',
        delivery: '6–7 days',
        features: [
          '1 logo with 3 directions to pick from + 6 Canva creatives',
          'Edits included until it\'s exactly right',
          'Ready in 6–7 days',
          'Delivered in every file format you\'ll need',
          '6 months of free Canva creatives added after delivery'
        ]
      }
    ]
  },
  {
    id: 'script-writing',
    number: '03',
    name: 'Script Writing',
    slug: 'script-writing',
    path: '/packages/script-writing',
    teaser: "Scripts written to hold attention, matched to your brand's voice.",
    isPlaceholder: false,
    tiers: [
      {
        id: 'script-writing-plan',
        name: 'Script Writing',
        price: '₹799',
        badge: 'Complete Plan',
        isPopular: true,
        tagline: "Scripts written to actually hold attention, in your brand's voice.",
        delivery: '3–4 days',
        features: [
          '4 scripts included',
          "2 hook options per script, so you're never stuck with just one opening line",
          '2 rounds of revisions per script',
          'Written for reels, ads, or short-form video',
          'Delivery in 3–4 days',
          'Matched to your tone — not generic, copy-paste style'
        ]
      }
    ]
  },
  {
    id: 'social-media',
    number: '04',
    name: 'Social Media Management',
    slug: 'social-media',
    path: '/packages/social-media',
    teaser: 'Consistent, on-brand presence — without you managing it yourself.',
    isPlaceholder: false,
    tiers: [
      {
        id: 'social-media-plan',
        name: 'Social Media Management',
        price: '₹1,499 / month',
        badge: 'Monthly Plan',
        isPopular: true,
        tagline: 'Consistent, on-brand social presence — without you having to manage it yourself.',
        delivery: 'Monthly Retainer',
        features: [
          '8 posts per month (Canva-designed creatives + captions)',
          'Content calendar planned in advance, so nothing is last-minute',
          'Captions written to match your brand\'s voice',
          '1 round of revisions per post',
          'Ready-to-post content delivered to you — you (or your team) post it, no account access needed from my side'
        ]
      }
    ]
  }
];

export const getPackageBySlug = (slug) => {
  return packagesData.find((pkg) => pkg.slug === slug);
};
