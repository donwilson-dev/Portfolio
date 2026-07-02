import { externalNavigation } from './navigation.js';

const githubProfile = externalNavigation.find((item) => item.label === 'GitHub');
const linkedinProfile = externalNavigation.find((item) => item.label === 'LinkedIn');

export const contactEmail = 'donnyw07@gmail.com';

export const contactMethods = [
  {
    id: 'linkedin',
    title: 'LinkedIn',
    icon: 'linkedin',
    description: 'Connect professionally, send a message, or request a current resume.',
    actionLabel: 'Open LinkedIn',
    href: linkedinProfile.href,
    external: true,
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: 'github',
    description: 'Review source code, project activity, and public software work.',
    actionLabel: 'Open GitHub',
    href: githubProfile.href,
    external: true,
  },
  {
    id: 'email',
    title: 'Email',
    icon: 'email',
    description: 'Use email for direct professional communication.',
    value: contactEmail,
    actionLabel: 'Send Email',
    href: `mailto:${contactEmail}`,
    external: false,
  },
  {
    id: 'resume',
    title: 'Resume Request',
    icon: 'resume',
    description: 'Current resumes are provided upon request through LinkedIn.',
    actionLabel: 'Message on LinkedIn',
    href: linkedinProfile.href,
    external: true,
  },
];
