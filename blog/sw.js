/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/blog/404/index.html","ad9cb7c533cfbbd8ae454885ed27cb20"],["/blog/aboutme/index.html","6357ce2acea849fe448637dfd891992f"],["/blog/archives/2013/05/index.html","4670f98a84bf9bb27f5e41031467dbea"],["/blog/archives/2013/index.html","67b60b556902ff60f5439a3da75f1140"],["/blog/archives/2015/07/index.html","ef617289d572204088a810ce664d269f"],["/blog/archives/2015/index.html","aa1c1583db5dcff1c99ee92ed8107f45"],["/blog/archives/2016/05/index.html","2a30269c60f32d3df69da1c5707e7ed2"],["/blog/archives/2016/10/index.html","495d566210b19edbc4c078b1770a245d"],["/blog/archives/2016/11/index.html","ddb3cfac74ef51f9b8a6ea2fd5c8a7b0"],["/blog/archives/2016/12/index.html","580d56294d5fdc397465ebba25678af0"],["/blog/archives/2016/index.html","45316949f70749f35e5d6da65530b654"],["/blog/archives/2017/01/index.html","6dc9bd86dcda235eaadfc2744fb5144e"],["/blog/archives/2017/02/index.html","5b46347a4fd62f4ce27a3b915a4510e9"],["/blog/archives/2017/06/index.html","4d27b1647ec00258fc41a52c9b637cef"],["/blog/archives/2017/07/index.html","8212d96475ddde897e0b8211cfa875d8"],["/blog/archives/2017/08/index.html","b538cfa43eba83b07e9776653e2ca1dc"],["/blog/archives/2017/09/index.html","0fa48f7d842ce8e0d45fc8656caf55d8"],["/blog/archives/2017/11/index.html","fa3c235593d10ce5d677f2b491ff12b6"],["/blog/archives/2017/index.html","514d750c85e54fad20314870837a453e"],["/blog/archives/2017/page/2/index.html","34603ef19f5935bf475d1856639f2d16"],["/blog/archives/2018/01/index.html","615ccb40b20e814603c8efabaceb9718"],["/blog/archives/2018/02/index.html","f45ae077979ffe80e3b08806839cad94"],["/blog/archives/2018/04/index.html","ad1ff29cc85c3f2a70e2c3eb677c3fa3"],["/blog/archives/2018/06/index.html","5fb917aea245b2a92b13cb61207178c0"],["/blog/archives/2018/07/index.html","4199eedbf40ca30d1676b3e929b7af1f"],["/blog/archives/2018/08/index.html","38882565ccd46d3cae0fe29b44bd4e49"],["/blog/archives/2018/09/index.html","98b4e7cd0917cc5f019a4b1aabec8c9f"],["/blog/archives/2018/10/index.html","7305aa852224e9b48c687a15e5dbb83a"],["/blog/archives/2018/11/index.html","cbcacc1d95802f68e3da84cdb8837db1"],["/blog/archives/2018/12/index.html","7491b1e16cb9cc1605b2ccf0e8864b3d"],["/blog/archives/2018/index.html","21899fbf6d2777a2422e5679f1e82492"],["/blog/archives/2018/page/2/index.html","16c57b85fffac629e6f14e6bb4102f45"],["/blog/archives/index.html","610c17a067fa37255f2eddd11564d457"],["/blog/archives/page/2/index.html","80418b10e73b5f340dc7f3806964825d"],["/blog/archives/page/3/index.html","6231658702072a63e9f5ecd9b39fd148"],["/blog/archives/page/4/index.html","8044f3a36f815dea8c36223839957232"],["/blog/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/blog/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/blog/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/blog/categories/index.html","317476938b6f72d03d8a85d258b5cbc2"],["/blog/categories/个人作品/index.html","ba3e9d531016266e921ee24dfc8937ea"],["/blog/categories/仙剑资源整理/index.html","bba2007cb8193b87011780faf2cca6bb"],["/blog/categories/其他/index.html","2240c8d46bf7e51fc6b2d5d2d1b70321"],["/blog/categories/工具资源/index.html","f709b3e43010f7db3e7f32735133ac1c"],["/blog/categories/感想与安利/index.html","a361f9827f5d14a3a01b6eedcdf211a6"],["/blog/categories/感想与安利/page/2/index.html","0229bff9f8f4aad6c2fe515241b8722f"],["/blog/categories/生活随记/index.html","142939dcd3d01a03fd32124d02e20bab"],["/blog/css/blog-encrypt.css","cfbaed9c8529698d4e7287bdd2b822bb"],["/blog/css/main.css","b791951af07adc25bad788e1ec0dd2fe"],["/blog/images/LOGO.png","946594dc37bb1f499ef7323837415331"],["/blog/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/blog/images/android-chrome-144x144.png","99db915ab936f153333cb1a4f1f287e1"],["/blog/images/apple-touch-icon-next.png","f4cb11058236c159d3684262bcb4196b"],["/blog/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/blog/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/blog/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/blog/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/blog/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/blog/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/blog/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/blog/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/blog/images/favicon-16x16-next.png","7fbf7f313e4a376be8c387f8475d2a95"],["/blog/images/favicon-32x32-next.png","186e3a81f19e93b2d71031a2f337f4f2"],["/blog/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/images/logo.svg","aca79d91e4301d4af6712f0edbc4d600"],["/blog/images/mstile-150x150.png","dc183de6dbbf51b68c426510fe5532c6"],["/blog/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/blog/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/blog/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/blog/images/safari-pinned-tab.svg","5cc82c5d1b54e748dc10ce0f2793fa11"],["/blog/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/blog/index.html","73f26167bd5f8b359e524d73aeeb829e"],["/blog/js/src/affix.js","f117a3586e463c75c61fde98e5c71770"],["/blog/js/src/algolia-search.js","62d7d2b452944aad3f1253836d36bba4"],["/blog/js/src/bootstrap.js","a2cfd6b2cecb9f6fadd47a8ad3c4a8c4"],["/blog/js/src/custom.js","317cdf706c754f25c0c2611915bbdf09"],["/blog/js/src/exturl.js","ffb4519829fbd408d2666ddfad5fa8cc"],["/blog/js/src/instantclick.min.js","865d92a4a07409b7fed739e6a108e9c4"],["/blog/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/blog/js/src/motion.js","4ea1fa65f7956f939e55965bb813688f"],["/blog/js/src/post-details.js","4b105aaa8b2a64283d31b80304a1673d"],["/blog/js/src/schemes/pisces.js","5c7c0c99f5f2eed8d74ed6318091419e"],["/blog/js/src/scroll-cookie.js","3f0a99d7b74dd63bc2382eb28c4de003"],["/blog/js/src/scrollspy.js","a319bd0a0a374a2d2cd239c1eb1c16c2"],["/blog/js/src/utils.js","1038efd68f455a85479c6e5b507eb66c"],["/blog/lib/blog-encrypt.js","e2c1c183135d84c59f1872c81283d412"],["/blog/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/blog/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/blog/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/blog/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/blog/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/blog/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/blog/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/blog/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/blog/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/blog/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/blog/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/blog/links/index.html","cda12b8e5260dfa84f8dca6a783f7b69"],["/blog/live2dw/lib/L2Dwidget.0.min.js","7d6ea3548b666c761bfb3a01f25ae87d"],["/blog/live2dw/lib/L2Dwidget.min.js","0c58a1486de42ac6cc1c59c7d98ae887"],["/blog/message/index.html","e0f84265b11d5eb3c57ee7ace6c1592c"],["/blog/page/2/index.html","2e909aaef51c37ab0743a9aee3920245"],["/blog/page/3/index.html","6cbfac71c8262377d7a23d8fddca67f8"],["/blog/page/4/index.html","2e37936657384d5e5e90e317c00c2f3a"],["/blog/posts/1270.html","153916e21ed3b703ed40960e9e3abe71"],["/blog/posts/12770.html","c937dbd6f1ac7d53e1d8de2bca52d14b"],["/blog/posts/14580416.html","d98fba65e45b8c454c94dc1de3ed5548"],["/blog/posts/15929.html","43c2e8bfd4da1717cc2cf158b6660ad0"],["/blog/posts/15959.html","d8a0b782b90f822fa3d2c13f362326ff"],["/blog/posts/173.html","8d16b3c161c137750b50ad1ae5de8941"],["/blog/posts/18647.html","dff83c3b7ae29ede7f875180b50d42e8"],["/blog/posts/19368.html","a3bb3a880f6e963fb6e453bded84f94e"],["/blog/posts/19549.html","a7050a548ade6bb0e2d4083c5663cec1"],["/blog/posts/20133.html","32fc484048f2fbc63ef172a9b05ff6e4"],["/blog/posts/20764.html","803487ac6b792d24fb97ed7c6cffc97e"],["/blog/posts/2137.html","f040bbaa998a9bc4442049d612926e6a"],["/blog/posts/27247.html","11afecd072e59b59903037700bafd92b"],["/blog/posts/28180.html","628ca6c956aaa7dbd30a5919868d67f6"],["/blog/posts/34771.html","1c5f7688aa16e9f58ee3e6c33e196163"],["/blog/posts/35192.html","8dda14dc8c4ce6136785bd3339e36564"],["/blog/posts/35671.html","ad9eac39c69c815d977fd37aaa7337c8"],["/blog/posts/364.html","b641f3b0bc698c6cb9bd92f452bb95ee"],["/blog/posts/38726.html","d05e7aa52fe072fbbaa6eb2af122179a"],["/blog/posts/44082.html","0f7a8da09e6cc7b945d6d9787780d4a4"],["/blog/posts/45026.html","8b324f6fbf1ea715df2d94ee1c5f3a2e"],["/blog/posts/50615.html","8eeee62e6743287ec78a1825575c42f4"],["/blog/posts/51793.html","66c034c5daad7b0282b67b3c7c233fab"],["/blog/posts/51888.html","66eb20c06381c4dc9852b0c23833db40"],["/blog/posts/51993.html","a7489809aef85f60aab56d849889f5d0"],["/blog/posts/535faed9.html","e1aeac904f37e4075ac8a357d81bacbf"],["/blog/posts/55032.html","c669edd2b39853950a2db027b7f67ddb"],["/blog/posts/55741.html","7d7e56e7ccf9546be5b8d61d26a338e9"],["/blog/posts/62550.html","52dd5cf15cf6e17f9c17e06945ddfdbc"],["/blog/posts/64777.html","bc5da5ccf9c448ee27abc12e8ce54306"],["/blog/posts/64850.html","993b144a252106ddb46de7c54732a103"],["/blog/posts/7e3d2d4.html","b5c700022501fe8d528ee45248b72bbd"],["/blog/posts/afcf312e.html","3bb942ee69a71fc1bb50bf0c96fff9c4"],["/blog/posts/bc1c3bac.html","a1534f9dff70cb983225e377c3bce936"],["/blog/posts/dc17b247.html","330119ed8f93c20c22a861fff293ed64"],["/blog/posts/eb9d5593.html","115dc64f7cfe7e1c1bb04ec222687b1d"],["/blog/search/index.html","454607ea2a8eb7baf7ef02f03962c3ca"],["/blog/sw-register.js","ee69c729c7c4872d18adba809459ba78"],["/blog/tags/2D表情/index.html","98f665b18c6bec2487b41c6dfed1d583"],["/blog/tags/AI/index.html","8b48851cfb0ee93bb97c8182ce8ee837"],["/blog/tags/AVS/index.html","dbbffd52d9b49cbdc11fc2c1f7df8d00"],["/blog/tags/Aviutl/index.html","ed1b3cc6490fd7da3c0f0435670eac47"],["/blog/tags/CLANNAD/index.html","e7719750c82a2540c0ba291a34bd2c70"],["/blog/tags/Key/index.html","4c82c6fc25d36b824bc9316ee43b2661"],["/blog/tags/Let-s-encrypt/index.html","cd0cb4b0a566a7814d555c3a161d460d"],["/blog/tags/MAD/index.html","2513e08f06b7b28573a2d57884a05f04"],["/blog/tags/MD/index.html","5cfe3793ae1ec33c80bfafb38a1c11af"],["/blog/tags/Markdown/index.html","ba3476e47b4223e79f4966d271bcb52b"],["/blog/tags/RPG-maker-MV/index.html","3b5c2ccb54472cd6e3e82b11ae8b6b56"],["/blog/tags/SSL/index.html","33011b070c45e6df6f6726c9fa3f03b1"],["/blog/tags/Topaz-AI-Gigapixel/index.html","3367ab2170bc57873e6506156af2ce1b"],["/blog/tags/Waifu2x/index.html","f885ca6795d65876ab60ab6c604d0766"],["/blog/tags/index.html","2ea89324c54191cb3a13ce54cf46f7b5"],["/blog/tags/steam/index.html","dbeb0de4dbf44a8aceaab6bc9329285b"],["/blog/tags/个人作品/index.html","58bc855abf1fcc584d6dc1b95ab88485"],["/blog/tags/仙剑/index.html","0eaa89f820c73d1caa035d5c33d5c26d"],["/blog/tags/仙剑七/index.html","4179073c13d8fc293e9c5d5e830efec9"],["/blog/tags/仙剑五/index.html","42acda1dfbe01bc42f21dd366bf56ae2"],["/blog/tags/仙剑六/index.html","e764eefe3318f1da98baa8be67fb76af"],["/blog/tags/仙剑剧情对话/index.html","ded007236b7c0fb45bac3073371b4f4c"],["/blog/tags/仙剑奇侠传/index.html","07c26a4b0b32850a6c805fb7e0699af2"],["/blog/tags/仙剑奇侠传七/index.html","125afb0f0150680e9e06c929df56f21f"],["/blog/tags/仙剑奇侠传三/index.html","db898a94df4278089e6f82ee3ad1cac7"],["/blog/tags/仙剑奇侠传三外传/index.html","c14937be3e0e9946d2c712e1f279afe2"],["/blog/tags/仙剑奇侠传二/index.html","b37a83d0049a79c3c25b3a2a246fcb99"],["/blog/tags/仙剑奇侠传五/index.html","20e596a95134c8ade659a641462fd96b"],["/blog/tags/仙剑奇侠传五前传/index.html","50d2c5c649077ac9146a42dd7cab20d9"],["/blog/tags/仙剑奇侠传六/index.html","3c1988ad51badabaa5b048a7ec9597c1"],["/blog/tags/仙剑奇侠传四/index.html","f995d9307147696953a73bee82a7e487"],["/blog/tags/仙剑手游/index.html","b785d9c53044309732566fc99ce2de71"],["/blog/tags/仙剑春晚/index.html","670475e9d0c4dfd893477340d400c4cd"],["/blog/tags/仙梦长留/index.html","db9f289cb3bcc2c5b2583db131823555"],["/blog/tags/单机/index.html","1642ed967f885d181857104dc1872e1c"],["/blog/tags/博客/index.html","8c57913705ed773afef8d2a82c6f7897"],["/blog/tags/卷积神经算法/index.html","f810829e2327e5110b259dbc8a521c9d"],["/blog/tags/去水印/index.html","e83bbdeb7f9631e364f4569ca1cc65d9"],["/blog/tags/叶青/index.html","ce5d549e3ea960fb715ff8c3537c1268"],["/blog/tags/声之形/index.html","b4f64ce19c7cc2b0c84a9e5495788f3e"],["/blog/tags/帮助文档/index.html","114e079d41df9dbb0bd2129475784feb"],["/blog/tags/年终总结/index.html","09d607b697c2bc9b93bdddc558d51c19"],["/blog/tags/广播剧/index.html","88ab462b7019eba3168396a05a86c804"],["/blog/tags/张睿/index.html","e9e8990bdbef37b3b5831b1890e4f995"],["/blog/tags/当时明月/index.html","61c763f51f9fd33195b1bb40af231726"],["/blog/tags/心が叫びたがってるんだ。/index.html","1a1f97decef922a634d8c44ae79b740a"],["/blog/tags/心灵想要大声呼喊/index.html","017f0b2b61efecdcb8f0b58ec287668b"],["/blog/tags/感想/index.html","a86e9fe4356ab67f6734be278904adad"],["/blog/tags/战斗吧！球球/index.html","1bb45fa3cd8c920934fc835d7e7575e9"],["/blog/tags/扣图素材/index.html","d572111f4bfe2c7a1d096fd481c51f78"],["/blog/tags/抠图素材/index.html","e6e979774113f76c53631408bf3c9d38"],["/blog/tags/新仙剑OL/index.html","5565296ab13e27497e7513ce8745f389"],["/blog/tags/新仙剑奇侠传online/index.html","165bbc687a3194091b5098473a65d123"],["/blog/tags/月玲珑/index.html","fe297c80cae962b019cd01dd83bc2d0b"],["/blog/tags/月玲珑十周年/index.html","28c02cae335092415ad9767f573f5c6f"],["/blog/tags/月玲珑小剧场游戏/index.html","287515c2c32aad3c6d6bf5452215c57a"],["/blog/tags/月玲珑配音社/index.html","811f68b1d45bca45b39fecf023196be5"],["/blog/tags/游戏整理/index.html","476fdac270412f638eedd470db364114"],["/blog/tags/祝有涯/index.html","8365cb10c83a75cc728bfccd847770a5"],["/blog/tags/神舞幻想/index.html","4dc9d6a421ec7fa8c2a56c7c7fe03760"],["/blog/tags/素材整理/index.html","3f788db5a514c53f60f691b55def7b06"],["/blog/tags/羽裳/index.html","8ac66c835a838182c8197a5caffca2ce"],["/blog/tags/聲の形/index.html","c4f003796f0e0cb086b3563f547b244a"],["/blog/tags/虹七/index.html","ce67c79f2b5b31d069691985bc31e46c"],["/blog/tags/虹猫蓝兔七侠传/index.html","5e9f417f77ce9d50c91c8b9bfccb9848"],["/blog/tags/视频剪辑/index.html","cf2f2c9f12284ec96765e1c58f4fd80a"],["/blog/tags/语音整理/index.html","5b311448edb1a72088f870ed751265f2"],["/blog/tags/资源提取/index.html","60f41996e932bbe096b8355d44a9a59f"],["/blog/tags/透明台标/index.html","056f8ead483ef6628a88ac46462bc676"],["/blog/works/index.html","db3be3c2e29b4f39cd535f5c8e2ae25e"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
