import assetforgeCard from "../assets/images/project-artwork/assetforge/cards/assetforge-card.webp";
import assetforgeIconTitle from "../assets/images/project-artwork/assetforge/logo/assetforge-icon-title.webp";
import assetforgeShowcase from "../assets/images/project-artwork/assetforge/showcase/assetforge-showcase.webp";
import comingSoonCard from "../assets/images/project-artwork/coming-soon/coming-soon.webp";
import foundedCard from "../assets/images/project-artwork/founded/cards/founded-card.webp";
import foundedIconTitle from "../assets/images/project-artwork/founded/logo/founded-icon-title.webp";
import foundedShowcase from "../assets/images/project-artwork/founded/showcase/founded-showcase.webp";
import foundedBaselineBuilder from "../assets/images/project-artwork/founded/screenshots/baseline-builder.webp";
import foundedDashboard from "../assets/images/project-artwork/founded/screenshots/dashboard.webp";
import foundedHome from "../assets/images/project-artwork/founded/screenshots/home.webp";
import foundedScenarioBuilder from "../assets/images/project-artwork/founded/screenshots/scenario-builder.webp";

export const PROJECT_TRACK_SCROLL_KEY = "portfolio.projectTrack.scrollLeft";
export const PROJECT_TRACK_SELECTED_KEY =
  "portfolio.projectTrack.selectedProject";

export const projectLibrarySettings = {
  showViewAllControl: false,
};

