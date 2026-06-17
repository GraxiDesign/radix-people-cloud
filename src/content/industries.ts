export type FAQ = { q: string; a: string };
export type IndustryContent = {
  slug: string;
  name: string;
  hero: { title: string; subtitle: string };
  metaTitle: string;
  metaDescription: string;
  challenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  modules: string[]; // product slugs
  benefits: string[];
  roi: { metric: string; value: string }[];
  intro: string;
  body: string;
  caseStudy: { customer: string; outcome: string; quote: string; person: string };
  faqs: FAQ[];
};

const ind = (s: IndustryContent): IndustryContent => s;

export const industries: IndustryContent[] = [
  ind({
    slug: "manufacturing", name: "Manufacturing",
    hero: { title: "HRMS for Modern Manufacturing", subtitle: "Shift-based plant workforce, contract labour, statutory compliance and shop-floor productivity — on one platform." },
    metaTitle: "HRMS for Manufacturing — Radix StratEdge",
    metaDescription: "Manufacturing HRMS for shifts, contract labour, statutory compliance, biometric attendance and plant productivity.",
    challenges: [
      { title: "Shift Complexity", desc: "Multi-shift, multi-plant rosters with statutory rest and overtime rules." },
      { title: "Contract Labour", desc: "Hundreds of contractors and sub-contractors with compliance liability." },
      { title: "Statutory Burden", desc: "Factories Act, Contract Labour Act, PF, ESI, PT, LWF across plants." },
      { title: "Shop-Floor Productivity", desc: "Linking attendance to output and OEE in real time." },
    ],
    solutions: [
      { title: "Smart Shift Engine", desc: "Auto-roster across plants with statutory and union compliance." },
      { title: "Contract Labour Module", desc: "End-to-end contractor lifecycle with compliance and billing." },
      { title: "Plant Payroll", desc: "Daily-wage, piece-rate and salary payroll with statutory filings." },
      { title: "Productivity Dashboards", desc: "Tie attendance to output, OEE and cost-per-unit in real time." },
    ],
    modules: ["attendance-management", "shift-management", "payroll-management", "workforce-analytics", "core-hr", "leave-management"],
    benefits: ["40% reduction in roster build time", "100% statutory compliance", "Real-time plant productivity", "Single source of truth for HR"],
    roi: [
      { metric: "Roster Time", value: "-60%" },
      { metric: "Compliance Penalties", value: "₹0" },
      { metric: "Overtime Cost", value: "-18%" },
      { metric: "Payroll Cycle", value: "3 days → 4 hours" },
    ],
    intro: "Manufacturing HR teams juggle multi-plant rosters, contract labour, statutory compliance and shop-floor productivity with tools that weren't designed for the complexity. Radix unifies every workforce process — from biometric attendance to payroll to contractor compliance — in a single platform built for the realities of the plant.",
    body: "Whether you operate a single facility or a network of plants across geographies, Radix scales to your operational complexity. Smart shift rosters respect union rules, statutory rest periods and skill requirements. The Contract Labour module manages the full contractor lifecycle with statutory compliance reports ready for inspection. Plant payroll handles daily-wage, piece-rate and salary employees with PF, ESI, PT, LWF and Bonus Act filings. Productivity dashboards link attendance to output, OEE and cost-per-unit — turning HR data into operational insight.",
    caseStudy: {
      customer: "Leading Auto OEM, 18 plants, 24,000 employees",
      outcome: "Roster build time down 60%, payroll cycle from 3 days to 4 hours, zero compliance penalties in 18 months.",
      quote: "Radix unified our 18 plants on one HR platform in 90 days. Our compliance posture has never been stronger.",
      person: "Head of HR Operations",
    },
    faqs: [
      { q: "Do you handle contract labour compliance?", a: "Yes. Full contractor lifecycle with statutory reports for Contract Labour Act, PF, ESI, PT and LWF." },
      { q: "Does it support biometric & RFID?", a: "Yes. 50+ device brands across face, fingerprint and RFID with shift-aware capture." },
      { q: "Can it run daily-wage payroll?", a: "Yes. Daily-wage, piece-rate and salary payroll in a single engine with statutory compliance." },
      { q: "How long is implementation?", a: "Typical multi-plant rollout takes 8–12 weeks with our manufacturing-experienced implementation team." },
    ],
  }),
  ind({
    slug: "construction", name: "Construction",
    hero: { title: "HRMS for Construction & Infrastructure", subtitle: "Site-based crews, daily-wage payroll, contractor compliance and safety — on one mobile-first platform." },
    metaTitle: "HRMS for Construction — Radix StratEdge",
    metaDescription: "Construction HRMS for site workforce, daily-wage payroll, contractor compliance and safety management.",
    challenges: [
      { title: "Site-Based Workforce", desc: "Hundreds of sites with daily-changing workforce." },
      { title: "Daily-Wage Payroll", desc: "High-volume daily-wage settlement with statutory compliance." },
      { title: "Contractor Sprawl", desc: "Multiple contractors and sub-contractors per site." },
      { title: "Safety & PPE", desc: "Tracking PPE issuance, safety training and incident reporting." },
    ],
    solutions: [
      { title: "Geo-Fenced Site Attendance", desc: "Site-wise geo-fences with selfie verification — even offline." },
      { title: "Daily-Wage Engine", desc: "Daily, weekly and monthly settlement cycles with statutory deductions." },
      { title: "Contractor Compliance", desc: "Full contractor lifecycle with statutory reports and billing." },
      { title: "Safety Module", desc: "PPE issuance, safety training, toolbox talks and incident reporting." },
    ],
    modules: ["attendance-management", "geo-fencing", "payroll-management", "field-workforce", "core-hr", "learning-management-system"],
    benefits: ["Real-time site headcount", "Daily settlement automation", "100% contractor compliance", "Reduced safety incidents"],
    roi: [
      { metric: "Settlement Time", value: "-80%" },
      { metric: "Ghost Workers", value: "Eliminated" },
      { metric: "Safety Incidents", value: "-35%" },
      { metric: "Compliance Reports", value: "Automated" },
    ],
    intro: "Construction HR is uniquely challenging — workforce changes daily, sites are remote, contractors sprawl and statutory exposure is high. Radix delivers a mobile-first, geo-fenced platform that brings rigour to site workforce management without slowing operations down.",
    body: "Geo-fenced site attendance with selfie verification eliminates ghost workers and gives real-time site headcount. The daily-wage engine settles workers daily, weekly or monthly with statutory deductions and bank file generation. Contractor compliance covers the full lifecycle — onboarding, statutory reports, billing and exit. The safety module tracks PPE issuance, safety training, toolbox talks and incident reporting — building a culture of safety on every site.",
    caseStudy: {
      customer: "Top-5 Infra Construction Group, 240 sites, 80,000 workers",
      outcome: "Eliminated ghost workers, automated daily settlement, 35% reduction in safety incidents.",
      quote: "Radix gave us real-time visibility across 240 sites for the first time. We've eliminated ghost workers and our daily settlement runs itself.",
      person: "Group VP Operations",
    },
    faqs: [
      { q: "Does mobile attendance work offline?", a: "Yes. Site attendance works offline with tamper-evident local storage and sync on connectivity." },
      { q: "Can it handle daily-wage settlement?", a: "Yes. Daily, weekly or monthly settlement cycles with statutory compliance and bank files." },
      { q: "Does it track PPE issuance?", a: "Yes. PPE issuance, returns, expiry tracking and incident-linked PPE checks." },
      { q: "How are contractors managed?", a: "Full contractor lifecycle with onboarding, compliance, billing and exit workflows." },
    ],
  }),
  ind({
    slug: "healthcare", name: "Healthcare",
    hero: { title: "HRMS for Hospitals & Healthcare Networks", subtitle: "Nurse rostering, credential tracking, HIPAA-ready data and 24x7 shift operations — purpose-built for healthcare." },
    metaTitle: "HRMS for Healthcare — Radix StratEdge",
    metaDescription: "Healthcare HRMS for nurse rostering, credential tracking, HIPAA-ready data and 24x7 shift operations.",
    challenges: [
      { title: "24x7 Shift Operations", desc: "Complex shift patterns with patient-load fluctuation." },
      { title: "Credential Management", desc: "Tracking licences, certifications and renewals for every clinician." },
      { title: "Data Sensitivity", desc: "HIPAA-grade controls on employee and patient-linked data." },
      { title: "Burnout Risk", desc: "High attrition driven by burnout and rostering inequity." },
    ],
    solutions: [
      { title: "Nurse Rostering Engine", desc: "Skill, ward and certification-aware rosters with statutory rest." },
      { title: "Credential Tracker", desc: "Track licences, certifications and renewals with auto-alerts." },
      { title: "HIPAA-Ready Controls", desc: "Encryption, audit trail and access controls aligned to HIPAA." },
      { title: "Engagement & Pulse", desc: "Pulse surveys, manager 1:1s and early-warning attrition predictions." },
    ],
    modules: ["shift-management", "attendance-management", "core-hr", "performance-management", "people-analytics", "learning-management-system"],
    benefits: ["Optimised nurse staffing", "Zero expired credentials", "HIPAA-aligned data controls", "Lower clinician attrition"],
    roi: [
      { metric: "Rostering Time", value: "-70%" },
      { metric: "Expired Credentials", value: "0" },
      { metric: "Agency Spend", value: "-22%" },
      { metric: "Nurse Attrition", value: "-9pp" },
    ],
    intro: "Healthcare runs 24x7 — and the workforce that powers it deserves tools as sophisticated as the clinical systems it works alongside. Radix delivers a healthcare-tuned HRMS that handles nurse rostering, credential management, HIPAA-grade controls and the engagement workflows that keep clinicians from burning out.",
    body: "The nurse rostering engine balances skill, ward, certification, patient load and statutory rest to build compliant rosters in minutes. Credential tracking covers every licence and certification with renewal alerts that prevent costly lapses. HIPAA-aligned data controls — encryption, audit, RBAC and field-level masking — protect both employees and patients. Engagement workflows — pulse surveys, manager 1:1s and attrition predictions — help reduce the burnout that drives 25%+ annual nurse turnover.",
    caseStudy: {
      customer: "Multi-Specialty Hospital Group, 14 hospitals, 18,000 employees",
      outcome: "70% reduction in rostering time, 22% reduction in agency spend, 9-point reduction in nurse attrition.",
      quote: "Radix transformed our nurse rostering. We've cut agency spend by 22% and our nurses are happier with fairer schedules.",
      person: "Group CHRO",
    },
    faqs: [
      { q: "Is the platform HIPAA-ready?", a: "Yes. Encryption, audit, RBAC and field-level masking align with HIPAA's administrative, physical and technical safeguards." },
      { q: "How does nurse rostering work?", a: "Constraint-based engine balances skill, ward, certification, patient load and statutory rest with shift swaps." },
      { q: "Can it track licences and certifications?", a: "Yes. Every credential tracked with expiry alerts, renewal workflows and audit-ready reports." },
      { q: "Does it integrate with HIS/EMR?", a: "Yes. Bidirectional integration with leading HIS/EMR platforms via APIs and HL7 connectors." },
    ],
  }),
  ind({
    slug: "retail", name: "Retail",
    hero: { title: "HRMS for Retail & QSR Networks", subtitle: "Store associate rostering, mobile ESS, incentives and seasonal hiring — built for hundreds of outlets." },
    metaTitle: "HRMS for Retail — Radix StratEdge",
    metaDescription: "Retail HRMS for store rostering, mobile self-service, incentives and seasonal hiring across hundreds of outlets.",
    challenges: [
      { title: "Store Sprawl", desc: "Hundreds or thousands of stores with high associate turnover." },
      { title: "Peak & Seasonal Hiring", desc: "Bulk hiring for festive and seasonal peaks." },
      { title: "Incentives Complexity", desc: "Store-level, role-level and SKU-level incentive structures." },
      { title: "Frontline Engagement", desc: "Keeping a distributed frontline informed and engaged." },
    ],
    solutions: [
      { title: "Store Rostering", desc: "Demand-driven shift coverage per store with swaps and open shifts." },
      { title: "Bulk Hiring Engine", desc: "Campus, walk-in and bulk hiring with assessments and offers." },
      { title: "Incentives Module", desc: "Configurable incentives by store, role, SKU and target with payroll handoff." },
      { title: "Frontline App", desc: "Mobile-first ESS with announcements, learning, payslips and helpdesk." },
    ],
    modules: ["shift-management", "applicant-tracking-system", "payroll-management", "employee-self-service", "learning-management-system", "core-hr"],
    benefits: ["Peak coverage at every store", "Faster bulk hiring", "Accurate incentive payouts", "Engaged frontline workforce"],
    roi: [
      { metric: "Time-to-Fill (Bulk)", value: "-50%" },
      { metric: "Incentive Disputes", value: "-80%" },
      { metric: "Frontline App DAU", value: "78%" },
      { metric: "Store Coverage", value: "+12pp" },
    ],
    intro: "Retail and QSR HR runs at the speed of the store floor. Radix gives retail leaders a unified platform for store rostering, bulk hiring, accurate incentives and an engaged frontline — purpose-built for hundreds or thousands of outlets.",
    body: "Demand-driven store rostering optimises shift coverage with swaps and open shifts. The bulk hiring engine processes 10,000+ applications per cycle with assessments, bulk offers and 24-hour onboarding. The incentives module handles store, role, SKU and target-based incentive structures with auto-calculation and payroll handoff. A mobile-first ESS app — designed for low-data environments — keeps the frontline informed, learning and engaged.",
    caseStudy: {
      customer: "National QSR Chain, 1,200 outlets, 32,000 associates",
      outcome: "50% faster bulk hiring, 80% reduction in incentive disputes, 78% mobile app daily active usage.",
      quote: "We can now hire 5,000 associates for a festive peak in 3 weeks instead of 8. Radix is a game-changer for our store operations.",
      person: "Director, Store Operations",
    },
    faqs: [
      { q: "Can it handle bulk hiring?", a: "Yes. Bulk hiring with assessments, group offers, bulk onboarding and 24-hour go-live." },
      { q: "How do incentives work?", a: "Configurable by store, role, SKU and target with auto-calculation and payroll handoff." },
      { q: "Is the frontline app low-data?", a: "Yes. Optimised for sub-50KB sessions with offline support — ideal for store floors." },
      { q: "Can it scale to thousands of stores?", a: "Yes. Customers run Radix across 5,000+ outlets with regional rollouts and centralised governance." },
    ],
  }),
  ind({
    slug: "logistics", name: "Logistics",
    hero: { title: "HRMS for Logistics & Supply Chain", subtitle: "Driver attendance, hub workforce, route adherence and statutory compliance — for hub-and-spoke operations." },
    metaTitle: "HRMS for Logistics — Radix StratEdge",
    metaDescription: "Logistics HRMS for driver attendance, hub workforce, route adherence and statutory compliance.",
    challenges: [
      { title: "Distributed Workforce", desc: "Drivers, hub staff and field teams across geographies." },
      { title: "Route Adherence", desc: "Tracking driver routes, stops and dwell times." },
      { title: "Statutory Compliance", desc: "Multi-state PT, LWF, Motor Transport Workers Act compliance." },
      { title: "Attrition", desc: "High driver and hub attrition driven by pay and conditions." },
    ],
    solutions: [
      { title: "Driver & Hub Attendance", desc: "Geo-fenced attendance with selfie verification and offline support." },
      { title: "Route Tracking", desc: "Live route tracking with stops, dwell and exception alerts." },
      { title: "Multi-State Payroll", desc: "Payroll with multi-state statutory and contract compliance." },
      { title: "Engagement & Retention", desc: "Pulse surveys, recognition and attrition AI for driver retention." },
    ],
    modules: ["attendance-management", "geo-fencing", "field-workforce", "payroll-management", "people-analytics", "core-hr"],
    benefits: ["Real-time hub headcount", "Route adherence visibility", "Multi-state compliance", "Lower driver attrition"],
    roi: [
      { metric: "Hub Coverage", value: "+9pp" },
      { metric: "Route Adherence", value: "+14pp" },
      { metric: "Compliance Penalties", value: "₹0" },
      { metric: "Driver Attrition", value: "-11pp" },
    ],
    intro: "Logistics HR operates across hubs, depots, last-mile fleets and customer sites — a workforce that's mostly mobile and rarely at a desk. Radix delivers a mobile-first, geo-aware platform that brings real-time visibility and compliance to every node of the network.",
    body: "Driver and hub attendance is captured with geo-fenced selfie verification, offline support and tamper-evident hashing. Route tracking shows live driver location, stops, dwell and exceptions — without draining batteries. Multi-state payroll handles PT, LWF, Motor Transport Workers Act and contract labour compliance. Engagement workflows — pulse surveys, recognition, attrition AI — help reduce the 30%+ annual driver attrition that plagues the industry.",
    caseStudy: {
      customer: "National Logistics Player, 220 hubs, 12,000 drivers",
      outcome: "11pp reduction in driver attrition, 14pp improvement in route adherence, zero compliance penalties.",
      quote: "Radix gave us a real-time picture of our 220 hubs and 12,000 drivers. We've cut driver attrition by 11 points in a year.",
      person: "Chief People Officer",
    },
    faqs: [
      { q: "Does it track drivers in real time?", a: "Yes. Battery-efficient live tracking with route, stops, dwell and exceptions — working hours only." },
      { q: "Can it handle multi-state compliance?", a: "Yes. PT, LWF, Motor Transport Workers Act, Contract Labour Act and state-specific filings." },
      { q: "How does it help reduce attrition?", a: "Pulse surveys, recognition, attrition AI and manager nudges flag risk early with recommended actions." },
      { q: "Does it integrate with TMS?", a: "Yes. Bidirectional integration with leading TMS platforms for route, stop and driver assignment data." },
    ],
  }),
  ind({
    slug: "staffing", name: "Staffing Agencies",
    hero: { title: "HRMS for Staffing & Workforce Solutions", subtitle: "Contract workforce, multi-client billing, statutory compliance and recruiter productivity — on one platform." },
    metaTitle: "HRMS for Staffing Agencies — Radix StratEdge",
    metaDescription: "Staffing HRMS for contract workforce, multi-client billing, statutory compliance and recruiter productivity.",
    challenges: [
      { title: "High Volume Contract Workforce", desc: "Tens of thousands of contract workers deployed at clients." },
      { title: "Multi-Client Billing", desc: "Different billing models per client with statutory add-backs." },
      { title: "Compliance Liability", desc: "Statutory liability across multiple states and clients." },
      { title: "Recruiter Productivity", desc: "High-volume recruiting with quality and speed." },
    ],
    solutions: [
      { title: "Contract Workforce Module", desc: "Lifecycle for contract workers — onboarding, deployment, billing, exit." },
      { title: "Multi-Client Billing", desc: "Per-client billing with statutory add-backs, margins and invoicing." },
      { title: "Compliance Engine", desc: "Multi-state statutory filings with client-wise reporting." },
      { title: "Recruiter Cockpit", desc: "ATS with bulk hiring, candidate pipelining and recruiter analytics." },
    ],
    modules: ["core-hr", "payroll-management", "applicant-tracking-system", "attendance-management", "workforce-analytics", "integrations"],
    benefits: ["Faster deployment", "Accurate client billing", "Multi-state compliance", "Higher recruiter productivity"],
    roi: [
      { metric: "Time-to-Deploy", value: "-40%" },
      { metric: "Billing Disputes", value: "-65%" },
      { metric: "Recruiter Productivity", value: "+38%" },
      { metric: "Statutory Penalties", value: "₹0" },
    ],
    intro: "Staffing agencies operate at the intersection of high-volume recruiting, complex billing and heavy statutory liability. Radix is purpose-built for the staffing business model — with contract workforce management, multi-client billing and end-to-end compliance baked in.",
    body: "The contract workforce module handles onboarding, deployment, attendance, payroll, billing and exit for tens of thousands of contract workers across hundreds of clients. Multi-client billing supports diverse models — mark-up, mark-down, per-head, fixed-fee — with statutory add-backs and automated invoicing. The compliance engine handles multi-state PF, ESI, PT, LWF and Contract Labour Act filings with client-wise reporting. A recruiter cockpit with bulk hiring, pipelining and analytics drives recruiter productivity.",
    caseStudy: {
      customer: "Top-3 Staffing Firm, 200,000 contract workers, 400 clients",
      outcome: "40% reduction in time-to-deploy, 65% reduction in billing disputes, 38% increase in recruiter productivity.",
      quote: "Radix unified our 200,000-worker staffing operation. Our billing accuracy and statutory compliance have transformed.",
      person: "Chief Operating Officer",
    },
    faqs: [
      { q: "Can it handle 100K+ contract workers?", a: "Yes. Customers run 200,000+ contract workers on Radix with sub-second response and 99.99% availability." },
      { q: "How does multi-client billing work?", a: "Per-client billing with mark-up/mark-down, statutory add-backs, margins and automated invoicing." },
      { q: "Is bulk hiring supported?", a: "Yes. Bulk hiring with assessments, group offers, bulk onboarding and 24-hour go-live." },
      { q: "Does it generate client-wise compliance reports?", a: "Yes. Client-wise statutory reports for PF, ESI, PT, LWF, CLRA and bespoke client formats." },
    ],
  }),
  ind({
    slug: "it-services", name: "IT Services",
    hero: { title: "HRMS for IT Services & Consulting", subtitle: "Project staffing, timesheets, utilisation, billing and global mobility — for project-based businesses." },
    metaTitle: "HRMS for IT Services — Radix StratEdge",
    metaDescription: "IT Services HRMS for project staffing, timesheets, utilisation, billing and global mobility.",
    challenges: [
      { title: "Project Staffing", desc: "Matching skills to project demand across geographies." },
      { title: "Utilisation & Realisation", desc: "Optimising billable utilisation and project margins." },
      { title: "Global Mobility", desc: "Managing visas, transfers, expat payroll and tax." },
      { title: "Talent Attrition", desc: "High attrition in tech roles with compensation pressure." },
    ],
    solutions: [
      { title: "Skill-Based Staffing", desc: "AI-driven matching of skills to project demand with bench management." },
      { title: "Project Timesheets", desc: "Project, task and client time tracking with approvals." },
      { title: "Utilisation Analytics", desc: "Real-time utilisation, realisation and margin dashboards." },
      { title: "Global Mobility", desc: "Visa, transfer, expat payroll and tax-equalisation workflows." },
    ],
    modules: ["timesheet-management", "core-hr", "career-development", "people-analytics", "performance-management", "applicant-tracking-system"],
    benefits: ["Optimised project staffing", "Higher utilisation", "Lower attrition", "Smooth global mobility"],
    roi: [
      { metric: "Utilisation", value: "+8pp" },
      { metric: "Time-to-Staff", value: "-45%" },
      { metric: "Bench Cost", value: "-22%" },
      { metric: "Critical-Role Attrition", value: "-7pp" },
    ],
    intro: "IT services and consulting firms run on the trifecta of skills, utilisation and margin. Radix delivers the workforce platform that ties all three together — with skill-based project staffing, timesheets, utilisation analytics and a complete global mobility toolkit.",
    body: "AI-driven skill matching connects every project to the right people on bench or in the pipeline. Project timesheets capture billable hours by client, project and task with approvals and budget alerts. Real-time utilisation, realisation and margin dashboards let leaders course-correct fast. Global mobility workflows — visa, transfer, expat payroll, shadow payroll, tax equalisation — make cross-border deployment painless. Career paths, learning and people analytics combine to tackle the perennial tech-talent attrition problem.",
    caseStudy: {
      customer: "Global IT Services, 18 countries, 65,000 employees",
      outcome: "8pp improvement in utilisation, 45% reduction in time-to-staff, 22% reduction in bench cost.",
      quote: "Our project margins are up 4 points since we standardised on Radix. The utilisation dashboards have changed how we run the business.",
      person: "Global Head of Resource Management",
    },
    faqs: [
      { q: "Does it handle project timesheets?", a: "Yes. Project, task, client and billable time with approvals, budgets and invoicing exports." },
      { q: "Can it match skills to projects?", a: "Yes. AI matches skills, certifications and experience to project demand across bench and pipeline." },
      { q: "Does it support global mobility?", a: "Yes. Visa, transfer, expat payroll, shadow payroll and tax-equalisation workflows." },
      { q: "How does it help with attrition?", a: "Career paths, internal mobility, pulse surveys and attrition AI work together to reduce tech attrition." },
    ],
  }),
  ind({
    slug: "education", name: "Education",
    hero: { title: "HRMS for Schools, Colleges & EdTech", subtitle: "Faculty management, attendance, academic workflows and statutory compliance — built for educational institutions." },
    metaTitle: "HRMS for Education — Radix StratEdge",
    metaDescription: "Education HRMS for faculty management, attendance, academic workflows and statutory compliance.",
    challenges: [
      { title: "Faculty Diversity", desc: "Full-time, part-time, guest and visiting faculty with different terms." },
      { title: "Academic Workflows", desc: "Semester-based attendance, evaluation and workload." },
      { title: "Statutory Compliance", desc: "UGC, AICTE, state-board and statutory compliance." },
      { title: "Engagement", desc: "Faculty and admin engagement across campuses." },
    ],
    solutions: [
      { title: "Faculty Module", desc: "Full-time, part-time, guest and visiting faculty with bespoke terms." },
      { title: "Academic Workflows", desc: "Semester rosters, evaluation, workload and academic calendar integration." },
      { title: "Compliance Engine", desc: "UGC, AICTE and state-board reporting alongside PF, ESI, PT." },
      { title: "Engagement Tools", desc: "Pulse surveys, recognition and L&D for faculty and admin." },
    ],
    modules: ["core-hr", "payroll-management", "attendance-management", "learning-management-system", "performance-management", "employee-self-service"],
    benefits: ["Unified faculty management", "Automated semester workflows", "Regulatory compliance", "Engaged faculty"],
    roi: [
      { metric: "Semester Setup Time", value: "-60%" },
      { metric: "Faculty Engagement", value: "+18pp" },
      { metric: "Compliance Effort", value: "-70%" },
      { metric: "Payroll Cycle", value: "5 days → 1 day" },
    ],
    intro: "Educational institutions juggle full-time, part-time, guest and visiting faculty with semester-based workflows and unique statutory requirements. Radix delivers a purpose-fit HRMS that handles the complexity while freeing administration to focus on learning outcomes.",
    body: "The faculty module supports every employment type — full-time, part-time, guest, visiting — with bespoke compensation and term structures. Academic workflows align with the semester calendar — rosters, evaluations, workload, leave and payroll cycles. The compliance engine handles UGC, AICTE and state-board reporting alongside PF, ESI, PT and Bonus Act. Engagement tools — pulse surveys, recognition, L&D — keep faculty motivated and the campus thriving.",
    caseStudy: {
      customer: "University Network, 24 campuses, 9,000 faculty & staff",
      outcome: "60% reduction in semester setup time, 18pp improvement in faculty engagement, 70% reduction in compliance effort.",
      quote: "Radix understands education. Our 24 campuses now run on one system, and our compliance posture is finally where it should be.",
      person: "Vice-Chancellor's Office",
    },
    faqs: [
      { q: "Does it support multiple faculty types?", a: "Yes. Full-time, part-time, guest, visiting and adjunct faculty with bespoke terms and payroll." },
      { q: "Is it aligned to academic calendars?", a: "Yes. Semester-based rosters, evaluations, workload and payroll cycles align to the academic calendar." },
      { q: "Does it handle UGC/AICTE reporting?", a: "Yes. Pre-built reports for UGC, AICTE and state boards alongside standard statutory filings." },
      { q: "Can it manage student-employees?", a: "Yes. Student fellowships, TA/RA payments and stipends are supported in payroll." },
    ],
  }),
];

export const industryMap: Record<string, IndustryContent> = Object.fromEntries(industries.map((i) => [i.slug, i]));
