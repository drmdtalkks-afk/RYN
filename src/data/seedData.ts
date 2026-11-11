import {
  TeamMember,
  PartnerMOU,
  OrganizationalCredential,
  ProgramItem,
  ResearchPaper,
  DonationRecord,
  CollaborationProposal,
  VolunteerApplication
} from '../types';

export const OFFICIAL_INFO = {
  name: 'Radiant Youth Network',
  acronym: 'RYN',
  tagline: 'Empowering Youth. Transforming Lives. Building Futures.',
  brandMessage: 'Together, We Can Illuminate Futures. Together, We Are Radiant Youth Network.',
  establishedYear: '2023',
  founder: 'Ms. Zainab Asif',
  phone: '+92 301 4744365',
  email: 'info@radiantyouthnetwork.org',
  facebook: 'https://www.facebook.com/radiantyouthnetwork',
  instagram: 'https://www.instagram.com/radiantyouthnetwork/',
  logoUrl: '/assets/aistudio/486545881_591449277256950_3010942763389288133_n_9328ba12.jpg',
  easypaisa: {
    accountNumber: '03304194847',
    accountHolder: 'Ms. Zainab Asif',
    method: 'Easypaisa Mobile Account'
  }
};

export const IMPACT_STATS = [
  {
    id: 'food',
    value: 561,
    suffix: '+',
    label: 'Families Supported',
    sublabel: 'Through Food & Ration Drives',
    highlightColor: 'from-[#FFB86B]/20 to-[#FFB86B]/5',
    accentBorder: '#FFB86B',
    accentText: 'text-[#17324D]'
  },
  {
    id: 'ramadan',
    value: 4320,
    suffix: '',
    label: 'People Served',
    sublabel: 'Through Ramadan Iftar Drives',
    highlightColor: 'from-[#55BDEB]/20 to-[#55BDEB]/5',
    accentBorder: '#55BDEB',
    accentText: 'text-[#17324D]'
  },
  {
    id: 'clothes',
    value: 9120,
    suffix: '',
    label: 'Beneficiaries Reached',
    sublabel: 'Through Clothing Distribution',
    highlightColor: 'from-[#F45B91]/20 to-[#F45B91]/5',
    accentBorder: '#F45B91',
    accentText: 'text-[#17324D]'
  },
  {
    id: 'funding',
    value: 1.2,
    suffix: 'M+ PKR',
    isDecimal: true,
    label: 'Self-Funded Impact',
    sublabel: 'Direct Humanitarian Contributions',
    highlightColor: 'from-[#CDEFF5]/40 to-[#CDEFF5]/10',
    accentBorder: '#55BDEB',
    accentText: 'text-[#17324D]'
  }
];

