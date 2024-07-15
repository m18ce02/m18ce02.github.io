const htmlModules = require('./config/htmlModules.js');


module.exports = {

  theme: 'vdoing', // 使用依赖包主题
  // theme: require.resolve('../../vdoing'), // 使用本地主题 (先将vdoing主题文件下载到本地：https://github.com/xugaoyi/vuepress-theme-vdoing)
  title: "aiM18 Developer Center",
  description: 'Make Something People Want',
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: 'erp,bpm,hcm,ebi' }],
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  ],

  // 主题配置
  themeConfig: {
    nav: [
      { text: 'DOC Home', link: '/'},
      {
        text: 'App Development', link: '/pages/7488ac/', items: [
		  {
			text: 'Platform', items: [
			  { text: 'Overview', link: '/pages/7488ac/' },
              { text: 'Frontend Framework', link: '/pages/793dcd/' },
              { text: 'Backend Framework', link: '/pages/793dce/' },
              { text: 'EBI Development', link: '/pages/793dcf/' },
              { text: 'JSF Components', link: '/pages/793dcg/' },
              { text: 'BPM Extension Interface', link: '/pages/793dch/' },
		      { text: 'Telescope Extension Interface', link: '/pages/793dci/' },
		      { text: 'Mobile App Setup', link: '/pages/793dcj/' },
			]  
		  },
          {
            text: 'ERP', items: [
              { text: 'ERP EJB Interfaces', link: '/pages/1dfab2/' },
              { text: 'ERP XML Config Files', link: '/pages/1dfab3/' },
              { text: 'ERP Decorators (Frontend Interfaces)', link: '/pages/1dfab4/' },
            ]
          },
		  {
            text: 'Tutorial', items: [
              { text: 'Setup Development Environment', link: '/pages/793dcc/' },
			  { text: 'Sample App', link: '/pages/d922fb/' },
            ]
          }
        ]
      },
	  /*
	  {
        text: 'App中文', link: '/pages/becaba/', items: [
		  {
			text: '平台', items: [
			  { text: '平台总体概述', link: '/pages/becaba/' },
              { text: '前端开发须知', link: '/pages/ac081b/' },
              { text: '后台开发须知', link: '/pages/211e7e/' },
              { text: 'EBI开发须知', link: '/pages/fbff3c/' },
              { text: 'JSF组件属性表', link: '/pages/b9ae7e/' },
              { text: 'BPM扩展接口', link: '/pages/72489e/' },
		      { text: '一查到底扩展接口', link: '/pages/b4a06c/' },
		      { text: '手机App设置', link: '/pages/5e69e0/' },
			]  
		  },
          {
            text: 'ERP', items: [
              { text: 'ERP 后端扩展', link: '/pages/aeea3b/' },
              { text: 'ERP 应用配置', link: '/pages/d5dca4/' },
              { text: 'ERP 前端扩展', link: '/pages/5551b1/' },
            ]
          },
		  {
            text: '教程', items: [
              { text: '设置Eclipse开发环境', link: '/pages/7b6279/' },
			  { text: '创建App教程', link: '/pages/23b34f/' },
            ]
          }
        ]
      },
	  */
      { 
		text: 'API Integration', link: '/pages/2ffa7b/', items: [
            { 
				text: 'Platform', link: '/pages/2ffa7b/', items: [
					{ text: 'Authentication', link: '/pages/2ffa7b/' },
					{ text: 'Common JSON Objects', link: '/pages/c42005/' },
					{ text: 'Core Services', link: '/pages/c79a4a/' },
					{ text: 'EBI Services', link: '/pages/dcf49b/' },
				]
			},
			{ text: 'Enterprise Resource Planning', link: '/pages/b24673/' },
			{ text: 'Human Capital Management', link: '/pages/fe122f/' },
			{ text: 'Business Process Management', link: '/pages/d34faf/' },
			{ text: 'Schedule Management', link: '/pages/48360c/' },
			{ text: 'Document Management', link: '/pages/c06ace/' },
			{
			  text: 'Tutorial', items: [
				{ text: 'Interacting with aiM18 via webservices', link: '/pages/7537af/' },
			  ]
            }
        ] 
	  },
	  { text: 'Tutorial', link: '/pages/7487bc/' },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logonav.png', // 导航栏logo
    repo: 'm18ce01?tab=repositories', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: 'Last Updated', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

    // docsDir: 'docs', // 编辑的文件夹
    // editLinks: true, // 编辑链接
    // editLinkText: '编辑',

    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: { mode: 'structuring', collapsable: false }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

    // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
    updateBar: { // 最近更新栏
      showToArticle: false, // 显示到文章页底部，默认true
      // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],

    pageStyle: 'line', // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

    // contentBgStyle: 1,

    category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

    author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: 'Multiable', // 必需
      href: 'https://github.com/m18ce01' // 可选的
    },
    social: { // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: 'icon-youjian',
          title: 'Send Mail',
          link: 'mailto:m18ce02@multiable.com'
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/m18ce01'
        },
        {
          iconClass: 'icon-erji',
          title: 'Home Page',
          link: 'https://www.multiable.com/'
        }
      ]
    },
    footer: { // 页脚信息
      createYear: 1990, // 博客创建年份
      copyrightInfo: 'Multiable | MIT License', // 博客版权信息，支持a标签
    },
    htmlModules,
  },

  // 插件
  plugins: [
    ['fulltext-search'], // 全文搜索

    // ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
    //   thirdparty: [ // 可选，默认 []
    //     {
    //       title: '在GitHub中搜索',
    //       frontUrl: 'https://github.com/search?q=', // 搜索链接的前面部分
    //       behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
    //     },
    //     {
    //       title: '在npm中搜索',
    //       frontUrl: 'https://www.npmjs.com/search?q=',
    //     },
    //     {
    //       title: '在Bing中搜索',
    //       frontUrl: 'https://cn.bing.com/search?q='
    //     }
    //   ]
    // }],
    ['one-click-copy', { // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: 'Copy successfully and then paste it for use.', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false // whether to display on the mobile side, default: false.
    }],
	
    ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://jsd.cdn.zzko.cn/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    }],
    [
      'vuepress-plugin-zooming', // 放大图片
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)'
        },
      },
    ],
    [
      '@vuepress/last-updated', // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require('dayjs') // https://day.js.org/
          return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
        },
      }
    ]
  ],

  markdown: {
    // lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    '.vuepress/config.js',
    '.vuepress/config/htmlModules.js',
  ]
}