export const projects = [
  {
    title: "Founded",
    slug: "founded",
    status: "Completed",
    cardDescription:
      "Personal finance planning with projections, scenarios, and payoff optimization.",
    cardStatus: "Released",
    cardStatusTone: "released",
    releaseOrder: 1,
    summary:
      "Founded is a scenario-driven planning application focused on comparing baselines, projections, and decision paths through a clean analytical interface.",
    technologyStack: ["React", "JavaScript", "CSS", "Scenario modeling"],
    glance: {
      type: "Financial Planning Platform",
      architecture: ["React", "Node.js", "Express", "MongoDB"],
      highlights: [
        "Financial Forecasting",
        "Scenario Modeling",
        "Debt Payoff Engine",
        "Interactive Analytics",
      ],
      version: "v1.0.0",
    },
    releaseNotes: {
      version: "Founded v1.0.0",
      title: "Release Notes",
      date: "June 2026",
      overview: [
        "Founded v1.0.0 is the first production release of a full-stack personal financial planning platform designed to help individuals and households model their finances, forecast long-term cash flow, compare alternate financial scenarios, and make informed financial decisions.",
        "Built with React, Node.js, Express, and MongoDB, Founded emphasizes transparency, maintainability, and data-driven financial planning through an intuitive desktop experience.",
      ],
      sections: [
        {
          title: "Financial Baseline Management",
          description: [
            "Create a single financial source of truth by managing the core financial records that power every projection and scenario.",
          ],
          items: [
            "Accounts",
            "Account owners",
            "Income sources",
            "Debts and loans",
            "Bills and recurring expenses",
            "Account transfers",
          ],
        },
        {
          title: "Scenario Comparison Engine",
          description: [
            "Safely evaluate financial decisions without modifying the original financial plan. Baseline and scenario projections can be compared side-by-side.",
          ],
          items: [
            "Income adjustments",
            "Debt payoff strategies",
            "Expense changes",
            "New recurring costs",
            "Financial life events",
          ],
        },
        {
          title: "Long-Term Financial Forecasting",
          description: [
            "Generate detailed month-by-month financial projections with transparent calculations and long-range planning visibility.",
          ],
          items: [
            "Cash flow forecasting",
            "Account balances",
            "Debt payoff timelines",
            "Interest calculations",
            "Principal reduction tracking",
            "Monthly surplus analysis",
          ],
        },
        {
          title: "Interactive Dashboard",
          description: [
            "Analyze financial performance through an interactive dashboard designed for projection review and scenario comparison.",
          ],
          items: [
            "Projection summaries",
            "Cash balance visualization",
            "Debt payoff progress",
            "Financial metrics",
            "Milestone tracking",
            "Scenario comparison charts",
          ],
        },
        {
          title: "Data Export",
          description: [
            "Export projection results for reporting, archival, and additional financial analysis.",
          ],
          items: ["CSV", "Microsoft Excel", "PDF"],
        },
        {
          title: "Technology Stack",
          groups: [
            {
              title: "Frontend",
              items: ["React", "Vite", "JavaScript"],
            },
            {
              title: "Backend",
              items: ["Node.js", "Express"],
            },
            {
              title: "Database",
              items: ["MongoDB Community Server"],
            },
          ],
        },
        {
          title: "Technical Highlights",
          items: [
            "React frontend",
            "Node.js + Express REST API",
            "MongoDB Community Server",
            "Modular application architecture",
            "Responsive desktop and tablet interface",
            "Component-based UI",
            "Persistent financial data storage",
            "Comprehensive backend validation",
            "Automated dataset verification",
            "Production-ready build pipeline",
          ],
        },
        {
          title: "Design Principles",
          description: ["Founded was developed around several core principles."],
          items: [
            "Maintain a single financial source of truth.",
            "Keep financial experimentation isolated through scenarios.",
            "Preserve projection accuracy and data integrity.",
            "Provide transparent, explainable financial calculations.",
            "Deliver a clean and intuitive user experience.",
          ],
        },
        {
          title: "Version 1.0 Includes",
          items: [
            "Financial baseline management",
            "Scenario authoring and comparison",
            "Projection engine",
            "Interactive analytics dashboard",
            "Debt payoff forecasting",
            "Multi-account support",
            "Financial data exports",
            "MongoDB persistence",
            "Responsive user interface",
          ],
        },
        {
          title: "Known Limitations",
          description: [
            "Version 1.0 intentionally focuses on local-first financial planning. These items remain outside the scope of the initial release.",
          ],
          items: [
            "User authentication",
            "Cloud synchronization",
            "Mobile application",
            "Bank account integration",
            "Investment tracking",
            "Budget automation",
            "Tax planning",
            "Multi-user collaboration",
          ],
        },
      ],
      license: {
        title: "License",
        description: [
          "Copyright (c) 2026 donwilson-dev. All rights reserved.",
          "Founded is released as a portfolio and educational project demonstrating full-stack software engineering, financial modeling, long-term forecasting, and modern web application architecture.",
        ],
      },
    },
    lessonsLearned: {
      version: "Founded v1.0.0",
      title: "Lessons Learned",
      author: "donwilson-dev",
      overview: [
        "Founded was significantly more than a financial planning application. It served as a comprehensive exercise in designing, building, testing, and maintaining a production-quality full-stack software system.",
        "Throughout development, the project evolved through numerous architectural decisions, refactors, and iterative improvements that reinforced fundamental software engineering principles beyond simply writing code.",
      ],
      lessons: [
        {
          title: "Design Before Development",
          description: [
            "One of the most valuable lessons was the importance of investing time in planning before implementation.",
            "Developing project specifications, Software Enhancement Proposals, and architecture documentation before writing code reduced ambiguity, improved consistency, and made implementation significantly more predictable.",
            "Well-defined requirements minimized rework and created a structured roadmap throughout development.",
          ],
        },
        {
          title: "Documentation Is Part of Development",
          description: [
            "Maintaining documentation throughout the project proved just as valuable as writing the application itself.",
            "Keeping design decisions, implementation details, and enhancement proposals synchronized allowed development to remain organized while providing clear historical context for future improvements.",
            "Good documentation became an engineering tool rather than an afterthought.",
          ],
        },
        {
          title: "Iterative Development Produces Better Software",
          description: [
            "Many features required multiple iterations before reaching their final implementation.",
            "Rather than expecting perfect solutions on the first attempt, continuously refining user experience, business logic, and architecture resulted in cleaner implementations and a more polished application.",
            "Incremental improvement consistently produced better outcomes than attempting to solve every problem in a single implementation.",
          ],
        },
        {
          title: "Simplicity Improves Maintainability",
          description: [
            "Several implementations initially became more complex than necessary.",
            "Refactoring toward simpler, more focused solutions improved readability, reduced bugs, and made future enhancements easier to implement.",
            "Choosing straightforward solutions whenever possible improved the long-term maintainability of the project.",
          ],
        },
        {
          title: "Data Integrity Must Be Protected",
          description: [
            "Financial software requires predictable, consistent behavior.",
            "Throughout development, considerable effort was dedicated to ensuring projections, scenario calculations, and financial data remained reliable across every workflow.",
            "Protecting data integrity proved more important than adding additional features.",
          ],
        },
        {
          title: "User Experience Extends Beyond Visual Design",
          description: [
            "A polished interface is only one aspect of user experience. Small usability improvements often produced a greater impact than major visual redesigns.",
          ],
          items: [
            "Workflow consistency",
            "Predictable interactions",
            "Clear navigation",
            "Meaningful defaults",
            "Visual hierarchy",
            "Information density",
          ],
        },
        {
          title: "Refactoring Is a Normal Part of Engineering",
          description: [
            "Many systems were rewritten or simplified after gaining a better understanding of the problem.",
            "Refactoring should not be viewed as correcting mistakes, but rather as an expected part of improving software quality as requirements become clearer.",
          ],
        },
        {
          title: "Testing Prevents Regression",
          description: [
            "As features expanded, maintaining confidence in existing functionality became increasingly important.",
            "Backend testing, dataset verification, and repeated validation throughout development helped ensure new features did not unintentionally break existing behavior.",
            "Reliable testing reduced development risk during larger architectural changes.",
          ],
        },
        {
          title: "Consistency Creates Professional Software",
          description: [
            "Establishing consistent conventions made the application significantly easier to maintain and extend.",
            "Consistency became one of the defining characteristics of the project.",
          ],
          items: [
            "Folder organization",
            "Component structure",
            "Naming",
            "Documentation",
            "Styling",
            "Commit history",
            "Feature implementation",
          ],
        },
        {
          title: "Software Is Never Truly Finished",
          description: [
            "Although Founded reached a stable v1.0 release, numerous ideas surfaced throughout development that intentionally remained outside the project's scope.",
            "Learning to define a release boundary and ship a complete product was just as valuable as implementing additional features.",
            "Version 1.0 represents a finished product, not because every possible feature exists, but because the intended objectives were successfully achieved.",
          ],
        },
      ],
      technicalGrowth: {
        title: "Technical Growth",
        items: [
          "React component architecture",
          "State management",
          "REST API design",
          "Express application structure",
          "MongoDB data modeling",
          "Financial projection algorithms",
          "Scenario-based data modeling",
          "Data validation",
          "Modular software architecture",
          "Responsive interface design",
          "Git workflow",
          "Software documentation",
          "Project planning",
          "Incremental software delivery",
        ],
      },
      reflection: {
        title: "Personal Reflection",
        description: [
          "Founded reinforced that successful software engineering is not simply writing code. It is designing systems that remain understandable, maintainable, and reliable over time.",
          "The project emphasized disciplined planning, iterative improvement, thoughtful architecture, and attention to detail. Those principles shaped every stage of development and will continue to influence future projects.",
          "Completing Founded v1.0 provided not only a production-ready application but also a deeper understanding of the software development lifecycle from concept and planning through implementation, testing, documentation, and release.",
        ],
      },
    },
    artwork: {
      card: foundedCard,
      cardTitleImage: foundedIconTitle,
      showcase: foundedShowcase,
    },
    screenshots: [
      {
        title: "Home",
        image: foundedHome,
        summaryTitle: "Application Hub",
        description:
          "Provides a centralized entry point into the platform, surfacing financial summaries and quick access to the core planning, forecasting, and analysis tools.",
      },
      {
        title: "Dashboard",
        image: foundedDashboard,
        summaryTitle: "Projection Analytics",
        description:
          "Visualizes long-term financial forecasts through interactive charts, cash flow analysis, debt payoff tracking, milestone insights, and scenario comparisons.",
      },
      {
        title: "Baseline Builder",
        image: foundedBaselineBuilder,
        summaryTitle: "Financial Data Model",
        description:
          "Establishes the application's financial source of truth by managing accounts, income, debts, bills, and transfers that power every projection and scenario.",
      },
      {
        title: "Scenario Builder",
        image: foundedScenarioBuilder,
        summaryTitle: "Scenario Comparison Engine",
        description:
          "Models alternate financial outcomes through isolated deviations, enabling side-by-side comparison without modifying the original financial baseline.",
      },
    ],
    githubUrl: "https://github.com/donwilson-dev/founded",
    githubStatus: "GitHub Repository",
    showcase: {
      overview:
        "Founded is presented as a complete case study for structured planning, scenario comparison, and decision support workflows.",
      screenshotsLabel: "Screenshot Walkthrough",
      featuresTitle: "Features",
      features: [
        {
          title: "Scenario Workflow",
          description:
            "Guides users from baseline assumptions into alternate planning paths.",
        },
        {
          title: "Dashboard Review",
          description:
            "Summarizes modeled outcomes through a compact analytical workspace.",
        },
        {
          title: "Focused Builders",
          description:
            "Separates baseline and scenario inputs so each task stays readable.",
        },
        {
          title: "Visual Walkthrough",
          description:
            "Uses approved screenshots to document the application flow.",
        },
      ],
      architectureSummary:
        "Founded is organized around a frontend presentation layer, scenario-oriented data flow, and reusable builder surfaces that keep planning steps distinct.",
      architecture: [
        {
          title: "Presentation Layer",
          description:
            "React-driven screens present dashboards, builders, and review states.",
        },
        {
          title: "Planning Flow",
          description:
            "Baseline and scenario paths stay separated until comparison.",
        },
        {
          title: "Reusable Surfaces",
          description:
            "Dashboard and builder patterns support repeated planning tasks.",
        },
      ],
      releaseNotesTitle: "Release Notes",
      releaseNotes: [
        {
          title: "Portfolio Version 1",
          description:
            "Initial showcase integration added to the Portfolio project.",
        },
        {
          title: "Approved Visual Assets",
          description:
            "Showcase artwork and four application screenshots are integrated.",
        },
      ],
      lessonsTitle: "Lessons Learned",
      lessonsLearned: [
        {
          title: "Progressive Disclosure",
          description:
            "Planning tools benefit from revealing detail only when the workflow calls for it.",
        },
        {
          title: "Hierarchy First",
          description:
            "Scenario-heavy software needs clear structure before visual flourish.",
        },
      ],
    },
  },
  {
    title: "AssetForge",
    slug: "assetforge",
    status: "In Development",
    cardDescription:
      "Developer asset toolkit for converting, resizing, and optimizing images.",
    cardStatus: "In Development",
    cardStatusTone: "development",
    releaseOrder: 2,
    summary:
      "AssetForge is a developing asset-management concept for organizing production-ready visual assets through a focused software workflow.",
    technologyStack: ["React", "JavaScript", "CSS", "Asset workflow design"],
    glance: {
      type: "Developer Asset Toolkit",
      architecture: ["React", "JavaScript", "CSS", "Asset workflow design"],
      highlights: [
        "Asset Conversion",
        "Image Optimization",
        "Workflow Organization",
        "Export Preparation",
      ],
      version: "Pending",
    },
    artwork: {
      card: assetforgeCard,
      cardTitleImage: assetforgeIconTitle,
      showcase: assetforgeShowcase,
    },
    screenshots: [],
    screenshotPlaceholder:
      "Production screenshots are pending. This showcase uses approved artwork until application screenshots are available.",
    githubUrl: null,
    githubStatus: "Repository placeholder pending public availability",
    showcase: {
      overview:
        "AssetForge is represented as an in-development case study centered on asset organization, workflow clarity, and production-readiness.",
      screenshotsLabel: "Placeholder Screenshot Section",
      featuresTitle: "Planned Features",
      features: [
        {
          title: "Asset Intake",
          description:
            "Planned workflow for importing and organizing production-ready visual assets.",
        },
        {
          title: "Library Structure",
          description:
            "Organized views for browsing, reviewing, and preparing reusable assets.",
        },
        {
          title: "Export Readiness",
          description:
            "Future workflow support for consistent naming and handoff preparation.",
        },
      ],
      architectureSummary:
        "AssetForge is planned around a frontend application shell, centralized asset metadata, and reusable library views that can grow as the product matures.",
      architecture: [
        {
          title: "Application Shell",
          description:
            "Frontend screens define the planned asset-management workflow.",
        },
        {
          title: "Asset Metadata",
          description:
            "A data-driven model will organize assets by status, type, and readiness.",
        },
        {
          title: "Expandable Views",
          description:
            "Library surfaces are planned to support future asset categories.",
        },
      ],
      releaseNotesTitle: "Planned Release Notes",
      releaseNotes: [
        {
          title: "Portfolio Version 1",
          description:
            "Initial in-development showcase added with approved artwork.",
        },
        {
          title: "Screenshot Placeholder",
          description:
            "Production screenshots will replace the placeholder section when available.",
        },
      ],
      lessonsTitle: "Lessons Learned",
      lessonsLearned: [
        {
          title: "Naming Discipline",
          description:
            "Asset-heavy tools need predictable names and ownership boundaries early.",
        },
        {
          title: "Honest Placeholders",
          description:
            "Placeholder states should be explicit while production screenshots are pending.",
        },
      ],
    },
  },
];

export const comingSoonProjects = Array.from({ length: 7 }, (_, index) => ({
  title: "Coming Soon",
  slug: `coming-soon-${index + 1}`,
  status: "Upcoming",
  releaseOrder: index + 1,
  isPlaceholder: true,
  artwork: {
    card: comingSoonCard,
  },
}));

export const orderedProjects = [...projects, ...comingSoonProjects];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