export const CORE_VALUES = [
  {
    title: 'Humanity',
    description: 'Serving vulnerable families with empathy, deep respect, and unconditional care.'
  },
  {
    title: 'Education',
    description: 'Providing youth with digital literacy, critical thinking, and career pathways.'
  },
  {
    title: 'Equality',
    description: 'Championing gender inclusion and equal opportunities for underserved youth.'
  },
  {
    title: 'Innovation',
    description: 'Pioneering ethical technology, algorithmic auditing, and smart community solutions.'
  },
  {
    title: 'Transparency',
    description: 'Operating with complete financial accountability and rigorous independent audits.'
  },
  {
    title: 'Youth Leadership',
    description: 'Placing energetic young leaders at the core of social transformation.'
  },
  {
    title: 'Social Responsibility',
    description: 'Empowering communities towards long-term resilience and shared prosperity.'
  },
  {
    title: 'Sustainability',
    description: 'Designing programs with lasting community ownership and measurable outcomes.'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'zainab-asif',
    name: 'Ms. Zainab Asif',
    role: 'Founder and Chairperson / CEO',
    title: 'Gender Equality Activist & Social Innovator',
    bio: 'Founder and Chairperson of Radiant Youth Network. A passionate gender equality activist and youth leader dedicated to building sustainable education, humanitarian relief systems, and ethical social initiatives across Pakistan.',
    imageUrl: '/assets/aistudio/Zainab_Asif_5d777e3d.jpg',
    linkedInUrl: 'https://linkedin.com'
  },
  {
    id: 'maryam-dawood',
    name: 'Dr. Maryam Dawood',
    role: 'Chief Operating Officer',
    title: 'Operations Director & Health Advocate',
    bio: 'Oversees operational execution, grassroots community mobilization, and multi-partner coordination across Radiant Youth Network programs and seasonal campaigns.',
    imageUrl: '',
    linkedInUrl: 'https://linkedin.com'
  },
  {
    id: 'muhammad-ali',
    name: 'Muhammad Ali',
    role: 'Technical and Marketing Head',
    title: 'Digital Systems & Strategic Outreach',
    bio: 'Leads digital transformation, technology platforms, youth engagement strategies, and online educational delivery systems for RYN.',
    imageUrl: '',
    linkedInUrl: 'https://linkedin.com'
  },
  {
    id: 'chanda-asif',
    name: 'Ms. Chanda Asif',
    role: 'Head of Human Resources',
    title: 'Talent & Volunteer Development',
    bio: 'Manages youth volunteer engagement, leadership training, organizational culture, and capacity-building programs across RYN chapters.',
    imageUrl: '',
    linkedInUrl: 'https://linkedin.com'
  },
  {
    id: 'muhammad-dawood',
    name: 'Dr. Muhammad Dawood',
    role: 'Chief Financial Officer and Board of Director',
    title: 'Governance & Fiscal Strategy',
    bio: 'Guides financial governance, budget compliance, self-funded humanitarian allocations, and institutional transparency for Radiant Youth Network.',
    imageUrl: '',
    linkedInUrl: 'https://linkedin.com'
  }
];

export const PARTNERS_MOU: PartnerMOU[] = [
  {
    id: 'mou-intellisnc',
    partnerName: 'Intellisnc',
    description: 'Collaborative development of artificial intelligence frameworks, digital capacity building, and applied tech solutions for young innovators.',
    status: 'Active',
    signingDate: '2023-11-15',
    websiteUrl: 'https://intellisnc.com',
    isPublished: true,
    scopeOfWork: ['AI Curriculum Integration', 'Technical Mentorship', 'Student Internships']
  },
  {
    id: 'mou-rics',
    partnerName: 'RICS',
    description: 'Strategic alliance focused on professional standards, institutional capacity building, and youth leadership accreditation.',
    status: 'Active',
    signingDate: '2024-01-20',
    isPublished: true,
    scopeOfWork: ['Standards Benchmarking', 'Youth Certification Frameworks', 'Governance Training']
  },
  {
    id: 'mou-riaic',
    partnerName: 'RIAIC',
    description: 'Joint research initiatives on responsible artificial intelligence, AI governance policies, and community technology audits.',
    status: 'Active',
    signingDate: '2024-03-10',
    isPublished: true,
    scopeOfWork: ['Responsible AI Workshops', 'Policy Papers', 'Joint Academic Sessions']
  },
  {
    id: 'mou-iaaa',
    partnerName: 'IAAA – International Association of Algorithmic Auditors',
    description: 'International partnership to introduce algorithmic auditing education, algorithmic bias assessments, and certification pathways.',
    status: 'Active',
    signingDate: '2024-05-18',
    isPublished: true,
    scopeOfWork: ['Algorithmic Audit Training', 'Global Standards Certification', 'Student Fellowships']
  },
  {
    id: 'mou-reskills',
    partnerName: 'ReSkills',
    description: 'Collaborative platform enabling youth across Pakistan to access high-value vocational, soft skill, and professional digital micro-courses.',
    status: 'Active',
    signingDate: '2024-07-02',
    isPublished: true,
    scopeOfWork: ['E-Learning Subscriptions', 'Webinars & Masterclasses', 'Skill Badges']
  },
  {
    id: 'mou-ejad',
    partnerName: 'Ejad',
    description: 'Entrepreneurship incubation, youth startup seed support, and community innovation challenge hosting.',
    status: 'Active',
    signingDate: '2024-08-22',
    isPublished: true,
    scopeOfWork: ['Social Enterprise Incubation', 'Pitch Competitions', 'Micro-Grant Allocation']
  },
  {
    id: 'mou-texwex',
    partnerName: 'Texwex',
    description: 'Youth textile skill initiatives, circular clothing supply chain assistance, and vocational empowerment for young women.',
    status: 'Active',
    signingDate: '2024-10-05',
    isPublished: true,
    scopeOfWork: ['Vocational Sewing & Textile Skills', 'Clothes Drive Sourcing', 'Women Enterprise Support']
  }
];

