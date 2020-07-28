module.exports = {
    title: "BDUAN",
    description: '我的个人网站',
    base: '/vuepress-blog/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        searchMaxSuggestions: 10,
        lastUpdated: 'Last Updated',
        nav: [ // 导航栏配置
            { text: '前端基础', link: 'https://baidu.com' },
            { text: '算法题库', link: 'https://baidu.com' },
            { text: '微博', link: 'https://baidu.com' },
        ],
        sidebar: [{
            title: "TypeScript",
            collapsable: false,
            sidebarDepth: 1,
            children: [
                "./ts/ts01"
            ]
        }], // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
    }
};

