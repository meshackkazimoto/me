export const profile = {
  name: "Meshack",
  role: "Full-Stack Developer / Fintech Engineer",
  headline:
    "I build resilient financial platforms, developer tooling, and data-intensive products with an obsession for clarity, security, and performance.",
  location: "Tanzania",
  email: "kazimoto17@proton.me",
  socials: {
    github: "https://github.com/meshackkazimoto",
    linkedin: "https://www.linkedin.com/in/meshackkazimoto"
  }
};

export const metrics = [
  { label: "Years Experience", value: "4+" },
  { label: "Products Shipped", value: "20+" },
  { label: "Systems Built", value: "35+" },
  { label: "Latency Wins", value: "<50ms" }
];

export const techStack = [
  "TypeScript",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "Redis",
  "Kafka",
  "AWS",
  "Spring Boot",
  "Security",
  "Python"
];

export const projects = [
  {
    name: "Pulse Ledger",
    description:
      "Real-time ledger infrastructure for regulated fintech teams with deterministic audit trails.",
    problem:
      "Traditional ledgers struggle with reconciliation lag and audit complexity across multi-entity products.",
    solution:
      "Designed an event-sourced core with immutable state, automated reconciliation, and policy-driven approvals.",
    tech: ["TypeScript", "Node.js", "PostgreSQL", "Kafka"],
    role: "Founder / Lead Engineer"
  },
  {
    name: "Signal Compliance",
    description:
      "Compliance automation that flags anomalous transactions and documents decisions in minutes.",
    problem:
      "Manual reviews create bottlenecks and inconsistent regulatory documentation.",
    solution:
      "Built a risk engine with explainable scoring and templated evidence capture for audit-ready exports.",
    tech: ["Python", "FastAPI", "PostgreSQL", "AWS"],
    role: "Lead Developer"
  },
  {
    name: "Atlas Payments",
    description:
      "Global payout orchestration with multi-rail routing and real-time status tracking.",
    problem:
      "Operations teams lacked visibility into failures across fragmented payment providers.",
    solution:
      "Implemented a routing layer with live observability and automated retry logic by corridor.",
    tech: ["Next.js", "Node.js", "Redis", "OpenTelemetry"],
    role: "Platform Engineer"
  }
];

export const experiences = [
  {
    company: "Independent Studio",
    title: "Founder / Lead Developer",
    period: "2020 -- Present",
    achievements: [
      "Built fintech infrastructure products used by regulated teams across the US.",
      "Reduced reconciliation time from days to minutes through event-sourced systems.",
      "Led cross-functional launches with security-first architecture and audit readiness."
    ]
  },
  {
    company: "Orbit Financial",
    title: "Senior Full-Stack Engineer",
    period: "2017 -- 2020",
    achievements: [
      "Delivered payment reliability improvements, cutting failed transfers by 38%.",
      "Automated compliance reporting workflows for SOC2 and PCI readiness.",
      "Introduced performance budgets and observability dashboards for executive visibility."
    ]
  }
];

export const howIBuildSystems = [
  {
    title: "Clarify the risk model",
    description:
      "Define failure modes early, align stakeholders on tradeoffs, and codify policy into system design."
  },
  {
    title: "Design for traceability",
    description:
      "Every action produces a durable audit trail, making compliance and debugging part of the system."
  },
  {
    title: "Ship with guardrails",
    description:
      "Progressive rollouts, automated tests, and monitoring ensure reliability without slowing teams."
  }
];

export const currentFocus = [
  "Financial infrastructure with audit-ready data pipelines",
  "Real-time monitoring + alerting for high-stakes workflows",
  "Developer experience for regulated engineering teams"
];

export const currentlyBuilding = [
  {
    title: "Ledger Control Plane",
    detail: "Unified orchestration for multi-entity books, approvals, and policy enforcement."
  },
  {
    title: "Risk Signal Studio",
    detail: "Low-code risk modeling with explainable outputs and compliance exports."
  },
  {
    title: "FinOps Observability",
    detail: "Cost + reliability dashboards tuned for payment-heavy environments."
  }
];

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];