export const ORGANIZATIONAL_CREDENTIALS: OrganizationalCredential[] = [
  {
    id: 'secp',
    name: 'SECP Registration',
    code: 'SECP-NGO-PK-2023',
    issuingAuthority: 'Securities and Exchange Commission of Pakistan',
    scope: 'Official Legal Registration & Nonprofit Compliance Status',
    validity: 'Active & Verified',
    certificateNumber: 'SECP-REG-2023-094182',
    verificationUrl: 'https://secp.gov.pk'
  },
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015',
    code: 'ISO 9001',
    issuingAuthority: 'International Organization for Standardization (ISO)',
    scope: 'Quality Management Systems for Humanitarian & Educational Program Delivery',
    validity: 'Certified 2024 - 2027',
    certificateNumber: 'PK-QMS-9001-2024-88',
    verificationUrl: 'https://iso.org'
  },
  {
    id: 'iso-27001',
    name: 'ISO 27001:2022',
    code: 'ISO 27001',
    issuingAuthority: 'International Organization for Standardization (ISO)',
    scope: 'Information Security Management & Donor Data Privacy Protection',
    validity: 'Certified 2024 - 2027',
    certificateNumber: 'PK-ISMS-27001-2024-12',
    verificationUrl: 'https://iso.org'
  },
  {
    id: 'iso-24001',
    name: 'ISO 24001',
    code: 'ISO 24001',
    issuingAuthority: 'International Standards Body',
    scope: 'Environmental & Social Responsibility Management Framework',
    validity: 'Active Accreditation',
    certificateNumber: 'PK-EMS-24001-2024-05',
    verificationUrl: 'https://iso.org'
  },
  {
    id: 'iaaa-cert',
    name: 'IAAA International Certification',
    code: 'IAAA Global',
    issuingAuthority: 'International Association of Algorithmic Auditors',
    scope: 'Algorithmic Fairness, Ethical AI Practices & Community Impact Assessment',
    validity: 'Active Member & Certified Partner',
    certificateNumber: 'IAAA-INST-2024-RYN01',
    verificationUrl: 'https://iaaa.org'
  }
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'prog-1',
    title: 'Youth Empowerment',
    shortDescription: 'Unlocking leadership potential through mentorship, civic engagement, and public advocacy.',
    description: 'Our flagship Youth Empowerment initiative develops young changemakers across urban and rural communities. Through structured workshops, speaking forums, and leadership bootcamps, youth are equipped to identify community challenges and build actionable solutions.',
    category: 'Leadership',
    objectives: [
      'Nurture community-level youth leaders',
      'Provide soft skills, debate, and communication training',
      'Foster civic participation and social entrepreneurship'
    ],
    targetBeneficiaries: 'Young men and women aged 16 to 29',
    keyActivities: ['Youth Leadership Summits', 'Mentorship Circles', 'Community Problem-Solving Labs'],
    impactMetric: '1,200+ Youth Mentored',
    imageUrl: '/src/assets/images/hero_volunteers_community_1794371132429.jpg'
  },
  {
    id: 'prog-2',
    title: 'Educational Development',
    shortDescription: 'Scholarships, learning kits, and supplemental tutoring for deserving students.',
    description: 'Ensuring that financial barriers never prevent a child from continuing their education. RYN provides school supply kits, uniforms, and supplemental tuition to keep vulnerable students in school.',
    category: 'Education',
    objectives: [
      'Prevent school dropouts due to economic stress',
      'Distribute comprehensive education kits',
      'Establish after-school academic support centers'
    ],
    targetBeneficiaries: 'Underprivileged primary and secondary school children',
    keyActivities: ['Bag & Book Distributions', 'Tutor Matchmaking', 'Teacher Training Sessions'],
    impactMetric: '850+ Students Supported',
    imageUrl: '/src/assets/images/campaign_youth_education_1794371133489.jpg'
  },
  {
    id: 'prog-3',
    title: 'Gender Equality and Inclusion',
    shortDescription: 'Empowering young women through education, digital literacy, and economic autonomy.',
    description: 'Led by Founder Ms. Zainab Asif, this program tackles systemic barriers facing young girls and women. We deliver leadership training, vocational skills, legal rights literacy, and safe digital empowerment spaces.',
    category: 'Advocacy',
    objectives: [
      'Promote equal educational access for girls',
      'Provide financial and digital literacy for young women',
      'Combat gender disparity through community dialogues'
    ],
    targetBeneficiaries: 'Girls, young women, and marginalized community members',
    keyActivities: ['Women in Tech Workshops', 'Gender Rights Dialogues', 'Vocational Skill Labs'],
    impactMetric: '620+ Women Empowered',
    imageUrl: '/assets/aistudio/Zainab_Asif_5d777e3d.jpg'
  },
  {
    id: 'prog-4',
    title: 'Food Security (Ration Drives)',
    shortDescription: 'Providing staple food packages to families experiencing severe financial hardship.',
    description: 'Our regular food distribution drives supply nutritious ration bags with flour, lentils, cooking oil, rice, sugar, and tea to families unable to meet daily food requirements.',
    category: 'Humanitarian',
    objectives: [
      'Alleviate acute hunger in marginalized households',
      'Provide dignified, direct-to-home ration delivery',
      'Maintain verified beneficiary database to ensure fair distribution'
    ],
    targetBeneficiaries: 'Widows, daily wage earners, and impoverished families',
    keyActivities: ['Door-to-door Needs Assessment', 'Ration Bag Packing & Logistics', 'Emergency Relief Deliveries'],
    impactMetric: '561+ Families Supported',
    imageUrl: '/src/assets/images/campaign_food_drive_1794371132190.jpg'
  },
  {
    id: 'prog-5',
    title: 'Ramadan Community Support',
    shortDescription: 'Daily community Iftar meals and special holiday ration packages throughout the holy month.',
    description: 'During the month of Ramadan, RYN mobilizes hundreds of youth volunteers to cook, pack, and serve hot Iftar meals at designated community points and hospitals.',
    category: 'Humanitarian',
    objectives: [
      'Serve freshly cooked nutritious Iftar meals daily',
      'Distribute Eid gift packages to children in need',
      'Foster neighborhood solidarity and spiritual community spirit'
    ],
    targetBeneficiaries: 'Street laborers, hospital attendants, and vulnerable residents',
    keyActivities: ['Daily Iftar Dastarkhwan', 'Hospital Attendant Meal Trays', 'Eid Gift Distributions'],
    impactMetric: '4,320 Meals Served',
    imageUrl: '/src/assets/images/campaign_food_drive_1794371132190.jpg'
  },
  {
    id: 'prog-6',
    title: 'Clothing and Essential Needs',
    shortDescription: 'Seasonal clothing, warm winter gear, and essential garments for vulnerable families.',
    description: 'Clothing protects human dignity and health. RYN collects, sorts, sanitizes, and distributes seasonal clothes, warm sweaters, coats, and footwear prior to harsh winters and festive seasons.',
    category: 'Humanitarian',
    objectives: [
      'Distribute winter packages to prevent cold-related illnesses',
      'Provide children with brand new festive Eid attire',
      'Restore dignity through clean, quality clothing'
    ],
    targetBeneficiaries: 'Children, elderly, and underserved communities',
    keyActivities: ['Winter Jacket & Shawl Drives', 'Eid Clothes Distributions', 'Footwear Relief Camps'],
    impactMetric: '9,120 People Clothed',
    imageUrl: '/src/assets/images/hero_volunteers_community_1794371132429.jpg'
  },
  {
    id: 'prog-7',
    title: 'Clean Drinking Water Awareness & Summer Drive',
    shortDescription: 'Providing outdoor hydration stations during heatwaves and educating on water sanitation.',
    description: 'During severe summer temperatures, RYN volunteers deploy cold, purified drinking water stations across busy public transit routes, construction sites, and markets to prevent heat exhaustion.',
    category: 'Health & Climate',
    objectives: [
      'Prevent heatstroke among outdoor daily-wage workers',
      'Distribute purified hydration kits during peak summer months',
      'Conduct water hygiene and boiling awareness sessions'
    ],
    targetBeneficiaries: 'Outdoor workers, rickshaw drivers, pedestrians, laborers',
    keyActivities: ['Mobile Water Carts', 'Electrolyte Distribution', 'Sanitation Workshops'],
    impactMetric: 'Thousands Hydrated Every Summer',
    imageUrl: '/src/assets/images/campaign_summer_water_1794371132952.jpg'
  },
  {
    id: 'prog-8',
    title: 'Digital Literacy',
    shortDescription: 'Empowering youth with practical computer skills, coding basics, and internet navigation.',
    description: 'Bridging the digital divide by introducing computers, internet research, office applications, and remote work readiness to youth from low-resource backgrounds.',
    category: 'Technology',
    objectives: [
      'Equip students with core IT and keyboarding skills',
      'Teach safe internet navigation and cyber awareness',
      'Introduce freelance and remote economic opportunities'
    ],
    targetBeneficiaries: 'Students and job seekers lacking digital hardware access',
    keyActivities: ['Hands-on Lab Sessions', 'Smartphone & PC Literacy', 'Online Safety Seminars'],
    impactMetric: '750+ Digital Learners',
    imageUrl: '/src/assets/images/campaign_youth_education_1794371133489.jpg'
  },
  {
    id: 'prog-9',
    title: 'Research and Innovation',
    shortDescription: 'Collaborative academic research in AI, algorithmic auditing, and technology ethics with EDAS.',
    description: 'Radiant Youth Network connects university researchers, scholars, and youth innovators to conduct rigorous scientific research on ethical technology, algorithmic fairness, and social impact.',
    category: 'Research',
    objectives: [
      'Publish peer-reviewed papers on Responsible AI',
      'Audit algorithmic systems for fairness and transparency',
      'Foster student research fellowships and academic writing'
    ],
    targetBeneficiaries: 'Researchers, graduate students, technologists, and policymakers',
    keyActivities: ['EDAS-affiliated Research Tracks', 'Algorithmic Bias Audits', 'Academic Symposia'],
    impactMetric: 'Multiple Studies in Progress',
    imageUrl: '/src/assets/images/campaign_youth_education_1794371133489.jpg'
  },
  {
    id: 'prog-10',
    title: 'Community Development',
    shortDescription: 'Holistic uplift initiatives through neighborhood sanitation, healthcare camps, and green drives.',
    description: 'Transforming neighborhoods from the inside out. RYN organizes tree plantation drives, neighborhood cleanups, and free preventive medical screening camps.',
    category: 'Community',
    objectives: [
      'Organize urban greening and tree plantation drives',
      'Host free eye checkup and health screening camps',
      'Strengthen local community councils and volunteer clubs'
    ],
    targetBeneficiaries: 'Entire underserved suburban and rural localities',
    keyActivities: ['Plantation Drives', 'Health Screening Camps', 'Neighborhood Cleanups'],
    impactMetric: '15+ Communities Served',
    imageUrl: '/src/assets/images/hero_volunteers_community_1794371132429.jpg'
  },
  {
    id: 'prog-11',
    title: 'Volunteer Development',
    shortDescription: 'A structured leadership academy preparing thousands of youth for humanitarian response.',
    description: 'Volunteering with RYN is a transformative leadership experience. Our volunteers receive project management training, humanitarian field ethics certification, and team collaboration skills.',
    category: 'Leadership',
    objectives: [
      'Train volunteers in emergency humanitarian response',
      'Issue verified volunteer service certifications',
      'Cultivate lifelong social empathy and civic responsibility'
    ],
    targetBeneficiaries: 'College and university students nationwide',
    keyActivities: ['Volunteer Bootcamps', 'Field Deployment Rosters', 'Annual Recognition Gala'],
    impactMetric: '300+ Active Volunteers',
    imageUrl: '/src/assets/images/hero_volunteers_community_1794371132429.jpg'
  },
  {
    id: 'prog-12',
    title: 'Technology for Social Good',
    shortDescription: 'Designing open-source tools, emergency hotlines, and donor tracking systems for impact.',
    description: 'Harnessing the power of modern software engineering and data science to improve non-profit transparency, donation verification, and rapid relief coordination.',
    category: 'Technology',
    objectives: [
      'Build open verification systems for donations',
      'Map humanitarian need hotspots using data',
      'Enable youth coders to build impact applications'
    ],
    targetBeneficiaries: 'NGOs, civic groups, and vulnerable communities',
    keyActivities: ['Civic Hackathons', 'Relief Dispatch Systems', 'Open Data Portals'],
    impactMetric: '100% Digital Traceability',
    imageUrl: '/src/assets/images/campaign_youth_education_1794371133489.jpg'
  }
];

