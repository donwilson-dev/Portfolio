import { externalNavigation } from './navigation.js';

const githubProfile = externalNavigation.find((item) => item.label === 'GitHub');
const linkedinProfile = externalNavigation.find((item) => item.label === 'LinkedIn');

export const contactEmail = 'donnyw07@gmail.com';

export const contactMethods = [
  {
    id: 'linkedin',
    title: 'LinkedIn',
    icon: 'linkedin',
    description: "Connect with me on LinkedIn and let's build our professional network together.",
    actionLabel: 'Connect on LinkedIn',
    href: linkedinProfile.href,
    external: true,
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: 'github',
    description: 'Explore my projects, code, and contributions on GitHub.',
    actionLabel: 'Visit GitHub',
    href: githubProfile.href,
    external: true,
  },
  {
    id: 'email',
    title: 'Email',
    icon: 'email',
    description: 'Send me an email directly.',
    value: contactEmail,
    actionLabel: 'Send Email',
    href: `mailto:${contactEmail}`,
    external: false,
  },
  {
    id: 'resume',
    title: 'Resume Request',
    icon: 'resume',
    description:
      'Interested in learning more? Connect with me on LinkedIn to request my current resume.',
    actionLabel: 'Request Resume',
    href: linkedinProfile.href,
    external: true,
  },
];
