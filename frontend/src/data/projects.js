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
    artwork: {
      card: foundedCard,
      cardTitleImage: foundedIconTitle,
      showcase: foundedShowcase,
    },
    screenshots: [
      {
        title: "Home",
        image: foundedHome,
        description:
          "Application Hub - Provides a centralized entry point into the platform, surfacing financial summaries and quick access to the core planning, forecasting, and analysis tools.",
      },
      {
        title: "Dashboard",
        image: foundedDashboard,
        description:
          "Projection Analytics - Visualizes long-term financial forecasts through interactive charts, cash flow analysis, debt payoff tracking, milestone insights, and scenario comparisons.",
      },
      {
        title: "Baseline Builder",
        image: foundedBaselineBuilder,
        description:
          "Financial Data Model - Establishes the application's financial source of truth by managing accounts, income, debts, bills, and transfers that power every projection and scenario.",
      },
      {
        title: "Scenario Builder",
        image: foundedScenarioBuilder,
        description:
          "Scenario Comparison Engine - Models alternate financial outcomes through isolated deviations, enabling side-by-side comparison without modifying the original financial baseline.",
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