export const RESEARCH_PAPERS: ResearchPaper[] = [
  {
    id: 'res-01',
    title: 'Algorithmic Fairness and Auditing Frameworks in Emerging Digital Economies',
    authors: ['Radiant Youth Research Group', 'EDAS Academic Track Collaboration'],
    abstract: 'An investigation into algorithmic bias, demographic representation, and audit mechanisms within public and educational AI models deployed in developing regions. Presents a lightweight auditing protocol for evaluating bias without requiring access to proprietary weights.',
    category: 'Algorithmic Auditing',
    publicationDate: '2024-04-12',
    status: 'Published',
    edasAffiliated: true,
    doiOrLink: 'https://edas.info'
  },
  {
    id: 'res-02',
    title: 'Responsible AI & Equitable Technology Adoption Among Underserved Youth',
    authors: ['Ms. Zainab Asif', 'RYN AI Governance Council'],
    abstract: 'Examines the sociocultural implications of rapid generative AI adoption across secondary and tertiary education institutions in South Asia. Proposes institutional safety guardrails and inclusion principles to safeguard vulnerable learners.',
    category: 'Responsible AI',
    publicationDate: '2024-07-28',
    status: 'Published',
    edasAffiliated: true,
    doiOrLink: 'https://edas.info'
  },
  {
    id: 'res-03',
    title: 'Human-Centered Digital Literacy Pedagogies for Post-Disaster Community Resilience',
    authors: ['RYN Educational Development Division'],
    abstract: 'A field study measuring skill retention and socioeconomic mobility among 400 young learners participating in hybrid offline-first digital literacy bootcamps in peri-urban communities.',
    category: 'Education Research',
    publicationDate: '2024-09-15',
    status: 'Under Peer Review',
    edasAffiliated: true,
    doiOrLink: 'https://edas.info'
  },
  {
    id: 'res-04',
    title: 'Machine Learning Driven Resource Allocation in Micro-Humanitarian Relief Drives',
    authors: ['Muhammad Ali', 'Radiant Youth Data Lab', 'EDAS Working Group'],
    abstract: 'Developing predictive demand-modeling for food ration and clean drinking water distribution during heatwaves and festive drives. Demonstrates a 32% reduction in logistical turnaround times.',
    category: 'Machine Learning',
    publicationDate: '2024-11-04',
    status: 'Published',
    edasAffiliated: true,
    doiOrLink: 'https://edas.info'
  }
];

