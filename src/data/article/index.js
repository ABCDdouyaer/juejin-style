/*
 * @Author: Jiraiya
 * @Date: 2020-05-15 16:39:16
 * @LastEditors: Jiraiya
 * @LastEditTime: 2020-05-15 19:15:13
 * @Description: 
 */ 
export default {
    table: {
        head: ['文章题目', '文章要点'],
        body: [
            {
                title: '1. 基于Tree-shaking的多平台Web代码打包实践', 
                href: 'https://mp.weixin.qq.com/s/AGpcc-h6EyM_mqQkgHMdAQ',
                content: [
                    '通过tree-shaking来剔除掉多余的死代码，降低文件大小 ',
                    '根据不同的平台类型打包不同的代码，nginx配置'
                ],
                type: 'shijian'
            },
            {
                title: '2. HTTP探索之路 - HTTP 1 / HTTP 2 / QUIC', 
                href: 'https://mp.weixin.qq.com/s/LCMsMQlugQ2cyOye7NNuTw',
                content: [
                    '了解HTTP1.1的缺陷以及解决方案 ',
                    '了解基于SPDY的HTTP2 解决的问题',
                    '了解HTTP2 缺陷',
                    '了解基于QUIC（基于UDP）的HTTP3',
                ],
                type: 'shuji'
            },
            {
                title: '3. 在线教育大前端架构演进之路', 
                href: 'https://mp.weixin.qq.com/s/Gco1QV91SeuZQJJ3LQUFAQ',
                content: [],
                type: 'liaojie'
            },
            {
                title: '4. node_modules 困境', 
                href: 'https://mp.weixin.qq.com/s/FHQRQ2fhwEcHnccxEUrf_w',
                content: [
                    '多版本依赖共存问题',
                    'node_modules hell',
                    '熟悉 flat mode和nest mode',
                    '@type/xxx全局的ts命名空间冲突',
                    'require加载依赖的缓存机制以路径为缓存的key',
                    '安装开发环境的某些依赖包，这些依赖包依赖其他包，而我们又在生产环境引了这些包，导致生产环境缺失依赖包',
                    'semver的平滑升级，4.x.x，4开头的都能平滑过渡，不会产生breaking change,但须人为主动去遵循该规则',
                    ' lerna, yarn 工作机制核心'
                ],
                type: 'lijie'
            },
            {
                title: '5. 昨天GitHub迎来重大更新', 
                href: 'https://mp.weixin.qq.com/s/6FDTyz5pDIbPf23XF-K7sg',
                content: [
                    'github准备将vscodeIDE嵌入，可在线编辑代码 '
                ],
                type: 'liaojie'
            },
            {
                title: '6. Deno 1.0即将发布，你需要知道的都在这里了', 
                href: 'https://mp.weixin.qq.com/s/YZ39X_-nij-8Hl8vwsFBJA',
                content: [
                    '话说是node的替代版本 ',
                    '采用Rust语言编写',
                    '采用V8引擎执行js',
                    '内置TypeScript',
                    '采用ECMAScript模块而不是CommonJS'
                ],
                type: 'liaojie'
            },
            {
                title: '7. 前端进阶高薪必看-HTTPS篇', 
                href: 'https://juejin.im/post/5eb3c6065188255fd54de543?utm_source=gold_browser_extension',
                content: [
                    '采用ECMAScript模块而不是CommonJS ',
                    '理解对称加密优缺点',
                    '理解非对称加密优缺点',
                    '理解混合加密',
                    '理解HTTPS的整个流程'

                ],
                type: 'shuji'
            },
            {
                title: '8. 探索 Serverless 中的前端开发模式(多场景)', 
                href: 'https://mp.weixin.qq.com/s/-L4t_bwuY1y08e6rJOrDkw',
                content: [
                    '前端开发模式的演进 ',
                    '下一代前端开发模式Serverless',
                    'Serverless 的主要特点',
                    '基于 Serverless 的前端开发模式',
                    '通用 Serverless 架构',
                    '函数性能'
                ],
                type: 'liaojie'
            },
            {
                title: '9. 面试官：请用一句话描述 try catch 能捕获到哪些 JS 异常', 
                href: 'https://juejin.im/post/5ea8e2d65188256d8d605b2d?utm_source=gold_browser_extension',
                content: [
                    'Try-catch捕获异常的规则，必须是线程执行已经进入 try catch 但 try catch 未执行完的时候抛出来的',
                    'Promise抛出的异常都是Promise内部捕获，不会冒泡到上一层'
                ],
                type: 'lijie'
            },
            {
                title: '10. 精度溢出', 
                href: 'https://juejin.im/post/5df32c9af265da33d56d1d85',
                content: [
                    'js 64位采用双精度浮点数， 即占用8byte, 1byte=8 bit(存放8个二进制数) ',
                    '小数十进制转化为二进制的计算方法是, 小数部分*2, 取整数部分, 直至小数部分为0',
                    '计算机的乘法/除法运算实际为左移/右移求累加和',
                    '64位存储方式',
                    '解决方案'

                ],
                type: 'lijie'
            },
            {
                title: '11. 前端工程化 - 剖析npm的包管理机制（完整版）', 
                href: 'https://mp.weixin.qq.com/s/gtsnxFOYRZ4i-Id_9Gr6Aw',
                content: [
                    '熟悉package.json文件的各配置属性 ',
                    '熟悉semver版本规范，主版本+次版本+修订号',
                    '熟悉dependencies、devDependencies、peerDependencies、optionalDependencies以及bundledDependencies的区别',
                    '熟悉npm包管理机制，npm3.x以前的树形结构和npm3.x以上的扁平化处理， npm5.x的package-lock.json和yarn-lock.josn的区别'
                ],
                type: 'shuji'
            },

            {
                title: '12. 浏览器面试手册万字整理，助力面试', 
                href: 'https://juejin.im/post/5ebaab7e5188256d7b1ed54d#heading-31',
                content: [],
                type: 'shuji'
            },
            {
                title: '13. 一文读懂什么是进程、线程、协程', 
                href: 'https://www.toutiao.com/i6737900285907173891/?tt_from=weixin&utm_campaign=client_share&wxshare_count=1&timestamp=1589353623&app=news_article&utm_source=weixin&utm_medium=toutiao_android&use_new_style=0&req_id=202005131507030100260790141501720D&group_id=6737900285907173891',
                content: [
                    '了解进程、线程和协程'
                ],
                type: 'liaojie'
            },
            {
                title: '14. 探寻 JavaScript 精度问题以及解决方案',
                href: 'https://segmentfault.com/a/1190000016586981',
                content: [
                    '明白精度丢失原因'
                ],
                type: 'lijie'
            }
        ]
    }
}