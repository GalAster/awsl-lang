let path = require("path")

const locale_cn = {
    selectText: '选择语言',
    label: '简体中文',
    editLinkText: '在 GitHub 上编辑此页',
    serviceWorker: {
        updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
        }
    },
    sidebar: {
        "/cn/": [
            {
                title: '概览',
                collapsable: false,
                children: [
                ]
            },
            {
                title: '入门',
                collapsable: false,
                children: [
                    ['basic/', '基本语法'],
                    ['basic/control-flow', '控制流'],
                ]
            },
            {
                title: '进阶',
                collapsable: false,
                children: [
                    ['advance/', '进阶开发'],
                    ['advance/bottom-up-build', '自底向上构造'],
                    ['advance/top-down-build', '自顶向下构造'],
                ]
            },
            {
                title: '开发',
                collapsable: false,
                children: [
                ]
            },
        ],
    }
}

const locale_en = {
    selectText: 'Languages',
    label: 'English',
    ariaLabel: 'Languages',
    editLinkText: 'Edit this page on GitHub',
    serviceWorker: {
        updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
        }
    },
    sidebar: {
        "/en/": [
            {
                title: 'Tutorials',
                collapsable: false,
                children: [
                    ['basic/', 'Basic Concepts'],
                ]
            },
        ]
    }
}

module.exports = {
    dest: 'docs/.build',
    locales: {
        '/cn/': {
            lang: 'zh-CN',
            title: 'Simple Math',
            lastUpdated: 'Last Updated',
        },
        '/en/': {
            lang: 'en-US',
            title: 'Simple Math',
            lastUpdated: 'Last Updated',
        }
    },
    head: [
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: './favicon.png' }]
    ],
    themeConfig: {
        repo: 'Galaster/awsl-lang',
        editLinks: true,
        docsDir: 'projects/sm-book/docs',
        markdown: {
            lineNumbers: true
        },
        locales: {
            '/cn/': locale_cn,
            '/en/': locale_en,
        },
    },
    serviceWorker: true,
    markdown: {
        config: md => {
        }
    },
    plugins: [
        [
            'shiki',
            {
                theme: 'monokai',
                langs: [
                    {
                        id: 'awsl',
                        scopeName: 'source.awsl',
                        path: path.resolve(__dirname, 'public/awsl.tmLanguage.json'),
                        aliases: ['awsl']
                    }
                ]
            }
        ],
    ],
};