export const INITIAL_DONATIONS: DonationRecord[] = [
  {
    id: 'don-101',
    referenceNumber: 'RYN-DON-2026-0814',
    donorName: 'Ahmed Tariq',
    donorEmail: 'ahmed.t@example.com',
    donorPhone: '+92 321 5554321',
    category: 'Food Drive',
    amount: 10000,
    paymentMethod: 'Easypaisa',
    transactionId: 'EP8492019482',
    transactionDate: '2026-11-08',
    status: 'Verified',
    message: 'May this provide nutritious food to families in need.',
    isAnonymous: false,
    adminNotes: 'Payment verified against Easypaisa statement. Receipt issued.',
    verifiedAt: '2026-11-09T10:30:00Z',
    verifiedBy: 'Finance Administrator',
    createdAt: '2026-11-08T15:20:00Z'
  },
  {
    id: 'don-102',
    referenceNumber: 'RYN-DON-2026-0815',
    donorName: 'Anonymous Donor',
    donorEmail: 'supporter@domain.org',
    donorPhone: '+92 300 1234567',
    category: 'Water Drive',
    amount: 5000,
    paymentMethod: 'Easypaisa',
    transactionId: 'EP9920194012',
    transactionDate: '2026-11-09',
    status: 'Verified',
    message: 'For summer heat hydration drive.',
    isAnonymous: true,
    adminNotes: 'Verified via Easypaisa SMS alert.',
    verifiedAt: '2026-11-09T14:45:00Z',
    verifiedBy: 'Finance Administrator',
    createdAt: '2026-11-09T08:10:00Z'
  },
  {
    id: 'don-103',
    referenceNumber: 'RYN-DON-2026-0816',
    donorName: 'Sana Fatima',
    donorEmail: 'sana.fatima@gmail.com',
    donorPhone: '+92 333 7894561',
    category: 'Education Support',
    amount: 25000,
    paymentMethod: 'Easypaisa',
    transactionId: 'EP7719402910',
    transactionDate: '2026-11-10',
    status: 'Pending Verification',
    message: 'Sponsoring school kits for deserving young students.',
    isAnonymous: false,
    createdAt: '2026-11-10T16:00:00Z'
  }
];

