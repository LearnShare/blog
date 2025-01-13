// @ts-check
import {
  defineConfig,
} from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'LearnShare',
      social: {
        github: 'https://github.com/LearnShare/blog',
      },
      pagination: false,
      plugins: [
        starlightSidebarTopics([
          {
            label: '文章',
            link: '/posts',
            icon: 'open-book',
            items: [
              {
                label: '全部文章',
                autogenerate: {
                  directory: 'posts'
                },
              },
            ],
          },
          {
            label: '专题',
            link: '/topics',
            icon: 'list-format',
            items: [
              {
                label: 'Design System',
                collapsed: true,
                items: [
                  {
                    label: '概述',
                    link: '/topics/design-system',
                  },
                ],
              },
            ],
          },
        ]),
      ],
    }),
  ],
});
