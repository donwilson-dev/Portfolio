import assetforgeCard from '../assets/images/project-artwork/assetforge/cards/assetforge-card.png';
import assetforgeShowcase from '../assets/images/project-artwork/assetforge/showcase/assetforge-showcase.png';
import foundedCard from '../assets/images/project-artwork/founded/cards/founded-card.png';
import foundedShowcase from '../assets/images/project-artwork/founded/showcase/founded-showcase.png';
import foundedBaselineBuilder from '../assets/images/project-artwork/founded/screenshots/baseline-builder.png';
import foundedDashboard from '../assets/images/project-artwork/founded/screenshots/dashboard.png';
import foundedHome from '../assets/images/project-artwork/founded/screenshots/home.png';
import foundedScenarioBuilder from '../assets/images/project-artwork/founded/screenshots/scenario-builder.png';

export const PROJECT_TRACK_SCROLL_KEY = 'portfolio.projectTrack.scrollLeft';
export const PROJECT_TRACK_SELECTED_KEY = 'portfolio.projectTrack.selectedProject';

export const projects = [
  {
    title: 'Founded',
    slug: 'founded',
    status: 'Completed',
    releaseOrder: 1,
    summary:
      'Founded is a scenario-driven planning application focused on comparing baselines, projections, and decision paths through a clean analytical interface.',
    technologyStack: ['React', 'JavaScript', 'CSS', 'Scenario modeling'],
    artwork: {
      card: foundedCard,
      showcase: foundedShowcase,
    },
    screenshots: [
      {
        title: 'Home',
        image: foundedHome,
        description: 'Entry point for the Founded application experience.',
      },
      {
        title: 'Dashboard',
        image: foundedDashboard,
        description: 'Summary workspace for reviewing modeled outcomes.',
      },
      {
        title: 'Baseline Builder',
        image: foundedBaselineBuilder,
        description: 'Structured builder for defining baseline assumptions.',
      },
      {
        title: 'Scenario Builder',
        image: foundedScenarioBuilder,
        description: 'Scenario authoring interface for comparing alternate paths.',
      },
    ],
    githubUrl: 'https://github.com/donwilson-dev/founded',
    githubStatus: 'Placeholder repository URL',
    showcase: {
      overview:
        'Founded is presented as a complete case study for structured planning, scenario comparison, and decision support workflows.',
      features: [
        'Scenario and baseline workflow structure',
        'Dashboard-oriented project review',
        'Focused interfaces for planning inputs',
        'Screenshot-supported walkthrough',
      ],
      architecture: [
        'Frontend application presentation layer',
        'Scenario modeling workflow structure',
        'Reusable dashboard and builder surfaces',
      ],
      releaseNotes: [
        'Initial showcase integration for Portfolio Version 1.',
        'Approved artwork and screenshots integrated into the case study.',
      ],
      lessonsLearned: [
        'Planning tools benefit from progressive disclosure and focused input surfaces.',
        'Scenario-heavy software needs clear visual hierarchy before visual flourish.',
      ],
    },
  },
  {
    title: 'AssetForge',
    slug: 'assetforge',
    status: 'In Development',
    releaseOrder: 2,
    summary:
      'AssetForge is a developing asset-management concept for organizing production-ready visual assets through a focused software workflow.',
    technologyStack: ['React', 'JavaScript', 'CSS', 'Asset workflow design'],
    artwork: {
      card: assetforgeCard,
      showcase: assetforgeShowcase,
    },
    screenshots: [],
    screenshotPlaceholder:
      'Production screenshots are pending. This showcase uses approved artwork until application screenshots are available.',
    githubUrl: 'https://github.com/donwilson-dev/assetforge',
    githubStatus: 'Placeholder repository URL',
    showcase: {
      overview:
        'AssetForge is represented as an in-development case study centered on asset organization, workflow clarity, and production-readiness.',
      features: [
        'Asset library workflow concept',
        'Production-ready organization model',
        'Portfolio-ready visual presentation',
      ],
      architecture: [
        'Frontend application foundation',
        'Data-driven asset organization model',
        'Future-ready project showcase structure',
      ],
      releaseNotes: [
        'Initial showcase integration for Portfolio Version 1.',
        'Approved card and showcase artwork integrated.',
      ],
      lessonsLearned: [
        'Asset-heavy tools need predictable naming and clear ownership boundaries.',
        'Placeholder states should be explicit while production screenshots are pending.',
      ],
    },
  },
];

export const orderedProjects = [...projects].sort((first, second) => first.releaseOrder - second.releaseOrder);

export function getProjectBySlug(slug) {
  return orderedProjects.find((project) => project.slug === slug);
}