export const INITIAL_COLLABORATIONS: CollaborationProposal[] = [
  {
    id: 'col-201',
    referenceNumber: 'RYN-COL-2026-0042',
    fullName: 'Kamran Siddiqui',
    organizationName: 'Allied Tech Innovations',
    designation: 'Head of CSR',
    officialEmail: 'csr@alliedtech.pk',
    contactNumber: '+92 300 9876543',
    country: 'Pakistan',
    city: 'Lahore',
    category: 'CSR Initiatives',
    projectTitle: 'Solar-Powered Youth Digital Learning Hubs',
    description: 'Proposed joint CSR project to equip 2 community schools with refurbished laptops, solar power backups, and RYN digital literacy mentors.',
    expectedContribution: 'Hardware sponsorship and co-branding',
    proposedFundingAmount: 'PKR 850,000',
    partnershipDuration: '12 Months',
    status: 'In Discussion',
    createdAt: '2026-11-05T12:00:00Z'
  },
  {
    id: 'col-202',
    referenceNumber: 'RYN-COL-2026-0043',
    fullName: 'Dr. Ayesha Malik',
    organizationName: 'National Youth Research Forum',
    designation: 'Associate Director',
    officialEmail: 'a.malik@nyrf.edu.pk',
    contactNumber: '+92 322 4567890',
    country: 'Pakistan',
    city: 'Islamabad',
    category: 'Research Collaborations',
    projectTitle: 'AI Ethics & Gender Representation in STEM',
    description: 'Joint research publication on algorithmic bias in admissions tools and youth gender equity.',
    expectedContribution: 'Research methodology, data analysis, and peer-review sponsorship',
    partnershipDuration: '6 Months',
    status: 'Under Review',
    createdAt: '2026-11-09T09:30:00Z'
  }
];

