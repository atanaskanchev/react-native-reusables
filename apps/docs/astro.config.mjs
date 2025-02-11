import react from '@astrojs/react';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  adapters: [vercel()],
  build: {
    redirects: false,
  },
  redirects: {
    '/': '/getting-started/introduction/',
  },
  integrations: [
    starlight({
      favicon: '/favicon.png',
      title: 'rnr docs',
      description: 'Documentation for react-native-reusables',
      components: {
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      social: {
        github: 'https://github.com/mrzachnugent/react-native-reusables',
      },

      sidebar: [
        {
          label: 'Getting Started',
          items: [
            {
              label: 'Introduction',
              link: '/getting-started/introduction/',
            },
            {
              label: 'Initial Setup',
              link: '/getting-started/initial-setup/',
            },
          ],
        },
        {
          label: 'Components',
          items: [
            {
              label: 'Accordion',
              link: '/components/accordion/',
            },
            {
              label: 'Alert Dialog',
              link: '/components/alert-dialog/',
            },
            {
              label: 'Aspect Ratio',
              link: '/components/aspect-ratio/',
            },
            {
              label: 'Avatar',
              link: '/components/avatar/',
            },
            {
              label: 'Checkbox',
              link: '/components/checkbox/',
            },
            {
              label: 'Collapsible',
              link: '/components/collapsible/',
            },
            {
              label: 'Context Menu',
              link: '/components/context-menu/',
            },
            {
              label: 'Text',
              link: '/components/text/',
            },
            {
              label: 'Typography',
              link: '/components/typography/',
            },
          ],
        },
        {
          label: 'Primitives',
          items: [
            {
              label: 'Overview',
              link: '/primitives/overview/',
            },
            {
              label: 'Core',
              items: [
                {
                  label: 'Accordion',
                  link: '/primitives/accordion/',
                },
                {
                  label: 'Alert Dialog',
                  link: '/primitives/alert-dialog/',
                },
                {
                  label: 'Aspect Ratio',
                  link: '/primitives/aspect-ratio/',
                },
                {
                  label: 'Avatar',
                  link: '/primitives/avatar/',
                },
                {
                  label: 'Checkbox',
                  link: '/primitives/checkbox/',
                },
                {
                  label: 'Collapsible',
                  link: '/primitives/collapsible/',
                },
                {
                  label: 'Context Menu',
                  link: '/primitives/context-menu/',
                },
              ],
            },
            {
              label: 'Shared',
              items: [
                {
                  label: 'Hooks',
                  link: '/primitives/hooks/',
                },
                {
                  label: 'Portal',
                  link: '/primitives/portal/',
                },
                {
                  label: 'Slot',
                  link: '/primitives/slot/',
                },
                {
                  label: 'Types',
                  link: '/primitives/types/',
                },
                {
                  label: 'Utils',
                  link: '/primitives/utils/',
                },
              ],
            },
          ],
        },
      ],
      customCss: ['./src/tailwind.css'],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
  ],
});
