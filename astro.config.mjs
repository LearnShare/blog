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
                  {
                    label: '主题',
                    collapsed: true,
                    items: [
                      {
                        label: '尺寸',
                        link: '/topics/design-system/topics/size',
                      },
                      {
                        label: '颜色',
                        link: '/topics/design-system/topics/color',
                      },
                      {
                        label: '层级',
                        link: '/topics/design-system/topics/layer',
                      },
                      {
                        label: '状态',
                        link: '/topics/design-system/topics/status',
                      },
                      {
                        label: '布局',
                        link: '/topics/design-system/topics/layout',
                      },
                      {
                        label: '文字',
                        link: '/topics/design-system/topics/font',
                      },
                      {
                        label: '排版',
                        link: '/topics/design-system/topics/typography',
                      },
                      {
                        label: '图形和图像',
                        link: '/topics/design-system/topics/image',
                      },
                      {
                        label: '动画和视频',
                        link: '/topics/design-system/topics/anim',
                      },
                      {
                        label: '输入和操作',
                        link: '/topics/design-system/topics/input',
                      },
                      {
                        label: '输出和反馈',
                        link: '/topics/design-system/topics/feedback',
                      },
                      {
                        label: '导航',
                        link: '/topics/design-system/topics/navigation',
                      },
                      {
                        label: '文案',
                        link: '/topics/design-system/topics/message',
                      },
                      {
                        label: '国际化和本地化',
                        link: '/topics/design-system/topics/i18n',
                      },
                    ],
                  },
                  {
                    label: '组件',
                    collapsed: true,
                    items: [
                      {
                        label: '按钮',
                        link: '/topics/design-system/components/button',
                      },
                    ],
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