export const INITIAL_VOLUNTEERS: VolunteerApplication[] = [
  {
    id: 'vol-301',
    referenceNumber: 'RYN-VOL-2026-0112',
    fullName: 'Hamza Bilal',
    email: 'hamza.bilal@gmail.com',
    phone: '+92 312 3456789',
    city: 'Lahore',
    age: 22,
    education: 'BS Computer Science (3rd Year)',
    skills: 'Web design, graphic design, social media content, logistics coordination',
    areasOfInterest: ['Digital Literacy', 'Food Distribution', 'Marketing'],
    availability: 'Weekends & Evenings (10 hrs/week)',
    previousExperience: 'Organized campus flood relief drive in 2024.',
    motivation: 'I want to give back to underserved youth and help teach them programming and digital skills.',
    status: 'Approved',
    createdAt: '2026-11-04T14:15:00Z'
  },
  {
    id: 'vol-302',
    referenceNumber: 'RYN-VOL-2026-0113',
    fullName: 'Zoya Naveed',
    email: 'zoya.naveed@outlook.com',
    phone: '+92 334 9876543',
    city: 'Islamabad',
    age: 21,
    education: 'BS International Relations',
    skills: 'Event management, public speaking, community outreach, volunteer coordination',
    areasOfInterest: ['Gender Equality', 'Youth Empowerment', 'Community Development'],
    availability: 'Flexible (12 hrs/week)',
    previousExperience: 'Volunteered with university women empowerment society.',
    motivation: 'Inspired by Ms. Zainab Asifs leadership in empowering young women across Pakistan.',
    status: 'Approved',
    createdAt: '2026-11-07T11:00:00Z'
  }
];
